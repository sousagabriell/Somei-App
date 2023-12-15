import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { globalStyles } from "../styles";
import { Header2 } from "./Header2";
import * as ImagePicker from 'expo-image-picker';
import { ClientBtn } from "./ClientBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cadastrarCliente } from "../services/clientService";


export default function AddClient({ navigation }) {
  const [nome, setNome] = useState("");
  const [cpfcnpj, setCpfcnpj] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const requestGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissões da galeria para continuar!');
    }
  };

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissões da câmera para continuar!');
    }
  };

  useEffect(() => {
    requestGalleryPermission();
    requestCameraPermission();
  }, []);

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleCameraPicker = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleAddClient = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("userData");

      if (!nome || !cpfcnpj) {
        console.error("Preencha todos os campos obrigatórios.");
        return;
      }
      const userData = JSON.parse(userDataString);
      const clientsData = {
        nome: nome,
        cpfcnpj: cpfcnpj,
        email: email,
        idCliente: userData.cliente.idCliente,
      };
      const resultadoCadastro = await cadastrarCliente(clientsData);
      console.log(resultadoCadastro + 'aqui');
      if (resultadoCadastro) {
        console.log("Cliente cadastrado com sucesso:", resultadoCadastro);
        navigation.navigate("ClientSelect");
      } else {
        console.error("Falha ao cadastrar o Cliente.");
      }
    } catch (error) {
      console.error("Erro ao processar o cadastro do Cliente:", error);
    }
  };

  const isButtonDisabled = !(nome && email && cpfcnpj);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImagePicker} style={styles.imagePickerButton}>
          <Image source={image ? { uri: image } : require("../assets/default-user.png")} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCameraPicker} style={styles.cameraButton}>
          <Image source={require("../assets/cam.png")} style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="cpfCnpj"
        value={cpfcnpj}
        onChangeText={(text) => setCpfcnpj(text)}
      />
      <ClientBtn navigation={navigation}
       isButtonDisabled={isButtonDisabled}
        onPress={handleAddClient}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 100,
  },
  imagePickerButton: {
    marginRight: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#06D6A0',
    borderRadius: 5,
    padding: 10,
  },
  cameraIcon: {
    width: 30,
    height: 30,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 20,
  },
  addButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  addButtonText: {
    color: '#052B38',
    textAlign: 'center',
  },
});
