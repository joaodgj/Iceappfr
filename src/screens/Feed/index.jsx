import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { Header } from '../../components'
import FeedStyle from './style'
import { login, getProfilePicture } from '../../services'

const Feed = () => {
    const { feedWrapper, logoStyle, profilePictureStyle } = FeedStyle
    const [userData, setUserData] = useState({})
    const [profilePicture, setProfilePicture] = useState()

    useEffect(() => {
        setProfilePicture(getProfilePicture)
    }, [])

    return (
        <View style={feedWrapper}>
            <Header>
                <Image style={logoStyle} source={require("../../assets/logo.png")} />
                <Image style={profilePictureStyle} source={{ uri: `data:image/jpg;base64,${profilePicture}` }} />
            </Header>
        </View>
    )
}

export default Feed