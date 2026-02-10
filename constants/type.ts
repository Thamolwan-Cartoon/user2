export const URL = `https://randomuser.me/api/0.8/`

export type UserType = {
    user: {
        name: {
            title: string
            first: string
            last: string
        },
        email: string
        picture: {
            large: string
        },
        location: {
            city: string
        }
        phone: string
    }
}
