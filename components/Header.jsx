import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles';

export function Header({ namePage, navigation }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={[styles.settingsButton, globalStyles.mt_5, globalStyles.mb_3, globalStyles.titleWhiteLight, globalStyles.rowColumn,]}
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
                    <Text style={[globalStyles.mt_3, globalStyles.titleWhiteSemiBold]}> Glowshine</Text>
                    <Text style={[globalStyles.mt_1, globalStyles.titleWhiteLight]}> Olá, Ana!</Text>
                </View>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#052B38',
        height: '35%',
        paddingLeft: '5%'
    },
    left:{
        marginTop: 12
    }
});
