import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles';

export function ShoppingCart({ navigation }) {
  return (
    <View style={styles.shadowContainer}>
    <View style={[styles.container, globalStyles.pt_2]}>
      <TouchableOpacity 
      onPress={() => navigation.navigate('ResumeSale')}
      style={[styles.button, globalStyles.mb_2]}>
        <Text style={styles.leftText}>Total R$ 0,00</Text>
        <View style={[globalStyles.rowColumn]}>
        <Text style={styles.rightText}>Cobrar</Text>
        <Image source={require('../assets/right-black.png')} style={[globalStyles.mt_1, globalStyles.ml_5]} />
        </View>
      </TouchableOpacity>
    </View>
        </View>

  );
}

const styles = StyleSheet.create({
    shadowContainer: {
        position: 'absolute',
        bottom: -10,
        left: 0,
        right: 0,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: -5,
        },
        elevation: 4,
      },
  button: {
    width: '72%',
    backgroundColor: '#06D6A0',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  leftText: {
    color: '#052B38',
    fontWeight: 'bold',
  },
  rightText: {
    color: '#052B38',
    fontWeight: 'bold',
    marginLeft: 115
  },
});
