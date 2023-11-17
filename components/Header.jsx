import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles';

export function Header({ namePage, navigation }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={[styles.settingsButton, globalStyles.pt_5, globalStyles.mb_3, globalStyles.titleWhiteLight, globalStyles.rowColumn,]}
                onPress={() => navigation.goBack()}
            >
                <Image
                    style={styles.left}
                    source={require('../assets/left.png')}
                />
                <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.ml_3, globalStyles.mt_2]}
                >{namePage}</Text>
            </TouchableOpacity>
            <View style={[globalStyles.rowColumn]}>
                <Image
                    source={require('../assets/foto-perfil.png')}
                />
                <View style={[globalStyles.mt_1, , globalStyles.ml_1]}>
                    <Text style={[globalStyles.titleWhiteSemiBold]}> Glowshine</Text>
                    <Text style={[globalStyles.mt_1, globalStyles.textWhite]}> CNPJ XX.XXX.XXX/0001-XX</Text>
                </View>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#052B38',
        height: 220,
        paddingLeft: '5%',
        marginTop: '-6%'
    },
    left:{
        marginTop: '4%'
    }
});
