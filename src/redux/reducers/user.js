const INITIAL_STATE = {
  nome: '',
  email: '',
  telefone: '',
  cpf: '',
};

const user = (action, state = INITIAL_STATE) => {
  switch (action) {
    case 'USER_ACTION':
      return { ...state };
    default:
      return state;
  }
};

export default user;
