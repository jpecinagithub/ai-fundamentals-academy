import { jsPDF } from 'jspdf';

/**
 * Genera un código de verificación único para el certificado.
 * Formato: AIFA-XXXXXX (alfanumérico sin caracteres ambiguos).
 */
export function generateCertificateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  const rnd = new Uint32Array(6);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(rnd);
  } else {
    for (let i = 0; i < 6; i++) rnd[i] = Math.floor(Math.random() * 0xffffffff);
  }
  for (let i = 0; i < 6; i++) code += chars[rnd[i] % chars.length];
  return `AIFA-${code}`;
}

/**
 * Construye el documento PDF del certificado (A4 apaisado).
 * `lang`: 'en' (por defecto) | 'es' — todo el texto del PDF sigue el idioma.
 * Devuelve la instancia jsPDF para que el llamador decida cómo
 * entregarla (descarga en navegador, test en Node, etc.).
 */
const CERT_STRINGS = {
  es: {
    title: 'Certificado de finalización',
    awardedTo: 'SE OTORGA A',
    body:
      'Por haber completado con éxito el programa AI Fundamentals Academy: ' +
      '28 módulos, 252 preguntas, 11 simuladores interactivos, examen final ' +
      'de 50 preguntas y proyecto final aplicado, demostrando un dominio ' +
      'sólido de los fundamentos de la inteligencia artificial moderna.',
    creator: 'Creador de AI Fundamentals Academy',
    codeLabel: 'Código de verificación',
    issuedLabel: 'Expedido el',
  },
  en: {
    title: 'Certificate of Completion',
    awardedTo: 'PRESENTED TO',
    body:
      'For having successfully completed the AI Fundamentals Academy program: ' +
      '28 modules, 252 questions, 11 interactive simulators, a 50-question ' +
      'final exam and an applied final project, demonstrating solid mastery ' +
      'of the fundamentals of modern artificial intelligence.',
    creator: 'Creator of AI Fundamentals Academy',
    codeLabel: 'Verification code',
    issuedLabel: 'Issued on',
  },
};

export function buildCertificatePdf({ name, code, dateStr, lang }) {
  const S = CERT_STRINGS[lang === 'es' ? 'es' : 'en'];
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

  const W = 297;
  const H = 210;
  const CX = W / 2;
  const NAVY = [26, 43, 74];
  const GOLD = [176, 141, 79];
  const INK = [48, 48, 48];
  const MUTED = [120, 120, 120];

  // Fondo marfil
  doc.setFillColor(253, 251, 245);
  doc.rect(0, 0, W, H, 'F');

  // Doble marco: exterior azul marino, interior dorado
  doc.setDrawColor(...NAVY);
  doc.setLineWidth(2.4);
  doc.rect(8, 8, W - 16, H - 16);
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.8);
  doc.rect(12.5, 12.5, W - 25, H - 25);

  // Marca superior
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...GOLD);
  doc.text('AI FUNDAMENTALS ACADEMY', CX, 32, { align: 'center' });

  // Filete decorativo bajo la marca
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.6);
  doc.line(CX - 45, 38, CX + 45, 38);
  doc.setFillColor(...GOLD);
  doc.circle(CX, 38, 1.4, 'F');

  // Título
  doc.setFont('times', 'bold');
  doc.setFontSize(32);
  doc.setTextColor(...NAVY);
  doc.text(S.title, CX, 60, { align: 'center' });

  // "Se otorga a"
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(...MUTED);
  doc.text(S.awardedTo, CX, 76, { align: 'center' });

  // Nombre (auto-ajuste si es largo)
  const cleanName = String(name || '').trim();
  doc.setFont('times', 'bold');
  doc.setTextColor(...NAVY);
  let nameSize = 38;
  doc.setFontSize(nameSize);
  while (doc.getTextWidth(cleanName) > 232 && nameSize > 16) {
    nameSize -= 1;
    doc.setFontSize(nameSize);
  }
  doc.text(cleanName, CX, 96, { align: 'center' });

  // Filete bajo el nombre
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.7);
  doc.line(CX - 60, 104, CX + 60, 104);

  // Cuerpo
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11.5);
  doc.setTextColor(...INK);
  const lines = doc.splitTextToSize(S.body, 215);
  doc.text(lines, CX, 118, { align: 'center', lineHeightFactor: 1.5 });

  // Sello dorado
  const sealX = CX + 82;
  const sealY = 152;
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(1.4);
  doc.circle(sealX, sealY, 17, 'D');
  doc.setLineWidth(0.5);
  doc.circle(sealX, sealY, 14.5, 'D');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...GOLD);
  doc.text('AIFA', sealX, sealY - 1, { align: 'center' });
  doc.setFontSize(6.5);
  doc.text('AI ACADEMY', sealX, sealY + 4.5, { align: 'center' });

  // Firma
  const sigY = 168;
  doc.setDrawColor(...INK);
  doc.setLineWidth(0.6);
  doc.line(CX - 38, sigY, CX + 38, sigY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...INK);
  doc.text('Jon Peciña', CX, sigY + 8, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text(S.creator, CX, sigY + 14, { align: 'center' });

  // Pie: código de verificación y fecha de expedición
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  doc.text(`${S.codeLabel}: ${code}`, 20, H - 20);
  doc.text(`${S.issuedLabel} ${dateStr}`, W - 20, H - 20, { align: 'right' });

  return doc;
}

/** Descarga el PDF en el navegador con el nombre indicado. */
export function downloadCertificatePdf(doc, filename) {
  const blob = doc.output('blob');
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
