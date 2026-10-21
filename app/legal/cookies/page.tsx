import type { Metadata } from "next";
import { LegalLinks, LegalPage, type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre cookies y tecnologías necesarias en la landing y la aplicación de Métrikas.",
  alternates: { canonical: "/legal/cookies" },
};

const sections: LegalSection[] = [
  {
    title: "Qué son las cookies",
    content: <p>Las cookies y tecnologías equivalentes son pequeños identificadores que un sitio puede guardar o leer en el navegador para mantener una sesión, recordar una preferencia, proteger formularios o medir el funcionamiento del servicio.</p>,
  },
  {
    title: "Landing metrikas.pro",
    content: <>
      <p>Actualmente la landing pública de Métrikas no utiliza cookies publicitarias ni de seguimiento conductual. Las interacciones visuales y el formulario de demo funcionan sin crear perfiles de navegación.</p>
      <p>Si en el futuro incorporamos analítica no esencial, publicidad o tecnologías similares, esta política se actualizará y se solicitará consentimiento antes de activarlas cuando corresponda.</p>
    </>,
  },
  {
    title: "Aplicación app.metrikas.pro",
    content: <>
      <p>La aplicación puede utilizar cookies o almacenamiento estrictamente necesarios para autenticación, seguridad, continuidad de sesión, preferencias y funcionamiento de la PWA. Sin estas tecnologías algunas funciones, como iniciar sesión o mantener la cuenta protegida, no pueden operar correctamente.</p>
      <p>Los proveedores de pago o autenticación pueden utilizar sus propias tecnologías cuando el usuario interactúa directamente con sus servicios, sujetas a sus políticas.</p>
    </>,
  },
  {
    title: "Cómo administrarlas",
    content: <>
      <p>Puedes borrar o bloquear cookies desde la configuración del navegador. Si eliminas tecnologías esenciales de la aplicación, es posible que debas volver a iniciar sesión o que ciertas funciones no estén disponibles.</p>
      <p>La instalación de Métrikas como aplicación web progresiva puede guardar archivos técnicos en el dispositivo para mejorar carga y disponibilidad; puedes eliminarlos desinstalando la aplicación o borrando los datos del sitio.</p>
    </>,
  },
  {
    title: "Cambios y contacto",
    content: <>
      <p>Indicaremos la fecha y versión cuando cambien las tecnologías utilizadas. Para consultas, escribe a <a href="mailto:info@metrikas.pro?subject=Consulta%20sobre%20cookies">info@metrikas.pro</a>.</p>
      <LegalLinks />
    </>,
  },
];

export default function CookiesPage() {
  return <LegalPage eyebrow="POLÍTICA DE COOKIES" title="Solo la tecnología necesaria. Sin seguimiento oculto." summary="Te contamos qué guarda Métrikas en el navegador, por qué lo necesita y cómo puedes administrarlo." sections={sections} />;
}
