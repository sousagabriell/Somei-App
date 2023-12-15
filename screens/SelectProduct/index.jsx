import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { globalStyles } from "../../styles";
import { Header } from "../../components/Header";
import { ShoppingCart } from "../../components/ShoppingCart";

import ModalSeller from "../../components/ModalSeller";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SelectProduct({ navigation }) {
    const [isSellerModalVisible, setIsSellerModalVisible] = useState(false);
    const [empresaData, setEmpresaData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData) {
                    const { empresa } = JSON.parse(userData);
                    setEmpresaData(empresa);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);


    if (!empresaData) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const { razaoSocial, cnpj } = empresaData;

    const toggleSellerModal = () => {
        setIsSellerModalVisible(!isSellerModalVisible);
    };

    return (
        <SafeAreaView>
            <Header namePage={"Cadastrar novo fluxo"} navigation={navigation} establishmentName={razaoSocial} cnpj={cnpj} />
            <View style={[styles.navigationArea]}>
                <View style={[globalStyles.rowColumn]}>
                    <View style={[styles.areaCash, globalStyles.color_green, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_2]}>
                        <TouchableOpacity>
                            <View style={[globalStyles.rowColumn]}>
                                <Image
                                    style={[globalStyles.mr_2]}
                                    source={require('../../assets/plus.png')}
                                />
                                <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.ml_5, globalStyles.mr_5]}>Entradas</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.areaCash, globalStyles.color_grey, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_2, globalStyles.mb_3]}>
                        <TouchableOpacity onPress={() => navigation.navigate('SelectExit')}>

                            <View style={[globalStyles.rowColumn, globalStyles.justifyContent]}>
                                <Image
                                    style={[globalStyles.mr_2]}
                                    source={require('../../assets/-.png')}
                                />
                                <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.ml_5]}>Saídas</Text>
                            </View>
                            <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Saídas</Text>
                            <Text style={[globalStyles.titleWhiteLight]}>totais do mês</Text>
                            <Text style={[globalStyles.titleWhiteLight, globalStyles.mt_5]}>R$ -1.000,00</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <TouchableOpacity style={[globalStyles.btnPlus, globalStyles.ml_3, globalStyles.rowColumn]}>
                    <Image
                        style={[globalStyles.mt_2, globalStyles.ml_3, globalStyles.mt_3]}
                        source={require('../../assets/apps.png')}
                    />
                    <Text style={[globalStyles.ml_3, globalStyles.mt_3, globalStyles.titleWhiteSemiBold]}>Adicionar produtos e serviços</Text>
                </TouchableOpacity>


                <View style={[globalStyles.rowColumn, styles.areaInfoSale]}>
                    <View style={[styles.btnSeller, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3]}>
                        <TouchableOpacity onPress={() => navigation.navigate('SellerSelect')}>

                            <View style={[globalStyles.rowColumn, globalStyles.justifyContent]}>
                                <Image
                                    source={require('../../assets/fire.png')}
                                />
                            </View>
                            <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Vendedor</Text>
                            <Text style={[globalStyles.titleWhiteLight]}>selecionar</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[styles.btnSeller, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3]}>
                        <TouchableOpacity onPress={() => navigation.navigate('ClientSelect')}>
                            <View style={[globalStyles.rowColumn, globalStyles.justifyContent]}>
                                <Image
                                    source={require('../../assets/icon-user.png')}
                                />
                            </View>
                            <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Cliente</Text>
                            <Text style={[globalStyles.titleWhiteLight]}>selecionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {isSellerModalVisible && <ModalSeller visible={isSellerModalVisible} onClose={toggleSellerModal} navigation={navigation} />}
                <ShoppingCart navigation={navigation}/>
            </View>
        </SafeAreaView>
    )
}