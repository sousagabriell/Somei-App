class AuthService {
    static async login(email, password) {
      try {
        const response = await fetch(`https://localhost:7030/api/Token/${email}/${password}`);
        const data = await response.json();
  
        if (response.ok) {
          return { success: true, data };
        } else {
          return { success: false, error: 'Login falhou. Verifique suas credenciais.' };
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
        return { success: false, error: 'Erro na requisição. Tente novamente.' };
      }
    }
  }
  
  export default AuthService;
  