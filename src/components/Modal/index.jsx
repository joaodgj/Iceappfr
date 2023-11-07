import { Text } from "react-native"
import ModalStyle from "./style"

const Modal = (props) => {
    const { title, modalStyle, textStyle } = props
    const { modalWrapper, modalText } = ModalStyle

    return (
        <Modal style={{...modalWrapper, ...modalStyle}}>
            <Text style={{...modalText, ...textStyle}}>{title}</Text>
        </Modal>
    )
};

export default Modal;
