import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{textAlign: "center" }}>Login:</Text>
            <Button
                title='Load'
                onPress={ () => navigation.navigate('Loading') }
            />
        </View>
    )
}

export default Login;