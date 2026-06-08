"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// ─── Navigation links ────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Who We Are", href: "#hero" },
  { label: "Our Services", href: "#services" },
  { label: "My Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

// ─── Jolly Roger SVG (simplified skull + crossbones) ─────────────────────────
function JollyRoger({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Crossbones */}
      <line x1="10" y1="85" x2="90" y2="55" stroke="white" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
      <line x1="90" y1="85" x2="10" y2="55" stroke="white" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
      {/* Skull */}
      <ellipse cx="50" cy="38" rx="24" ry="22" fill="white" />
      {/* Jaw */}
      <rect x="34" y="52" width="32" height="12" rx="4" fill="white" />
      {/* Teeth gaps */}
      <rect x="42" y="54" width="5" height="10" rx="1" fill="var(--primary-color, #1400c8)" />
      <rect x="53" y="54" width="5" height="10" rx="1" fill="var(--primary-color, #1400c8)" />
      {/* Eye sockets */}
      <ellipse cx="40" cy="36" rx="6" ry="7" fill="var(--primary-color, #1400c8)" />
      <ellipse cx="60" cy="36" rx="6" ry="7" fill="var(--primary-color, #1400c8)" />
      {/* Nose */}
      <ellipse cx="50" cy="45" rx="3" ry="2.5" fill="var(--primary-color, #1400c8)" />
    </svg>
  );
}

// ─── Wave divider ─────────────────────────────────────────────────────────────
function OceanWave() {
  return (
    <div style={{ position: "relative", lineHeight: 0, overflow: "hidden",marginTop:"%" }}>
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "80px", display: "block" }}
      >
        {/* Back wave */}
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill="rgba(0,0,30,0.6)"
        />
        {/* Front wave */}
        <path
          d="M0,55 C200,20 400,70 600,45 C800,20 1000,70 1200,50 C1320,38 1400,60 1440,55 L1440,80 L0,80 Z"
          fill="rgba(0,0,15,0.9)"
        />
      </svg>
    </div>
  );
}

// ─── MAIN FOOTER ─────────────────────────────────────────────────────────────
export default function Footer() {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-5% 0px" });

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const cloudX1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const cloudX2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cloudY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <>
      {/* Ocean wave transition from story section */}

      <footer
        ref={footerRef}
        style={{
          position: "relative",
          background: "rgba(0,0,15,0.97)",
          overflow: "hidden",
          paddingBottom: "0",
        }}
      >
      <OceanWave />

        {/* ── Scan-line texture (matches site aesthetic) ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.025) 3px, rgba(255,255,255,0.025) 4px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Radial glow center ── */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse at center, rgba(20,0,200,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Parallax clouds ── */}
        <motion.img
          src="/img/claude/1.png"
          style={{
            position: "absolute",
            top: "-10%",
            right: "-8%",
            x: cloudX1,
            y: cloudY,
            height: "70%",
            objectFit: "cover",
            opacity: 0.12,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <motion.img
          src="/img/claude/3.png"
          style={{
            position: "absolute",
            top: "-5%",
            left: "-8%",
            x: cloudX2,
            y: cloudY,
            height: "60%",
            objectFit: "cover",
            opacity: 0.1,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── MAIN CONTENT ── */}
        <div
          ref={contentRef}
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "5rem 2rem 3rem",
          }}
        >
          {/* ── TOP ROW ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "3rem",
              marginBottom: "4rem",
            }}
          >
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0 }}
            >
              {/* Logo lockup */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "1.2rem",
                }}
              >
                <JollyRoger size={44} />
                <div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 900,
                      color: "white",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Amirreza Yazdanpanah
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                    }}
                  >
                    DIGITAL CREW
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  maxWidth: "260px",
                  margin: "0 0 1.5rem",
                }}
              >
                Your online business card — built to sail the digital seas without a crew or a dev team.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {SOCIAL_LINKS.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "white";
                      (e.currentTarget as HTMLElement).style.background = "rgba(20,0,200,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Nav column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.7rem",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: "1.5rem",
                }}
              >
                ◆ LOG POSE
              </div>
              <nav>
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    whileHover={{ x: 6 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: 600,
                      padding: "0.55rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.3)",
                        flexShrink: 0,
                      }}
                    />
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* "Crew Status" column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.7rem",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: "1.5rem",
                }}
              >
                ◆ CREW STATUS
              </div>

              {/* Status items */}
              {[
                { label: "Availability", value: "Open for Projects", dot: "#22c55e" },
                { label: "Current Sea", value: "New World", dot: "#3b82f6" },
                { label: "Ship", value: "Dokaland Platform", dot: "#f59e0b" },
                { label: "Bounty", value: "320,000,000 Berry", dot: "#ef4444" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "0.55rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.dot,
                      flexShrink: 0,
                      boxShadow: `0 0 8px ${item.dot}`,
                    }}
                  />
                  <span
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "0.75rem",
                      minWidth: "90px",
                      fontFamily: "monospace",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Den Den Mushi (contact) column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.7rem",
                  letterSpacing: "5px",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: "1.5rem",
                }}
              >
                ◆ DEN DEN MUSHI
              </div>

              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Got a mission? A business to build? A bounty to split? Send a transponder snail.
              </p>

              <motion.a
                href="mailto:amirgta98@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0.75rem 1.5rem",
                  background: "rgba(20,0,200,0.5)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "999px",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  backdropFilter: "blur(10px)",
                  letterSpacing: "0.5px",
                  marginBottom: "0.8rem",
                  width: "100%",
                  justifyContent: "center",
                  boxSizing: "border-box",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
               amirgta98@gmail.com
              </motion.a>

            </motion.div>
          </div>

          {/* ── DIVIDER ── */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
              marginBottom: "2.5rem",
            }}
          />

          {/* ── BOTTOM BAR ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              paddingBottom: "2rem",
            }}
          >
            <div
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.78rem",
                fontFamily: "monospace",
                letterSpacing: "1px",
              }}
            >
              © {new Date().getFullYear()} Dokaland — All Rights Reserved
            </div>

            <div
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: "0.75rem",
                fontFamily: "monospace",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              ◆ BUILT ON THE GRAND LINE ◆
            </div>

            <div
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: "0.78rem",
                fontFamily: "monospace",
              }}
            >
              Amirreza Yazdanpanah
            </div>
          </motion.div>
        </div>

        {/* ── BIG WATERMARK TEXT (decorative) ── */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(4rem, 14vw, 12rem)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.025)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.04em",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
            lineHeight: 1,
          }}
        >
          DOKALAND
        </div>
      </footer>
    </>
  );
}