import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView, StyleSheet, FlatList } from "react-native";
import { getAllPayments } from "../services/carouselPayment";


export function CarouselPayment() {
  const [payments, setPayments] = useState([]);

  const handleCoupons = async () => {
    try {
      const paymentsData = await getAllPayments();

      if (paymentsData && paymentsData.data) {
        setPayments(paymentsData.data);
      } else {
        console.error('Erro ao obter cupons após o login.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  useEffect(() => {
    handleCoupons();
  }, []);

  const renderCarouselButton = ({ item }) => (
    <TouchableOpacity style={styles.carouselButton}>
      <Image source={item.icon}/>
      <Text style={styles.carouselButtonText}>{item.nome}</Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={payments}
      renderItem={renderCarouselButton}
      keyExtractor={(item) => item.idEspecie}
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
