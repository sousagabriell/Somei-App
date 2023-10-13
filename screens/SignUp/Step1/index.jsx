import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { styles } from './styles';
import { globalStyles } from "../../../styles";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";


export default function SignUpStep1({ navigation }) {
    return (
        <SafeAreaView style={globalStyles.background}>
            <View style={[globalStyles.goBackLogin, globalStyles.pt_3]}>
                <TouchableOpacity
                    style={[ globalStyles.ml_5, globalStyles.mb_3, globalStyles.p_2, globalStyles.mt_5 ]}
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
                />
                <TextInput
                    textColor="#FFFFFF"
                    placeholderTextColor="#FFFFFF"
                    placeholder="Email"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <TextInput
                    textColor="#FFFFFF"
                    placeholderTextColor="#FFFFFF"
                    placeholder="Telefone"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <TextInput
                    textColor="#FFFFFF"
                    placeholderTextColor="#FFFFFF"
                    placeholder="Senha"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <TextInput
                    textColor="#FFFFFF"
                    placeholderTextColor="#FFFFFF"
                    placeholder="Confirmar Senha"
                />
                <Button mode="contained" onPress={() => navigation.navigate('SignUpStep2')} style={[ globalStyles.mt_4]}>Continuar</Button>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}