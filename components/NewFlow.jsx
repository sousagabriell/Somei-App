import React from "react";
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../styles";

export default function NewFlow({ visible, onClose, navigation }) {
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
                    <Image
                        style={[globalStyles.mt_3, globalStyles.mb_2]}
                        source={require('../assets/mini-logo.png')}
                    />
                        <Text style={[styles.modalTitle, globalStyles.mt_2, globalStyles.mb_1]}>Cadastrar novo fluxo</Text>
                        <Text style={[globalStyles.text_center]}>Você deseja cadastrar um fluxo de entrada ou saída?</Text>
                        <View style={[styles.modalButtonsContainer, globalStyles.mt_4]}>
                            <TouchableOpacity style={[styles.modalButton, globalStyles.rowColumn, globalStyles.center, globalStyles.alignItemsCenter, globalStyles.mr_1]} onPress={() => navigation.navigate('SelectProduct')}>
                                 <Image
                        style={[globalStyles.mt_3]}
                        source={require('../assets/btn-flow/plus.png')}
                    />
                                <Text style={[styles.buttonText, globalStyles.mt_2]}>Entradas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton, globalStyles.rowColumn , globalStyles.center, globalStyles.alignItemsCenter, globalStyles.mr_1]} onPress={() => navigation.navigate('SelectExit')}>
                            <Image
                        style={[globalStyles.mt_3,globalStyles.mb_3]}
                        source={require('../assets/btn-flow/-.png')}
                    />
                                <Text style={styles.buttonText}>Saídas</Text>
                            </TouchableOpacity>
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
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Background com opacidade padrão do modal
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 20,
        alignItems: "center",
        width: '85%',
        backgroundColor: "#FFFFFF",
        height: '40%',
    },
    modalTitle: {
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
        height: 80,
    },
    modalButton: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: '#052B38',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: '110%',
        width:'48%',
    },
    buttonText: {
        color: "#052B38",
        marginLeft: 5
    },
});
