import { colors } from "../../styles";
import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
  viewScreen: {
    backgroundColor: colors.main,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginWrapper: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.gray00,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoStyle: {
    width: 70,
    height: 54
  },
  brandName: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    color: colors.gray05,
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 25
  },
  loginButtonStyle: {
    backgroundColor: colors.true
  }
});

export default LoginStyle;
