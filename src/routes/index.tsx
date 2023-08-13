import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from '@/screens/Loading';
import Login from '@/screens/Login';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >

        <Stack.Screen name="Loading" component={Loading} options={{title: 'Loading'}} />

        <Stack.Screen name="Login" component={Login}  options={{title: 'Login'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;