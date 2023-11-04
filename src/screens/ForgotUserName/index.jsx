import { useContext, useState } from "react";
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ForgotUserNameStyle from "./style"
import { Button, TextInput } from "../../components"
import { getProfilePicture, forgotUserName } from "../../services";
import { AuthContext } from "../../contexts/auth"
import apiClient from "../../services/api";
import jwt_decode from "jwt-decode";

const ForgotUserName = () => {
  const [email, onChangeEmail] = useState('')
  const navigation = useNavigation();
  const { setAuth } = useContext(AuthContext);

  const { loginWrapper, viewScreen, viewButton, logoStyle, brandName, title, text } = ForgotUserNameStyle

  const handlePW = async () => {
    forgotUserName(email).then(response => {
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
      <Text style={title}>Esqueceu seu nome de usuário?</Text>
      <Text style={text}>Digite o e-mail cadastrado para receber o(s) nome(s) de usuário(s):</Text>
        <TextInput
          onChangeText={onChangeEmail}
          value={email}
          placeholder="E-mail"
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

export default ForgotUserName;
