import React from 'react'
import { View, Image, Text } from 'react-native'
import LoadingStyle from './style'

const Loading = () => {
    const { loadingWrapper, logoStyle, brandName } = LoadingStyle

    return (
        <View style={loadingWrapper}>
            <View>
                <Image style={logoStyle} source={require("../../assets/logo.png")} />
                <Text style={brandName}>ClassOn</Text>
            </View>
        </View>
    )
}

export default Loading