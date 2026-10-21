"use client";

import { useEffect, useRef, useState } from "react";

type Player = { id: number; label: string; x: number; y: number };

const initialPlayers: Player[] = [
  { id: 1, label: "ARQ", x: 50, y: 89 },
  { id: 2, label: "LI", x: 15, y: 69 },
  { id: 3, label: "DFC", x: 39, y: 73 },
  { id: 4, label: "DFC", x: 61, y: 73 },
  { id: 5, label: "LD", x: 85, y: 69 },
  { id: 6, label: "MC", x: 28, y: 49 },
  { id: 7, label: "MC", x: 50, y: 55 },
  { id: 8, label: "MC", x: 72, y: 49 },
  { id: 9, label: "EI", x: 20, y: 25 },
  { id: 10, label: "DC", x: 50, y: 16 },
  { id: 11, label: "ED", x: 80, y: 25 },
];

const features = [
  ["M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9 8v-1a3 3 0 0 0-2-2.8M15 5.2a3 3 0 0 1 0 5.6", "Jugadores y categorías", "Perfil, filtros y seguimiento de cada jugador."],
  ["M5 21V4m0 0h11l-2 4 2 4H5", "Partidos y convocatorias", "Nómina, formación y confirmaciones en tiempo real."],
  ["M4 19h16M6 15l4-4 3 3 5-6", "Evaluaciones y progreso", "Velocidad, fuerza y técnica convertidas en evolución visible."],
  ["M5 5h14v14H5zM5 9h14M9 3v4M15 3v4m-6 9 2 2 4-4", "Asistencia", "Calendario publicado y saber quién llega antes de pisar la cancha."],
  ["M3 6h18v12H3zM3 10h18M7 15h4", "Pagos automáticos", "Cuotas cada mes y deudas claras, sin hojas de cálculo."],
  ["M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6zM9.5 12l2 2 3.5-4", "Roles y accesos", "Cada profesor ve solo su categoría. Tú ves todo."],
  ["M3 12h4l2-6 4 12 2-6h6", "Seguimiento físico", "Métricas, ejercicios con video y observaciones de cada jugador."],
  ["M6 17h12l-1.5-2V10a4.5 4.5 0 0 0-9 0v5zM10 20h4", "Notificaciones push", "Convocatorias y avisos directo al celular."],
  ["M4 7h16v12H4zM4 10h16M16 14h4", "Finanzas", "Ingresos y gastos de tu academia en un solo lugar."],
];

const faqs = [
  ["¿Cuánto cuesta Metrikas?", "$14.250 CLP al mes por academia, sin importar cuántos jugadores tengas. Con el plan anual ahorras 30%: $119.700 CLP al año."],
  ["¿Hay contrato o permanencia mínima?", "No. No hay instalación, contratos largos ni letra chica. Puedes cancelar cuando quieras y mantienes el acceso hasta el final del período pagado."],
  ["¿Cuánto tiempo tarda en funcionar?", "Menos de 20 minutos. Creas tu academia, agregas jugadores y puedes dejar lista tu primera convocatoria el mismo día."],
  ["¿Funciona en cualquier país?", "Sí. Metrikas está disponible en español, inglés y portugués y funciona desde cualquier país y dispositivo con internet."],
  ["¿Qué tan seguros están los datos?", "Cada academia mantiene sus datos aislados. Las cuentas son individuales y cada rol accede únicamente a la información que necesita."],
  ["¿Puedo tener un acceso por categoría?", "Sí. Cada profesor entra con su cuenta y gestiona solo su categoría, sin acceso a pagos, configuración ni otras categorías."],
  ["¿Qué pasa si un mes no puedo pagar?", "La academia se suspende temporalmente, pero tus datos no se borran. Al reactivar el plan, todo vuelve exactamente como lo dejaste."],
];

const included = [
  "Jugadores y categorías ilimitadas",
  "Convocatorias y formaciones 11, 8, 7 y 5",
  "Evaluaciones con gráficas de evolución",
  "Calendario, asistencia y confirmaciones",
  "Pagos y mensualidades automáticas",
  "Seguimiento físico y observaciones deportivas",
  "Notificaciones push al celular",
  "Acceso independiente por categoría",
  "Reportes PDF y comparativa de jugadores",
  "Español, inglés y portugués",
];

