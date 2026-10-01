import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import { FinalProjectBuilder } from '../components/FinalProjectBuilder';
import { getIcon } from '../utils/icons';

export function FinalProject() {
  const { t } = useLang();

  return (
    <div className="page">
      <div className="hero">
        <h1>{getIcon('Rocket', 28)} {t('finalproject.title')}</h1>
        <p>{t('finalproject.blurb')}</p>
      </div>
      <FinalProjectBuilder />
    </div>
  );
}
