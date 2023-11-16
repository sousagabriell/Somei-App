import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
import { Feather } from '@expo/vector-icons';

export default function ModalSeller({ navigation, searchQuery }) {
  const [selectedSeller, setSelectedSeller] = useState(null);

  const sellersData = [
    {
      id: "1",
      title: "Ana Beatriz",
      subtitle: "Diretora MKT",
      image: require("../assets/seller1.png"),
    },
    {
      id: "2",
      title: "Breno Oliveira",
      subtitle: "Designer",
      image: require("../assets/seller3.png"),
    },
    {
      id: "3",
      title: "Vitória Giovanna",
      subtitle: "Pesquisa e UX",
      image: require("../assets/seller2.png"),
    },
    {
      id: "4",
      title: "Luiza Magazine",
      subtitle: "Gerente de vendas",
      image: require("../assets/seller4.png"),
    },
  ];

  const handleToggleSelection = (sellerId) => {
    setSelectedSeller(sellerId === selectedSeller ? null : sellerId);
  };

  const renderListSeller = ({ item }) => (
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
        <View style={[styles.checkbox, selectedSeller === item.id && styles.checkboxSelected]}>
          {selectedSeller === item.id && <View style={styles.innerCheckbox} />}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Vendedores</Text>
      <FlatList
        data={sellersData}
        keyExtractor={(item) => item.id}
        renderItem={renderListSeller}
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
