import type { Metadata } from "next";
import { LegalLinks, LegalPage, type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Anexo de tratamiento de datos",
  description: "Acuerdo de tratamiento de datos entre las academias responsables y Métrikas como encargado, conforme a la legislación chilena.",
  alternates: { canonical: "/legal/data-processing" },
};

const sections: LegalSection[] = [
  {
    title: "Partes y roles",
    content: <>
      <p>Este anexo forma parte de los Términos o contrato de servicio. La <strong>Academia</strong> es responsable del tratamiento respecto de los datos que decide incorporar a la plataforma. <strong>Métrikas</strong>, producto de Autix, actúa como tercero mandatario o encargado y trata los datos únicamente para prestar el servicio y conforme a instrucciones lícitas.</p>
      <p>Si Métrikas determinara finalidades propias respecto de un dato —por ejemplo, facturación directa o seguridad de sus cuentas— actuará como responsable solo para esa finalidad específica.</p>
    </>,
  },
  {
    title: "Objeto, duración y naturaleza del encargo",
    content: <>
      <p>El encargo consiste en alojar, organizar, consultar, respaldar, transmitir y eliminar datos necesarios para los módulos contratados: jugadores, categorías, asistencia, convocatorias, evaluaciones deportivas, comunicaciones, roles y administración.</p>
      <p>El tratamiento dura mientras el contrato esté vigente y durante el período limitado de exportación o recuperación posterior. Cumplida la prestación, los datos se devolverán, eliminarán o anonimizarán, salvo obligación legal de conservación.</p>
    </>,
  },
  {
    title: "Titulares y categorías de datos",
    content: <>
      <p>Los titulares pueden incluir administradores, entrenadores, colaboradores, jugadores, apoderados y contactos de la academia. Las categorías incluyen identificación básica, contacto, cuenta y rol, fotografía autorizada, datos deportivos, asistencia, convocatorias, comunicaciones y registros administrativos.</p>
      <p>El encargo ordinario no contempla diagnósticos médicos, historias clínicas, datos genéticos, muestras biológicas ni biometría de identificación. La Academia no deberá cargar esas categorías sin autorización legal específica y acuerdo escrito previo.</p>
    </>,
  },
  {
    title: "Instrucciones y obligaciones de Métrikas",
    content: <>
      <p>Métrikas se obliga a:</p>
      <ul>
        <li>Tratar datos solo para prestar el servicio y conforme a instrucciones documentadas.</li>
        <li>Mantener confidencialidad y exigirla a quienes intervengan en el tratamiento.</li>
        <li>Aplicar medidas técnicas y organizativas apropiadas al riesgo.</li>
        <li>Asistir razonablemente en solicitudes de titulares, evaluaciones de impacto y cumplimiento.</li>
        <li>Informar sin dilaciones indebidas incidentes de seguridad relevantes a la Academia.</li>
        <li>Suprimir o devolver datos al terminar el servicio, salvo deber legal de conservarlos.</li>
        <li>Poner a disposición información razonable para acreditar el cumplimiento del encargo.</li>
      </ul>
    </>,
  },
  {
    title: "Obligaciones de la Academia",
    content: <>
      <p>La Academia se obliga a determinar y documentar las finalidades; contar con base de licitud; informar a titulares y representantes; obtener y conservar autorizaciones; asegurar exactitud; limitar accesos; atender derechos; y no instruir tratamientos contrarios a la ley.</p>
      <p>Cuando existan menores, aplicará la política reforzada de Métrikas. La Academia es responsable de verificar representación, separar autorizaciones de gestión e imagen, y realizar una evaluación de impacto cuando el tratamiento pueda producir alto riesgo.</p>
    </>,
  },
  {
    title: "Subencargados y transferencias",
    content: <>
      <p>La Academia autoriza de manera general el uso de proveedores necesarios de infraestructura, base de datos, autenticación, correo, soporte y pagos, siempre sujetos a deberes de confidencialidad, seguridad y tratamiento limitado. Métrikas seguirá siendo responsable de su selección y gestión conforme al contrato.</p>
      <p>Cuando el tratamiento implique transferencias internacionales, se utilizarán mecanismos y garantías admitidos por la normativa chilena. La Academia podrá solicitar información actualizada sobre categorías de subencargados y ubicaciones relevantes.</p>
    </>,
  },
  {
    title: "Medidas de seguridad",
    content: <>
      <p>Las medidas incluyen, según el riesgo: control de acceso por rol; autenticación individual; separación lógica entre academias; cifrado en tránsito; gestión de secretos; registros de eventos; copias de seguridad; actualización de dependencias; continuidad y recuperación; y revisión de incidentes.</p>
      <p>La Academia debe proteger sus dispositivos, credenciales y redes, y comunicar inmediatamente cualquier acceso no autorizado. La seguridad es una responsabilidad compartida.</p>
    </>,
  },
  {
    title: "Incidentes y cooperación",
    content: <>
      <p>Métrikas comunicará a la Academia los antecedentes disponibles sobre la naturaleza del incidente, datos y titulares posiblemente afectados, consecuencias probables y medidas aplicadas. La Academia determinará las notificaciones que le correspondan como responsable, con asistencia razonable de Métrikas.</p>
      <p>Los incidentes se documentarán. Cuando afecten datos sensibles o datos de menores y exista obligación legal, las comunicaciones se realizarán en lenguaje claro a la autoridad, a titulares o a sus representantes.</p>
    </>,
  },
  {
    title: "Auditoría, responsabilidad y prevalencia",
    content: <>
      <p>Una vez al año, o tras un incidente relevante, la Academia podrá solicitar información razonable para evaluar el cumplimiento, procurando no comprometer secretos, seguridad ni datos de otros clientes. Auditorías extraordinarias presenciales se acordarán respecto de alcance, confidencialidad y costos.</p>
      <p>Cada parte responde por sus incumplimientos. En caso de contradicción, este anexo prevalece respecto del tratamiento de datos; luego aplican los Términos y la orden o contrato particular. Se rige por las leyes de Chile y se actualizará para reflejar instrucciones de la futura Agencia de Protección de Datos Personales.</p>
      <LegalLinks />
    </>,
  },
];

export default function DataProcessingPage() {
  return <LegalPage eyebrow="ANEXO DE TRATAMIENTO DE DATOS" title="Responsabilidades separadas. Protección compartida." summary="Define el encargo de tratamiento entre la academia y Métrikas, incluyendo instrucciones, seguridad, subencargados, incidentes y eliminación de datos." sections={sections} />;
}
