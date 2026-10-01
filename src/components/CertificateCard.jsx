import React, { useState, useEffect } from 'react';
import { modules } from '../data/modules';
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

function formatLongDate(iso) {
  try {
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return '';
  }
}

/**
 * Tarjeta de certificado: solo se muestra cuando los 28 módulos están
 * completados. El certificado se puede descargar UNA sola vez; el registro
 * queda guardado en localStorage.
 */
export function CertificateCard() {
  const { state } = useProgress();
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
    // Doble comprobación: si ya existe registro, no generar de nuevo.
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
      dateStr: formatLongDate(nowIso),
    });
    downloadCertificatePdf(doc, 'certificado-ai-fundamentals-academy.pdf');
    const rec = { name: cleanName, code, downloadedAt: nowIso };
    try {
      window.localStorage.setItem(CERT_KEY, JSON.stringify(rec));
    } catch {
      /* almacenamiento no disponible: el PDF ya se descargó */
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
                Certificado emitido
              </h3>
              <p className="card-sub" style={{ margin: 0 }}>
                Emitido el <strong>{formatLongDate(record.downloadedAt)}</strong>{' '}
                a nombre de <strong>{record.name}</strong>.
              </p>
              <p className="card-sub" style={{ margin: '0.3rem 0 0' }}>
                Código de verificación:{' '}
                <span className="mono">{record.code}</span>
              </p>
              <p className="card-sub" style={{ margin: '0.5rem 0 0' }}>
                {getIcon('Info', 14)} Ya has utilizado tu descarga del
                certificado. Solo se permite una descarga por usuario.
              </p>
            </>
          ) : (
            <>
              <h3 className="card-title" style={{ marginBottom: '0.3rem' }}>
                ¡Enhorabuena! Has completado los {modules.length} módulos
              </h3>
              <p className="card-sub" style={{ margin: '0 0 0.8rem' }}>
                Descarga tu certificado oficial de finalización de AI
                Fundamentals Academy en PDF.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setOpen(true)}
              >
                {getIcon('Download', 16)} Descargar certificado
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
              aria-label="Cerrar"
            >
              {getIcon('X', 18)}
            </button>
            <h3 id="cert-modal-title" className="card-title">
              {getIcon('Award', 20)} Descargar certificado
            </h3>
            <p className="card-sub">
              Introduce el nombre que quieres que aparezca en el certificado.
            </p>

            <div className="form-group">
              <label htmlFor="cert-name">Nombre para el certificado</label>
              <input
                id="cert-name"
                type="text"
                className="input"
                placeholder="Ej.: María García Fernández"
                value={name}
                maxLength={80}
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="warn-box">
              {getIcon('AlertTriangle', 18)}
              <p>
                <strong>Importante:</strong> el certificado solo se puede
                descargar <strong>una vez</strong>. Revisa que el nombre esté
                escrito exactamente como quieres que aparezca, porque no
                podrás volver a descargarlo.
              </p>
            </div>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span>
                He revisado el nombre y entiendo que solo podré descargar el
                certificado una vez.
              </span>
            </label>

            <div className="modal-actions">
              <button className="btn" onClick={() => setOpen(false)}>
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                disabled={!name.trim() || !accepted}
                onClick={handleDownload}
              >
                {getIcon('Download', 16)} Descargar PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
