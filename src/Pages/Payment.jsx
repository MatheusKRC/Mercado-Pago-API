import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import StepsLine from '../Components/StepsLine';
import Cards from '../Components/Cards';

function Payment({ plan }) {
  const {
    title, desc, value, points,
  } = plan;
  return (
    <div>
      <h1>Metodos de Pagamento</h1>

      <div>
        <button type="button">Cartão</button>
        <button type="button">Pix</button>
      </div>

      <Cards
        title={title}
        desc={desc}
        value={value}
        points={points}
      />

      <StepsLine />
    </div>
  );
}

const mapStateToProps = (state) => ({
  plan: state.plans,
});

Payment.propTypes = {
  plan: propTypes.shape({
    title: propTypes.string,
    desc: propTypes.string,
    value: propTypes.string,
    points: propTypes.arrayOf(propTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps)(Payment);
