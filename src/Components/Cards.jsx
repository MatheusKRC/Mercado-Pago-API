/* eslint-disable react/no-array-index-key */
import React from 'react';
import propTypes from 'prop-types';

function Cards({
  title, desc, value, points,
}) {
  return (
    <div>
      <h2>{title}</h2>

      <p>{desc}</p>

      <h2>{value}</h2>

      {points.map((list, index) => (
        <li key={index}>{list}</li>
      ))}

      <button type="button">
        Começar

      </button>

    </div>
  );
}

Cards.propTypes = {
  title: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  points: propTypes.array.isRequired,
};

export default Cards;
