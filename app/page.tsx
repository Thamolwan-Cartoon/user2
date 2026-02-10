import UserDetail from "./UserDetail"

const URL = `https://randomuser.me/api/0.8/?results=5`

export default async function UserPage() {

  const response = await fetch(URL)
  const users = await response.json()

  const { results } = users

  return <UserDetail results={results} />
}
