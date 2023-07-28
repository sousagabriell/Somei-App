import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import NewFlow from './NewFlow';


export function SomeiBtn({navigation}) {
    const [isSomeiModalVisible, setIsSomeiModalVisible] = useState(false);

    const toggleSomeiModal = () => {
        setIsSomeiModalVisible(!isSomeiModalVisible);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.someiBtn}
                onPress={toggleSomeiModal}
            >
                <Image style={styles.image} source={require('../assets/mini-logo.png')} />
            </TouchableOpacity>
            {isSomeiModalVisible && <NewFlow visible={isSomeiModalVisible} onClose={toggleSomeiModal} navigation={navigation}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    someiBtn: {
        backgroundColor: '#E0BE36',
        borderRadius: 15,
        position: 'absolute',
        bottom: 20,
        right: '7%',
        width: 70,
        height: 80,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 4,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    image: {
        marginTop: 18,
        marginLeft: 25,
    },
});
