import { Modal as ReactModal, View, Pressable, Image, Text } from "react-native"
import ModalStyle from "./style"

const Modal = (props) => {
    const { closeModal, children, visible, title } = props
    const { modalViewStyle, buttonsWrapper, closeButtonIconStyle, modalTitleStyle, modalWrapperStyle } = ModalStyle

    return (
            <ReactModal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={closeModal}
            >
                <View style={modalViewStyle}>
                    <View style={buttonsWrapper}>
                        <Pressable onPress={closeModal} >
                            <Image style={closeButtonIconStyle} source={require("../../assets/icons/close.png")} />
                        </Pressable>
                    </View>
                    <Text style={modalTitleStyle}>{title}</Text>
                    {children}
                </View>
            </ReactModal>
    )
};

export default Modal;
