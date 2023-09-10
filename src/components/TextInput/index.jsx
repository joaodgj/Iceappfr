import { TextInput as ReactNativeTextInput } from "react-native"
import TextInputStyle from "./style"

const TextInput = (props) => {
    const { style, ...otherProps } = props
    const { textInput } = TextInputStyle

    return (
        <ReactNativeTextInput style={{...textInput, ...style}} {...otherProps} />
    )
};

export default TextInput;
