import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
import { Feather } from '@expo/vector-icons';

export default function ModalClient({ navigation, searchQuery }) {
  const [selectedClient, setSelectedClient] = useState(null);

  const ClientsData = [
    {
      id: "1",
      title: "Zé da Universal",
      subtitle: "Pessoa Física",
      image: require("../assets/client1.png"),
    },
    {
      id: "2",
      title: "Mata Grande",
      subtitle: "Pessoa Física",
      image: require("../assets/client2.png"),
    },
    {
      id: "3",
      title: "Shopee",
      subtitle: "Pessoa Juridica",
      image: require("../assets/client3.png"),
    },
    {
      id: "4",
      title: "B.O Kaze",
      subtitle: "Pessoa Juridica",
      image: require("../assets/client4.png"),
    },
  ];

  const handleToggleSelection = (ClientId) => {
    setSelectedClient(ClientId === selectedClient ? null : ClientId);
  };

  const renderListClient = ({ item }) => (
    <View style={styles.listItemContainer}>
       {/* Botão de Edição */}
       <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          // Adicione a lógica de edição aqui
        }}
      >
        <Image source={require("../assets/Create.png")} style={styles.editImage} />
      </TouchableOpacity>

      {/* Informações do Vendedor */}
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
      </View>

      {/* Imagem do Vendedor */}
      <Image source={item.image} style={styles.listItemImage} />

      {/* Checkbox */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => handleToggleSelection(item.id)}
      >
        <View style={[styles.checkbox, selectedClient === item.id && styles.checkboxSelected]}>
          {selectedClient === item.id && <View style={styles.innerCheckbox} />}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Clientes</Text>
      <FlatList
        data={ClientsData}
        keyExtractor={(item) => item.id}
        renderItem={renderListClient}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: "100%",
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "#807070",
  },
  listItemImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  listItemSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  checkboxContainer: {
    padding: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCheckbox: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#06D6A0",
  },
  checkboxSelected: {
    borderColor: "#06D6A0",
  },
  editButton: {
    padding: 10,
  },
  editImage: {
    width: 24,
    height: 24,
  },
});
