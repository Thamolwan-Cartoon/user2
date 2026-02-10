import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { UserType } from "@/constants/type"
import Image from 'next/image'

export default function CardImage({ item, index }: { item: UserType, index: number }) {
    return (
        <Card className="relative mx-auto w-full pt-0">
            <div className="absolute aspect-video" />
            <Image src={item.user.picture.large}
                loading="eager"
                className="relative aspect-video w-full object-cover"
                width={1600} height={1600} alt="User" />
            <CardHeader>
                <CardTitle>{item.user.name.title}. {item.user.name.first}  {item.user.name.last}</CardTitle>
                <Badge variant="secondary"> {item.user.location.city}</Badge>
                <CardDescription className="mb-2">
                    {item.user.email}
                    <hr />
                    {item.user.phone}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">View Event</Button>
            </CardFooter>
        </Card>
    )
}
