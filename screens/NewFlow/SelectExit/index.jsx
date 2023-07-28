import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Header } from "../../../components/Header";
import { globalStyles } from "../../../styles";
import { ShoppingCart } from "../../../components/ShoppingCart";
import { VerticalCarousel } from "../../../components/VerticalCarousel";
import { CarouselPayment } from "../../../components/CarouselPayment";
import { ExitBtn } from "../../../components/ExitBtn";

export default function SelectExit({ navigation }) {
    return (
        <SafeAreaView>
            <Header namePage={"Cadastrar novo fluxo"} navigation={navigation} />
            <View style={[styles.navigationArea]}>
                <View style={[globalStyles.rowColumn]}>
                    <View style={[styles.areaCash, globalStyles.color_grey, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_2]}>
                        <TouchableOpacity onPress={() => navigation.navigate('SelectProduct')}>
                            <View style={[globalStyles.rowColumn]}>
                                <Image
                                    style={[globalStyles.mr_2]}
                                    source={require('../../../assets/plus.png')}
                                />
                                <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.ml_5]}>Entradas</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.areaCash, globalStyles.color_green, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_2, globalStyles.mb_2]}>
                        <TouchableOpacity>

                            <View style={[globalStyles.rowColumn, globalStyles.justifyContent]}>
                                <Image
                                    style={[globalStyles.mr_2]}
                                    source={require('../../../assets/-.png')}
                                />
                                <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mr_5]}>Saídas</Text>
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
                        source={require('../../../assets/apps.png')}
                    />
                    <Text style={[globalStyles.ml_3, globalStyles.mt_3, globalStyles.titleWhiteSemiBold]}>Selecionar forma de saída</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.btnPlus, globalStyles.ml_3, globalStyles.rowColumn, globalStyles.mt_2, globalStyles.justifyContent]}>
                    <Text style={[globalStyles.ml_3,globalStyles.titleWhiteSemiBold]}>Valor</Text>
                    <View style={styles.areaValue}>
                        <Text style={[]}>R$ 0,00</Text>
                    </View>
                </TouchableOpacity>

                <View style={[globalStyles.mt_2, globalStyles.ml_4]}>
                        <Text style={[globalStyles.mb_2, globalStyles.titleSemiBold]}>Escolha a Forma de Saída</Text>
                        <CarouselPayment />
                    </View>
                <ExitBtn />
            </View>
        </SafeAreaView>
    )
}