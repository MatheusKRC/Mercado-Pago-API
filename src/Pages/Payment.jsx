/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StepsLine from '../Components/StepsLine';
import Cards from '../Components/Cards';
import PixMethod from '../Components/PixMethod';
import CardMethod from '../Components/CardMethod';

function Payment({ plan, user }) {
  const [method, setMethod] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const [copy, setCopy] = useState('');

  const api = axios.create({
    baseURL: 'https://api.mercadopago.com',
  });

  const navigate = useNavigate();

  api.interceptors.request.use(async (config) => {
    const token = process.env.REACT_APP_TOKEN_MERCADO_PAGO;
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  const {
    title, desc, value, points,
  } = plan;

  const {
    nome, email,
  } = user;

  const number = value.replace('R$', '');

  const setCard = async () => {
    setMethod('card');
  };

  const setPix = async () => {
    setMethod('pix');
    const body = {
      transaction_amount: parseFloat(number),
      description: desc,
      payment_method_id: 'pix',
      payer: {
        email,
        first_name: nome,
        last_name: nome,
      },
    };
    api.post('v1/payments', body).then((response) => {
      const { qr_code, qr_code_base64 } = response.data.point_of_interaction.transaction_data;
      setId(response.data.id);
      setQrCode(qr_code_base64);
      setCopy(qr_code);
    }).catch((err) => {
      // eslint-disable-next-line no-alert
      alert(err);
    });
  };

  const verifyStatus = () => {
    if (id) {
      api.get(`v1/payments/${id}`).then((response) => {
        const paymentStatus = response.data.status;
        setStatus(paymentStatus);
      });
    }
    return status;
  };
  setInterval(verifyStatus, 30000);

  useEffect(() => {
    if (status === 'approved') {
      return navigate('/Final');
    } return console.log('Aguardando Pagamento');
  }, [status]);

  return (
    <div>
      <h1>Metodos de Pagamento</h1>

      <div>
        <button onClick={setCard} type="button">Cartão</button>
        <button onClick={setPix} type="button">Pix</button>
      </div>

      <Cards
        title={title}
        desc={desc}
        value={value}
        points={points}
      />

      {method === 'pix' ? (<PixMethod src={qrCode} code={copy} />) : null}
      {method === 'card' ? (<CardMethod />) : null}

      <StepsLine />
    </div>
  );
}

const mapStateToProps = (state) => ({
  plan: state.plans,
  user: state.user,
});

Payment.propTypes = {
  plan: propTypes.shape({
    title: propTypes.string,
    desc: propTypes.string,
    value: propTypes.string,
    points: propTypes.arrayOf(propTypes.string),
  }).isRequired,
  user: propTypes.objectOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps)(Payment);
