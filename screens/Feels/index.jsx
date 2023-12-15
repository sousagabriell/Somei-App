import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Header2 } from "../../components/Header2";
import { TextInput } from "../../components/TextInput";
import { Feather } from "@expo/vector-icons";
import { getAllCupons } from '../../services/couponsService';
import CupomList from "../../components/CupomList";
import FeelsList from "../../components/FeelsList";

export default function Feels({ navigation }) {
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
    const [sellers, setSellers] = useState([]);

  return ( 
    <View>
    <Header2 namePage={"Taxas"} navigation={navigation} />
    <View style={styles.navigationArea}>
    <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <View style={styles.container}>
      <ScrollView>
        <FeelsList cupons={cupons} navigation={navigation} />
      </ScrollView>
      </View>
    </View>
  </View>
  )
}
