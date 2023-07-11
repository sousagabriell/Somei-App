import React from 'react';
import { Image, StyleSheet } from 'react-native';

export function LogoLogin() {
    return (
        <Image source={require('../assets/logo-login.png')} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        marginTop: '25%',
        marginLeft: '26%',
    },
});
