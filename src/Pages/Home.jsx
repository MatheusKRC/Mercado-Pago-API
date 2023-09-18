import React, { useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CreditCard from '../Components/CreditCard';
import { userAction } from '../redux/actions';
import StepsLine from '../Components/StepsLine';

function Home({ setUser }) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
  });
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name } = target;
    setForm({
      ...form,
      [name]: target.value,
    });
  };

  const handleClick = () => {
    setUser(form);
    navigate('plans');
  };

  return (
    <div>
      <h1>Dados Pessoais</h1>

      <CreditCard />

      <form onSubmit={handleClick}>
        Nome
        <input
          name="nome"
          type="text"
          onChange={handleChange}
          required
        />

        E-Mail
        <input
          name="email"
          type="email"
          onChange={handleChange}
          required
        />

        Telefone
        <input
          name="telefone"
          type="tel"
          onChange={handleChange}
          required
        />

        CPF
        <input
          name="cpf"
          type="text"
          pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
        >
          Enviar

        </button>

      </form>

      <StepsLine />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(userAction(user)),
});

Home.propTypes = {
  setUser: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
