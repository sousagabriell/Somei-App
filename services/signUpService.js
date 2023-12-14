import { API_URL } from '@env';

export const cadastrarEmpresa = async (userData) => {
    try {
      const response = await fetch(`http://ec2-13-58-59-20.us-east-2.compute.amazonaws.com/api/empresa/cadastrar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro ao enviar os dados');
      }
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  };