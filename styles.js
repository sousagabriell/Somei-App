import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'


export const globalStyles = StyleSheet.create({
    titleWhiteSemiBold: {
        fontWeight: '700',
        fontSize: RFValue(17),
        color: '#fff',
      },
    titleWhiteLight: {
        fontWeight: '400',
        fontSize: RFValue(17),
      },
})