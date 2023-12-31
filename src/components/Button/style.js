import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

const ButtonStyle = StyleSheet.create({
    buttonWrapper: {
        borderRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: colors.true
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 700,
        textTransform: "uppercase",
        color: colors.gray00
    }
})

export default ButtonStyle