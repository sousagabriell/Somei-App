import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { globalStyles } from '../styles';

export function Button({ mode, style, children, ...props }) {
  return(
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: '#000' },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >
      {children}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
    button: {
      width: '100%',
      borderRadius: 5,
      backgroundColor: '#06D6A0', 
      borderRadius: 15,
    },
    text: {
      fontWeight: '600',
      fontSize: 15,
      lineHeight: 35,
      color: '#11131D'
    },
  });
