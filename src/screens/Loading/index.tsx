import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoadingStyle from './style';

const Loading = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={LoadingStyle}>Loading...</Text>
            <Button
                title='Login'
                onPress={ () => navigation.navigate('Login' as never) }
            />
        </View>
    )
}

export default Loading;