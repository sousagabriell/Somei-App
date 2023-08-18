import React from "react";
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback, TextInput, FlatList } from "react-native";
import { globalStyles } from "../styles";

export default function ModalSeller({ visible, onClose, navigation }) {
  const sellersData = [
    {
      id: "1",
      title: "Ana Beatriz",
      subtitle: "Designer",
      image: require("../assets/seller1.png"),
    },
    {
      id: "2",
      title: "Breno Oliveira",
      subtitle: "Designer",
      image: require("../assets/seller3.png"),
    },
    {
      id: "2",
      title: "Vitória Giovanna",
      subtitle: "Designer",
      image: require("../assets/seller2.png"),
    },
  ];

  const renderListSeller = ({ item }) => (
    <View style={[styles.listItemContainer, globalStyles.pt_3, globalStyles.pb_3]}>
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
                <Image style={styles.closeButton} source={require('../assets/close.png')} />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar"
            // Implement your search logic here...
            />
            
            <View style={[styles.modalSellersContainer, globalStyles.mb_3, globalStyles.mt_3]}>
            <FlatList
                data={sellersData}
                keyExtractor={(item) => item.id}
                renderItem={renderListSeller}
              />
            </View>

          </View>
          
        </View>
        
      </TouchableWithoutFeedback>
     
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
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    width: "80%",
    Height: "80%", // Increase the maxHeight to allow more space for the FlatList
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 10,
    padding: 10
  },
  modalTitleText: {
    
    fontWeight: "bold",
    fontSize: 18,
  },
  closeButton: {
    width: 15,
    marginLeft: 150
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
  modalSellersContainer: {
    width: "100%",
    
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    zIndex: 9,
    borderBottomWidth: 0.5,
    borderColor: '#807070'
  },
  listItemImage: {
    width: 66,
    height: 65,
    borderRadius: 15,
    marginRight: 10,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listItemSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  emptyListText: {
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
});