import React, { useState } from "react";
import ModalSeller from '../../components/ModalSeller'; 
import { SafeAreaView } from "react-native-web";
import { styles } from './styles';
import { globalStyles } from "../../styles";
import { Header2 } from "../../components/Header2";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function SellerSelect({ navigation }){

      const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar o termo de pesquisa


    return(
        <View>
            <Header2 namePage={"Vendedores"} navigation={navigation} />
            <View style={styles.navigationArea}>
                <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar vendedores"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
                />

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  // Handle the button press here
                }}
              >
                <Text style={styles.addButtonText}>Cadastrar Novo Vendedor</Text>
              </TouchableOpacity>
                <View style={styles.container}>
                    <ModalSeller searchQuery={searchQuery} />
                </View>
            </View>
        </View>
    )

}