const monthlyProgress = [
  { month: "Feb", before: 64, after: 74 },
  { month: "Mar", before: 67, after: 80 },
  { month: "Abr", before: 70, after: 83 },
  { month: "May", before: 72, after: 86 },
  { month: "Jun", before: 76, after: 90 },
  { month: "Jul", before: 78, after: 94 },
];

const access = [
  ["Dueño o entrenador principal", "Todo: categorías, pagos, suscripción y accesos", "Nada se le oculta"],
  ["Profesor de categoría", "Su plantel, sus partidos y sus entrenamientos", "Pagos, configuración ni otras categorías"],
  ["Jugador o apoderado", "Su ficha, su avance y sus convocatorias", "Los datos de otros jugadores"],
];

const comparison = [
  ["Convocatorias perdidas entre mensajes de WhatsApp", "Confirmaciones y avisos directo al celular de cada familia"],
  ["Pagos repartidos entre cuadernos y hojas de cálculo", "Cuotas automáticas y deudas siempre a la vista"],
  ["Progreso imposible de demostrar a los apoderados", "Gráficas de evolución y una ficha que el jugador quiere mostrar"],
  ["Contraseñas compartidas y accesos sin control", "Un acceso seguro para cada profesor, solo a su categoría"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://metrikas.pro/#organization",
      name: "Métrikas",
      url: "https://metrikas.pro",
      logo: "https://metrikas.pro/icon-512.png",
      email: "info@metrikas.pro",
      address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
    },
    {
      "@type": "WebSite",
      "@id": "https://metrikas.pro/#website",
      url: "https://metrikas.pro",
      name: "Métrikas",
      inLanguage: "es-CL",
      publisher: { "@id": "https://metrikas.pro/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://metrikas.pro/#software",
      name: "Métrikas",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Gestión de academias de fútbol",
      operatingSystem: "Web, Android, iOS",
      url: "https://app.metrikas.pro",
      description: "Software para gestionar jugadores, evaluaciones, convocatorias, asistencia, pagos y comunicación en academias de fútbol.",
      offers: [
        { "@type": "Offer", price: "14250", priceCurrency: "CLP", category: "Plan mensual" },
        { "@type": "Offer", price: "119700", priceCurrency: "CLP", category: "Plan anual" },
      ],
      provider: { "@id": "https://metrikas.pro/#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>;
}

function DownloadIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v9m0 0 4-4m-4 4L6 8M4 16h12" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>;
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Metrikas, inicio">
      <img src="/assets/metrikas-logo-transparent.png" alt="Metrikas" />
    </a>
  );
}

function TacticalBoard() {
  const [players, setPlayers] = useState(initialPlayers);
  const [dragging, setDragging] = useState<number | null>(null);
  const pitchRef = useRef<HTMLDivElement>(null);

  const movePlayer = (event: React.PointerEvent<HTMLButtonElement>, id: number) => {
    if (dragging !== id || !pitchRef.current) return;
    const rect = pitchRef.current.getBoundingClientRect();
    const x = Math.min(94, Math.max(6, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(94, Math.max(6, ((event.clientY - rect.top) / rect.height) * 100));
    setPlayers((current) => current.map((player) => player.id === id ? { ...player, x, y } : player));
  };

  return (
    <div className="tactics-card">
      <div className="tactics-head">
        <div><span>PRÓXIMO PARTIDO</span><strong>Formación inicial</strong></div>
        <span className="live-pill"><i />4-3-3</span>
      </div>
      <div className="pitch" ref={pitchRef}>
        <span className="half-line" /><span className="center-circle" /><span className="box box-top" /><span className="box box-bottom" />
        {players.map((player) => (
          <button
            key={player.id}
            className={`player-dot ${player.id === 10 ? "captain" : ""}`}
            style={{ left: `${player.x}%`, top: `${player.y}%` }}
            onPointerDown={(event) => { setDragging(player.id); event.currentTarget.setPointerCapture(event.pointerId); }}
            onPointerMove={(event) => movePlayer(event, player.id)}
            onPointerUp={() => setDragging(null)}
            aria-label={`Mover jugador ${player.label}`}
          ><span>{player.id}</span><small>{player.label}</small></button>
        ))}
      </div>
      <div className="tactics-foot"><span>Arrastra los jugadores para ajustar la táctica</span><strong>11 convocados</strong></div>
    </div>
  );
}

function GameCard() {
  return (
    <div className="game-card-wrap">
      <figure className="game-card">
        <img src="/assets/metrikas-card-mateo.webp" width="1052" height="1495" loading="lazy" decoding="async" alt="Ficha de ejemplo de Mateo, número 10, con valoración general 86" />
        <div className="card-shine" />
      </figure>
      <span className="orbit orbit-one" /><span className="orbit orbit-two" />
      <div className="hero2-chip ach-1" aria-hidden="true"><span><svg viewBox="0 0 24 24"><path d="M12 3c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.5.6-2.5 1.5-3.5C10 9 11 6 12 3Z" /></svg></span><div><small>LOGRO DESBLOQUEADO</small><strong>Racha de 5 entrenamientos</strong></div></div>
      <div className="hero2-chip ach-2" aria-hidden="true"><span><svg viewBox="0 0 24 24"><path d="M13 3 5 14h6l-1 7 8-11h-6z" /></svg></span><div><small>NUEVO RÉCORD</small><strong>Su mejor evaluación</strong></div></div>
      <p className="game-card-note">Ficha y logros de ejemplo</p>
    </div>
  );
}

function useDialogKeyboard(onClose: () => void, canClose = true) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef(onClose);
  const canCloseRef = useRef(canClose);

  useEffect(() => {
    closeRef.current = onClose;
    canCloseRef.current = canClose;
  }, [onClose, canClose]);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])') ?? []);
    (dialog?.querySelector<HTMLElement>('input:not([type="checkbox"])') ?? focusable()[0])?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && canCloseRef.current) {
        event.preventDefault();
        closeRef.current();
      }
      if (event.key !== "Tab") return;
      const elements = focusable();
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && (document.activeElement === first || !dialog?.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog?.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return dialogRef;
}

function DemoModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useDialogKeyboard(onClose);
  const [email, setEmail] = useState("");
  const [academy, setAcademy] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const requestDemo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("https://app.metrikas.pro/api/demo/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), academy_name: academy.trim() }),
      });

      const data = await response.json().catch(() => null) as { message?: string; error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error || "No pudimos enviar el código. Inténtalo nuevamente.");
      }

      setStatus("success");
      setFeedback(data?.message || `Enviamos el código de demo a ${email.trim()}.`);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "No pudimos enviar el código. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section ref={dialogRef} className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <span className="demo-badge">Solicitar demo</span>
        <h2 id="demo-title">14 días gratis <span>— Acceso completo</span></h2>
        <form onSubmit={requestDemo}>
          <label>Tu email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="tu@email.com" autoComplete="email" disabled={status === "submitting" || status === "success"} required /></label>
          <label>Nombre de tu academia<input value={academy} onChange={(event) => setAcademy(event.target.value)} placeholder="Mi Academia Deportiva" autoComplete="organization" disabled={status === "submitting" || status === "success"} required /></label>
          <label className="demo-consent">
            <input type="checkbox" checked={privacyAccepted} onChange={(event) => setPrivacyAccepted(event.target.checked)} disabled={status === "submitting" || status === "success"} required />
            <span>Acepto la <a href="/legal/privacy" target="_blank" rel="noreferrer">Política de Privacidad</a> y que Métrikas me contacte para gestionar esta demo. No incluiré datos de menores en este formulario.</span>
          </label>
          <div className="demo-includes">
            <strong>Tu demo incluye:</strong>
            <div>
              <span>✓ Jugadores ilimitados</span>
              <span>✓ Evaluaciones y gráficas</span>
              <span>✓ Convocatorias y tácticas</span>
              <span>✓ Pagos automáticos</span>
              <span className="demo-unlimited">✓ TODO SIN RESTRICCIONES</span>
            </div>
          </div>
          {feedback && <div className={`demo-feedback ${status}`} role="status" aria-live="polite">{status === "success" ? "✓" : "!"}<span>{feedback}</span></div>}
          {status === "success" ? (
            <button className="button modal-submit" type="button" onClick={onClose}>Listo, cerrar</button>
          ) : (
            <button className="button modal-submit" type="submit" disabled={status === "submitting" || !privacyAccepted}>
              {status === "submitting" ? "Enviando código…" : "Enviar código a mi email"}{status !== "submitting" && <ArrowIcon />}
            </button>
          )}
        </form>
        <small>Recibirás tu código de demo por email en segundos.<b>Válido por 14 días.</b></small>
      </section>
    </div>
  );
}

