import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './styles'
import { globalStyles } from "../../styles";
import { VerticalCarousel } from "../../components/VerticalCarousel";
import { SomeiBtn } from "../../components/SomeiBtn";
import { NoticeCarousel } from "../../components/NoticesCarousel";
import { Header } from "../../components/Header";
import { HeaderHome } from "../../components/HeaderHome";
import NewFlow from '../../components/NewFlow';


export default function Home({ navigation }) {
    const [isSomeiModalVisible, setIsSomeiModalVisible] = useState(false);

    const toggleSomeiModal = () => {
        setIsSomeiModalVisible(!isSomeiModalVisible);
    };

    return (
        <SafeAreaView>
            <HeaderHome />
            <View style={[styles.navigationArea, styles.scrollView]}>
                <ScrollView style={[globalStyles.mb_5]}>
                    <View style={[globalStyles.rowColumn]}>
                        <View style={[styles.areaCash, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_3]}>
                            <View style={[globalStyles.rowColumn, globalStyles.justifyContent]}>
                                <Image
                                    source={require('../../assets/plus.png')}
                                />
                                <TouchableOpacity>
                                    <Image
                                        style={[globalStyles.mt_2]}
                                        source={require('../../assets/right.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Entradas</Text>
                            <Text style={[globalStyles.titleWhiteLight]}>totais do mês</Text>
                            <Text style={[globalStyles.titleWhiteLight, globalStyles.mt_5]}>R$ +2000</Text>
                        </View>
                        <View style={[styles.areaCash, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_3]}>
                            <View style={[globalStyles.rowColumn, globalStyles.justifyContent]}>
                                <Image
                                    source={require('../../assets/-.png')}
                                />
                                <TouchableOpacity>
                                    <Image
                                        style={[globalStyles.mt_2]}
                                        source={require('../../assets/right.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Saídas</Text>
                            <Text style={[globalStyles.titleWhiteLight]}>totais do mês</Text>
                            <Text style={[globalStyles.titleWhiteLight, globalStyles.mt_5]}>R$ -1.000,00</Text>
                        </View>
                    </View>
                    <View style={[globalStyles.mt_3, globalStyles.ml_4]}>
                        <Text style={[globalStyles.mt_2, globalStyles.mb_3, globalStyles.titleSemiBold]}>Gestão da Loja</Text>
                        <VerticalCarousel />
                    </View>
                    <TouchableOpacity style={[globalStyles.btnYellow, globalStyles.ml_4, globalStyles.mt_3, globalStyles.rowColumn]} onPress={toggleSomeiModal}
                    >
                        <Image
                            style={[globalStyles.ml_3, globalStyles.mt_3]}
                            source={require('../../assets/mini-logo.png')}
                        />
                        <Text style={[globalStyles.ml_3, globalStyles.mt_3, globalStyles.titleYellowButton]}>cadastrar novo fluxo</Text>
                        {isSomeiModalVisible && <NewFlow visible={isSomeiModalVisible} onClose={toggleSomeiModal} navigation={navigation}/>}
                    </TouchableOpacity>
                    <Text style={[globalStyles.mt_3, globalStyles.mb_3, globalStyles.titleSemiBold, globalStyles.ml_4]}>Bora somar?</Text>
                    <View style={[globalStyles.ml_4]}>
                        <NoticeCarousel />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}