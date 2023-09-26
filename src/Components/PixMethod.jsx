import React from 'react';
import propTypes from 'prop-types';

function PixMethod({ src, code }) {
  return (
    <div>
      <img width="200px" alt="qr-code" src={`data:image/jpeg;base64,${src}`} />
      <br />
      <input type="text" defaultValue={code} />
    </div>
  );
}

PixMethod.propTypes = {
  src: propTypes.string.isRequired,
  code: propTypes.string.isRequired,
};

export default PixMethod;