type CheckoutPlan = "monthly" | "annual";

function CheckoutModal({ plan, onClose }: { plan: CheckoutPlan; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [academyName, setAcademyName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isSubmitting = status === "submitting";
  const dialogRef = useDialogKeyboard(onClose);
  const requestControllerRef = useRef<AbortController | null>(null);
  const planName = plan === "monthly" ? "Plan mensual" : "Plan anual";
  const planPrice = plan === "monthly" ? "$14.250 CLP / mes" : "$119.700 CLP / año";

  useEffect(() => () => requestControllerRef.current?.abort(), []);

  const startCheckout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setStatus("submitting");
    setErrorMessage("");
    const controller = new AbortController();
    requestControllerRef.current = controller;
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("https://app.metrikas.pro/api/subscriptions/public-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          email: email.trim(),
          academyName: academyName.trim(),
          plan,
        }),
      });

      const data = await response.json().catch(() => null) as { checkout_url?: string; error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error || "No pudimos iniciar el pago. Inténtalo nuevamente.");
      }

      if (!data?.checkout_url) {
        throw new Error("No recibimos el enlace de pago. Inténtalo nuevamente.");
      }

      window.location.href = data.checkout_url;
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof DOMException && error.name === "AbortError" ? "La conexión tardó demasiado. Revisa tu internet e inténtalo nuevamente." : error instanceof Error ? error.message : "No pudimos iniciar el pago. Inténtalo nuevamente.");
    } finally {
      window.clearTimeout(timeoutId);
      requestControllerRef.current = null;
    }
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section ref={dialogRef} id="checkout-payment-modal" className="demo-modal checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar">×</button>
        <span className="checkout-badge">PAGO SEGURO · MERCADOPAGO</span>
        <h2 id="checkout-title">Completa tus datos <span>y continúa al pago</span></h2>
        <div className="checkout-plan-summary">
          <div><small>PLAN SELECCIONADO</small><strong>{planName}</strong></div>
          <b>{planPrice}</b>
        </div>
        <form onSubmit={startCheckout}>
          <label>Correo electrónico<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="correo@ejemplo.com" autoComplete="email" disabled={isSubmitting} autoFocus required /></label>
          <label>Nombre de la academia<input type="text" value={academyName} onChange={(event) => setAcademyName(event.target.value)} placeholder="Nombre de tu academia" autoComplete="organization" disabled={isSubmitting} required /></label>
          {errorMessage && <div className="demo-feedback error" role="alert" aria-live="assertive">!<span>{errorMessage}</span></div>}
          <button className="button modal-submit checkout-submit" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
            {isSubmitting ? "Cargando..." : "Continuar al pago"}{!isSubmitting && <ArrowIcon />}
          </button>
        </form>
        <small>Serás redirigido a MercadoPago para completar el pago de forma segura.</small>
      </section>
    </div>
  );
}

