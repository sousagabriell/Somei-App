const initialState = {
    userData: {
        usuario: {
            nome: '',
            email: '',
            senha: '',
            telefone: '',
            tipoUsuario : "admin",
            caminhoImagem: "teste"
        },
        empresa: {
            razaoSocial: '',
            caminhoImagem: 'string',
            cnjp: ''
        }
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        return {
          ...state,
          userData: { ...state.userData, ...action.payload },
        };
      // ... outros casos
      default:
        return state;
    }
  };
export default rootReducer;