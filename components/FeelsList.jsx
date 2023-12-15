// CupomList.jsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles";
import { getAllFeels } from "../services/feelsService";

const imagePaths = [
  require("../assets/cupom/cupom-1.png"),
  require("../assets/cupom/cupom-2.png"),
  require("../assets/cupom/cupom-3.png"),
  require("../assets/cupom/cupom-4.png"),
];

export default function FeelsList({ cupons, navigation }) {

    const [taxas, setTaxas] = useState([]);
    const handleFeels = async () => {
      try {
        const feelsData = await getAllFeels();
  
        if (feelsData && feelsData.data) {
            setTaxas(feelsData.data);
        } else {
          console.error('Erro ao obter cupons após o login.');
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    };
  
    useEffect(() => {
      handleFeels();
    }, []);

  const [selectedSeller, setSelectedSeller] = useState(null);

  const handleToggleSelection = (sellerId) => {
    setSelectedSeller(sellerId === selectedSeller ? null : sellerId);
  };

  const renderCupomItem = ({ item }) => (
    <View style={[styles.listItemContainer, globalStyles.mt_1]}>
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>{item.titulo}</Text>
        <Text>{item.descricao}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => handleToggleSelection(item.id)}
      >
        <View style={[styles.checkbox]}></View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "black",
          marginVertical: 5,
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={taxas}
        keyExtractor={(item) => item.idTaxa.toString()}
        renderItem={renderCupomItem}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 200,
    height: "150%",
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
    width: 60,
    height: 60,
    borderRadius: 15,
    marginVertical: 5,
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
    width: 15,
    height: 15,
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
    width: 20,
    height: 20,
  },
});
{
}
