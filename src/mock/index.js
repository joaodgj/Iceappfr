import { token, profile_picture } from "./data.json"
import jwt_decode from "jwt-decode"

const mockLoginData = () => {
    return {data: { token }, status: 200 }
}

const mockProfilePicture = () => {
    return profile_picture
}

export { mockLoginData, mockProfilePicture }