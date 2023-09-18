const INITIAL_STATE = {
  nome: '',
  email: '',
  telefone: '',
  cpf: '',
};

// eslint-disable-next-line default-param-last
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_ACTION':
      return action.state;
    default:
      return state;
  }
};

export default user;
