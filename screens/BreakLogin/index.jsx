import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { globalStyles } from "../../styles";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import AuthService from "../../services/authService";

export default function BreakLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async () => {
    const { success, data, error } = await AuthService.login(email, password);

    if (success) {
      navigation.navigate('Home');
    } else {
      setLoginError(true);
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={[styles.background, globalStyles.alignItemsCenter]}>
      <View style={[globalStyles.ml_4]}>
        <Logo />
      </View>
      <View style={[styles.titleLogin, globalStyles.ml_4, globalStyles.mb_4]}>
        <Text style={globalStyles.titleWhiteSemiBold}>
          Gerencie seu negócio com confiança,
          <Text style={globalStyles.titleWhiteLight}> comece aqui!</Text>
        </Text>
      </View>
      <View style={[globalStyles.ml_4, globalStyles.mr_4]}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          textColor="#FFFFFF"
          placeholderTextColor="#FFFFFF"
          placeholder="E-mail ou Telefone"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          identifier="emailInput"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          textColor="#FFFFFF"
          placeholderTextColor="#FFFFFF"
          placeholder="Senha"
          secureTextEntry
          identifier="passwordInput"
        />

        <TouchableOpacity>
          <Text style={[styles.forgotPassword, globalStyles.mt_2, { textAlign: 'right' }]}>Esqueceu sua senha?</Text>
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
          <Button mode="contained" onPress={handleLogin} style={styles.btnLogin}>
            Entrar
          </Button>
          <TouchableOpacity>
            <Text style={[styles.forgotPassword, { textAlign: 'right' }]}>
              {loginError ? 'Login falhou. Tente novamente.' : 'Esqueceu sua senha?'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.forgotPassword, { textAlign: 'right' }]} onPress={() => navigation.navigate('SignUp')}>Crie uma conta?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
