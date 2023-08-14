import React from "react";
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback, TextInput, FlatList } from "react-native";
import { globalStyles } from "../styles";

export default function ModalSeller({ visible, onClose, navigation }) {
  const sellersData = [
    {
      id: "1",
      title: "Seller 1",
      subtitle: "Subtitle for Seller 1",
      image: require("../assets/logo.png"),
    },
    {
      id: "2",
      title: "Seller 2",
      subtitle: "Subtitle for Seller 2",
      image: require("../assets/logo.png"),
    },
  ];

  const renderListSeller = ({ item }) => (
    <View style={styles.listItemContainer}>
      <Image source={item.image} style={styles.listItemImage} />
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>{item.title}</Text>
        <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  )
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitleText}>Vendedores</Text>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar"
            // Implement your search logic here...
            />
            
          </View>
          
        </View>
        
      </TouchableWithoutFeedback>
      <FlatList
                data={sellersData}
                keyExtractor={(item) => item.id}
                renderItem={renderListSeller}
              />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Background with modal opacity
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    width: "80%",
    Height: "80%", // Increase the maxHeight to allow more space for the FlatList
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalTitleText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  closeButton: {
    fontSize: 18,
  },
  searchInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    zIndex: 9
  },
  listItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listItemSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  emptyListText: {
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
});