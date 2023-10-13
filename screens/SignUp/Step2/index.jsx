import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { styles } from './styles';
import { globalStyles } from "../../../styles";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";


export default function SignUpStep2({ navigation }) {
    return (
        <SafeAreaView style={globalStyles.background}>
            <View style={[globalStyles.goBackLogin, globalStyles.pt_3]}>
                <TouchableOpacity
                    style={[globalStyles.ml_5, globalStyles.mb_3, globalStyles.p_2, globalStyles.mt_4]}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Image
                        source={require('../../../assets/left.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={[]}>
                <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.text_center]}>
                    Verificação</Text>
                <View style={[globalStyles.center]}>
                    <Image
                        style={[globalStyles.mt_4, globalStyles.mb_4]}
                        source={require('../../../assets/signUp/step-2.png')}
                    />
                </View>
                <Text style={[globalStyles.text_center, globalStyles.titleWhiteSemiBold]}>
                    Verificação de Dados</Text>
                <Text style={[globalStyles.text_center, globalStyles.ml_4, globalStyles.mr_4, globalStyles.mt_3, globalStyles.textWhite]}>
                    Para proteger a sua conta, digite o código que enviamos por E-mail para o endereço do cadastro.</Text>
            </View>
            <ScrollView>
                <View style={[globalStyles.pl_4, globalStyles.pr_4, globalStyles.pb_4]}>
                    <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.text_center, globalStyles.mt_5]}>
                        Código de Verificação:</Text>
                    <TextInput
                        textColor="#FFFFFF"
                        placeholderTextColor="#FFFFFF"
                        placeholder="Digite seu código"
                    />
                    <Button mode="contained" onPress={() => navigation.navigate('SignUpStep2')} style={[styles.smsButton, globalStyles.mt_5]}>Receber via SMS</Button>
                    <Button mode="contained" onPress={() => navigation.navigate('SignUpStep3')} style={[globalStyles.mt_3]}>Continuar</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}