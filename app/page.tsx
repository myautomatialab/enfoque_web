import {
  CalendarDays,
  CheckSquare,
  Layers,
  Sparkles,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Tareas",
    description:
      "Organiza pendientes y proyectos con prioridades claras, sin listas dispersas en cinco apps distintas.",
  },
  {
    icon: Wallet,
    title: "Finanzas",
    description:
      "Controla ingresos, gastos y metas de ahorro en un solo panel, siempre a la vista de tu día a día.",
  },
  {
    icon: CalendarDays,
    title: "Calendario",
    description:
      "Visualiza tu tiempo real: eventos, tareas y compromisos financieros conviven en la misma línea de tiempo.",
  },
  {
    icon: Layers,
    title: "Conocimiento",
    description:
      "Guarda notas, ideas y aprendizajes junto al resto de tu vida, listos para consultar cuando los necesites.",
  },
  {
    icon: Sparkles,
    title: "Todo unificado",
    description:
      "Un solo hub que conecta cada área en vez de fragmentarla, para que dejes de saltar entre herramientas.",
  },
];

const reasons = [
  {
    title: "Menos apps, más claridad",
    description:
      "Cada herramienta nueva suma fricción. Enfoque reemplaza el mosaico de apps por un único lugar donde pensar.",
  },
  {
    title: "Contexto compartido",
    description:
      "Tus tareas, gastos y eventos se relacionan entre sí. Verlos juntos revela patrones que por separado se pierden.",
  },
  {
    title: "Diseñado para uso diario",
    description:
      "Minimalista y rápido, pensado para abrir cada mañana sin fricción — no un sistema que hay que mantener.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <WhyEnfoque />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Enfoque
        </span>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#features" className="transition-colors hover:text-foreground">
            Funciones
          </a>
          <a href="#why" className="transition-colors hover:text-foreground">
            Por qué Enfoque
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 text-center sm:pt-28">
      <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Tu dashboard personal de productividad
      </div>
      <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
        Toda tu vida, en{" "}
        <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
          un solo enfoque
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted">
        Enfoque centraliza tus tareas, finanzas, calendario y conocimiento en
        un único hub, para que dejes de repartir tu atención entre diez
        aplicaciones distintas.
      </p>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Cada área de tu vida, un mismo lugar
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Enfoque reúne lo esencial de tu productividad personal en una sola
            superficie coherente.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyEnfoque() {
  return (
    <section id="why" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Por qué Enfoque
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            No es una app más. Es el lugar que reemplaza a las demás.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {reasons.map(({ title, description }) => (
            <div key={title}>
              <h3 className="text-base font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Enfoque.</span>
        <span>Hecho para pensar con claridad.</span>
      </div>
    </footer>
  );
}
