import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import LoadingStyle from './style'

const Loading = () => {
    const { loadingWrapper, logoStyle, brandName } = LoadingStyle

    const navigation = useNavigation();

    useEffect(() => {
        const secondsToWait = 2
        const timer = setTimeout(() => {
            navigation.navigate("Login")
        }, secondsToWait * 1000);
        return () => clearTimeout(timer);
    }, [navigation])

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