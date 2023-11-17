// Em ClientSelect.js

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from './styles';
import { Header2 } from "../../components/Header2";
import ModalClient from '../../components/ModalClient';
import AddClient from "../../components/AddClient";
import { Feather } from '@expo/vector-icons';

export default function ClientSelect({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [Clients, setClients] = useState([]);

  const handleAddClient = (newClient) => {
    setClients((prevClients) => [...prevClients, newClient]);
  };

  return (
    <View>
      <Header2 namePage={"Clientes"} navigation={navigation} />
      <View style={styles.navigationArea}>
      <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar Clientes"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.addButtonContainer}
          onPress={() => navigation.navigate("AddClient", { handleAddClient: handleAddClient })}
        >
          {/* Ícone à esquerda */}
          <Image source={require("../../assets/Add_User_Male.png")} style={styles.icon} />

          <Text style={styles.addButtonText}>Cadastrar Novo Cliente</Text>

          {/* Ícone à direita */}
          <Image source={require("../../assets/right.png")} style={styles.icon2} />
        </TouchableOpacity>
        <View style={styles.container}>
          <ModalClient searchQuery={searchQuery} Clients={Clients} handleAddClient={handleAddClient} />
        </View>
      </View>
    </View>
  );
}

