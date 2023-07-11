import React from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { globalStyles } from "../../styles";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";

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
      <View style={styles.btnArea}>
        <Button mode="contained" onPress={() => navigation.navigate('Login')}>Entrar</Button>
        <View style={styles.createAccountArea}>
          <Button mode="contained" style={styles.createAccount}>
            Criar Conta
          </Button>
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
        </View>
      </View>
    </SafeAreaView>
  );
}
