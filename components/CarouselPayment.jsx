import React from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView, StyleSheet, FlatList } from "react-native";


// New Vertical Carousel Component
export function CarouselPayment() {
  const buttonsData = [
    { id: "1", title: "Pix", icon: require("../assets/forms-payment/pix.png") },
    { id: "2", title: "Débito", icon: require("../assets/forms-payment/card.png") },
    { id: "3", title: "Crédito", icon: require("../assets/forms-payment/credit.png") },
    { id: "4", title: "Dinheiro", icon: require("../assets/money.png") },
    { id: "5", title: "Boleto", icon: require("../assets/forms-payment/Barcode.png") },
    { id: "6", title: "Cheque", icon: require("../assets/forms-payment/cheque.png") },

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
    width: 120,
    backgroundColor: "#073B4C",
    borderRadius: 15,
    height: 100,
    paddingTop: 30,
  },
  carouselButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "20%"
  },
})
