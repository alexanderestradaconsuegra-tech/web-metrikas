"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

// Scroll-driven walkthrough: a phone stays pinned while five points scroll past
// and the phone screen fills in one step at a time.
// Layout and motion pattern adapted from the 8B app landing page template
// (MIT, https://github.com/8bsite/app-landing-page-template), see CREDITS.md.

const steps = [
  ["Convoca y recibe confirmaciones", "Arma la nómina, define la formación y mira quién confirmó, sin perseguir a nadie por WhatsApp."],
  ["Cobra sin llevar cuadernos", "Las cuotas se generan cada mes y las deudas quedan a la vista. Registra pagos, o cobra a varios alumnos de una vez."],
  ["Evalúa y muestra el avance", "Seis atributos por jugador y gráficas de evolución que los apoderados entienden de un vistazo."],
  ["Una ficha que motiva", "Cada jugador tiene su carta y sus logros por constancia: rachas, mes perfecto y regreso tras una lesión."],
  ["Cada persona ve lo suyo", "Dueño, profesores por categoría, jugadores y apoderados, cada uno con su propio acceso."],
];

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function PhoneWalkthrough({ onDemo }: { onDemo: () => void }) {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();
      mm.add({ wide: "(min-width: 48rem) and (prefers-reduced-motion: no-preference)", narrow: "(max-width: 47.99rem) and (prefers-reduced-motion: no-preference)" }, (context) => {
        const wide = !!context.conditions?.wide;
        const items = Array.from(el.querySelectorAll<HTMLElement>(".walk__item"));
        const device = el.querySelector<HTMLElement>(".walk__device");
        if (!items.length) return;
        const stepEls = items.map((_, i) => Array.from(el.querySelectorAll<HTMLElement>(`.walk-phone [data-step="${i + 1}"]`)));
        const line = wide ? "58%" : "52%";

        // Hide the not-yet-reached steps, then reveal them as the list scrolls.
        gsap.set(stepEls.flat(), { opacity: 0 });
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: items[0], start: `top ${line}`, endTrigger: items[items.length - 1], end: `bottom ${line}`, scrub: true },
        });
        items.forEach((item, i) => {
          if (i > 0) tl.fromTo(item, { opacity: 0.32 }, { opacity: 1, duration: 0.25 }, i - 0.1);
          if (i < items.length - 1) tl.to(item, { opacity: 0.32, duration: 0.25 }, i + 0.9);
          if (stepEls[i].length) tl.fromTo(stepEls[i], { opacity: 0, y: 14, scale: 0.94, transformOrigin: "50% 100%" }, { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.18, ease: "power2.out" }, i + 0.05);
        });
        tl.to(items.slice(0, -1), { opacity: 1, duration: 0.3 }, items.length - 0.1);

        if (device) {
          gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: el, start: "bottom bottom", end: "bottom 30%", scrub: true, invalidateOnRefresh: true } })
            .to(device, { scale: 0.86, rotation: -5, y: () => -window.innerHeight * (wide ? 0.08 : 0.05) }, 0);
        }
        return () => {
          gsap.set(stepEls.flat(), { clearProps: "all" });
          gsap.set(items, { clearProps: "opacity" });
        };
      });
      cleanup = () => mm.revert();
    })();

    return () => { cancelled = true; cleanup(); };
  }, []);

  return (
    <section className="walk" id="producto" ref={root} aria-labelledby="walk-title">
      <div className="walk__inner container">
        <div className="walk__head">
          <h2 id="walk-title">Tu academia completa, <em>en una sola app.</em></h2>
          <div className="walk__head-copy">
            <p>Convocatorias, cobros y fichas de tus jugadores en el celular de todo tu equipo. Cada pieza hecha para el ritmo real de una academia de fútbol.</p>
            <button className="button" onClick={onDemo}>Probar gratis 14 días</button>
          </div>
        </div>
        <div className="walk__grid">
          <ol className="walk__list">
            {steps.map(([title, text]) => (
              <li className="walk__item" key={title}><h3>{title}</h3><p>{text}</p></li>
            ))}
          </ol>
          <div className="walk__aside">
            <div className="walk__sticky">
              <div className="walk__device">
                <figure className="walk-phone" aria-label="Ejemplo de la pantalla principal de Métrikas">
                  <div className="walk-phone__screen">
                    <div className="walk-phone__top">
                      <span className="walk-phone__logo">M</span>
                      <div><p className="walk-phone__who">Academia Demo</p><p className="walk-phone__state"><i aria-hidden="true" />Sub-12 · Hoy</p></div>
                    </div>
                    <div className="walk-phone__feed">
                      <div className="wp-card" data-step="1">
                        <small>CONVOCATORIA ENVIADA · SÁB 10:00</small>
                        <strong>Partido vs. Cóndores FC</strong>
                        <div className="wp-meter"><span style={{ width: "82%" }} /></div>
                        <p>18 de 22 ya confirmaron</p>
                      </div>
                      <div className="wp-card wp-card--row" data-step="2">
                        <span className="wp-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 6h18v12H3zM3 10h18M7 15h4" /></svg></span>
                        <div><small>CUOTA DE OCTUBRE</small><strong>$45.000 · Pagada</strong></div>
                      </div>
                      <div className="wp-chip" data-step="2"><span aria-hidden="true">!</span>4 cuotas vencidas · $180.000</div>
                      <div className="wp-card" data-step="3">
                        <small>ÚLTIMA EVALUACIÓN</small>
                        {[["Velocidad", 82], ["Técnica", 69], ["Resistencia", 85]].map(([label, value]) => (
                          <div className="wp-bar" key={label as string}><span>{label}</span><i><b style={{ width: `${value}%` }} /></i><em>{value}</em></div>
                        ))}
                      </div>
                      <div className="wp-chip wp-chip--lime" data-step="4"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.5.6-2.5 1.5-3.5C10 9 11 6 12 3Z" /></svg>Logro: racha de 5 entrenamientos</div>
                      <div className="wp-roles" data-step="5"><span>Dueño</span><span>Profesor</span><span>Apoderado</span></div>
                    </div>
                    <div className="walk-phone__bar" aria-hidden="true">
                      <span className="on"><svg viewBox="0 0 24 24"><path d="M4 11 12 4l8 7v9H4z" /></svg>Inicio</span>
                      <span><svg viewBox="0 0 24 24"><path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>Jugadores</span>
                      <span><svg viewBox="0 0 24 24"><path d="M5 5h14v14H5zM5 9h14" /></svg>Calendario</span>
                      <span><svg viewBox="0 0 24 24"><path d="M3 6h18v12H3zM3 10h18" /></svg>Pagos</span>
                    </div>
                  </div>
                </figure>
                <p className="walk__note">Pantalla de ejemplo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
