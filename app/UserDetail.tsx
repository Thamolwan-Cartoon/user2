'use client'

import { URL, UserType } from '@/constants/type'
import Image from 'next/image'
import { useState } from 'react'

export default function UserPage({ results }: { results: UserType[] }) {

    const [num, setNum] = useState(5)
    const [users, setUsers] = useState(results)

    const fetchUser = async () => {
        const response = await fetch(`${ URL }?results=${ num }`)
        const users = await response.json()
        setUsers(users.results)
    }

    return (<div>
        <h1>User Page</h1>

        <div>
            Number: <input className='border px-2'
                type="number" name="num" defaultValue="5"
                onChange={e => setNum(+e.target.value)}
            />
            <button className='border px-2 m-2' onClick={fetchUser}>
                Submit
            </button>
        </div>

        {/* <div>
      <pre>
        {JSON.stringify(users, null, 4)}
      </pre>
    </div> */}
        <div className='flex flex-wrap '>
            {
                users.map((item: UserType, index: number) =>
                    <div key={index} className="border-2 m-2 p-2 flex justify-between items-center">
                        <div className='mr-4'>
                            <Image src={item.user.picture.large}
                                loading="eager"
                                width={100} height={100} alt="User" />
                        </div>
                        <div>
                            <div>
                                {item.user.name.title}. {item.user.name.first}  {item.user.name.last}
                            </div>
                            <div>
                                {item.user.email}
                            </div>
                            <div>
                                {item.user.location.city}
                            </div>
                            <div>
                                {item.user.phone}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    )
}
