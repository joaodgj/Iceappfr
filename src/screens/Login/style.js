import { colors } from "../../styles"
import { StyleSheet } from "react-native"

const LoginStyle = StyleSheet.create({
        viewScreen: {
                backgroundColor: colors.gray04,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
        },
        usernameStyle: {
                textAlign: "center"
        },
        passwordStyle: {
                textAlign: "center"
        },
        loginWrapper: {
                marginHorizontal: 40,
                padding: 20,
                backgroundColor: colors.gray03,
                maxWidth: 500,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
        }
      });

export default LoginStyle