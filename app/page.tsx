"use client";

import React, { useState, useEffect, useRef } from "react";

// ============================================================
// DATA
// ============================================================

const TYPEWRITER_ROLES = [
  "Especialista em TI Nível 3",
  "Missão Crítica & Alta Disponibilidade",
  "Cloud Híbrida — Azure / AWS / GCP",
  "Cibersegurança & Governança de TI",
  "Virtualização de Alta Performance",
  "28 Anos de Carreira em Tecnologia",
];

const ABOUT_HIGHLIGHTS = [
  {
    icon: "🏭",
    text: "Infraestrutura de missão crítica em ambientes industriais globais com uptime acima de 99,9%",
  },
  {
    icon: "☁️",
    text: "Cloud híbrida Azure/AWS/GCP — migrações complexas de on-premise para cloud",
  },
  {
    icon: "🔒",
    text: "Cibersegurança, IAM/PAM com CyberArk e conformidade ISO 27001",
  },
  {
    icon: "💡",
    text: "Virtualização avançada: Proxmox, VMware e Hyper-V em produção real",
  },
  {
    icon: "📊",
    text: "Observabilidade Zabbix end-to-end, gestão de backups e BCP/DR",
  },
  {
    icon: "🎯",
    text: "Governança ITIL, COBIT e liderança técnica em ambientes regulamentados",
  },
];

interface Experience {
  role: string;
  company: string;
  period: string;
  upcoming?: boolean;
  accentColor: "gold" | "blue";
  bullets: string[];
}

const MAIN_EXPERIENCES: Experience[] = [
  {
    role: "Próximo Capítulo",
    company: "COMING SOON",
    period: "2026 →",
    upcoming: true,
    accentColor: "blue",
    bullets: [],
  },
  {
    role: "Supervisor de TI",
    company: "GV do Brasil — Grupo SIMEC",
    period: "Set/2025 – Mai/2026",
    accentColor: "gold",
    bullets: [
      "Liderança técnica em infraestrutura, redes e segurança da informação em ambiente industrial.",
      "Coordenação de governança de TI e padronização de processos operacionais.",
      "Supervisão de rotinas de backup com Veeam: retenção em NAS e replicação para cloud.",
      "Mitigação de riscos operacionais com monitoramento avançado e testes de BCP/DR.",
      "Zabbix End-to-End: dashboards estratégicos, tuning de performance e monitoramento proativo.",
    ],
  },
  {
    role: "Especialista em TI Nível 3",
    company: "SLB Onesubsea",
    period: "Fev/2010 – Ago/2025",
    accentColor: "gold",
    bullets: [
      "Gestão de infraestrutura híbrida em 7 unidades operacionais globais com uptime acima de 99,9%.",
      "Administração de servidores Windows, VMs Hyper-V e suporte técnico crítico N3.",
      "Backup em Commvault (cloud) e Avamar (storage 512 TB) com dados altamente regulamentados.",
      "Migração de servidores on-premise para Azure com apoio ao time global de engenharia.",
      "Vivência com acessos privilegiados via CyberArk integrado a MFA.",
      "Atendimento de auditorias internas/externas, planos de ação e conformidade ITIL.",
      "Vivência com framework Agile Kanban e ServiceNow para gestão de incidentes.",
    ],
  },
];

const LEGACY_EXPERIENCES = [
  { company: "Gerdau", period: "2008–2010" },
  { company: "Sidenor Villares", period: "2004" },
  { company: "Alstom", period: "2002" },
  { company: "EMBRAER", period: "2000" },
  { company: "Alcan – Aluminios do Brasil", period: "1999" },
  { company: "Confab Tubos", period: "1998" },
];

const SKILL_CATEGORIES = [
  "Todos",
  "Infra",
  "Cloud",
  "Segurança",
  "Gestão",
  "Monitoramento",
] as const;
type SkillCategory = (typeof SKILL_CATEGORIES)[number];

