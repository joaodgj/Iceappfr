import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from '../screens/Loading';
import Login from '../screens/Login';
import Feed from '../screens/Feed';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Loading' >

        <Stack.Screen name="Loading" component={Loading} options={{title: 'Loading'}} />

        <Stack.Screen name="Login" component={Login}  options={{title: 'Login'}} />

        <Stack.Screen name="Feed" component={Feed}  options={{title: 'Feed'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;