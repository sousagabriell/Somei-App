import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import { SellerBtn } from "../../components/SellerBtn";
import { styles } from "./styles";
import { cadastrarCupom } from "../../services/couponsService";
import { Header2 } from "../../components/Header2";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddCoupon({ navigation }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [titulo, setTitulo] = useState("");

  const handleAddSeller = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("userData");

      if (!descricao || !valor) {
        console.error("Preencha todos os campos obrigatórios.");
        return;
      }
      const userData = JSON.parse(userDataString);
      const cupomData = {
        descricao: descricao,
        valor: parseFloat(valor),
        titulo: titulo,
        porcentagem: false,
        idEmpresa: userData.empresa.idEmpresa,
      };
      const resultadoCadastro = await cadastrarCupom(cupomData);
      if (resultadoCadastro) {
        console.log("Cupom cadastrado com sucesso:", resultadoCadastro);
        navigation.navigate("Coupon");
      } else {
        console.error("Falha ao cadastrar o cupom.");
      }
    } catch (error) {
      console.error("Erro ao processar o cadastro do cupom:", error);
    }
  };

  const isButtonDisabled = !(descricao && valor);

  return (
    <View style={styles.container}>
      <Header2 namePage={"Adicionar Cupons"} navigation={navigation} />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        onChangeText={(text) => setValor(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
      />
      <SellerBtn
        title={"Cadastrar Cupom"}
        navigation={navigation}
        isButtonDisabled={isButtonDisabled}
        onPress={handleAddSeller}
      />
    </View>
  );
}
