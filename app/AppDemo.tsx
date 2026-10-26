"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// Screen recordings of the real app (fictional academy and players), shown in
// the browser and phone frames of the "Todos tus jugadores" section.
// The browser shows the coach: five clips one after another, each tab jumps to
// its step. The phone shows what a player sees: the call-up and a tactics play.
// Video only plays while the section is on screen, never with reduced motion
// unless the visitor asks for it, and can always be paused.

const clips = [
  { id: "01-panel", label: "Panel", path: "app.metrikas.pro/dashboard", about: "ingreso y panel de control con la alerta de pagos vencidos" },
  { id: "02-asistencia", label: "Asistencia", path: "app.metrikas.pro/calendar", about: "pasar asistencia del entrenamiento de hoy de la categoría Sub-12" },
  { id: "03-evaluacion", label: "Evaluación", path: "app.metrikas.pro/players", about: "cargar una evaluación y ver el gráfico de evolución del jugador" },
  { id: "04-pagos", label: "Pagos", path: "app.metrikas.pro/payments", about: "ver quién debe y marcar pagos; el total vencido baja" },
  { id: "05-reporte", label: "Reporte", path: "app.metrikas.pro/reports", about: "abrir el reporte de un jugador listo para descargar en PDF" },
];

const phoneClips = [
  { id: "07-convocatoria", about: "el jugador abre su convocatoria, confirma que va y ve su lugar en la alineación" },
  { id: "08-tactica", about: "el jugador abre una jugada guardada en el tablero táctico y la ve animada" },
];

const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (onChange: () => void) => {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};
const prefersReducedMotion = () => window.matchMedia(motionQuery).matches;

export default function AppDemo() {
  const root = useRef<HTMLDivElement>(null);
  const desktop = useRef<HTMLVideoElement>(null);
  const phone = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [phoneActive, setPhoneActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  // null until the visitor presses play or pause; until then reduced motion decides.
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const reduced = useSyncExternalStore(subscribeMotion, prefersReducedMotion, () => false);
  const paused = userPaused ?? reduced;

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const playing = visible && !paused;
  useEffect(() => {
    for (const video of [desktop.current, phone.current]) {
      if (!video) continue;
      if (playing) video.play().catch(() => {});
      else video.pause();
    }
  }, [playing, active, phoneActive]);

  const choose = (i: number) => {
    setActive(i);
    setProgress(0);
    setUserPaused(false);
  };
  const clip = clips[active];
  const phoneClip = phoneClips[phoneActive];

  return (
    <>
      <div className="appdemo-tabs" aria-label="Pasos del video">
        {clips.map((c, i) => (
          <button key={c.id} type="button" className="appdemo-tab" aria-pressed={i === active} onClick={() => choose(i)}>
            <span><b>{i + 1}</b>{c.label}</span>
            <span className="appdemo-bar" aria-hidden="true">
              <i style={{ transform: `scaleX(${i < active ? 1 : i === active ? progress : 0})` }} />
            </span>
          </button>
        ))}
      </div>
      <div className="appshot" ref={root}>
        <figure className="appshot-browser">
          <div className="appshot-bar">
            <i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" />
            <span aria-hidden="true">{clip.path}</span>
            <button type="button" className="appdemo-toggle" onClick={() => setUserPaused(playing)} aria-label={playing ? "Pausar video" : "Reproducir video"}>
              {playing
                ? <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4 2.5h2.6v11H4zM9.4 2.5H12v11H9.4z" fill="currentColor" /></svg>
                : <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4.5 2.2v11.6L13.5 8z" fill="currentColor" /></svg>}
            </button>
          </div>
          <video
            key={clip.id}
            ref={desktop}
            poster={`/assets/demo/${clip.id}-1280${reduced && paused ? "" : "-start"}.webp`}
            width={1280}
            height={800}
            muted
            playsInline
            preload="none"
            disablePictureInPicture
            aria-label={`Video de Métrikas, paso ${active + 1} de ${clips.length}: ${clip.about}.`}
            onTimeUpdate={(e) => { const v = e.currentTarget; if (v.duration) setProgress(v.currentTime / v.duration); }}
            onEnded={() => choose((active + 1) % clips.length)}
          >
            <source src={`/media/demo/${clip.id}-1280.webm`} type='video/webm; codecs="vp9"' />
            <source src={`/media/demo/${clip.id}-1280.mp4`} type="video/mp4" />
          </video>
        </figure>
        <figure className="appshot-phone">
          <figcaption className="appshot-phone-tag">Así lo ve el jugador</figcaption>
          <video
            key={phoneClip.id}
            ref={phone}
            poster={`/assets/demo/${phoneClip.id}-560${reduced && paused ? "" : "-start"}.webp`}
            width={560}
            height={1212}
            muted
            playsInline
            preload="none"
            disablePictureInPicture
            aria-label={`Video de Métrikas en el celular del jugador: ${phoneClip.about}.`}
            onEnded={() => setPhoneActive((i) => (i + 1) % phoneClips.length)}
          >
            <source src={`/media/demo/${phoneClip.id}-560.webm`} type='video/webm; codecs="vp9"' />
            <source src={`/media/demo/${phoneClip.id}-560.mp4`} type="video/mp4" />
          </video>
        </figure>
      </div>
    </>
  );
}
