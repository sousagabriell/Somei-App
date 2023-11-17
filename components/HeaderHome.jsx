import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles';

export function HeaderHome() {
    return (
        <View style={styles.header}>
            <View style={globalStyles.rowColumn}>
                <View style={[globalStyles.rowColumn, styles.infoUser, globalStyles.justifyContent]}>
                    <View style={[globalStyles.ml_1, globalStyles.rowColumn, globalStyles.mt_5]}>
                        <Image
                            source={require('../assets/foto-perfil.png')}
                        />
                        <View>
                            <Text style={[globalStyles.mt_2, globalStyles.titleWhiteSemiBold, globalStyles.ml_3]}> Glowshine</Text>
                            <Text style={[globalStyles.mt_1, globalStyles.textWhite, globalStyles.ml_3]}> CNPJ XX.XXX.XXX/0001-XX</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[styles.settingsButton, globalStyles.mt_2, globalStyles.pt_3]}
                        onPress={() => {
                        }}
                    >
                        <Image
                            style={[globalStyles.mt_5]}
                            source={require('../assets/settings.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#052B38',
        height: 200,
        paddingLeft: '5%',
        marginTop: -20,
        paddingTop:30
    },
    settingsButton: {
        marginLeft: '18%'
    }
});
