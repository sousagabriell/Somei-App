import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import { SellerBtn } from "../../components/SellerBtn";
import { styles } from "./styles";
import { cadastrarCupom } from "../../services/couponsService";
import { Header2 } from "../../components/Header2";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditCoupon({ navigation, route }) {
  const { cupomData } = route.params;
  const [idCupom, setIdCupom] = useState(cupomData.idCupom.toString());
  const [descricao, setDescricao] = useState(cupomData.descricao);
  const [valor, setValor] = useState(cupomData.valor.toString());
  const [titulo, setTitulo] = useState(cupomData.titulo);


  const handleEditCoupon = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("userData");
      const userData = JSON.parse(userDataString);
  
      if (!descricao || !valor) {
        setError("Preencha todos os campos obrigatórios.");
        return;
      }
  
      const cupomData = {
        idCupom: parseInt(idCupom), // Converte para inteiro se necessário
        descricao: descricao,
        titulo: titulo,
        porcentagem: false,
        valor: parseFloat(valor),
        idEmpresa: userData.empresa.idEmpresa,
      };
  
      const authToken = userData.token;
  
      const response = await fetch(
        "http://ec2-13-58-59-20.us-east-2.compute.amazonaws.com/api/Cupom/Atualizar",
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(cupomData),
        }
      );
  
      if (response.ok) {
        const resultadoEdicao = await response.json();
        console.log("Cupom editado com sucesso:", resultadoEdicao);
        navigation.navigate("Coupon");
      } else {
        setError("Falha ao editar o cupom.");
      }
    } catch (error) {
      console.error("Erro ao processar a edição do cupom:", error);
      setError("Erro ao processar a edição do cupom.");
    }
  };

  const isButtonDisabled = !(descricao && valor);

  return (
    <View style={styles.container}>
      <Header2 namePage={"Editar Cupom"} navigation={navigation} />
      <TextInput
        style={styles.input}
        placeholder="id Cupom"
        value={idCupom}
        onChangeText={(text) => setIdCupom(text)}
        editable={false} // Isso impede que o campo seja editável
      />
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
      />
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
      <SellerBtn
        navigation={navigation}
        isButtonDisabled={isButtonDisabled}
        onPress={handleEditCoupon}
        title={"Salvar Alterações"}
      />
    </View>
  );
}
