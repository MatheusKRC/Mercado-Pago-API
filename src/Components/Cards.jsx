/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { planAction } from '../redux/actions';

function Cards({
  title, desc, value, points, setPlan,
}) {
  const [planValue, setValue] = useState(value);
  const [select, setSelect] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const plan = {
      title,
      desc,
      value: planValue,
      points,
    };
    setPlan(plan);
    return navigate('/pagamento');
  };

  useEffect(() => {
    if (location.pathname === '/pagamento') {
      setSelect(false);
    } else {
      setSelect(true);
    }
  }, []);

  const changeValue = ({ target }) => {
    setValue(target.value);
  };
  return (
    <div>
      <h2>{title}</h2>

      <p>{desc}</p>

      {value !== 'R$0,00' ? <h2>{value}</h2>
        : (
          <input
            onChange={changeValue}
            value={planValue}
            type="text"
          />
        )}

      {points.map((list, index) => (
        <li key={index}>{list}</li>
      ))}

      {select && (
      <button
        onClick={handleClick}
        type="button"
      >
        Começar

      </button>
      )}

    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setPlan: (plan) => dispatch(planAction(plan)),
});

Cards.propTypes = {
  title: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  points: propTypes.arrayOf(propTypes.string).isRequired,
  setPlan: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Cards);
