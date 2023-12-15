import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
import { Feather } from '@expo/vector-icons';

export default function ModalClient({ navigation, searchQuery,client }) {
  const [selectedClient, setSelectedClient] = useState(null);
  

  const handleToggleSelection = (ClientId) => {
    setSelectedClient(ClientId === selectedClient ? null : ClientId);
  };

  const renderListClient = ({ item }) => (
    <View style={styles.listItemContainer}>
       {/* Botão de Edição */}
       <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate("EditClient", { clientsData: item })}
      >
        <Image source={require("../assets/Create.png")} style={styles.editImage} />
      </TouchableOpacity>

      {/* Informações do Vendedor */}
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>{item.nome}</Text>
        <Text style={styles.listItemSubtitle}>{item.cpfCnpj}</Text>
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
        data={client}
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
