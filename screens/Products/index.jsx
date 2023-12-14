import React from "react";
import { styles } from './styles';
import { Header } from "../../components/Header";
import { globalStyles } from "../../styles";
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView, StyleSheet, FlatList } from "react-native";




export default function Products({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity
                    style={[styles.settingsButton, globalStyles.pt_5, globalStyles.mb_3, globalStyles.titleWhiteLight, globalStyles.rowColumn,]}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.left}
                        source={require('../../assets/left.png')}
                    />
                    <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.ml_3, globalStyles.mt_2]}
                    >Produtos e serviços</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
            <TouchableOpacity
                    style={[styles.buttonProduct, globalStyles.pt_1,globalStyles.pb_1, globalStyles.mb_3, globalStyles.titleWhiteLight, globalStyles.rowColumn]}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.left}
                        source={require('../../assets/plus.png')}
                    />
                    <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.ml_2]}
                    >Adicionar produtos e serviços</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}