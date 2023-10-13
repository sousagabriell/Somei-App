import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    titleLogin: {
        width: '80%',
    },
    background: {
        backgroundColor: '#052B38',
        height: '100%',
    },
    btnArea: {
        marginTop: '5%',
    },
    createAccountArea: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '10%'
    },
    miniButtonArea:{
        display: 'flex',
        flexDirection: 'row',
    },
    createAccount: {
        width: '56%',
        backgroundColor: '#fff',
        height: 50,
    },
    createAccountExternal: {
        width: 10,
        marginTop: 15,
        backgroundColor: '#fff',
    },
    miniButton: {
        width: '49%',
        backgroundColor: '#fff',
        marginRight: '2%',
        borderRadius: 15,
        paddingLeft: 65,
        paddingTop: 7,
        paddingBottom: 7,
        marginBottom: 15,
    },
    forgotPassword:{
        color: '#fff',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        marginBottom: '8%',
    },
    btnLogin:{
        marginBottom: '4%',
    }
})