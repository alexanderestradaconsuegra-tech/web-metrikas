import type { Metadata } from "next";
import { LegalLinks, LegalPage, type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Métrikas para academias, entrenadores, jugadores y familias, adaptada a la legislación chilena.",
  alternates: { canonical: "/legal/privacy" },
};

const sections: LegalSection[] = [
  {
    title: "Quiénes somos y cuándo somos responsables",
    content: <>
      <p><strong>Métrikas</strong> es una plataforma de gestión deportiva ofrecida como producto de Autix, con operación en Santiago de Chile. Puedes contactarnos en <a href="mailto:info@metrikas.pro">info@metrikas.pro</a>. La identificación fiscal y contractual completa del proveedor consta en la orden de servicio, contrato, comprobante o factura emitida al cliente.</p>
      <p>Cuando una persona solicita una demo, contrata el servicio o se comunica directamente con nosotros, Métrikas determina la finalidad de esos datos y actúa como <strong>responsable</strong>. Cuando una academia carga información de jugadores, apoderados o integrantes del cuerpo técnico, la academia determina el propósito y actúa como responsable; Métrikas trata esos datos como <strong>mandatario o encargado</strong>, siguiendo sus instrucciones.</p>
    </>,
  },
  {
    title: "Datos que podemos tratar",
    content: <>
      <ul>
        <li><strong>Contacto y contratación:</strong> nombre, correo, teléfono, academia, país, plan, facturación y comunicaciones.</li>
        <li><strong>Cuenta y seguridad:</strong> identificadores de usuario, rol, accesos, eventos de autenticación, dispositivo e información técnica.</li>
        <li><strong>Gestión deportiva:</strong> nombre del jugador, fecha de nacimiento, categoría, posición, fotografía autorizada, asistencia, convocatorias, evaluaciones técnicas y físicas, ejercicios y evolución.</li>
        <li><strong>Administración:</strong> cuotas, pagos, comprobantes y estado de las obligaciones con la academia.</li>
        <li><strong>Soporte:</strong> consultas, incidencias y registros necesarios para resolverlas.</li>
      </ul>
      <div className="legal-callout"><strong>No es una ficha clínica.</strong> La plataforma no debe utilizarse para almacenar diagnósticos médicos, historias clínicas, información genética, muestras biológicas ni datos biométricos destinados a identificar de manera única a una persona. Cualquier tratamiento excepcional de datos sensibles exige habilitación legal, necesidad demostrable y las autorizaciones correspondientes.</div>
    </>,
  },
  {
    title: "Finalidades y bases de licitud",
    content: <>
      <p>Tratamos datos para prestar y administrar el servicio; crear y proteger cuentas; gestionar demos y solicitudes precontractuales; procesar pagos; enviar avisos operativos; atender soporte; prevenir fraude y accesos no autorizados; cumplir obligaciones legales; y mejorar el funcionamiento de Métrikas mediante información agregada o anonimizada.</p>
      <p>Según corresponda, el tratamiento se basa en el consentimiento, la ejecución de un contrato o medidas precontractuales solicitadas por el titular, el cumplimiento de obligaciones legales y el interés legítimo sujeto a evaluación. <strong>No realizamos marketing dirigido a menores de edad</strong> ni comercializamos sus datos.</p>
    </>,
  },
  {
    title: "Niños, niñas y adolescentes",
    content: <>
      <p>Métrikas es contratado y administrado por academias y adultos autorizados. Como estándar interno reforzado, la creación de perfiles o cuentas de cualquier persona menor de 18 años requiere que la academia disponga de autorización verificable de su padre, madre, representante legal o persona que ejerza su cuidado.</p>
      <p>Desde el 1 de diciembre de 2026, la Ley N° 21.719 exige consentimiento del representante para datos de menores de 14 años y para datos sensibles de adolescentes menores de 16 años, además del respeto al interés superior y la autonomía progresiva. Métrikas permite a la academia atender solicitudes de acceso, corrección, eliminación y retiro de autorizaciones.</p>
      <p>Las fotografías, videos, fichas descargables y publicaciones externas requieren una autorización específica; una autorización para administrar al jugador dentro de Métrikas <strong>no equivale</strong> a permiso para difundir su imagen públicamente.</p>
    </>,
  },
  {
    title: "OVR, perfiles y decisiones humanas",
    content: <>
      <p>Los atributos, el rating OVR y los niveles PRO, TOP o ELITE son indicadores deportivos calculados con información ingresada o validada por la academia. Sirven para visualizar evolución y apoyar al entrenador.</p>
      <p>No constituyen diagnóstico médico, evaluación psicológica, certificación profesional ni decisión automatizada con efectos jurídicos. La selección, convocatoria, posición o permanencia de un jugador debe ser decidida y revisada por personas responsables de la academia, considerando el contexto individual.</p>
    </>,
  },
  {
    title: "Destinatarios, proveedores y transferencias",
    content: <>
      <p>Podemos utilizar proveedores estrictamente necesarios para infraestructura en la nube, base de datos, autenticación, correo transaccional, soporte y pagos. Entre las categorías actuales se encuentran servicios de infraestructura, Supabase, proveedores de correo y Mercado Pago cuando el cliente usa esa forma de pago.</p>
      <p>Algunos proveedores pueden procesar información fuera de Chile. En esos casos se aplican las salvaguardas contractuales, organizativas y técnicas exigibles, limitando el acceso al propósito contratado. No vendemos ni cedemos bases de jugadores para publicidad.</p>
    </>,
  },
  {
    title: "Conservación y eliminación",
    content: <>
      <p>Conservamos los datos mientras la cuenta esté activa y durante el período necesario para prestar el servicio. Tras la terminación, la academia puede solicitar una exportación y la información operativa podrá mantenerse hasta 90 días para recuperación, salvo acuerdo distinto, obligación legal, controversia o instrucción válida del responsable.</p>
      <p>Al finalizar ese plazo, los datos se eliminan o anonimizan de los sistemas activos; las copias de seguridad se depuran conforme a sus ciclos técnicos. Los antecedentes tributarios, de facturación y seguridad se conservan durante los plazos exigidos por la ley.</p>
    </>,
  },
  {
    title: "Seguridad e incidentes",
    content: <>
      <p>Aplicamos controles de acceso por rol, cuentas individuales, separación lógica entre academias, cifrado en tránsito, registros de seguridad, respaldos y medidas de continuidad acordes con el riesgo. Ningún sistema es absolutamente invulnerable, por lo que mantenemos procedimientos de detección, contención y respuesta.</p>
      <p>Si un incidente puede implicar un riesgo para los titulares, Métrikas informará sin dilaciones indebidas a la academia responsable y colaborará con las notificaciones exigidas. Cuando corresponda legalmente, se comunicará también a la autoridad y a los titulares o sus representantes.</p>
    </>,
  },
  {
    title: "Tus derechos y cómo ejercerlos",
    content: <>
      <p>El titular o su representante puede solicitar acceso, información sobre el origen y finalidad, rectificación, eliminación o bloqueo según la normativa vigente. Desde la entrada en vigor de la Ley N° 21.719 también podrá ejercer oposición, portabilidad y revisión de decisiones automatizadas en los casos aplicables.</p>
      <p>Escribe a <a href="mailto:info@metrikas.pro?subject=Solicitud%20de%20datos%20personales">info@metrikas.pro</a> con el asunto “Solicitud de datos personales”. Si los datos fueron ingresados por una academia, podremos remitir la solicitud a esa institución o actuar según sus instrucciones. Podemos pedir antecedentes razonables para verificar identidad y representación, especialmente cuando se trate de menores.</p>
    </>,
  },
  {
    title: "Normativa, cambios y contacto",
    content: <>
      <p>Esta política se interpreta conforme a la Ley N° 19.628 vigente, la Ley N° 21.719 desde su entrada en vigor, la Ley N° 19.496 cuando exista una relación de consumo y demás normas chilenas aplicables.</p>
      <p>Publicaremos la fecha y versión de cada actualización. Si el cambio altera sustancialmente la finalidad o base del tratamiento, se informará y se solicitará una nueva autorización cuando corresponda.</p>
      <p>Fuentes oficiales: <a href="https://www.bcn.cl/leychile/navegar?idNorma=141599">Ley N° 19.628</a> y <a href="https://www.bcn.cl/leychile/navegar?idNorma=1209272">Ley N° 21.719</a>.</p>
      <LegalLinks />
    </>,
  },
];

export default function PrivacyPage() {
  return <LegalPage eyebrow="POLÍTICA DE PRIVACIDAD" title="Tus datos merecen el mismo cuidado que tus jugadores." summary="Explicamos de forma clara qué información trata Métrikas, quién toma las decisiones sobre ella y cómo protegemos especialmente a los menores de edad." sections={sections} />;
}
