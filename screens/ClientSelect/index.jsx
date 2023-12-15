// Em ClientSelect.js

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from './styles';
import { Header2 } from "../../components/Header2";
import ModalClient from '../../components/ModalClient';
import AddClient from "../../components/AddClient";
import { Feather } from '@expo/vector-icons';
import { getAllClients } from '../../services/clientService';

export default function ClientSelect({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [Clients, setClients] = useState([]);
  const [client, setClient] = useState([]);

  const handleClients = async () => {
    try {
      const clientsData = await getAllClients();

      if (clientsData && clientsData.data) {
        setClient(clientsData.data);
      } else {
        console.error('Erro ao obter cupons após o login.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  useEffect(() => {
    handleClients();
  }, []);
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
          <Image source={require("../../assets/Add_User_Male.png")} style={styles.icon} />
          <Text style={styles.addButtonText}>Cadastrar Novo Cliente</Text>
          <Image source={require("../../assets/right.png")} style={styles.icon2} />
        </TouchableOpacity>
        <View style={styles.container}>
          <ModalClient searchQuery={searchQuery} client={client} handleAddClient={handleAddClient} />
        </View>
      </View>
    </View>
  );
}

