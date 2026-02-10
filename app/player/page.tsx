'use client'
import { useActionState } from "react"
import submitPlayer from "./action"
export default function PlayerPage() {
    const initState = {
        error: {},
        data: {
            name: "",
            age: 0,
            email: ""
        }
    }

    const [state, action] = useActionState(submitPlayer, initState)

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Player Page</h1>

            <pre className="border border-amber-500 p-2 m-2">
                {JSON.stringify(state.data, null, 4)}
            </pre>

            <form action={action}>
                <div>
                    Name: <input className="border my-2 px-2"
                        type="text" name="name" />
                </div>
                <div>
                    Age: <input className="border my-2 px-2"
                        type="number" name="age" />
                </div>
                <div>
                    Email: <input className="border my-2 px-2"
                        type="email" name="email" />
                </div>
                <div>
                    <button className="border my-2 px-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
