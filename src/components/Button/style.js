import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

const ButtonStyle = StyleSheet.create({
    buttonWrapper: {
        borderRadius: 4,
        backgroundColor: colors.true,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 700,
        textTransform: "uppercase",
        color: colors.gray00
    }
})

export default ButtonStyle