import React from "react";
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { globalStyles } from "../styles";

export default function ModalSeller({ navigation, searchQuery }) {
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

  const filteredSellers = sellersData.filter((seller) =>
    seller.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderListSeller = ({ item }) => (
    <View style={styles.listItemContainer}>
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
      </View>
      <Image source={item.image} style={styles.listItemImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Vendedores</Text>
      <FlatList
        data={filteredSellers}
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
    width: 90, // Width um pouco maior (aumentado)
    height: 90, // Height um pouco maior (aumentado)
    borderRadius: 15,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 22, // Fonte um pouquinho maior (aumentado)
    fontWeight: "bold",
  },
  listItemSubtitle: {
    fontSize: 14, // Fonte um pouquinho maior (aumentado)
    color: "#666",
  },
});
