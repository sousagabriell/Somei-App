import React from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView, StyleSheet, FlatList } from "react-native";


// New Vertical Carousel Component
export function VerticalCarousel() {
  const buttonsData = [
    { id: "1", title: "Produtos e Serviços", icon: require("../assets/carrousel/apps.png") },
    { id: "2", title: "Relatórios", icon: require("../assets/carrousel/stats.png") },
    { id: "3", title: "Eventos", icon: require("../assets/carrousel/calendar.png") },
    { id: "4", title: "Pix", icon: require("../assets/carrousel/pix.png") },
    { id: "5", title: "Documentos", icon: require("../assets/carrousel/file.png") },
  ];

  const renderCarouselButton = ({ item }) => (
    <TouchableOpacity style={styles.carouselButton}>
      <Image source={item.icon} />
      <Text style={styles.carouselButtonText}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={buttonsData}
      renderItem={renderCarouselButton}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.verticalCarousel}
    />
  );
};
const styles = StyleSheet.create({
  verticalCarousel: {
    maxHeight: '100%',
  },
  carouselButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginRight: 10,
    width: 130,
    backgroundColor: "#078976",
    borderRadius: 15,
    height: 120,
    paddingTop: 40,
  },
  carouselButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "10%"
  },
})
