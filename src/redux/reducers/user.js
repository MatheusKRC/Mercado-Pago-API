const INITIAL_STATE = {
    nome: '',
    email: '',
    telefone: '',
    cpf: ''
}

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_ACTION':
            return {...state}
        default:
            return state
    }
}

export default user