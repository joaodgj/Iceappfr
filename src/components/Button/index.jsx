import { Pressable, Text } from "react-native"
import ButtonStyle from "./style"

const Button = (props) => {
    const { title, onPress, buttonStyle, textStyle, buttonIcon } = props
    const { buttonWrapper, buttonText } = ButtonStyle

    return (
        <Pressable style={{...buttonStyle, ...buttonWrapper}} onPress={onPress}>
            {buttonIcon ? buttonIcon : null}
            <Text style={{...buttonText, ...textStyle}}>{title}</Text>
        </Pressable>
    )
};

export default Button;
