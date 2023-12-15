// Products.js
import React, { useState } from "react";
import { styles } from './styles';
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductsData from '../../components/ProductsData'; // Importe o componente ProductsData

export default function Products({ navigation }) {
    const [selectedButton, setSelectedButton] = useState('Geral');

    const handleButtonPress = (button) => {
        setSelectedButton(button);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.settingsButton}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.left}
                        source={require('../../assets/left.png')}
                    />
                    <Text style={{ color: 'white', marginLeft: 10, fontSize: 18, fontWeight: 'bold', marginTop: 3 }}>
                        Produtos e serviços
                    </Text>
                </TouchableOpacity>

                <View style={styles.content}>
                    <TouchableOpacity style={styles.buttonProduct}>
                        <Image style={styles.left} source={require('../../assets/plus.png')} />
                        <Text style={styles.buttonText}>
                            Adicionar produto
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={[
                                styles.smallButton,
                                styles[selectedButton === 'Favoritos' ? 'selectedButton' : 'unselectedButton']
                            ]}
                            onPress={() => handleButtonPress('Favoritos')}
                        >
                            <Icon name="heart" size={20} color={selectedButton === 'Favoritos' ? '#052B38' : 'white'} style={styles.left} />
                            <Text style={styles.buttonText(selectedButton === 'Favoritos')}>
                                Favoritos
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.smallButton,
                                styles[selectedButton === 'Geral' ? 'selectedButton' : 'unselectedButton']
                            ]}
                            onPress={() => handleButtonPress('Geral')}
                        >
                            <Icon name="th" size={20} color={selectedButton === 'Geral' ? 'white' : '#052B38'} style={styles.left} />
                            <Text style={styles.buttonText(selectedButton === 'Geral')}>
                                Geral
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            {/* Estilize o componente ProductsData */}
            <View style={styles.productsDataContainer}>
                <ProductsData filter={selectedButton} />
            </View>
        </SafeAreaView>
    );
}
