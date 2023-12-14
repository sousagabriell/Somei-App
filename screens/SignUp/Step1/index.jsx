import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { styles } from './styles';
import { globalStyles } from "../../../styles";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../redux/actions';

export default function SignUpStep1({ navigation }) {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData);
  
    const handleNomeChange = (text) => {
        dispatch(setUserData({ ...userData, usuario: { ...userData.usuario, nome: text } }));
      };
    
      const handleEmailChange = (text) => {
        dispatch(setUserData({ ...userData, usuario: { ...userData.usuario, email: text } }));
      };
    
      const handleTelefoneChange = (text) => {
        dispatch(setUserData({ ...userData, usuario: { ...userData.usuario, telefone: text } }));
      };
    
      const handleSenhaChange = (text) => {
        dispatch(setUserData({ ...userData, usuario: { ...userData.usuario, senha: text } }));
      };

    return (
        <SafeAreaView style={globalStyles.background}>
            <View style={[globalStyles.goBackLogin, globalStyles.pt_3]}>
                <TouchableOpacity
                    style={[globalStyles.ml_5, globalStyles.mb_3, globalStyles.p_2, globalStyles.mt_5]}
                    onPress={() => navigation.navigate('BreakLogin')}
                >
                    <Image
                        source={require('../../../assets/left.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={[]}>
                <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.text_center]}>
                    Registre-se para Somar!</Text>
                <View style={[globalStyles.center]}>
                    <Image
                        style={[globalStyles.mt_4, globalStyles.mb_4]}
                        source={require('../../../assets/signUp/step-1.png')}
                    />
                </View>
                <Text style={[globalStyles.text_center, globalStyles.titleWhiteLight]}>
                    Informações pessoais</Text>
            </View>
            <ScrollView>
                <View style={[globalStyles.pl_4, globalStyles.pr_4, globalStyles.pb_4]}>
                    <TextInput
                        textColor="#FFFFFF"
                        placeholderTextColor="#FFFFFF"
                        placeholder="Nome"
                        value={userData.usuario.nome}
                        onChangeText={handleNomeChange}
                    />
                    <TextInput
                        textColor="#FFFFFF"
                        placeholderTextColor="#FFFFFF"
                        placeholder="Email"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        value={userData.usuario.email}
                        onChangeText={handleEmailChange}    
                    />
                    <TextInput
                        textColor="#FFFFFF"
                        placeholderTextColor="#FFFFFF"
                        placeholder="Telefone"
                        value={userData.usuario.telefone}
                        onChangeText={handleTelefoneChange}
                    />
                    <TextInput
                        textColor="#FFFFFF"
                        placeholderTextColor="#FFFFFF"
                        placeholder="Senha"
                        value={userData.usuario.senha}
                        onChangeText={handleSenhaChange}
                        secureTextEntry
                    />
                    <TextInput
                        textColor="#FFFFFF"
                        placeholderTextColor="#FFFFFF"
                        placeholder="Confirmar Senha"
                        secureTextEntry
                    />
                    <Button mode="contained" onPress={() => navigation.navigate('SignUpStep2')} style={[globalStyles.mt_4]}>Continuar</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}