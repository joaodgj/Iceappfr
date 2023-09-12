import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

const HeaderStyle = StyleSheet.create({
    headerWrapper: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        height: 100,
        width: '100%',
        position: "fixed",
        top: 0,
        backgroundColor: colors.main,
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'center'
    },
    logoStyle: {
        width: 59,
        height: 47
      },
})

export default HeaderStyle