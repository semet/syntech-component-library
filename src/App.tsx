import { TextInput } from './components'

export default function App() {
  return (
    <div className="mx-auto max-w-xl rounded bg-white px-4 py-6">
      <TextInput
        label="Username"
        description="Please enter your username"
        placeholder="Your username"
        withAsterisk
      />
    </div>
  )
}
