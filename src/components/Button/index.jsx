import { Pressable, Text } from "react-native"
import ButtonStyle from "./style"

const Button = (props) => {
    const { title, onPress } = props
    const { buttonWrapper, buttonText } = ButtonStyle

    return (
        <Pressable style={buttonWrapper} onPress={onPress}>
            <Text style={buttonText}>{title}</Text>
        </Pressable>
    )
};

export default Button;