function InstallModal({ onClose }: { onClose: () => void }) {
  const [platform, setPlatform] = useState<"ios" | "android" | "desktop">("desktop");
  const dialogRef = useDialogKeyboard(onClose);

  useEffect(() => {
    const agent = window.navigator.userAgent.toLowerCase();
    // Browser-only platform detection after server rendering.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (/iphone|ipad|ipod/.test(agent)) setPlatform("ios");
    else if (/android/.test(agent)) setPlatform("android");
  }, []);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section ref={dialogRef} className="install-modal" role="dialog" aria-modal="true" aria-labelledby="install-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <span className="install-badge"><DownloadIcon /> DESCARGAR APP</span>
        <h2 id="install-title">Lleva Métrikas <em>en tu teléfono.</em></h2>
        <p>Instala el sistema en tu pantalla de inicio y ábrelo como una aplicación, sin buscarlo cada vez en el navegador.</p>
        <div className="install-options">
          <article className={platform === "android" ? "recommended" : ""}>
            <span className="install-platform">ANDROID</span>
            <strong>Instalar desde Chrome</strong>
            <p>Abre Métrikas, toca el menú ⋮ y selecciona <b>Instalar aplicación</b>.</p>
            {platform === "android" && <small>RECOMENDADO PARA TU DISPOSITIVO</small>}
          </article>
          <article className={platform === "ios" ? "recommended" : ""}>
            <span className="install-platform">IPHONE / IPAD</span>
            <strong>Agregar a inicio</strong>
            <p>Abre Métrikas en Safari, toca Compartir y selecciona <b>Agregar a pantalla de inicio</b>.</p>
            {platform === "ios" && <small>RECOMENDADO PARA TU DISPOSITIVO</small>}
          </article>
        </div>
        <a className="button install-open-button" href="https://app.metrikas.pro/">Abrir Métrikas para instalar <ArrowIcon /></a>
        <small className="install-note">El sistema quedará disponible desde el icono de Métrikas en tu teléfono.</small>
      </section>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [installOpen, setInstallOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<CheckoutPlan | null>(null);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let revealTargetsList: HTMLElement[] = [];

    const updateProgress = () => {
      frame = 0;
      revealTargetsList.forEach((target) => {
        if (!target.classList.contains("reveal-visible") && target.getBoundingClientRect().bottom < 0) target.classList.add("reveal-visible");
      });
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty("--page-progress", String(Math.min(1, window.scrollY / scrollable)));
    };

    const requestProgressUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(
      ".section-heading, .compare-board, .compare-cta, .module-index-item, .access-board, .showcase-copy, .appshot, .card-copy, .game-card-wrap, .progress2-chart, .role-card, .price-card, .included-card, .trust-grid article, .faq-item, .final-content"
    ));

    revealTargetsList = revealTargets;
    revealTargets.forEach((target, index) => {
      target.classList.add("reveal-item");
      target.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });

    let observer: IntersectionObserver | null = null;
    if (reduceMotion.matches) {
      revealTargets.forEach((target) => target.classList.add("reveal-visible"));
    } else {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer?.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -9%", threshold: 0.08 });
      revealTargets.forEach((target) => observer?.observe(target));
    }

    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    return () => {
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      root.style.removeProperty("--page-progress");
    };
  }, []);

  return (
    <main id="inicio" className="redesign-v26">
      <a className="skip-link" href="#contenido-principal">Saltar al contenido</a>
      <div className="site-progress" aria-hidden="true" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav id="primary-navigation" className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegación principal">
            <a href="#caracteristicas" onClick={() => setMenuOpen(false)}>Características</a>
            <a href="#producto" onClick={() => setMenuOpen(false)}>Plataforma</a>
            <a href="#precios" onClick={() => setMenuOpen(false)}>Precios</a>
            <a href="#preguntas" onClick={() => setMenuOpen(false)}>Preguntas</a>
            <a className="mobile-login-link" href="https://app.metrikas.pro/">Iniciar sesión</a>
            <button className="mobile-install-link" onClick={() => { setMenuOpen(false); setInstallOpen(true); }}><DownloadIcon /> Descargar app</button>
          </nav>
          <div className="nav-actions">
            <a className="nav-login" href="https://app.metrikas.pro">Iniciar sesión</a>
            <button className="nav-download" onClick={() => setInstallOpen(true)}><DownloadIcon /> Descargar app</button>
            <button className="button button-small" onClick={() => setDemoOpen(true)}>Probar gratis</button>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-controls="primary-navigation" aria-expanded={menuOpen}><span /><span /></button>
        </div>
      </header>

      <section className="hero2" id="contenido-principal" tabIndex={-1}>
        <div className="hero2-photo" aria-hidden="true">
          <img src="/assets/metrikas-hero-entrenador.webp" alt="" width="1774" height="887" fetchPriority="high" decoding="async" />
        </div>
        <div className="hero2-glow" aria-hidden="true" />
        <div className="container hero2-layout">
          <div className="hero2-copy">
            <span className="hero2-eyebrow"><i />Software para academias de fútbol</span>
            <h1>Deja los cuadernos y el WhatsApp. <em>Dirige tu academia desde un solo lugar.</em></h1>
            <p>Cobros que se controlan solos, convocatorias con confirmación y la ficha de cada jugador, en el celular de todo tu equipo. Lista para usar en 20 minutos.</p>
            <div className="hero2-actions">
              <button className="button hero2-primary" onClick={() => setDemoOpen(true)}>Probar gratis 14 días <ArrowIcon /></button>
              <a className="hero2-secondary" href="#producto"><span className="play" aria-hidden="true">▶</span> Ver cómo funciona</a>
            </div>
            <ul className="hero2-proof" aria-label="Condiciones de la prueba"><li><CheckIcon />14 días gratis</li><li><CheckIcon />Sin contrato</li><li><CheckIcon />Cancela cuando quieras</li></ul>
          </div>
          <div className="hero2-floats" aria-hidden="true">
            <div className="hero2-chip chip-confirm"><span>✓</span><div><small>CONVOCATORIA · SÁB 10:00</small><strong>18 de 22 ya confirmaron</strong></div></div>
            <div className="hero2-chip chip-pay"><span>$</span><div><small>CUOTA DE OCTUBRE</small><strong>Pagada · sin perseguir a nadie</strong></div></div>
          </div>
        </div>
      </section>

      <section className="benefit-band" aria-label="Qué resuelve Métrikas">
        <ul className="benefit-band-list">
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3zM3 10h18M7 15h4" /></svg>Cobros al día</li>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v14H5zM5 9h14M9 3v4M15 3v4m-6 9 2 2 4-4" /></svg>Convocatorias confirmadas</li>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" /></svg>Fichas que motivan</li>
          <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 15h2" /></svg>Todo en el celular</li>
        </ul>
      </section>

      <section className="section problem-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><h2>De la improvisación<br />al <em>control total.</em></h2></div>
            <p>Centraliza el trabajo de tu academia. Convierte cada entrenamiento, asistencia y evaluación en información útil para decidir mejor.</p>
          </div>
          <div className="compare-board">
            <div className="compare-head" aria-hidden="true"><span>Hoy, todo por separado</span><span>Con Métrikas, una academia conectada</span></div>
            {comparison.map(([before, after]) => (
              <div className="compare-row" key={before}>
                <p className="compare-old"><span className="compare-mark" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m5 5 10 10M15 5 5 15" /></svg></span><span className="sr-only">Antes: </span>{before}</p>
                <p className="compare-new"><span className="compare-mark" aria-hidden="true"><CheckIcon /></span><span className="sr-only">Con Métrikas: </span>{after}</p>
              </div>
            ))}
          </div>
          <div className="compare-cta"><button className="button" onClick={() => setDemoOpen(true)}>Probar gratis 14 días <ArrowIcon /></button><span>Con tu propia academia, sin tarjeta.</span></div>
        </div>
      </section>

      <section className="section feature-section" id="caracteristicas">
        <div className="container">
          <div className="section-heading centered">
            <h2>Un sistema completo.<br /><em>No diez herramientas parcheadas.</em></h2>
            <p>Cada módulo fue diseñado para el ritmo real de una academia de fútbol.</p>
          </div>
          <ul className="module-index-list">
            {features.map(([icon, title, description]) => (
              <li className="module-index-item" key={title}>
                <span className="module-index-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon} /></svg></span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section appshot-section" id="producto">
        <div className="container">
          <div className="section-heading centered appshot-heading">
            <h2>Todos tus jugadores, <em>a la vista.</em></h2>
            <p>Así se ve Métrikas por dentro: tu plantel completo con el puntaje de cada jugador, y su ficha con evolución y logros, también desde el celular.</p>
          </div>
          <div className="appshot">
            <figure className="appshot-browser">
              <div className="appshot-bar" aria-hidden="true"><i /><i /><i /><span>app.metrikas.pro/players</span></div>
              <img src="/assets/app-jugadores.webp" width="2400" height="1492" loading="lazy" decoding="async" alt="Pantalla Jugadores de Métrikas: ocho jugadores con su puntaje general, su posición y sus tres atributos principales." />
            </figure>
            <figure className="appshot-phone">
              <img src="/assets/app-ficha.webp" width="1170" height="2532" loading="lazy" decoding="async" alt="Ficha de un jugador en el celular: puntaje, datos físicos y los seis atributos con barras de colores." />
            </figure>
          </div>
          <p className="appshot-note">Pantallas reales de Métrikas con jugadores de ejemplo.</p>
          <div className="appshot-cta"><button className="button" onClick={() => setDemoOpen(true)}>Probar gratis 14 días <ArrowIcon /></button></div>
        </div>
      </section>

      <section className="section player-card-section" id="ficha">
        <div className="container player-card-layout">
          <div className="section-heading card-copy">
            <h2>Tus jugadores van a querer <em>mostrar su ficha.</em></h2>
            <p className="card-lead">Cada evaluación se convierte en una carta personal con seis atributos y un nivel que sube con el esfuerzo. Los padres ven el avance real y los jugadores entrenan para superar su propia ficha.</p>
            <ul className="green-checks">
              <li>Velocidad, fuerza, técnica, resistencia, potencia y agilidad</li>
              <li>Niveles PRO, TOP y ELITE que se ganan entrenando</li>
              <li>Logros por constancia: rachas, mes perfecto y regreso tras una lesión</li>
              <li>Se descarga como imagen para compartir con las familias</li>
            </ul>
            <p className="card-closing">Eso es compromiso que tú no tienes que exigir. Se genera solo.</p>
            <button className="button" onClick={() => setDemoOpen(true)}>Probar gratis 14 días <ArrowIcon /></button>
          </div>
          <GameCard />
        </div>
      </section>

      <section className="section progress-section" id="progreso">
        <div className="container progress2">
          <div className="section-heading progress2-copy">
            <h2>Números que se entienden <em>a primera vista.</em></h2>
            <p>El progreso deja de ser una percepción. Cada evaluación se transforma en evidencia clara para el entrenador, el jugador y su familia.</p>
            <dl className="progress2-kpis">
              <div><dt>Progreso del equipo en 6 meses</dt><dd>+22<em>%</em></dd></div>
              <div><dt>Jugadores nivel TOP</dt><dd>14<em>/22</em></dd></div>
              <div><dt>Asistencia promedio a entrenos</dt><dd>94<em>%</em></dd></div>
            </dl>
          </div>
          <figure className="progress2-chart">
            <figcaption>
              <strong>Evolución medida</strong>
              <span className="p2-legend"><i className="before" />Evaluación anterior<i className="after" />Evaluación actual</span>
            </figcaption>
            <div className="p2-bars" role="img" aria-label="Gráfico de ejemplo: el puntaje promedio del equipo en la evaluación actual sube de 74 en febrero a 94 en julio.">
              {monthlyProgress.map((month, index) => (
                <div className="p2-col" key={month.month} style={{ ["--i" as string]: index }}>
                  <div className="p2-pair">
                    <span className="p2-bar before" style={{ height: `${month.before}%` }} />
                    <span className="p2-bar after" style={{ height: `${month.after}%` }}>{index === monthlyProgress.length - 1 && <b>+{month.after - month.before}</b>}</span>
                  </div>
                  <small>{month.month}</small>
                </div>
              ))}
            </div>
            <p className="p2-sample">Vista de ejemplo · Datos ilustrativos</p>
          </figure>
        </div>
      </section>

      <section className="section roles-section">
        <div className="container">
          <div className="section-heading centered roles-heading"><h2>Cada persona ve solo<br /><em>lo que necesita.</em></h2><p>Tú controlas quién accede a qué, sin contraseñas compartidas ni datos expuestos.</p></div>
          <div className="access-board">
            <div className="access-head" aria-hidden="true"><span>Quién</span><span>Qué ve</span><span>Qué no ve</span></div>
            {access.map(([role, sees, hidden]) => (
              <div className="access-row" key={role}>
                <h3>{role}</h3>
                <p className="access-sees"><span className="access-mark" aria-hidden="true"><CheckIcon /></span><span className="sr-only">Ve: </span>{sees}</p>
                <p className="access-hidden"><span className="access-mark" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M6 9V7a4 4 0 0 1 8 0v2M5 9h10v7H5z" /></svg></span><span className="sr-only">No ve: </span>{hidden}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container">
          <div className="section-heading centered trust-heading"><h2>Empieza sin riesgo.<br /><em>Y con alguien que contesta.</em></h2><p>Métrikas se usa cada semana en una academia real de Santiago y se mejora con lo que ahí se necesita.</p></div>
          <div className="trust-grid">
            <article><span><CheckIcon /></span><h3>14 días gratis</h3><p>Acceso completo para probar con tu propia academia, sin tarjeta de por medio.</p></article>
            <article><span><CheckIcon /></span><h3>Sin contrato</h3><p>Cancelas cuando quieras y mantienes el acceso hasta el final del período pagado.</p></article>
            <article><span><CheckIcon /></span><h3>Datos aislados</h3><p>Cada academia ve solo lo suyo, y cada profesor solo su categoría.</p></article>
            <article><span><CheckIcon /></span><h3>Soporte por WhatsApp</h3><p>Escríbenos y te respondemos directo, sin tickets ni bots.</p></article>
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="precios">
        <div className="container">
          <div className="section-heading pricing-heading"><h2>Todo incluido.<br /><em>Sin sorpresas.</em></h2><p>Sin límite de jugadores ni módulos. Menos de lo que cuesta alquilar una cancha.</p></div>
          <div className="pricing-layout">
            <div className="price-cards">
              <article className="price-card"><span className="plan-label">PLAN MENSUAL</span><div className="price"><b>$14.250</b><span>CLP / mes</span></div><p>Por academia · Acceso por 30 días</p><button className="price-button" type="button" aria-haspopup="dialog" aria-controls="checkout-payment-modal" data-checkout-plan="monthly" onClick={() => setCheckoutPlan("monthly")}>Continuar al pago mensual <ArrowIcon /></button></article>
              <article className="price-card featured"><span className="saving">AHORRA 30%</span><span className="plan-label">PLAN ANUAL</span><div className="price"><b>$119.700</b><span>CLP / año</span></div><p>Pago anual único · Equivale a $9.975 mensuales</p><button className="price-button" type="button" aria-haspopup="dialog" aria-controls="checkout-payment-modal" data-checkout-plan="annual" onClick={() => setCheckoutPlan("annual")}>Continuar al pago anual <ArrowIcon /></button></article>
            </div>
            <div className="included-card"><small>AMBOS PLANES INCLUYEN</small><div className="included-grid">{included.map((item) => <span key={item}><i>✓</i>{item}</span>)}</div><div className="secure-line"><span>Pago seguro</span><span>Sin contratos</span><span>Cancela cuando quieras</span></div></div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="preguntas">
        <div className="container faq-layout">
          <div className="section-heading faq-intro"><h2>Todo lo que quieres saber <em>antes de empezar.</em></h2><p>¿No encuentras tu respuesta?</p><a href="https://wa.me/56992103974?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20Metrikas">Pregúntanos por WhatsApp <ArrowIcon /></a></div>
          <div className="faq-list">
            {faqs.map(([question,answer],index) => <article className={openFaq===index?"faq-item open":"faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq===index?-1:index)} aria-expanded={openFaq===index} aria-controls={`faq-answer-${index}`}><span>{String(index+1).padStart(2,"0")}</span><strong>{question}</strong><i aria-hidden="true">{openFaq===index?"−":"+"}</i></button><div id={`faq-answer-${index}`} className="faq-answer" aria-hidden={openFaq!==index}><p>{answer}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-photo" /><div className="final-overlay" />
        <div className="container final-content"><h2>Tu academia puede estar <em>funcionando hoy.</em></h2><p>En menos de 20 minutos puedes tener tu primera categoría y convocatoria listas. Sin contrato. Sin complicaciones.</p><div><button className="button" onClick={() => setDemoOpen(true)}>Probar gratis 14 días <ArrowIcon /></button><a className="email-link" href="mailto:info@metrikas.pro?subject=Quiero usar Metrikas en mi academia">info@metrikas.pro</a></div></div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top"><Brand /><p>La plataforma que transforma cada entrenamiento en decisiones, progreso y control.</p><div><a href="#caracteristicas">Características</a><a href="#precios">Precios</a><a href="#preguntas">Preguntas</a><a href="https://app.metrikas.pro">Iniciar sesión</a><a href="/legal/privacy">Privacidad</a><a href="/legal/minors">Protección de menores</a><a href="/legal/terms">Términos de uso</a><a href="/legal/data-processing">Tratamiento de datos</a></div></div>
        <div className="container footer-bottom"><span>© 2026 Métrikas · Un producto de Autix</span><div><a href="/legal/privacy">Privacidad</a><a href="/legal/terms">Términos</a><a href="/legal/cookies">Cookies</a><span>Santiago, Chile</span></div></div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/56992103974?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Metrikas%20para%20mi%20academia" aria-label="Contactar a Metrikas por WhatsApp">
        <img src="/assets/whatsapp-original.png" alt="" width="62" height="62" decoding="async" />
      </a>
      {demoOpen && <DemoModal onClose={() => setDemoOpen(false)} />}
      {installOpen && <InstallModal onClose={() => setInstallOpen(false)} />}
      {checkoutPlan && <CheckoutModal plan={checkoutPlan} onClose={() => setCheckoutPlan(null)} />}
    </main>
  );
}
