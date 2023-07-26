import React from "react";
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../styles";

export default function NewFlow({ visible, onClose }) {
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
                        style={[globalStyles.mt_3]}
                        source={require('../assets/mini-logo.png')}
                    />
                        <Text style={[styles.modalTitle, globalStyles.mt_2, globalStyles.mb_2]}>Cadastrar novo fluxo</Text>
                        <View style={[styles.modalButtonsContainer, globalStyles.mt_2]}>
                            <TouchableOpacity style={styles.modalButton}>
                                 <Image
                        style={[globalStyles.mt_3]}
                        source={require('../assets/btn-flow/plus.png')}
                    />
                                <Text style={styles.buttonText}>Entradas</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton}>
                            <Image
                        style={[globalStyles.mt_3, globalStyles.mb_5]}
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
        padding: 10,
        alignItems: "center",
        width: '60%',
        backgroundColor: "#E0BE36",
        height: '35%',
    },
    modalTitle: {
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff",
    },
    modalButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: "#ffffff",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: '110%',
        width:'48%',
    },
    buttonText: {
        color: "#414141",
        marginTop:'35%'
    },
});
