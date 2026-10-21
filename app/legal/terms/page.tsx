import type { Metadata } from "next";
import { LegalLinks, LegalPage, type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Términos y condiciones de uso",
  description: "Términos de contratación y uso de Métrikas para academias de fútbol, entrenadores, jugadores y apoderados en Chile.",
  alternates: { canonical: "/legal/terms" },
};

const sections: LegalSection[] = [
  {
    title: "Proveedor, alcance y aceptación",
    content: <>
      <p>Estos términos regulan el acceso a <strong>Métrikas</strong>, plataforma de gestión deportiva ofrecida como producto de Autix con operación en Santiago de Chile. La identificación fiscal y contractual completa del proveedor consta en la orden, contrato, comprobante o factura emitida al cliente. Contacto: <a href="mailto:info@metrikas.pro">info@metrikas.pro</a>.</p>
      <p>La persona que contrata o administra una academia declara tener facultades para representarla. Al crear una cuenta, aceptar una oferta o usar el servicio, el cliente acepta estos términos, la Política de Privacidad y el Anexo de Tratamiento de Datos.</p>
    </>,
  },
  {
    title: "Servicio y licencia de uso",
    content: <>
      <p>Métrikas permite gestionar categorías, jugadores, convocatorias, asistencia, evaluaciones deportivas, comunicación, pagos y otras funciones descritas en la oferta vigente. Se concede al cliente una licencia limitada, no exclusiva, revocable e intransferible durante la vigencia de su plan.</p>
      <p>Las funciones pueden evolucionar para mejorar seguridad, rendimiento o cumplimiento. Los cambios que reduzcan materialmente una prestación contratada se informarán por un medio razonable.</p>
    </>,
  },
  {
    title: "Demo, planes, pagos y cancelación",
    content: <>
      <p>La demo gratuita tiene la duración y alcance indicados en la oferta, actualmente 14 días, y puede limitarse a una por academia. Los valores, periodicidad, impuestos y medios de pago se informan antes de contratar.</p>
      <p>El cliente puede cancelar la renovación cuando quiera y conserva el acceso hasta finalizar el período pagado. La falta de pago puede suspender temporalmente el acceso. Toda renovación, reembolso o retracto se aplicará respetando la oferta aceptada y los derechos irrenunciables que correspondan conforme a la Ley N° 19.496.</p>
    </>,
  },
  {
    title: "Cuentas, roles y seguridad",
    content: <>
      <p>Cada usuario debe utilizar una cuenta individual, mantener sus credenciales seguras y comunicar accesos sospechosos. El administrador de la academia asigna roles y es responsable de retirar oportunamente permisos a entrenadores, colaboradores o apoderados que ya no deban acceder.</p>
      <p>Está prohibido compartir contraseñas, evadir controles de acceso, probar vulnerabilidades sin autorización, introducir código malicioso o usar el servicio para fines ilícitos. Métrikas puede bloquear preventivamente una cuenta cuando exista riesgo para personas, datos o infraestructura.</p>
    </>,
  },
  {
    title: "Jugadores menores de edad",
    content: <>
      <p>La academia es responsable de acreditar una base lícita para registrar a cada jugador y, como estándar contractual de Métrikas, debe disponer de autorización verificable de padre, madre, representante legal o cuidador para toda persona menor de 18 años.</p>
      <p>La academia deberá entregar información comprensible a la familia, respetar el interés superior y la autonomía progresiva del menor, limitar los datos a lo estrictamente necesario y mantener mecanismos para rectificar o eliminar información. No podrá condicionar la formación deportiva a autorizaciones de marketing, exposición pública o usos que no sean necesarios para prestar el servicio.</p>
    </>,
  },
  {
    title: "Datos prohibidos y uso deportivo responsable",
    content: <>
      <p>Métrikas no es un sistema médico. Salvo habilitación legal y acuerdo previo por escrito, no se deben ingresar diagnósticos, historias clínicas, información genética, muestras biológicas, datos biométricos de identificación, antecedentes psicológicos ni otros datos sensibles ajenos a la finalidad deportiva autorizada.</p>
      <p>Las métricas, atributos y OVR son ayudas informativas. No reemplazan el criterio humano del entrenador ni pueden usarse por sí solos para decisiones que afecten significativamente al jugador. Queda prohibido utilizar la plataforma para discriminar, humillar, exponer públicamente o perfilar comercialmente a menores.</p>
    </>,
  },
  {
    title: "Contenido, fotografías y propiedad intelectual",
    content: <>
      <p>La academia conserva los derechos sobre los datos y contenidos que incorpora y declara contar con las autorizaciones necesarias. Las fotografías, videos o fichas de menores no podrán publicarse fuera de la plataforma sin una autorización específica para difusión.</p>
      <p>Métrikas, su marca, diseño, software, documentación y componentes son propiedad del proveedor o sus licenciantes. El cliente no puede copiar, revender, descompilar, sublicenciar ni crear un servicio competidor mediante extracción sistemática de la plataforma.</p>
    </>,
  },
  {
    title: "Disponibilidad, soporte y continuidad",
    content: <>
      <p>Trabajamos para mantener el servicio disponible y seguro, pero pueden existir mantenciones, actualizaciones, fallas de terceros o eventos fuera de control razonable. Cuando sea posible, las mantenciones programadas que tengan impacto relevante se comunicarán con anticipación.</p>
      <p>La academia debe conservar procedimientos alternativos para convocatorias urgentes y emergencias. Métrikas no es un canal de emergencia ni reemplaza comunicaciones críticas con familias, personal médico o autoridades.</p>
    </>,
  },
  {
    title: "Suspensión, término y devolución de datos",
    content: <>
      <p>Podremos suspender o terminar una cuenta por incumplimiento grave, uso ilícito, riesgo de seguridad o falta de pago, aplicando medidas proporcionales y dando oportunidad de corrección cuando sea razonable.</p>
      <p>Al terminar, la academia puede solicitar exportación de sus datos. Luego del período de recuperación informado en la Política de Privacidad, los datos se devolverán, eliminarán o anonimizarán, salvo conservación exigida por ley o necesaria para una reclamación.</p>
    </>,
  },
  {
    title: "Responsabilidad y ley aplicable",
    content: <>
      <p>Cada parte responde por sus propias obligaciones. La academia responde por la licitud, exactitud y finalidad de los datos que ingresa, sus autorizaciones, decisiones deportivas y administración de accesos. Métrikas responde por prestar el servicio y tratar datos conforme a sus compromisos e instrucciones lícitas.</p>
      <p>Ninguna cláusula excluye responsabilidad por dolo, culpa grave ni derechos irrenunciables del consumidor. Estos términos se rigen por las leyes de Chile. Las partes procurarán resolver cualquier diferencia de buena fe; se mantienen intactos los derechos de acudir al SERNAC, a la autoridad de protección de datos competente o a los tribunales que determine la ley.</p>
      <LegalLinks />
    </>,
  },
];

export default function TermsPage() {
  return <LegalPage eyebrow="TÉRMINOS Y CONDICIONES" title="Reglas claras para dirigir con confianza." summary="Define cómo se contrata y utiliza Métrikas, las responsabilidades de cada academia y los límites necesarios para proteger a jugadores, familias y datos." sections={sections} />;
}
