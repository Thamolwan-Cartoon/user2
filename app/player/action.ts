export default function submitPlayer(prevState: unknown, formData: FormData) {

    const name = formData.get("name")
    const age = formData.get("age")
    const email = formData.get("email")

    const data = { name, age, email }

    console.log(data)

    return {
        error: {},
        data
    }
}