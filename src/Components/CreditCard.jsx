import React from 'react';
import chip from '../Images/chip.png';
import bank from '../Images/bank.png';

function CreditCard() {
  return (
    <div>
      <img src={chip} alt="chip de cartão de crédito" />
      <img src={bank} alt="icone de banco generico" />

      <h3>**** **** **** ****</h3>

      <p>Nome do Titular</p>
      <h3>Insira Seu Nome</h3>

      <p>Data de Vencimento</p>
      <h3>00/00</h3>
    </div>
  );
}

export default CreditCard;
