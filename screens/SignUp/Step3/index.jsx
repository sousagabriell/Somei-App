import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { styles } from './styles';
import { globalStyles } from "../../../styles";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../redux/actions';
import { cadastrarEmpresa } from '../../../services/signUpService';



export default function SignUpStep3({ navigation }) {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData);


    const handleNomeEmpresaChange = (text) => {
        dispatch(setUserData({ ...userData, empresa: { ...userData.empresa, razaoSocial: text } }));
      };

    const handleCnpjChange = (text) => {
        dispatch(setUserData({ ...userData, empresa: { ...userData.empresa, cnpj: text } }));
    };

    const handleSendUser = async () => {
        try {
          const response = await cadastrarEmpresa(userData);
          console.log('Dados enviados com sucesso!');
          navigation.navigate('BreakLogin');
        } catch (error) {
          console.error(error.message);
        }
      };
    


    return (
        <SafeAreaView style={globalStyles.background}>
            <View style={[globalStyles.goBackLogin, globalStyles.pt_3]}>
                <TouchableOpacity
                    style={[globalStyles.ml_5, globalStyles.mb_3, globalStyles.p_2, globalStyles.mt_4]}
                    onPress={() => navigation.navigate('SignUpStep2')}
                >
                    <Image
                        source={require('../../../assets/left.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={[]}>
                <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.text_center]}>
                    Personalize seu Negócio! </Text>
                <View style={[globalStyles.center]}>
                    <Image
                        style={[globalStyles.mt_4, globalStyles.mb_4]}
                        source={require('../../../assets/signUp/step-3.png')}
                    />
                </View>
            </View>
            <ScrollView>
                <View style={[globalStyles.center, globalStyles.pl_4, globalStyles.pr_4]}>
                    <Image
                    />
                </View>
                <TouchableOpacity style={[styles.btnCam, globalStyles.center, globalStyles.alignItemsCenter]}>
                    <Image
                        source={require('../../../assets/cam.png')}
                    />
                </TouchableOpacity>
                <View style={[globalStyles.pl_4, globalStyles.pr_4, globalStyles.pb_4, globalStyles.mt_4]}>
                    <TextInput
                        textColor="#FFFFFF"
                        placeholderTextColor="#FFFFFF"
                        placeholder="Nome da Empresa"
                        value={userData.usuario.nomeEmpresa}
                        onChangeText={handleNomeEmpresaChange}
                    />
                    <TextInput
                        textColor="#FFFFFF"
                        placeholderTextColor="#FFFFFF"
                        placeholder="CNPJ (Opcional)"
                        value={userData.usuario.cnpj}
                        onChangeText={handleCnpjChange}
                    />
                    <Button mode="contained" onPress={(handleSendUser)} style={[globalStyles.mt_5]}>Continuar</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}