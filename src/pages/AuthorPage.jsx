import React from 'react';
import { User, Mail } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const EMAIL = 'jpecina@gmail.com';

export function AuthorPage() {
  const { t } = useLang();

  return (
    <div className="page-narrow">
      <h1>{t('author.title')}</h1>

      <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              'linear-gradient(135deg, var(--primary), var(--accent))',
            boxShadow: 'var(--glow)',
            color: '#fff',
          }}
        >
          <User size={40} />
        </div>

        <h2 style={{ margin: '0 0 0.35rem', fontSize: '1.5rem' }}>
          {t('author.name')}
        </h2>
        <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>
          {t('author.role')}
        </span>

        <p
          className="card-sub"
          style={{
            maxWidth: 560,
            margin: '1rem auto 0',
            fontSize: '1.02rem',
            lineHeight: 1.65,
          }}
        >
          {t('author.bio')}
        </p>
      </div>

      <div className="card" style={{ padding: '1.6rem 2rem', marginTop: '1.2rem', textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 0.5rem' }}>{t('author.contactTitle')}</h3>
        <p className="card-sub" style={{ margin: '0 0 1.1rem' }}>
          {t('author.contactText')}
        </p>
        <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
          <Mail size={16} style={{ marginRight: 8, verticalAlign: -3 }} />
          {t('author.emailButton')}: {EMAIL}
        </a>
      </div>
    </div>
  );
}
