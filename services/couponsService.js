// apiService.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://ec2-13-58-59-20.us-east-2.compute.amazonaws.com/api';

export const getAllCupons = async () => {
  try {
    const userDataString = await AsyncStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData && userData.token) {
        const token = userData.token;
        const response = await fetch(`${BASE_URL}/Cupom/GetAll`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const cuponsData = await response.json();
          return cuponsData;
        } else {
          console.error('Erro na requisição:', response.status);
          return null;
        }
      } else {
        console.error('Token não encontrado nos dados do usuário.');
        return null;
      }
    } else {
      console.error('Dados do usuário não encontrados.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    return null;
  }
};

export const cadastrarCupom = async (cupomData) => {
  try {
    const userDataString = await AsyncStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      if (userData && userData.token) {
        const token = userData.token;

        const response = await fetch(`${BASE_URL}/Cupom/Cadastrar`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cupomData),
        });

        if (response.ok) {
          const cupomCadastrado = await response.json();
          return cupomCadastrado;
        } else {
          console.error('Erro na requisição:', response.status);
          return null;
        }
      } else {
        console.error('Token não encontrado nos dados do usuário.');
        return null;
      }
    } else {
      console.error('Dados do usuário não encontrados.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    return null;
  }
};

