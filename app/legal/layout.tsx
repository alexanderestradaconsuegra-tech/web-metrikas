import type { ReactNode } from "react";
import "./legal.css";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="legal-shell">
      <header className="legal-header">
        <a className="legal-brand" href="/" aria-label="Volver a Métrikas">
          <img src="/assets/metrikas-logo.webp" alt="Métrikas" width="420" height="67" decoding="async" />
        </a>
        <nav aria-label="Navegación legal">
          <a href="/legal">Centro legal</a>
          <a href="/legal/privacy">Privacidad</a>
          <a className="legal-back" href="/">Volver al sitio</a>
        </nav>
      </header>
      {children}
      <footer className="legal-footer">
        <div>
          <span>© 2026 Métrikas · Un producto de Autix</span>
          <nav><a href="/legal/terms">Términos</a><a href="/legal/privacy">Privacidad</a><a href="/legal/cookies">Cookies</a><a href="mailto:info@metrikas.pro">info@metrikas.pro</a></nav>
        </div>
      </footer>
    </div>
  );
}
