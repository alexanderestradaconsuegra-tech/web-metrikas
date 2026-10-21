import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centro legal y protección de datos",
  description: "Términos, privacidad, cookies y protección de datos de niños, niñas y adolescentes en Métrikas.",
  alternates: { canonical: "/legal" },
};

const documents = [
  ["01", "Términos de uso", "Reglas de contratación, suscripción, cuentas, uso aceptable y responsabilidades de la academia.", "/legal/terms"],
  ["02", "Política de privacidad", "Qué datos se tratan, para qué se usan, cuánto tiempo se conservan y cómo ejercer derechos.", "/legal/privacy"],
  ["03", "Protección de menores", "Reglas reforzadas para jugadores menores de edad, familias, fotografías y perfiles deportivos.", "/legal/minors"],
  ["04", "Tratamiento de datos", "Anexo contractual entre la academia responsable y Métrikas como encargado del tratamiento.", "/legal/data-processing"],
  ["05", "Política de cookies", "Tecnologías utilizadas en la landing y en la aplicación, y cómo administrarlas.", "/legal/cookies"],
];

export default function LegalCenter() {
  return (
    <main className="legal-center">
      <div className="legal-container">
        <span className="legal-eyebrow">SEGURIDAD, TRANSPARENCIA Y CONTROL</span>
        <h1>Protegemos el dato detrás de cada jugador.</h1>
        <p>Documentación creada para una plataforma deportiva que trabaja con academias, entrenadores, familias y menores de edad en Chile.</p>
        <div className="legal-card-grid">
          {documents.map(([number, title, description, href]) => (
            <a className="legal-card" href={href} key={href}><span>{number}</span><h2>{title}</h2><p>{description}</p><b>Leer documento ↗</b></a>
          ))}
        </div>
      </div>
    </main>
  );
}
