#!/usr/bin/env node

/**
 * Check if a package version exists on NPM before publishing
 * Usage: node check-and-publish.js <tag>
 * Example: node check-and-publish.js alpha
 */

import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const tag = process.argv[2] || 'latest'

function exec(command, options = {}) {
  try {
    return execSync(command, {
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options,
    })
  } catch (error) {
    if (options.ignoreError) {
      return null
    }
    throw error
  }
}

async function checkVersionExists(packageName, version) {
  try {
    const result = exec(`npm view ${packageName}@${version} version`, {
      silent: true,
      ignoreError: true,
    })
    return result && result.trim() === version
  } catch {
    return false
  }
}

async function main() {
  // Read package.json
  const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'))
  const { name: packageName, version } = packageJson

  console.log(`📦 Package: ${packageName}`)
  console.log(`📌 Version: ${version}`)
  console.log(`🏷️  Tag: ${tag}`)
  console.log('')

  // Check if version exists
  console.log(`🔍 Checking if ${packageName}@${version} exists on NPM...`)
  const exists = await checkVersionExists(packageName, version)

  if (exists) {
    console.log(`⚠️  Version ${version} already exists on NPM`)
    console.log('✅ Skipping publish (not an error)')
    process.exit(0)
  }

  console.log(`✅ Version ${version} does not exist`)
  console.log('')

  // Publish to NPM
  console.log(
    `📤 Publishing ${packageName}@${version} to NPM with tag "${tag}"...`,
  )
  console.log('')

  try {
    exec(
      `pnpm publish --provenance --access public --no-git-checks --tag ${tag}`,
    )
    console.log('')
    console.log(`🎉 Successfully published ${packageName}@${version}`)
    process.exit(0)
  } catch (error) {
    console.error('')
    console.error('❌ Failed to publish to NPM')
    process.exit(1)
  }
}

main().catch((error) => {
  console.error('❌ Error:', error.message)
  process.exit(1)
})
