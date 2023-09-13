import { token, profile_picture } from "./data.json"
import jwt_decode from "jwt-decode"

const mockLoginData = () => {
    return jwt_decode(token)
}

const mockProfilePicture = () => {
    return profile_picture
}

export { mockLoginData, mockProfilePicture }