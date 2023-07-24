import React from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { globalStyles } from "../../styles";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export default function BreakLogin({ navigation }) {

  return (
    <SafeAreaView style={styles.background}>
      <Logo />
      <View style={styles.titleLogin}>
        <Text style={globalStyles.titleWhiteSemiBold}>
          Gerencie seu negócio com confiança,
          <Text style={globalStyles.titleWhiteLight}> comece aqui!</Text>
        </Text>
      </View>
      <TextInput
        placeholder="E-mail ou Telefone"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
        <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
      <View style={styles.btnArea}>
      <View style={styles.miniButtonArea}>
            <TouchableOpacity style={styles.miniButton}>
              <Image
                source={require('../../assets/google-button.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.miniButton}>
              <Image
                source={require('../../assets/facebook-button.png')}
              />
            </TouchableOpacity>
          </View>
        <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.btnLogin}>Entrar</Button>
         <TouchableOpacity>
            <Text style={styles.forgotPassword} onPress={() => navigation.navigate('SignUp')}>Crie uma conta?</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