const SKILLS: { name: string; cat: SkillCategory }[] = [
  { name: "Linux & Windows Server", cat: "Infra" },
  { name: "Virtualização (Proxmox/VMWare/Hyper-V)", cat: "Infra" },
  { name: "Active Directory", cat: "Infra" },
  { name: "Azure AD", cat: "Infra" },
  { name: "Microsoft 365", cat: "Infra" },
  { name: "PowerShell", cat: "Infra" },
  { name: "Ambientes Corporativos Complexos", cat: "Infra" },
  { name: "Cloud Híbrida (Azure/AWS/GCP)", cat: "Cloud" },
  { name: "Migração para Azure", cat: "Cloud" },
  { name: "IAM", cat: "Segurança" },
  { name: "PAM", cat: "Segurança" },
  { name: "CyberArk", cat: "Segurança" },
  { name: "MFA", cat: "Segurança" },
  { name: "ISO27001", cat: "Segurança" },
  { name: "Auditoria & Conformidade", cat: "Segurança" },
  { name: "Governança de TI", cat: "Gestão" },
  { name: "ITIL", cat: "Gestão" },
  { name: "COBIT", cat: "Gestão" },
  { name: "Kanban", cat: "Gestão" },
  { name: "ServiceNow", cat: "Gestão" },
  { name: "BMCRemedy", cat: "Gestão" },
  { name: "Observabilidade (Zabbix)", cat: "Monitoramento" },
  { name: "Gestão de Backups & BCP/DR", cat: "Monitoramento" },
  { name: "Veeam", cat: "Monitoramento" },
  { name: "Commvault", cat: "Monitoramento" },
  { name: "Avamar", cat: "Monitoramento" },
];

const CERTS = [
  { code: "MD-100", full: "Microsoft Windows 10", icon: "/md100-badge.png" },
  {
    code: "MS-100",
    full: "Identity and Access Administrator Associate",
    icon: "/ms100-badge.png",
  },
  {
    code: "MS-900",
    full: "Security, Compliance & Identity Fundamentals",
    icon: "/ms900-badge.png",
  },
  { code: "MS-700", full: "Teams Administrator Associate", icon: "/ms700-badge.png" },
];

const LEARNING = [
  { name: "Python", pct: 60 },
  { name: "ShellScript", pct: 70 },
  { name: "Terraform", pct: 45 },
  { name: "React / Next.js", pct: 35 },
  { name: "Node.js", pct: 30 },
  { name: "Oracle RAC", pct: 40 },
];

const MEDIA_TOPICS = [
  {
    icon: "⚡",
    title: "A Realidade do Uptime",
    desc: "O que realmente acontece nos bastidores para garantir 99,9% de disponibilidade em ambientes industriais de missão crítica — crises reais, decisões sob pressão.",
  },
  {
    icon: "☁️",
    title: "Transição On-Premise → Cloud",
    desc: "Cicatrizes, lições aprendidas e verdades não contadas nas migrações de infraestruturas complexas para o Azure. Uma perspectiva de campo, não de whitepaper.",
  },
  {
    icon: "📡",
    title: "Evolução da TI (1997–2026)",
    desc: "Uma retrospectiva de 28 anos: do suporte físico aos clusters de virtualização modernos. Como a carreira de infraestrutura se transforma e o que vem a seguir.",
  },
];

// ============================================================
// HOOKS
// ============================================================

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useTypewriter(
  words: string[],
  typeSpeed = 75,
  deleteSpeed = 38,
  pause = 2400
) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) return;
    const word = words[wordIdx % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(word.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
          if (charIdx + 1 === word.length) {
            setWaiting(true);
            setTimeout(() => {
              setWaiting(false);
              setDeleting(true);
            }, pause);
          }
        } else {
          setText(word.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, waiting, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function useCountUp(target: number, decimals = 0, duration = 2200) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const animate = (t: number) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, decimals, duration]);

  return { count, ref };
}

function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

// ============================================================
// HEADER
// ============================================================

