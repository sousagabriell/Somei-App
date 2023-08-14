import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles';

export function HeaderHome() {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={[styles.settingsButton, globalStyles.mt_5, globalStyles.pt_3]}
                onPress={() => {
                }}
            >
                <Image
                style={[ globalStyles.mt_5]}
                    source={require('../assets/settings.png')}
                />
            </TouchableOpacity>
            <View style={[globalStyles.rowColumn, styles.infoUser]}>
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
    header:{
        backgroundColor: '#052B38',
        height: '35%',
        paddingLeft: '5%'
     },
     settingsButton:{
         marginLeft: '85%',
     },
});
