import React, { useEffect, useState, useContext } from 'react'
import { View, Image } from 'react-native'
import { AuthContext } from "../../contexts/auth"
import { Header, NewPost } from '../../components'
import FeedStyle from './style'

const Feed = () => {
    const { feedWrapper, logoStyle, profilePictureStyle, contentWrapper } = FeedStyle
    const [profilePicture, setProfilePicture] = useState()

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        setProfilePicture(auth.profilePicture)
    }, [])

    return (
        <View style={feedWrapper}>
            <Header>
                <Image style={logoStyle} source={require("../../assets/logo.png")} />
                <Image style={profilePictureStyle} source={{ uri: `data:image/jpg;base64,${profilePicture}` }} />
            </Header>
            <View style={contentWrapper}>
            <NewPost/>
            </View>
        </View>
    )
}

export default Feed