import { useState } from "react";
import { View, Button, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LoginStyle from "./style"

const Login = () => {
  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const navigation = useNavigation();

  const { usernameStyle, passwordStyle, loginWrapper, viewScreen } = LoginStyle

  return (
    <View style={viewScreen}>
        <View style={loginWrapper}>
        <TextInput
        style={usernameStyle}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Endereço de e-mail"
      />
      <TextInput
        style={passwordStyle}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Senha"
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
