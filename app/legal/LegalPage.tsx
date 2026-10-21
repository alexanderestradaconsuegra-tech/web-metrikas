import type { ReactNode } from "react";

export type LegalSection = {
  title: string;
  content: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  summary,
  sections,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  sections: LegalSection[];
}) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-container">
          <span className="legal-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className="legal-version">
            <span>Versión 1.0</span>
            <span>Actualizada el 20 de agosto de 2026</span>
            <span>Chile</span>
          </div>
        </div>
      </section>
      <div className="legal-container legal-layout">
        <aside className="legal-index" aria-label="Índice del documento">
          <strong>Contenido</strong>
          {sections.map((section, index) => (
            <a key={section.title} href={`#seccion-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>{section.title}
            </a>
          ))}
        </aside>
        <article className="legal-document">
          <div className="legal-notice">
            <strong>Marco de cumplimiento</strong>
            <p>Este documento aplica la normativa chilena vigente y anticipa las obligaciones de la Ley N° 21.719, que entra en vigor el 1 de diciembre de 2026.</p>
          </div>
          {sections.map((section, index) => (
            <section id={`seccion-${index + 1}`} key={section.title}>
              <span className="legal-number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <div className="legal-content">{section.content}</div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}

export function LegalLinks() {
  return (
    <div className="legal-related">
      <strong>Documentos relacionados</strong>
      <div>
        <a href="/legal/terms">Términos de uso</a>
        <a href="/legal/privacy">Privacidad</a>
        <a href="/legal/minors">Protección de menores</a>
        <a href="/legal/data-processing">Tratamiento de datos</a>
        <a href="/legal/cookies">Cookies</a>
      </div>
    </div>
  );
}
