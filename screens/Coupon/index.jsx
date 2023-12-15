import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Header2 } from "../../components/Header2";
import { TextInput } from "../../components/TextInput";
import ModalSeller from "../../components/ModalSeller";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllCupons } from '../../services/couponsService';
import CupomList from "../../components/CupomList";

export default function Coupon({ navigation }) {
    const [cupons, setCupons] = useState([]);
    const handleCoupons = async () => {
      try {
        const cuponsData = await getAllCupons();
  
        if (cuponsData && cuponsData.data) {
          setCupons(cuponsData.data);
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

    const [searchQuery, setSearchQuery] = useState("");

  return ( 
    <View>
    <Header2 namePage={"Cupons"} navigation={navigation} />
    <View style={styles.navigationArea}>
    <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.addButtonContainer}
        onPress={() => navigation.navigate("AddCoupon")}
      >
        <Image source={require("../../assets/Add_User_Male.png")} style={styles.icon} />
        <Text style={styles.addButtonText}>Cadastrar Novo Cupom</Text>
        <Image source={require("../../assets/right.png")} style={styles.icon2} />
      </TouchableOpacity>
      <View style={styles.container}>
      <ScrollView>
        <CupomList cupons={cupons} navigation={navigation} />
      </ScrollView>
      </View>
    </View>
  </View>
  )
}
