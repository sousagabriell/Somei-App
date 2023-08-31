import React from "react";
import { styles } from './styles'
import { globalStyles } from "../../styles";
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { HeaderHome } from "../../components/HeaderHome";
import { VerticalCarousel } from "../../components/VerticalCarousel";
import { NoticeCarousel } from "../../components/NoticesCarousel";
import { SomeiBtn } from "../../components/SomeiBtn";
import { Header } from "../../components/Header";


export default function ResumeSale({ navigation }) {
    return (
        <SafeAreaView>
            <Header namePage={"Cadastrar novo fluxo"} navigation={navigation} />
            <View style={[styles.navigationArea]}>
                <ScrollView>
                    <View style={[globalStyles.rowColumn]}>
                        <View style={[styles.areaCash, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_3]}>
                            <View style={[globalStyles.rowColumn, globalStyles.justifyContent, globalStyles.mb_5]}>
                                <Image
                                    source={require('../../assets/exclamation.png')}
                                />
                                <TouchableOpacity>
                                    <Image
                                        style={[globalStyles.mt_2]}
                                        source={require('../../assets/right.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Taxa</Text>
                            <Text style={[globalStyles.titleWhiteLight]}>Incluir</Text>
                        </View>
                        <View style={[styles.areaCash, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_3]}>
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
                    <TouchableOpacity style={[styles.btnTotal, globalStyles.ml_4, globalStyles.mt_3, globalStyles.rowColumn]}>
                        <Text style={[globalStyles.ml_3, globalStyles.mt_2, globalStyles.mb_2, globalStyles.titleWhiteSemiBold]}>Total  R$ 999,00</Text>
                    </TouchableOpacity>
                    <Text style={[globalStyles.mt_3, globalStyles.mb_3, globalStyles.titleSemiBold, globalStyles.ml_4]}>Formas de Pagamento</Text>
                    <View style={[globalStyles.ml_4]}>
                    <VerticalCarousel />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}