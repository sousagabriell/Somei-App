import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { styles } from './styles';
import { globalStyles } from "../../../styles";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import * as ImagePicker from 'expo-image-picker';


export default function SignUpStep3({ navigation }) {
    const [avatarSource, setAvatarSource] = useState(require('../../../assets/photo-profile-default.png'));
    const selectImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
            console.log('Permission to access camera roll is required!');
            return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync();
    
        if (result.cancelled) {
            console.log('User cancelled image selection');
        } else {
            const source = { uri: result.uri };
            setAvatarSource(source);
        }
    };
    
    useEffect(() => {
        (async () => {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (permissionResult.granted === false) {
                console.log('Permission to access camera roll is required!');
            }
        })();
    }, []);
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
                        source={avatarSource}
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
                    />
                    <TextInput
                        textColor="#FFFFFF"
                        placeholderTextColor="#FFFFFF"
                        placeholder="CNPJ (Opcional)"
                    />
                    <Button mode="contained" onPress={() => navigation.navigate('SignUpStep3')} style={[globalStyles.mt_5]} >Continuar</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}