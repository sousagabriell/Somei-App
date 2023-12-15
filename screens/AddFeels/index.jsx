import React, { useState, useEffect } from "react";
import { View, TextInput, Text } from "react-native";
import { SellerBtn } from "../../components/SellerBtn";
import { styles } from "./styles";
import { cadastrarCupom } from "../../services/couponsService";
import { Header2 } from "../../components/Header2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../../styles";

export default function AddFeels({ navigation, route  }) {
  const { taxaData } = route.params;
  const { idTaxa } = useState(taxaData.idTaxa.toString());
  const [descricao, setDescricao] = useState(taxaData.descricao);
  const [titulo, setTitulo] = useState(taxaData.titulo);

  const [valor, setValor] = useState(taxaData.valor);

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
      <Text style={[styles.listItemTitle, globalStyles.mr_4, globalStyles.ml_3, globalStyles.mb_2]}>{titulo}</Text>
      <Text style={[globalStyles.mr_4, globalStyles.ml_3, globalStyles.mb_2]}>{descricao}</Text>


      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        onChangeText={(text) => setValor(text)}
      />
     
      <SellerBtn
        title={"Cadastrar Taxa"}
        navigation={navigation}
        isButtonDisabled={isButtonDisabled}
        onPress={handleAddSeller}
      />
    </View>
  );
}
