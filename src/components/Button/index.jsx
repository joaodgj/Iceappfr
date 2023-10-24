import { Pressable, Text } from "react-native"
import ButtonStyle from "./style"

const Button = (props) => {
    const { title, onPress, buttonStyle, textStyle } = props
    const { buttonWrapper, buttonText } = ButtonStyle

    return (
        <Pressable style={{...buttonStyle, ...buttonWrapper}} onPress={onPress}>
            <Text style={{...textStyle, ...buttonText}}>{title}</Text>
        </Pressable>
    )
};

export default Button;
