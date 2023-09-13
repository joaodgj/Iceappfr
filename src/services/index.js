import { mockLoginData, mockProfilePicture } from '../mock'

const useMock = true

const login = () => {
    return useMock ? mockLoginData() : null
}

const getProfilePicture = () => {
    return useMock ? mockProfilePicture() : null
}

export { login, getProfilePicture }