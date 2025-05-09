import { getBookUrl, loginUserUrl, postUserDetails } from "./Url"

export const getBooksData = async () => {
    const response = await fetch(getBookUrl)
    const data = await response.json()
    return data
}
export const postUsersData = async (user) => {
    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    }
    const response = await fetch(postUserDetails, payload)
    const data = await response.json()
    return data
}
export const LoginUserData = async (payload) => {
    const response = await fetch(`${loginUserUrl}email=${payload.email}&password=${payload.password}`)
    const data = await response.json()
    return data
}