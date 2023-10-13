import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#06D6A0',
    underlineColor: 'transparent',
    text: '#fff'
  },
};

export function TextInput({ errorText, placeholder, ...props }) {

  return (
    <View style={styles.container}>
      <Input
        style={{ ...styles.input, color: '#fff' }}
         placeholder={placeholder}
        {...props}
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  error: {
    fontSize: 14,
    paddingHorizontal: 4,
    paddingTop: 4,
    color: 'red',
  },
  input: {
    borderRadius: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#fff', // Cor da borda branca como padrão
  },
});
