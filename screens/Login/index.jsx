import React from "react";
import { TextInput, View } from "react-native";
import { styles } from './styles'
import { SafeAreaView } from "react-native";
import { LogoLogin } from "../../components/LogoLogin";



export default function Login(){
    return (
        <SafeAreaView>
            <View style={styles.header}>
            <LogoLogin />
            </View>
            <View>
            <TextInput
                placeholder="Email"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
            </View>
        </SafeAreaView>
    )
}