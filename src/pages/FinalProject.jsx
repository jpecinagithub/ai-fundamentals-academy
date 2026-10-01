import React from 'react';
import { FinalProjectBuilder } from '../components/FinalProjectBuilder';
import { getIcon } from '../utils/icons';

export function FinalProject() {
  return (
    <div className="page">
      <div className="hero">
        <h1>{getIcon('Rocket', 28)} Proyecto final</h1>
        <p>
          Diseña tu primera aplicación con IA: elige qué quieres construir,
          con qué modelo y qué piezas necesita, y obtén un plan de proyecto
          listo para llevar a la práctica.
        </p>
      </div>
      <FinalProjectBuilder />
    </div>
  );
}
