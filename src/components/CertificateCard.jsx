import React, { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { useModules } from '../hooks/useContent';
import { useProgress } from '../hooks/ProgressContext';
import { getIcon } from '../utils/icons';
import {
  buildCertificatePdf,
  downloadCertificatePdf,
  generateCertificateCode,
} from '../utils/certificate';

const CERT_KEY = 'aifa-certificate-v1';

function readCertificate() {
  try {
    const raw = window.localStorage.getItem(CERT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function formatLongDate(iso, lang) {
  try {
    return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return '';
  }
}

/**
 * Tarjeta de certificado / Certificate card: solo se muestra cuando los
 * 28 módulos están completados / only shown once all 28 modules are done.
 * El certificado se puede descargar UNA sola vez / one single download.
 */
export function CertificateCard() {
  const { lang, t } = useLang();
  const { state } = useProgress();
  const modules = useModules();
  const [record, setRecord] = useState(readCertificate);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [accepted, setAccepted] = useState(false);

  const allDone =
    modules.length > 0 &&
    modules.every((m) => state.completed && state.completed[m.id]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open ]);

  if (!allDone) return null;

  const alreadyDownloaded = !!record;

  const handleDownload = () => {
    const cleanName = name.trim();
    if (!cleanName || !accepted) return;
    // Doble comprobación / double-check: si ya existe registro, no generar de nuevo.
    const existing = readCertificate();
    if (existing) {
      setRecord(existing);
      setOpen(false);
      return;
    }
    const code = generateCertificateCode();
    const nowIso = new Date().toISOString();
    const doc = buildCertificatePdf({
      name: cleanName,
      code,
      dateStr: formatLongDate(nowIso, lang),
      lang,
    });
    downloadCertificatePdf(doc, t('certificatecard.filename'));
    const rec = { name: cleanName, code, downloadedAt: nowIso };
    try {
      window.localStorage.setItem(CERT_KEY, JSON.stringify(rec));
    } catch {
      /* almacenamiento no disponible / storage unavailable: el PDF ya se descargó */
    }
    setRecord(rec);
    setOpen(false);
    setName('');
    setAccepted(false);
  };

  return (
    <>
      <div className={`card cert-card${alreadyDownloaded ? ' issued' : ''}`}>
        <div className="cert-ico">
          {getIcon(alreadyDownloaded ? 'Award' : 'GraduationCap', 26)}
        </div>
        <div style={{ flex: 1 }}>
          {alreadyDownloaded ? (
            <>
              <h3 className="card-title" style={{ marginBottom: '0.3rem' }}>
                {t('certificatecard.issuedTitle')}
              </h3>
              <p className="card-sub" style={{ margin: 0 }}>
                {t('certificatecard.issuedOn')}{' '}
                <strong>{formatLongDate(record.downloadedAt, lang)}</strong>{' '}
                {t('certificatecard.issuedTo')} <strong>{record.name}</strong>.
              </p>
              <p className="card-sub" style={{ margin: '0.3rem 0 0' }}>
                {t('certificatecard.codeLabel')}{' '}
                <span className="mono">{record.code}</span>
              </p>
              <p className="card-sub" style={{ margin: '0.5rem 0 0' }}>
                {getIcon('Info', 14)} {t('certificatecard.alreadyUsed')}
              </p>
            </>
          ) : (
            <>
              <h3 className="card-title" style={{ marginBottom: '0.3rem' }}>
                {t('certificatecard.congrats', { n: modules.length })}
              </h3>
              <p className="card-sub" style={{ margin: '0 0 0.8rem' }}>
                {t('certificatecard.downloadBlurb')}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setOpen(true)}
              >
                {getIcon('Download', 16)} {t('certificatecard.downloadButton')}
              </button>
            </>
          )}
        </div>
      </div>

      {open && !alreadyDownloaded && (
        <div
          className="modal-overlay"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label={t('certificatecard.close')}
            >
              {getIcon('X', 18)}
            </button>
            <h3 id="cert-modal-title" className="card-title">
              {getIcon('Award', 20)} {t('certificatecard.modalTitle')}
            </h3>
            <p className="card-sub">{t('certificatecard.modalBlurb')}</p>

            <div className="form-group">
              <label htmlFor="cert-name">{t('certificatecard.nameLabel')}</label>
              <input
                id="cert-name"
                type="text"
                className="input"
                placeholder={t('certificatecard.namePlaceholder')}
                value={name}
                maxLength={80}
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="warn-box">
              {getIcon('AlertTriangle', 18)}
              <p>
                <strong>{t('certificatecard.warnTitle')}</strong>{' '}
                {t('certificatecard.warnA')}{' '}
                <strong>{t('certificatecard.warnOnce')}</strong>
                {t('certificatecard.warnB')}
              </p>
            </div>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span>{t('certificatecard.checkbox')}</span>
            </label>

            <div className="modal-actions">
              <button className="btn" onClick={() => setOpen(false)}>
                {t('certificatecard.cancel')}
              </button>
              <button
                className="btn btn-primary"
                disabled={!name.trim() || !accepted}
                onClick={handleDownload}
              >
                {getIcon('Download', 16)} {t('certificatecard.downloadPdf')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
