// CupomList.jsx
import React, { useState } from "react";
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

const imagePaths = [
  require("../assets/cupom/cupom-1.png"),
  require("../assets/cupom/cupom-2.png"),
  require("../assets/cupom/cupom-3.png"),
  require("../assets/cupom/cupom-4.png"),
];

export default function CupomList({ cupons, navigation }) {
  const [selectedSeller, setSelectedSeller] = useState(null);

  const handleToggleSelection = (sellerId) => {
    setSelectedSeller(sellerId === selectedSeller ? null : sellerId);
  };

  const renderCupomItem = ({ item }) => (
    <View style={[styles.listItemContainer, globalStyles.mt_1]}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate("EditCoupon", { cupomData: item })}
      >
        <Image
          source={require("../assets/Create.png")}
          style={styles.editImage}
        />
      </TouchableOpacity>
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>{item.titulo}</Text>
        <Text>{item.descricao}</Text>
      </View>
      <Image style={styles.listItemImage} source={getRandomImagePath()} />
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
        data={cupons}
        keyExtractor={(item) => item.idCupom.toString()}
        renderItem={renderCupomItem}
      />
    </View>
  );

  function getRandomImagePath() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex];
  }
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
