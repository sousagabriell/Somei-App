import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles';

export function SellerBtn({ navigation, isButtonDisabled }) {
  return (
    <View style={styles.shadowContainer}>
      <View style={[styles.container, globalStyles.pt_2]}>
        <TouchableOpacity
          style={[
            styles.button,
            globalStyles.mb_2,
            globalStyles.justifyContent,
            {
              backgroundColor: isButtonDisabled ? '#ccc' : '#06D6A0',
              width: isButtonDisabled ? '100%' : '100%',
            },
          ]}
          onPress={() => navigation.goBack()}
          disabled={isButtonDisabled}
        >
          <Text style={styles.leftText}>Cadastrar vendedor</Text>
          <Image style={[styles.image]} source={require('../assets/right-black.png')} />
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
  image: {
    marginLeft: 165,
  },
});
