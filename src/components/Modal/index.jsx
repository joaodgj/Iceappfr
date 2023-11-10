import { View, Pressable, Image, Text } from "react-native"
import ReactModal from 'react-native-modal'
import ModalStyle from "./style"

const Modal = (props) => {
    const { closeModal, children, visible, title } = props
    const { modalViewStyle, buttonsWrapper, closeButtonIconStyle, modalTitleStyle, modalWrapperStyle } = ModalStyle

    return (
            <ReactModal
                animationType="slide"
                transparent={true}
                isVisible={visible}
                onBackdropPress={closeModal}
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
