import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles';

export function Header2({ namePage, navigation }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={[styles.settingsButton, globalStyles.mt_5, globalStyles.mb_3, globalStyles.titleLight, globalStyles.rowColumn,]}
                onPress={() => navigation.goBack()}
            >
                <Image
                    style={styles.left}
                    source={require('../assets/left-black.png')}
                />
                <Text style={[globalStyles.titleSemiBold, globalStyles.ml_3, globalStyles.mt_2,]}
                >{namePage}</Text>
            </TouchableOpacity>
           
        </View>);
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        height: '35%',
        paddingLeft: '5%'
    },
    left:{
        marginTop: 12
    }
});
