'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { URL, UserType } from '@/constants/type'
import Image from 'next/image'
import { useState } from 'react'
import UserCard from './UserCard'

export default function UserPage({ results }: { results: UserType[] }) {

    const [num, setNum] = useState(5)
    const [users, setUsers] = useState(results)

    const fetchUser = async () => {
        const response = await fetch(`${ URL }?results=${ num }`)
        const users = await response.json()
        setUsers(users.results)
    }

    return (<div className='border'>
        <h1 className='text-xl font-extrabold text-center'>User Page</h1>

        <div className='flex justify-center items-center mx-4'>
            <span className='mx-2'>Number:</span>
            <Input className='border px-2 w-56'
                type="number" name="num" defaultValue="5"
                onChange={e => setNum(+e.target.value)}
            />
            <Button variant='ghost' className='border px-2 m-2' onClick={fetchUser}>
                Submit
            </Button>
        </div>

        {/* <div>
      <pre>
        {JSON.stringify(users, null, 4)}
      </pre>
    </div> */}
        <div className='flex flex-wrap border justify-center items-center h-screen'>
            {
                users.map((item: UserType, index: number) =>
                    <div key={index} className="border-2 m-2 p-2 w-64">
                        {/* <div className='mr-4'>
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
                        </div> */}

                        <UserCard item={item} index={index} />
                    </div>
                )
            }
        </div>
    </div>
    )
}
