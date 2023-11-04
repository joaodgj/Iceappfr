import { useContext, useState } from "react";
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ForgotPasswordStyle from "./style"
import { Button, TextInput } from "../../components"
import { getProfilePicture, forgotPassword } from "../../services";
import { AuthContext } from "../../contexts/auth"
import apiClient from "../../services/api";
import jwt_decode from "jwt-decode";

const ForgotPassword = () => {
  const [userName, onChangeuserName] = useState('')
  const navigation = useNavigation();
  const { setAuth } = useContext(AuthContext);

  const { loginWrapper, viewScreen, viewButton, logoStyle, brandName, title, text } = ForgotPasswordStyle

  const handlePW = async () => {
    forgotPassword(userName).then(response => {
      setAuth({ token: response.data.token, ...jwt_decode(response.data.token), profilePicture: getProfilePicture() })
      if (response.status === 200) {
        apiClient.defaults.headers.Authorization = `Baerer ${response.data.token}`;
        navigation.navigate("Login");
      }
    });
  };

  const handleBack = async () => {
        navigation.navigate("Login");
  };

  return (
    <View style={viewScreen}>
      <Image style={logoStyle} source={require("../../assets/logo.png")} />
      <Text style={brandName}>ClassOn</Text>
      <View style={loginWrapper}>
      <Text style={title}>Esqueceu sua senha?</Text>
      <Text style={text}>Enviaremos um e-mail com instruções de como redefinir a senha:</Text>
        <TextInput
          onChangeText={onChangeuserName}
          value={userName}
          placeholder="Nome de usuário"
        />
        <View style={viewButton}>
        <Button
          title="Enviar"
          onPress={handlePW}
        /> 
        <Button
        title="Voltar"
        onPress={handleBack}
        />
        </View>    
      </View>
    </View>
  );
};

export default ForgotPassword;
