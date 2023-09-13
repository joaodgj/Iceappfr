import { View, Image } from "react-native"
import HeaderStyle from "./style"

const Header = (props) => {
    const { headerWrapper } = HeaderStyle
    const { children } = props

    return (
        <View style={headerWrapper}>
            {children}
        </View>
    )
};

export default Header;
