
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const productsData = [
  {
    id: 1,
    name: 'Produto A',
    price: '$10.99',
    image: require('../assets/productA.jpg'),
    totalInStock: 50,
  },
  {
    id: 2,
    name: 'Produto B',
    price: '$24.99',
    image: require('../assets/productB.jpg'),
    totalInStock: 30,
  },
  {
    id: 3,
    name: 'Produto C',
    price: '$24.99',
    image: require('../assets/productC.png'),
    totalInStock: 30,
  },
  {
    id: 4,
    name: 'Produto D',
    price: '$24.99',
    image: require('../assets/productD.png'),
    totalInStock: 30,
  },{
    id: 5,
    name: 'Produto E',
    price: '$24.99',
    image: require('../assets/productE.png'),
    totalInStock: 30,
  },{
    id: 6,
    name: 'Produto F',
    price: '$24.99',
    image: require('../assets/productF.png'),
    totalInStock: 30,
  },

];

export default function ProductsData() {
    const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.includes(productId)
        ? prevLikedProducts.filter((id) => id !== productId)
        : [...prevLikedProducts, productId]
    );
  };
  
  const isProductLiked = (productId) => likedProducts.includes(productId);

    const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.productImage} />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.productButton}
              onPress={() => toggleLike(item.id)}
            >
              <Icon
                name="heart"
                size={20}
                color={isProductLiked(item.id) ? '#06D6A0' : '#ddd'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.productButton}>
              <Icon name="edit" size={20} color="#001921" />
            </TouchableOpacity>
          </View>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productStock}>Total em estoque: {item.totalInStock}</Text>
      </View>
    </View>
  );

  const styles = {
    container: {
        flexDirection: 'row',
      },
    productContainer: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#F2F2F0',
        padding: 15,
        marginHorizontal: 5,
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-between',
        width: '90%', 
        marginBottom: 10,
      },
      column: {
        flex: 1,
      },
      topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      bottomContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      imageContainer: {
        backgroundColor: '#F2F2F0',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
      },
      productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
      },
      productName: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#001921',
        marginTop: 5,
      },
      productStock: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#001921',
        marginTop: 5,
      },
      productPrice: {
        fontSize: 20,
        fontFamily: 'Poppins',
        color: '#001921',
      },
      buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      productButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
      },
      productButtonText: {
        marginLeft: 5,
        fontSize: 16,
        fontFamily: 'Poppins',
      },
    };
  

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={styles.column}>
          <FlatList
            data={productsData.slice(0, Math.ceil(productsData.length / 2))}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.column}>
          <FlatList
            data={productsData.slice(Math.ceil(productsData.length / 2))}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </ScrollView>
  );
}

