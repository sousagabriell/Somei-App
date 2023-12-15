import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://ec2-13-58-59-20.us-east-2.compute.amazonaws.com/api';

export const getAllPayments = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (userData && userData.token) {
          const token = userData.token;
          const response = await fetch(`${BASE_URL}/Especie/GetAll`, {
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