/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import {
  MdMessage,
  MdSettings,
  MdDashboard,
  MdPeople,
  MdAnalytics,
  MdNotifications,
  MdSecurity,
  MdLanguage,
  MdDelete,
  MdEdit,
  MdAdd,
  MdSearch,
} from 'react-icons/md'

import { Card, Button, TextInput } from '@/components'
import Tabs from '@/components/Tabs/Tabs'

export default function AdvancedTabsExample() {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  return (
    <div className="space-y-6">
      {/* Example 1: Controlled Tabs with All Variants */}
      <Card
        withBorder
        shadow="sm"
        radius="md"
      >
        <Card.Header>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              Project Dashboard
            </h2>
            <Button
              size="sm"
              variant="light"
              color="primary"
            >
              Export Data
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Tabs
            value={activeTab}
            onChange={setActiveTab}
            variant="default"
            color="primary"
          >
            <Tabs.List>
              <Tabs.Tab
                value="overview"
                leftSection={<MdDashboard size={18} />}
              >
                Overview
              </Tabs.Tab>
              <Tabs.Tab
                value="team"
                leftSection={<MdPeople size={18} />}
              >
                Team
              </Tabs.Tab>
              <Tabs.Tab
                value="analytics"
                leftSection={<MdAnalytics size={18} />}
              >
                Analytics
              </Tabs.Tab>
              <Tabs.Tab
                value="settings"
                leftSection={<MdSettings size={18} />}
              >
                Settings
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="overview">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="text-sm font-medium text-blue-900">
                      Total Users
                    </div>
                    <div className="mt-2 text-3xl font-bold text-blue-600">
                      12,345
                    </div>
                    <div className="mt-1 text-xs text-blue-700">
                      +12% from last month
                    </div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="text-sm font-medium text-green-900">
                      Revenue
                    </div>
                    <div className="mt-2 text-3xl font-bold text-green-600">
                      $45,231
                    </div>
                    <div className="mt-1 text-xs text-green-700">
                      +8% from last month
                    </div>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-4">
                    <div className="text-sm font-medium text-purple-900">
                      Active Projects
                    </div>
                    <div className="mt-2 text-3xl font-bold text-purple-600">
                      23
                    </div>
                    <div className="mt-1 text-xs text-purple-700">
                      5 completed this week
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="team">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <TextInput
                    size="lg"
                    leftSection={<MdSearch size={25} />}
                    placeholder="Search team members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    size="sm"
                    leftSection={<MdAdd size={18} />}
                  >
                    Add Member
                  </Button>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      name: 'Sarah Johnson',
                      role: 'Lead Designer',
                      status: 'active',
                    },
                    {
                      name: 'Mike Chen',
                      role: 'Frontend Developer',
                      status: 'active',
                    },
                    {
                      name: 'Emma Davis',
                      role: 'Product Manager',
                      status: 'away',
                    },
                    {
                      name: 'James Wilson',
                      role: 'Backend Developer',
                      status: 'active',
                    },
                  ].map((member) => (
                    <div
                      key={member.name}
                      className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 font-semibold text-white">
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {member.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {member.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            member.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {member.status}
                        </span>
                        <Button
                          size="xs"
                          variant="subtle"
                          color="gray"
                        >
                          <MdEdit size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="analytics">
              <div className="space-y-4">
                <div className="flex gap-2">
                  {['all', 'daily', 'weekly', 'monthly'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        selectedFilter === filter
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="h-64 rounded-lg bg-linear-to-br from-gray-50 to-gray-100 p-6">
                  <div className="flex h-full items-center justify-center text-gray-400">
                    <MdAnalytics size={48} />
                    <span className="ml-3 text-lg">
                      Chart visualization would go here
                    </span>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="settings">
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <div className="mt-3 space-y-3">
                    {[
                      {
                        label: 'Email notifications',
                        icon: <MdNotifications />,
                      },
                      {
                        label: 'Push notifications',
                        icon: <MdNotifications />,
                      },
                      { label: 'SMS alerts', icon: <MdMessage /> },
                    ].map((item) => (
                      <label
                        key={item.label}
                        className="flex items-center justify-between"
                      >
                        <span className="flex items-center gap-2 text-gray-700">
                          {item.icon}
                          {item.label}
                        </span>
                        <input
                          type="checkbox"
                          className="h-5 w-5"
                          defaultChecked
                        />
                      </label>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900">Security</h3>
                  <div className="mt-3 space-y-3">
                    <Button
                      fullWidth
                      variant="outline"
                      leftSection={<MdSecurity size={18} />}
                    >
                      Change Password
                    </Button>
                    <Button
                      fullWidth
                      variant="outline"
                      leftSection={<MdSecurity size={18} />}
                    >
                      Two-Factor Authentication
                    </Button>
                  </div>
                </div>
              </div>
            </Tabs.Panel>
          </Tabs>
        </Card.Body>
      </Card>

      <Card
        withBorder
        shadow="sm"
        radius="md"
      >
        <Card.Header>
          <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
        </Card.Header>
        <Card.Body>
          <Tabs
            defaultValue="profile"
            orientation="vertical"
            color="secondary"
          >
            <Tabs.List>
              <Tabs.Tab
                value="profile"
                leftSection={<MdPeople size={18} />}
              >
                Profile
              </Tabs.Tab>
              <Tabs.Tab
                value="security"
                leftSection={<MdSecurity size={18} />}
              >
                Security
              </Tabs.Tab>
              <Tabs.Tab
                value="language"
                leftSection={<MdLanguage size={18} />}
              >
                Language
              </Tabs.Tab>
              <Tabs.Tab
                value="danger"
                leftSection={<MdDelete size={18} />}
              >
                Danger Zone
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="profile">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Profile Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Bio
                    </label>
                    <textarea
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
                      rows={3}
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <Button color="secondary">Save Changes</Button>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="security">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Security Settings
                </h3>
                <div className="space-y-3">
                  <Button
                    fullWidth
                    variant="outline"
                    color="secondary"
                  >
                    Change Password
                  </Button>
                  <Button
                    fullWidth
                    variant="outline"
                    color="secondary"
                  >
                    Enable Two-Factor Authentication
                  </Button>
                  <Button
                    fullWidth
                    variant="outline"
                    color="secondary"
                  >
                    View Login History
                  </Button>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="language">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Language & Region
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Language
                    </label>
                    <select className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Timezone
                    </label>
                    <select className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2">
                      <option>UTC-8 (Pacific)</option>
                      <option>UTC-5 (Eastern)</option>
                      <option>UTC+0 (London)</option>
                      <option>UTC+1 (Paris)</option>
                    </select>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="danger">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-900">
                  Danger Zone
                </h3>
                <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                  <p className="mb-3 text-sm text-red-700">
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                  <Button
                    variant="filled"
                    color="danger"
                    leftSection={<MdDelete size={18} />}
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </Tabs.Panel>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  )
}
