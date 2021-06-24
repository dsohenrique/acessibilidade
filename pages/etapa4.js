import React from 'react';
import { Formulary } from '../components/formulary';
import { BackArrow } from '../components/backArrow';

export const Etapa4 = () => {
  return (
    <>
      <BackArrow to="/etapa3" />
      <div className="etapa">
        <Formulary />
      </div>
    </>
  );
};
