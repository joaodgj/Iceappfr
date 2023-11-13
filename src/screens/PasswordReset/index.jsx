import { useContext, useState } from "react";
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import PasswordResetStyle from "./style"
import { Button, TextInput } from "../../components"
import { passwordReset } from "../../services";
import { useToast } from "react-native-toast-notifications";

const PasswordReset = () => {
  const [token, onChangetoken] = useState('')
  const [newPW, onChangenewPW] = useState('')
  const [newPWConfirmed, onChangenewPWConfirmed] = useState('')
  const navigation = useNavigation();

  const { loginWrapper, viewScreen, logoStyle, brandName, title, text } = PasswordResetStyle

  const toast = useToast()

  const handlePW = async () => {
    if (newPWConfirmed !== newPW ) {
      toast.show("As senhas devem ser iguais!", {type: "danger"});
    } else
      passwordReset(token, newPW).then(response => {
        if (response.status === 200) {
          navigation.navigate("Login");
        }
      });
  };

  return (
    <View style={viewScreen}>
      <Image style={logoStyle} source={require("../../assets/logo.png")} />
      <Text style={brandName}>ClassOn</Text>
      <View style={loginWrapper}>
      <Text style={title}>Redefinição de senha</Text>
      <Text style={text}>Um token foi enviado para o e-mail cadastrado. Forneça-o abaixo para redefinir sua senha:</Text>
        <TextInput
          onChangeText={onChangetoken}
          value={token}
          placeholder="Token fornecido"
        />
        <TextInput
          onChangeText={onChangenewPW}
          value={newPW}
          placeholder="Nova senha"
          secureTextEntry={true}
        />
        <TextInput
          onChangeText={onChangenewPWConfirmed}
          value={newPWConfirmed}
          placeholder="Confirme a nova senha"
          secureTextEntry={true}
        />
        <Button
        title="Redefinir"
        onPress={handlePW}
        />  
      </View>
    </View>
  );
};

export default PasswordReset;
