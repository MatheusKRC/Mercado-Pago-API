import React from 'react';
import Cards from '../Components/Cards';
import StepsLine from '../Components/StepsLine';

function Plans() {
  return (
    <div>
      <h1>Planos de Assinatura</h1>

      <main>
        <Cards
          title="Básico"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere maximus tellus quis"
          value="R$9.99"
          points={['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor']}
        />
        <Cards
          title="Custom"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere maximus tellus quis"
          value="R$0.00"
          points={['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor']}
        />
        <Cards
          title="Básico"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere maximus tellus quis"
          value="R$49.99"
          points={['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor']}
        />
      </main>

      <StepsLine />
    </div>
  );
}

export default Plans;
