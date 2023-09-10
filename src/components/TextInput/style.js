import { StyleSheet } from 'react-native'
import { colors } from '../../styles'
import { Dimensions } from 'react-native'

var width = Dimensions.get('window').width;

const TextInputStyle = StyleSheet.create({
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray04,
        backgroundColor: colors.gray02,
        padding: 15,
        fontSize: 25,
        marginBottom: 30,
        placeholderTextColor: colors.gray03,
        width: 300
    }
})

export default TextInputStyle