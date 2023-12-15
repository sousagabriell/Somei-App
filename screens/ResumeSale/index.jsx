import React, { useEffect, useState } from "react";
import { styles } from './styles'
import { globalStyles } from "../../styles";
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { HeaderHome } from "../../components/HeaderHome";
import { VerticalCarousel } from "../../components/VerticalCarousel";
import { NoticeCarousel } from "../../components/NoticesCarousel";
import { SomeiBtn } from "../../components/SomeiBtn";
import { Header } from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CarouselPayment } from "../../components/CarouselPayment";


export default function ResumeSale({ navigation }) {
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
    return (
        <SafeAreaView>
            <Header namePage={"Resumo"} navigation={navigation} establishmentName={razaoSocial} cnpj={cnpj} />
            <View style={[styles.navigationArea]}>
                <ScrollView>
                    <View style={[globalStyles.rowColumn]}>
                        <View style={[styles.areaCash, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_3]}>
                        <TouchableOpacity onPress={() => navigation.navigate('Feels')}>
                            <View style={[globalStyles.rowColumn, globalStyles.justifyContent, globalStyles.mb_5]}>
                                <Image
                                    source={require('../../assets/exclamation.png')}
                                />
                                    <Image
                                        style={[globalStyles.mt_2]}
                                        source={require('../../assets/right.png')}
                                    />
                            </View>
                            </TouchableOpacity>
                            <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Taxa</Text>
                            <Text style={[globalStyles.titleWhiteLight]}>Incluir</Text>
                        </View>
                        <View style={[styles.areaCash, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_3]}>
                        <TouchableOpacity onPress={() => navigation.navigate('Coupon')}>
                            <View style={[globalStyles.rowColumn, globalStyles.justifyContent, globalStyles.mb_5]}>
                                <Image
                                    source={require('../../assets/star.png')}
                                />
                                <TouchableOpacity>
                                    <Image
                                        style={[globalStyles.mt_2]}
                                        source={require('../../assets/right.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            </TouchableOpacity>
                            <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Cupom</Text>
                            <Text style={[globalStyles.titleWhiteLight]}>Incluir</Text>
                        </View>
                    </View>
                    <View style={[globalStyles.mt_3, globalStyles.ml_4]}>
                        <Text style={[globalStyles.mt_2, globalStyles.mb_3, globalStyles.titleSemiBold]}>Resumo</Text>
                        <View style={[styles.value_resume, globalStyles.rowColumn]}>
                            <View style={[styles.value_name]}>
                                <Text>Produtos</Text>
                                <Text>Taxa</Text>
                                <Text>Desconto</Text>
                            </View>
                            <View style={[styles.value_price, globalStyles.ml_5]}>
                            <Text>+ R$1.000,00</Text>
                            <Text>+ R$10,00</Text>
                            <Text>- R$111,00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.btnTotal, globalStyles.ml_4, globalStyles.mt_3, globalStyles.rowColumn]}>
                        <Text style={[globalStyles.ml_3, globalStyles.mt_2, globalStyles.mb_2, globalStyles.titleWhiteSemiBold]}>Total  R$ 999,00</Text>
                    </View>
                    <Text style={[globalStyles.mt_3, globalStyles.mb_3, globalStyles.titleSemiBold, globalStyles.ml_4]}>Formas de Pagamento</Text>
                    <View style={[globalStyles.ml_4]}>
                    <CarouselPayment />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}