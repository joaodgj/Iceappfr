import { View, Image } from "react-native"
import HeaderStyle from "./style"

const Header = () => {
    const { headerWrapper, logoStyle } = HeaderStyle

    return (
        <View style={headerWrapper}>
            <Image style={logoStyle} source={require("../../assets/logo.png")} />
        </View>
    )
};

export default Header;