function Header() {
  const scrolled = useScrolled();

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
    background: scrolled ? "rgba(5,5,8,0.94)" : "transparent",
    backdropFilter: scrolled ? "blur(18px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
    borderBottom: scrolled
      ? "1px solid rgba(212,175,55,0.14)"
      : "1px solid transparent",
  };

  const linkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.65)",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.03em",
    transition: "color 0.2s",
    cursor: "pointer",
  };

  const hoverLink = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
    e.currentTarget.style.color = enter ? "var(--gold)" : "rgba(255,255,255,0.65)";
  };

  return (
    <header style={navStyle}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >


        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {(
            [
              ["#sobre", "Sobre"],
              ["#experiencia", "Experiência"],
              ["#skills", "Skills"],
              ["#midia", "Mídia"],
            ] as [string, string][]
          ).map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="hide-mobile"
              style={linkStyle}
              onMouseEnter={(e) => hoverLink(e, true)}
              onMouseLeave={(e) => hoverLink(e, false)}
            >
              {label}
            </a>
          ))}

          {/* English flag */}
          <a
            href="https://thiagorodrigues-ti-en.vercel.app"
            target="_blank"
            rel="noreferrer"
            title="Switch to English"
            style={{ display: "flex", alignItems: "center", transition: "transform 0.2s, opacity 0.2s", opacity: 0.8 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.12)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.opacity = "0.8";
            }}
          >
            <img
              src="/usa-flag.png"
              alt="English Version"
              style={{ width: "26px", height: "auto", borderRadius: "3px" }}
            />
          </a>

          {/* CTA */}
          <a
            href="#contato"
            style={{
              background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
              color: "var(--black-deep)",
              padding: "0.5rem 1.2rem",
              borderRadius: "6px",
              fontSize: "0.82rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "all 0.25s",
              boxShadow: "0 0 18px rgba(212,175,55,0.28)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(212,175,55,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 18px rgba(212,175,55,0.28)";
            }}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

// ============================================================
// HERO
// ============================================================

function HeroSection() {
  const role = useTypewriter(TYPEWRITER_ROLES);

  const btnBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.9rem 2rem",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "0.9rem",
    textDecoration: "none",
    letterSpacing: "0.04em",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 60% at 25% 50%, rgba(0,118,206,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 75% 30%, rgba(212,175,55,0.06) 0%, transparent 55%), #050508",
      }}
    >
      {/* Grid background */}
      <div className="circuit-bg" />

      {/* Bottom glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "280px",
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.055) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "7rem 2rem 2rem",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="hero-grid">
          {/* ── Left: Text ── */}
          <div>
            {/* Eyebrow badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.28)",
                borderRadius: "100px",
                padding: "0.35rem 1rem",
                marginBottom: "2rem",
                animation: "fadeInUp 0.6s ease both",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--gold)",
                  display: "inline-block",
                  animation: "pulseDot 2s infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.68rem",
                  color: "var(--gold)",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Portfólio Profissional · 2026
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(3rem, 6.5vw, 5.8rem)",
                fontWeight: 900,
                lineHeight: 1.03,
                color: "#fff",
                marginBottom: "1.5rem",
                animation: "fadeInUp 0.7s ease 0.1s both",
              }}
            >
              Thiago
              <br />
              <span className="text-gold-gradient">Rodrigues</span>
            </h1>

            {/* Typewriter */}
            <div
              style={{
                minHeight: "2.2rem",
                marginBottom: "1.75rem",
                animation: "fadeInUp 0.7s ease 0.2s both",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1rem, 2.4vw, 1.35rem)",
                  color: "rgba(255,255,255,0.65)",
                  fontWeight: 300,
                  letterSpacing: "0.01em",
                }}
              >
                {role}
                <span className="cursor-blink" style={{ color: "var(--gold)", marginLeft: "2px" }}>
                  |
                </span>
              </p>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.45)",
                maxWidth: "500px",
                lineHeight: 1.75,
                marginBottom: "2.75rem",
                animation: "fadeInUp 0.7s ease 0.3s both",
              }}
            >
              28 anos garantindo que sistemas críticos nunca param. Especialista
              em cloud híbrida, virtualização e cibersegurança em ambientes
              industriais globais.
            </p>


          </div>

          {/* ── Right: Photo ── */}
          <div
            className="hero-photo-col"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <div
              className="hex-outer-wrap"
              style={{ animation: "fadeInUp 0.9s ease 0.2s both" }}
            >
              <div className="hex-border-ring" />
              <div className="hex-inner">
                <img
                  src="/sua-foto.png"
                  alt="Thiago Rodrigues — Especialista em TI N3"
                  className="hex-photo"
                />
              </div>
              <div className="orbit-badge">28 Anos de Carreira</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.55,
          animation: "fadeInUp 1s ease 1s both",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div className="scroll-dot" />
      </div>
    </section>
  );
}

