import React from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView, StyleSheet, FlatList } from "react-native";


export function NoticeCarousel() {
  const buttonsData = [
    { id: "1", title: "Relatórios", icon: require("../assets/carrousel/stats.png") },
    { id: "2", title: "Eventos", icon: require("../assets/carrousel/calendar.png") },
    { id: "3", title: "Pix", icon: require("../assets/carrousel/pix.png") },
    { id: "4", title: "Documentos", icon: require("../assets/carrousel/file.png") },
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
    width: 240,
    backgroundColor: "#078976",
    borderRadius: 8,
  },
  carouselButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "20%"
  },
})
