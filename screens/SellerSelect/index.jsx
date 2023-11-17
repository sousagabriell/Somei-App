// Em SellerSelect.js

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from './styles';
import { Header2 } from "../../components/Header2";
import ModalSeller from '../../components/ModalSeller';
import AddSeller from "../../components/AddSeller";
import { Feather } from '@expo/vector-icons';

export default function SellerSelect({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sellers, setSellers] = useState([]);

  const handleAddSeller = (newSeller) => {
    setSellers((prevSellers) => [...prevSellers, newSeller]);
  };

  return (
    <View>
      <Header2 namePage={"Vendedores"} navigation={navigation} />
      <View style={styles.navigationArea}>
      <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar vendedores"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.addButtonContainer}
          onPress={() => navigation.navigate("AddSeller", { handleAddSeller: handleAddSeller })}
        >
          {/* Ícone à esquerda */}
          <Image source={require("../../assets/Add_User_Male.png")} style={styles.icon} />

          <Text style={styles.addButtonText}>Cadastrar Novo Vendedor</Text>

          {/* Ícone à direita */}
          <Image source={require("../../assets/right.png")} style={styles.icon2} />
        </TouchableOpacity>
        <View style={styles.container}>
          <ModalSeller searchQuery={searchQuery} sellers={sellers} handleAddSeller={handleAddSeller} />
        </View>
      </View>
    </View>
  );
}

