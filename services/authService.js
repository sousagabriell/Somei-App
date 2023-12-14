import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
    static async login(email, password) {
      try {
        const response = await fetch(`http://ec2-13-58-59-20.us-east-2.compute.amazonaws.com/api/Token/${email}/${password}`);
        const data = await response.json();
  
        if (response.ok) {
          await AsyncStorage.setItem('userData', JSON.stringify(data.data));
          return { success: true, data };
        } else {
          const errorMessage = data.message || response.statusText;
          return { success: false, error: errorMessage };
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
        throw new Error(`${error.message}`);
      }
    }
  }
  
  export default AuthService;
  