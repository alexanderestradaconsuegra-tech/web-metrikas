"use client";

import { useEffect, useRef } from "react";

// Three step cards that stack on top of each other while scrolling: each new
// card sticks below the previous one, which shrinks and dims.
// Pattern adapted from the 8B app landing page template (MIT) — see CREDITS.md.

const steps = [
  { n: "1", title: "Crea tu academia", text: "Nombre, categorías y tu equipo de profesores. En menos de 20 minutos tienes la base lista.", chips: ["Academia creada", "Categorías Sub-10 a Senior", "Profesores con acceso propio"] },
  { n: "2", title: "Agrega a tus jugadores", text: "Súbelos uno a uno o cuéntanos cómo llevas hoy la lista. Cada jugador recibe su ficha y sus accesos.", chips: ["Ficha con foto y posición", "Primera evaluación", "Acceso para el apoderado"] },
  { n: "3", title: "Convoca y cobra", text: "Programa el primer entrenamiento y la primera cuota. Las confirmaciones y los pagos se controlan solos.", chips: ["Convocatoria con confirmación", "Cuota mensual automática", "Avisos al celular"] },
];

export default function StackedSteps({ onDemo }: { onDemo: () => void }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let cancelled = false;
    let revert = () => {};

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const wrap = el.querySelector<HTMLElement>(".steps__list");
        if (!wrap) return;
        const cards = Array.from(wrap.children) as HTMLElement[];
        el.classList.add("is-stacked");
        const gap = () => parseFloat(getComputedStyle(wrap).rowGap) || 0;
        const natural = (i: number) => cards.slice(0, i).reduce((sum, c) => sum + c.offsetHeight + gap(), 0);
        cards.slice(0, -1).forEach((card, i) => {
          gsap.fromTo(card, { scale: 1, filter: "brightness(1)" }, {
            scale: 0.93, filter: "brightness(0.7)", ease: "none",
            scrollTrigger: { trigger: wrap, start: () => `top+=${natural(i + 1)} bottom`, end: () => `top+=${natural(i + 1) + card.offsetHeight} bottom`, scrub: true, invalidateOnRefresh: true },
          });
        });
        return () => el.classList.remove("is-stacked");
      });
      revert = () => mm.revert();
    })();

    return () => { cancelled = true; revert(); };
  }, []);

  return (
    <section className="steps" id="como-empezar" ref={root} aria-labelledby="steps-title">
      <div className="container">
        <div className="steps__head">
          <h2 id="steps-title">Tres pasos y <em>tu academia funciona.</em></h2>
          <div>
            <p>Sin instalaciones ni contratos largos. Lo que hoy llevas en cuadernos y chats, ordenado desde el primer día.</p>
            <button className="button" onClick={onDemo}>Probar gratis 14 días</button>
          </div>
        </div>
        <ol className="steps__list">
          {steps.map((s, i) => (
            <li className="steps__card" style={{ ["--i" as string]: i }} key={s.n}>
              <span className="steps__num" aria-hidden="true">{s.n}</span>
              <div className="steps__copy">
                <h3><span className="sr-only">Paso {s.n}: </span>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <ul className="steps__ui" aria-hidden="true">
                {s.chips.map((c) => <li key={c}><svg viewBox="0 0 24 24"><path d="m5 12 4.5 4.5L19 7" /></svg>{c}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
