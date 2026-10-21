import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://metrikas.pro"),
  title: {
    default: "Software para Academias de Fútbol en Chile | Métrikas",
    template: "%s | Métrikas",
  },
  description: "Gestiona jugadores, evaluaciones, asistencia, convocatorias, pagos y comunicación desde una sola plataforma. Prueba Métrikas gratis por 14 días.",
  applicationName: "Métrikas",
  authors: [{ name: "Métrikas", url: "https://metrikas.pro" }],
  creator: "Métrikas",
  publisher: "Autix",
  category: "Software de gestión deportiva",
  keywords: [
    "software para academias de fútbol",
    "gestión de academias de fútbol",
    "app para entrenadores de fútbol",
    "evaluación de jugadores",
    "convocatorias de fútbol",
    "control de asistencia deportiva",
    "pagos para academias deportivas",
    "Métrikas",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://metrikas.pro",
    siteName: "Métrikas",
    title: "Dirige tu academia como un club profesional | Métrikas",
    description: "Jugadores, evaluaciones, asistencia, convocatorias y pagos en una plataforma creada para academias de fútbol.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Métrikas, software para academias de fútbol" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirige tu academia como un club profesional | Métrikas",
    description: "Toda la gestión deportiva y administrativa de tu academia en una sola plataforma.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: { "codex-preview": "development" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030b18",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-CL"><body>{children}</body></html>;
}
