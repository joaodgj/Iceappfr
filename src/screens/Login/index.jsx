import { useState } from "react";
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LoginStyle from "./style"
import { Button, TextInput } from "../../components"

const Login = () => {
  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const navigation = useNavigation();

  const { loginWrapper, viewScreen, logoStyle, brandName } = LoginStyle

  return (
    <View style={viewScreen}>
      <Image style={logoStyle} source={require("../../assets/logo.png")} />
      <Text style={brandName}>ClassOn</Text>
      <View style={loginWrapper}>
        <TextInput
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Endereço de e-mail"
        />
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <Button
          title="Entrar"
          onPress={() => navigation.navigate("Loading")}
        />
      </View>
    </View>
  );
};

export default Login;
