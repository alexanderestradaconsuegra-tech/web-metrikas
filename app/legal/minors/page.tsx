import type { Metadata } from "next";
import { LegalLinks, LegalPage, type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Protección de datos de menores",
  description: "Compromiso de Métrikas para proteger datos, fotografías y perfiles deportivos de niños, niñas y adolescentes.",
  alternates: { canonical: "/legal/minors" },
};

const sections: LegalSection[] = [
  {
    title: "Principio rector y alcance",
    content: <>
      <p>Toda decisión sobre datos de un menor debe atender su <strong>interés superior</strong>, dignidad, seguridad y autonomía progresiva. Esta política se aplica a jugadores, hermanos, hijos de entrenadores y cualquier persona menor de 18 años cuyos datos sean tratados en Métrikas.</p>
      <p>La plataforma no está dirigida a que menores contraten por sí solos. El servicio es administrado por academias, entrenadores y adultos autorizados.</p>
    </>,
  },
  {
    title: "Autorización verificable",
    content: <>
      <p>Como estándar reforzado de Métrikas, la academia debe contar con autorización verificable de padre, madre, representante legal o persona que ejerza el cuidado para crear o mantener el perfil de cualquier menor de 18 años.</p>
      <p>Desde el 1 de diciembre de 2026, la Ley N° 21.719 dispone expresamente consentimiento del representante para el tratamiento de datos de menores de 14 años. Los adolescentes pueden autorizar conforme a las reglas generales, pero sus datos sensibles antes de los 16 años requieren consentimiento del representante, salvo autorización legal.</p>
      <p>La academia debe poder demostrar quién autorizó, cuándo, para qué finalidades y cómo puede retirarse la autorización.</p>
    </>,
  },
  {
    title: "Datos mínimos y finalidades permitidas",
    content: <>
      <p>Solo deben ingresarse datos necesarios para administrar la actividad deportiva: identificación básica, categoría, contacto del representante, asistencia, convocatorias, métricas técnicas o físicas pertinentes y comunicaciones operativas.</p>
      <p>Queda prohibido reutilizar datos de menores para publicidad conductual, venta de bases, prospección, exposición pública no autorizada o finalidades incompatibles con la formación deportiva informada a la familia.</p>
    </>,
  },
  {
    title: "Fotografías, videos y fichas compartibles",
    content: <>
      <p>La captura y el uso interno de una imagen requieren información y autorización adecuadas. La publicación en redes sociales, páginas web, campañas, transmisiones o fichas descargables exige una autorización <strong>específica y separada</strong> para difusión.</p>
      <p>La academia debe evitar incluir domicilio, colegio, rutinas, ubicación en tiempo real, documentos de identidad u otros datos que permitan localizar o poner en riesgo al menor. Antes de compartir una ficha, deberá verificar los datos visibles y el destinatario.</p>
    </>,
  },
  {
    title: "Evaluaciones deportivas y OVR",
    content: <>
      <p>El OVR y los niveles PRO, TOP y ELITE son herramientas motivacionales y de seguimiento deportivo. No deben utilizarse para estigmatizar, comparar públicamente de forma humillante ni excluir automáticamente a un jugador.</p>
      <p>Las decisiones importantes deben incluir revisión humana, contexto, explicación apropiada para la edad y un canal para corregir datos o expresar desacuerdo. Las familias pueden pedir información sobre los datos utilizados para calcular la ficha.</p>
    </>,
  },
  {
    title: "Datos sensibles y salud",
    content: <>
      <p>La plataforma no debe usarse como ficha clínica. La academia debe abstenerse de ingresar diagnósticos, antecedentes psicológicos, historia médica, datos genéticos, muestras biológicas o biometría de identificación.</p>
      <p>Si una necesidad excepcional pudiera involucrar información sensible, la academia deberá verificar previamente que el tratamiento esté legalmente permitido, aplicar minimización y controles reforzados, y obtener las autorizaciones expresas que correspondan. Un consentimiento genérico no vuelve lícito un tratamiento prohibido por la ley.</p>
    </>,
  },
  {
    title: "Accesos, seguridad e incidentes",
    content: <>
      <p>Los accesos deben asignarse por función y categoría. No se deben compartir cuentas entre entrenadores ni permitir que una persona consulte planteles ajenos a su responsabilidad. La academia debe retirar accesos cuando termine una relación laboral o deportiva.</p>
      <p>Ante pérdida de un dispositivo, acceso indebido, envío a un destinatario incorrecto o filtración, debe informarse inmediatamente a <a href="mailto:info@metrikas.pro?subject=Incidente%20de%20seguridad">info@metrikas.pro</a>. Métrikas colaborará en la contención, evaluación y notificaciones aplicables, priorizando la seguridad del menor.</p>
    </>,
  },
  {
    title: "Derechos de familias y jugadores",
    content: <>
      <p>El menor, según su edad y madurez, y su representante pueden solicitar acceso, explicación, rectificación, eliminación, bloqueo, oposición o retiro de una autorización. La academia debe disponer de un canal claro y Métrikas brindará asistencia técnica para atender la solicitud.</p>
      <p>Retirar una autorización de uso de imagen o marketing no debe impedir que el jugador participe en la actividad deportiva, salvo que un dato sea estrictamente necesario para prestar el servicio contratado.</p>
    </>,
  },
  {
    title: "Lista mínima para cada academia",
    content: <>
      <ul>
        <li>Designar un adulto responsable de protección de datos.</li>
        <li>Registrar y conservar las autorizaciones de representantes.</li>
        <li>Separar la autorización de gestión interna de la autorización de imagen pública.</li>
        <li>Revisar roles y accesos al menos cada temporada.</li>
        <li>Eliminar perfiles cuando ya no exista finalidad o base lícita.</li>
        <li>Documentar incidentes y comunicarlos de inmediato.</li>
        <li>Evaluar impacto cuando el tratamiento pueda implicar alto riesgo o uso intensivo de perfiles.</li>
      </ul>
      <p>Consulta el texto oficial de la <a href="https://www.bcn.cl/leychile/navegar?idNorma=1209272">Ley N° 21.719</a>, especialmente sus reglas sobre niños, niñas y adolescentes.</p>
      <LegalLinks />
    </>,
  },
];

export default function MinorsPage() {
  return <LegalPage eyebrow="PROTECCIÓN DE MENORES" title="El jugador es una persona antes que un dato." summary="Reglas reforzadas para que academias, entrenadores y familias utilicen Métrikas sin exponer innecesariamente a niños, niñas y adolescentes." sections={sections} />;
}
