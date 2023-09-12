import React from 'react'
import { View } from 'react-native'
import { Header } from '../../components'
import FeedStyle from './style'

const Feed = () => {
    const { feedWrapper } = FeedStyle

    return (
        <View style={feedWrapper}>
            <Header />
        </View>
    )
}

export default Feed