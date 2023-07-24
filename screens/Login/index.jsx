import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { SafeAreaView } from "react-native";
import { LogoLogin } from "../../components/LogoLogin";
import { TextInput } from '../../components/TextInput'
import { Card, Text } from "react-native-paper";
import { Button } from "../../components/Button";

export default function Login() {
  const [inputFocused, setInputFocused] = useState(false);

  const handlePressOutside = () => {
    if (inputFocused) {
      // Keyboard.dismiss() hides the keyboard
      Keyboard.dismiss();
      setInputFocused(false);
    }
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <LogoLogin />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="E-mail ou Telefone"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            onFocus={handleInputFocus}
          />
          <TextInput
            placeholder="Senha"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            onFocus={handleInputFocus}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          <Button mode="contained" style={styles.btnLogin}>
            Entrar
          </Button>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