// ============================================================
// NUMBERS
// ============================================================

function MetricCard({
  target,
  suffix,
  label,
  color,
  decimals,
  isLast,
}: {
  target: number;
  suffix: string;
  label: string;
  color: string;
  decimals: number;
  isLast?: boolean;
}) {
  const { count, ref } = useCountUp(target, decimals);
  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "2.5rem 1.5rem",
        borderRight: isLast ? "none" : "1px solid #e5e7eb",
        position: "relative",
      }}
    >
      <div
        style={{
          fontSize: "clamp(2.4rem, 5vw, 4rem)",
          fontFamily: "var(--font-fraunces)",
          fontWeight: 700,
          color,
          lineHeight: 1,
          marginBottom: "0.5rem",
          letterSpacing: "-0.01em",
        }}
      >
        {decimals > 0 ? count.toFixed(decimals) : count}
        {suffix}
      </div>
      <div
        style={{
          fontSize: "0.78rem",
          color: "#9ca3af",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "2.5rem",
          height: "2px",
          background: color,
          borderRadius: "2px",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

function NumbersSection() {
  const metrics = [
    { target: 28, suffix: " Anos", label: "de Carreira", color: "#D4AF37", decimals: 0 },
    { target: 99.9, suffix: "%", label: "Uptime Garantido", color: "#0076CE", decimals: 1 },
    { target: 7, suffix: "+", label: "Unidades Operacionais", color: "#D4AF37", decimals: 0 },
    { target: 4, suffix: "", label: "Certificações Microsoft", color: "#0076CE", decimals: 0 },
  ];

  return (
    <section style={{ background: "#fff" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} isLast={i === metrics.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ABOUT
// ============================================================

function AboutSection() {
  return (
    <section
      id="sobre"
      style={{
        background: "var(--black-mid)",
        padding: "8rem 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="reveal" style={{ marginBottom: "1rem" }}>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            — Sobre Mim
          </span>
        </div>

        <div className="two-col">
          {/* Left — Story */}
          <div className="reveal-left">
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                fontWeight: 900,
                lineHeight: 1.08,
                color: "#fff",
                marginBottom: "2rem",
              }}
            >
              Uma carreira forjada
              <br />
              <em
                className="text-gold-gradient"
                style={{ fontStyle: "italic" }}
              >
                sob pressão real.
              </em>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.58)",
                fontSize: "1.05rem",
                lineHeight: 1.82,
                marginBottom: "1.5rem",
              }}
            >
              Desde 1998, construí minha carreira onde a TI realmente importa: em
              plantas industriais, em centros de dados de missão crítica, em
              ambientes onde uma hora de downtime significa milhões em prejuízo.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.42)",
                fontSize: "0.975rem",
                lineHeight: 1.82,
              }}
            >
              De EMBRAER e Alstom às operações globais da SLB Onesubsea, aprendi
              que infraestrutura de verdade se constrói com método, resiliência e
              um olhar permanente para o horizonte tecnológico. Hoje, trago essa
              experiência para times que precisam de mais do que um
              &quot;especialista&quot;, precisam de um guardião da operação.
            </p>
          </div>

          {/* Right — Highlights */}
          <div className="reveal-right">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {ABOUT_HIGHLIGHTS.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "12px",
                    padding: "1rem 1.25rem",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(212,175,55,0.28)";
                    e.currentTarget.style.background =
                      "rgba(212,175,55,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.03)";
                  }}
                >
                  <span style={{ fontSize: "1.35rem", flexShrink: 0 }}>
                    {h.icon}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.9rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {h.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// EXPERIENCE
// ============================================================

function ExperienceCard({
  exp,
  index,
  expanded,
  onToggle,
}: {
  exp: Experience;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const isGold = exp.accentColor === "gold";
  const isUpcoming = exp.upcoming;
  const accent = isGold
    ? "212,175,55"
    : "0,118,206";
  const accentHex = isGold ? "#D4AF37" : "#0076CE";

  return (
    <div
      className="reveal"
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      {/* Dot */}
      <div style={{ flexShrink: 0, paddingTop: "1.5rem" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: `rgba(${accent},0.1)`,
            border: `2px solid ${isUpcoming ? `rgba(${accent},0.3)` : accentHex}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: isUpcoming
              ? "none"
              : `0 0 18px rgba(${accent},0.28)`,
            animation: isUpcoming ? "pulseDot 2.2s infinite" : "none",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: isUpcoming ? `rgba(${accent},0.4)` : accentHex,
            }}
          />
        </div>
      </div>

      {/* Card */}
      <div
        onClick={!isUpcoming ? onToggle : undefined}
        style={{
          flex: 1,
          background: isUpcoming
            ? `repeating-linear-gradient(-45deg, rgba(${accent},0.025), rgba(${accent},0.025) 2px, transparent 2px, transparent 14px)`
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${isUpcoming ? `rgba(${accent},0.18)` : "rgba(255,255,255,0.07)"}`,
          borderRadius: "18px",
          padding: "1.75rem 2rem",
          cursor: isUpcoming ? "default" : "pointer",
          transition: "all 0.35s ease",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          if (!isUpcoming) {
            e.currentTarget.style.borderColor = `rgba(${accent},0.38)`;
            e.currentTarget.style.background = `rgba(${accent},0.04)`;
          }
        }}
        onMouseLeave={(e) => {
          if (!isUpcoming) {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
          }
        }}
      >
        {/* Period badge */}
        <span
          style={{
            position: "absolute",
            top: "1.4rem",
            right: "1.4rem",
            fontSize: "0.72rem",
            color: accentHex,
            background: `rgba(${accent},0.1)`,
            border: `1px solid rgba(${accent},0.25)`,
            padding: "0.22rem 0.75rem",
            borderRadius: "100px",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          {exp.period}
        </span>

        {/* Role */}
        <h3
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: isUpcoming ? "1.5rem" : "1.25rem",
            fontWeight: 700,
            color: isUpcoming ? `rgba(${accent},0.55)` : "#fff",
            marginBottom: "0.4rem",
            paddingRight: "9rem",
            fontStyle: isUpcoming ? "italic" : "normal",
          }}
        >
          {isUpcoming ? "✦  Próximo Capítulo" : exp.role}
        </h3>

        {/* Company */}
        <p
          style={{
            color: accentHex,
            fontWeight: 600,
            fontSize: "0.88rem",
            marginBottom: isUpcoming ? 0 : "1rem",
            opacity: isUpcoming ? 0.55 : 1,
          }}
        >
          {exp.company}
        </p>

        {/* Expandable bullets */}
        {!isUpcoming && (
          <>
            <div
              style={{
                maxHeight: expanded ? "600px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  paddingTop: "0.25rem",
                }}
              >
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      color: "rgba(255,255,255,0.58)",
                      fontSize: "0.88rem",
                      lineHeight: 1.65,
                    }}
                  >
                    <span
                      style={{
                        color: accentHex,
                        flexShrink: 0,
                        marginTop: "0.3rem",
                        fontSize: "0.7rem",
                      }}
                    >
                      ▸
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                marginTop: "1rem",
                color: "rgba(255,255,255,0.28)",
                fontSize: "0.78rem",
                userSelect: "none",
              }}
            >
              {expanded ? "▲ Recolher" : "▼ Ver detalhes"}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="experiencia"
      style={{ background: "#0a0a0f", padding: "8rem 0" }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            — Trajetória
          </span>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.12,
            }}
          >
            Experiência Profissional
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div className="timeline-line" />
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {MAIN_EXPERIENCES.map((exp, i) => (
              <ExperienceCard
                key={i}
                exp={exp}
                index={i}
                expanded={expanded === i}
                onToggle={() => setExpanded(expanded === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* Legacy */}
        <div className="reveal" style={{ marginTop: "5rem" }}>
          <h3
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.35)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              marginBottom: "1.75rem",
              paddingLeft: "4.5rem",
            }}
          >
            Legado Operacional (1998–2010)
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "0.85rem",
              paddingLeft: "4.5rem",
            }}
          >
            {LEGACY_EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  padding: "0.9rem 1.15rem",
                  transition: "border-color 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <div
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.72)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {exp.company}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.32)",
                  }}
                >
                  Suporte & Infraestrutura · {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SKILLS
// ============================================================

function ProgressBar({
  name,
  pct,
  index,
}: {
  name: string;
  pct: number;
  index: number;
}) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.45rem",
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#374151",
          }}
        >
          {name}
        </span>
        <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{pct}%</span>
      </div>
      <div
        style={{
          height: "5px",
          background: "#e5e7eb",
          borderRadius: "100px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: started ? `${pct}%` : "0%",
            background: "linear-gradient(90deg, var(--blue), var(--blue-light))",
            borderRadius: "100px",
            transition: `width 1.3s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s`,
          }}
        />
      </div>
    </div>
  );
}

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Todos");

  const filtered =
    activeCategory === "Todos"
      ? SKILLS
      : SKILLS.filter((s) => s.cat === activeCategory);

  return (
    <section
      id="skills"
      style={{ background: "#f7f8fa", padding: "8rem 0" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            className="section-label"
            style={{ color: "var(--blue)", display: "block" }}
          >
            — Competências
          </span>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "#0a0a0f",
              lineHeight: 1.12,
            }}
          >
            Arsenal Técnico
          </h2>
        </div>

        {/* Certifications */}
        <div className="reveal" style={{ marginBottom: "4rem" }}>
          <h3
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "1.4rem",
            }}
          >
            Certificações Microsoft
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
              gap: "1rem",
            }}
          >
            {CERTS.map((cert, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "14px",
                  padding: "1.35rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  transition: "all 0.28s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 22px rgba(212,175,55,0.16)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.boxShadow =
                    "0 1px 4px rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: "100px", height: "100px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {cert.icon.startsWith("/") ? (
                    <img
                      src={cert.icon}
                      alt={cert.code}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  ) : (
                    <span style={{ fontSize: "2rem" }}>{cert.icon}</span>
                  )}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "var(--blue)",
                      letterSpacing: "0.1em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {cert.code}
                  </div>
                  <div
                    style={{
                      fontSize: "0.84rem",
                      color: "#374151",
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.full}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills filter */}
        <div className="reveal">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.4rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              Tecnologias & Ferramentas
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "0.38rem 0.95rem",
                    borderRadius: "100px",
                    border: "1px solid",
                    borderColor:
                      activeCategory === cat ? "var(--blue)" : "#d1d5db",
                    background:
                      activeCategory === cat ? "var(--blue)" : "transparent",
                    color: activeCategory === cat ? "#fff" : "#6b7280",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.04em",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
            {filtered.map((skill, i) => (
              <span
                key={`${skill.name}-${activeCategory}`}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  color: "#374151",
                  padding: "0.5rem 1.2rem",
                  borderRadius: "100px",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  transition: "all 0.24s ease",
                  cursor: "default",
                  animation: `fadeInUp 0.35s ease ${i * 0.025}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "#7a5a10";
                  e.currentTarget.style.background = "rgba(212,175,55,0.07)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.color = "#374151";
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Learning now */}
        <div
          className="reveal"
          style={{
            marginTop: "3.5rem",
            background: "#fff",
            borderRadius: "18px",
            padding: "2rem 2.25rem",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
          }}
        >
          <h3
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "1.75rem",
            }}
          >
            🚀 Aprendendo Agora
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {LEARNING.map((item, i) => (
              <ProgressBar key={i} name={item.name} pct={item.pct} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// MEDIA KIT
// ============================================================

function MediaKitSection() {
  return (
    <section
      id="midia"
      style={{
        background: "var(--black-deep)",
        padding: "5rem 0 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Spotlight glow */}
      <div
        style={{
          position: "absolute",
          top: "-250px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <span className="section-label" style={{ color: "var(--gold)", display: "block" }}>
            — Media Kit
          </span>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "1.4rem",
            }}
          >
            Vamos falar sobre o
            <br />
            <em className="text-gold-gradient" style={{ fontStyle: "italic" }}>
              mundo real da TI.
            </em>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.48)",
              maxWidth: "520px",
              margin: "0 auto",
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
          >
            Disponível para podcasts, palestras em eventos tech, aulas magnas e
            painéis de debate. Histórias de campo, crises reais e 28 anos de
            perspectiva.
          </p>
        </div>

        {/* Topic cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.5rem",
            marginBottom: "0",
          }}
        >
          {MEDIA_TOPICS.map((topic, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "2.5rem 2rem",
                transition: "all 0.38s ease",
                cursor: "default",
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,175,55,0.38)";
                e.currentTarget.style.background = "rgba(212,175,55,0.04)";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(212,175,55,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2.4rem", marginBottom: "1.4rem" }}>
                {topic.icon}
              </div>
              <p
                style={{
                  fontSize: "0.68rem",
                  color: "var(--gold)",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.7rem",
                }}
              >
                Tópico {i + 1}
              </p>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.9rem",
                  lineHeight: 1.3,
                }}
              >
                {topic.title}
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.6,
                }}
              >
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTACT
// ============================================================

function ContactSection() {
  const contactLinks = [
    {
      href: "mailto:thiagoaneas@gmail.com",
      label: "Email",
      emoji: "✉️" as string | null,
      img: null as string | null,
      rgb: "212,175,55",
    },
    {
      href: "https://www.linkedin.com/in/thiagorodrigues-ti",
      label: "LinkedIn",
      emoji: "in",
      img: null as string | null,
      rgb: "0,118,206",
    },
    {
      href: "https://api.whatsapp.com/send?phone=5512991928266",
      label: "WhatsApp",
      emoji: null as string | null,
      img: "/whatsapp-logo.png",
      rgb: "37,211,102",
    },
    {
      href: "https://cyberr.ai/u/thiagoaneas",
      label: "CyberR",
      emoji: null as string | null,
      img: "/cyberr-logo.png",
      rgb: "100,120,255",
    },
  ];

  return (
    <section
      id="contato"
      style={{ background: "var(--black-mid)", padding: "4rem 0 0" }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
        }}
      >
        <div className="reveal">
          <span
            className="section-label"
            style={{ color: "var(--gold)", display: "block" }}
          >
            — Contato
          </span>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.08,
              marginBottom: "1rem",
            }}
          >
            Pronto para o
            <br />
            <em className="text-gold-gradient" style={{ fontStyle: "italic" }}>
              próximo desafio.
            </em>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "1rem",
              lineHeight: 1.78,
              maxWidth: "500px",
              margin: "0 auto 3.5rem",
            }}
          >
            Seja para uma entrevista, um projeto de infraestrutura crítica, um
            podcast ou simplesmente uma conversa sobre o mercado de TI, entre
            em contato.
          </p>
        </div>

        {/* Social Cards */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
            flexWrap: "wrap",
            marginBottom: "5.5rem",
          }}
        >
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.55rem",
                padding: "1.5rem 1.75rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                minWidth: "100px",
              }}
              onMouseEnter={(e) => {
                const r = link.rgb;
                e.currentTarget.style.borderColor = `rgba(${r},0.6)`;
                e.currentTarget.style.background = `rgba(${r},0.08)`;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 12px 40px rgba(${r},0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {link.img ? (
                <img
                  src={link.img}
                  alt={link.label}
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
              ) : (
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    color: `rgba(${link.rgb},1)`,
                  }}
                >
                  {link.emoji}
                </span>
              )}
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>


      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.75rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}
          >
            © {new Date().getFullYear()} Thiago Rodrigues. Todos os direitos
            reservados.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              {
                href: "https://www.linkedin.com/in/thiagorodrigues-ti",
                label: "LinkedIn",
              },
              { href: "#midia", label: "Media Kit" },
              {
                href: "https://thiagorodrigues-ti-en.vercel.app",
                label: "English",
              },
            ].map((l, i) => (
              <a
                key={i}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                style={{
                  color: "rgba(255,255,255,0.28)",
                  fontSize: "0.78rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.28)")
                }
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}

// ============================================================
// ROOT PAGE
// ============================================================

export default function PortfolioPage() {
  useReveal();

  return (
    <main>
      <Header />
      <HeroSection />
      <NumbersSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <MediaKitSection />
      <ContactSection />
    </main>
  );
}
