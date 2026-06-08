"use client";

import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import ChapterCard from "./aboutMe/ChapterCard";
import WantedPoster from "./aboutMe/WantedPoster";

// ─── Breakpoint hook ──────────────────────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

// ─── Story "log poses" — your arc chapters ───────────────────────────────────
const ARC_ENTRIES = [
  {
    ep: "Chapter 001",
    label: "THE BEGINNING",
    title: "First Line of Code",
    body:
      "Born in Isfahan, Iran, I got into programming at around 12 years old. I started with C++ and Arduino, building small experiments and learning how software interacts with hardware. That curiosity slowly turned into a long-term obsession with the web.",
    icon: "🌱",
  },
  {
    ep: "Chapter 047",
    label: "THE BUILD PHASE",
    title: "From Code to Real Products",
    body:
      "Over time I moved from small projects into real-world development. I learned modern web technologies and started working professionally with React, Next.js, and .NET. This is where coding stopped being a hobby and became a career path.",
    icon: "⚙️",
  },
  {
    ep: "Chapter 112",
    label: "PROFESSIONAL ERA",
    title: "Building Real Systems",
    body:
      "One of my key experiences was working with KingWeb.ca, a Canadian web development company, where I spent around three years building and maintaining real production systems. That experience shaped how I think about scalability, performance, and real-world delivery.",
    icon: "🏗️",
  },
  {
    ep: "Chapter FINAL",
    label: "CURRENT STATE",
    title: "Building What Comes Next",
    body:
      "Today I focus on building modern web applications using React, Next.js, and .NET. My goal is to create impactful digital products and collaborate on serious projects where engineering quality actually matters.",
    icon: "🚀",
  },
];



// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function MyStorySection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-10% 0px" });
  const isMobile = useIsMobile(768);

  // Parallax on the section itself
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cloudAX = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const cloudAY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const cloudBX = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const cloudBY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        background: "var(--primary-color, #1400c8)",
        overflow: "hidden",
        paddingBottom: isMobile ? "5rem" : "8rem",
      }}
    >
      {/* ── Floating cloud parallax ── */}
      <motion.img
        src="/img/claude/2.png"
        style={{
          position: "absolute",
          top: "0%",
          right: "-5%",
          x: cloudAX,
          y: cloudAY,
          // Smaller on mobile so they don't eat the layout
          height: isMobile ? "30%" : "50%",
          objectFit: "cover",
          pointerEvents: "none",
          opacity: isMobile ? 0.35 : 0.6,
        }}
      />
      <motion.img
        src="/img/claude/4.png"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          x: cloudBX,
          y: cloudBY,
          height: isMobile ? "25%" : "40%",
          objectFit: "cover",
          pointerEvents: "none",
          opacity: isMobile ? 0.3 : 0.5,
        }}
      />

      {/* Scan lines texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Section header ── */}
      <div
        ref={titleRef}
        style={{
          textAlign: "center",
          padding: isMobile ? "4rem 1rem 3rem" : "7rem 1rem 5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Chapter label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "rgba(255,255,255,0.45)",
              fontSize: isMobile ? "0.7rem" : "0.8rem",
              letterSpacing: isMobile ? "4px" : "6px",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              fontFamily: "monospace",
            }}
          >
            <span
              style={{
                height: "1px",
                width: isMobile ? "24px" : "40px",
                background: "rgba(255,255,255,0.3)",
              }}
            />
            MY LOG POSE
            <span
              style={{
                height: "1px",
                width: isMobile ? "24px" : "40px",
                background: "rgba(255,255,255,0.3)",
              }}
            />
          </div>

          <h2
            style={{
              fontSize: isMobile
                ? "clamp(2.8rem, 14vw, 4rem)"
                : "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              margin: "0 0 1.25rem",
              color: "white",
              letterSpacing: "-0.03em",
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #fff, #aaa, #fff)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Story
            </span>
            <br />
            Arc
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: isMobile ? "0.9rem" : "1.1rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
              padding: isMobile ? "0 0.5rem" : 0,
            }}
          >
            Every pirate has an origin. Here's mine — from the East Blue to the
            New World, one commit at a time.
          </p>
        </motion.div>
      </div>

      {/* ── Layout: two-column on desktop, single column on mobile ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: isMobile ? "0 1rem" : "0 2rem",
          // On desktop: side-by-side. On mobile: stacked.
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
          gap: isMobile ? "0" : "4rem",
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── On mobile: show wanted poster FIRST (above chapters) ── */}
        {isMobile && (
          <div
            style={{
              marginBottom: "3rem",
              paddingTop: "0.5rem",
            }}
          >
            <WantedPoster isMobile={isMobile} />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: "1.75rem",
                textAlign: "center",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.7rem",
                letterSpacing: "3px",
                fontFamily: "monospace",
              }}
            >
              ◆ STATUS: BUILDING ◆
            </motion.div>
          </div>
        )}

        {/* Left / main: Chapter cards */}
        <div>
          <div style={{ position: "relative" }}>
            {ARC_ENTRIES.map((entry, i) => (
              <ChapterCard
                key={i}
                entry={entry}
                index={i}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        {/* Right: Sticky wanted poster — desktop only */}
        {!isMobile && (
          <div
            style={{
              position: "sticky",
              top: "20vh",
              alignSelf: "start",
              paddingTop: "1rem",
            }}
          >
            <WantedPoster isMobile={isMobile} />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              style={{
                marginTop: "2.5rem",
                textAlign: "center",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.75rem",
                letterSpacing: "3px",
                fontFamily: "monospace",
              }}
            >
              ◆ STATUS: BUILDING ◆
            </motion.div>
          </div>
        )}
      </div>

      {/* ── Bottom CTA strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: "700px",
          margin: isMobile ? "4rem 1rem 0" : "6rem auto 0",
          padding: isMobile ? "2rem 1.5rem" : "3rem 2.5rem",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: isMobile ? "16px" : "20px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: isMobile ? "0.65rem" : "0.75rem",
            letterSpacing: isMobile ? "3px" : "5px",
            textTransform: "uppercase",
            marginBottom: "0.875rem",
            fontFamily: "monospace",
          }}
        >
          WANT TO JOIN THE CREW?
        </div>

        <h3
          style={{
            fontSize: isMobile
              ? "clamp(1.5rem, 7vw, 2rem)"
              : "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "white",
            margin: "0 0 0.875rem",
            lineHeight: 1,
          }}
        >
          Let's Build
          <br />
          <span
            style={{
              background: "linear-gradient(90deg,#fff,#aaa,#fff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Something Legendary
          </span>
        </h3>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: isMobile ? "0.875rem" : "1rem",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          I'm always on the lookout for the next great project, collab, or
          adventure. Drop me a message — no Marines allowed.
        </p>

        <motion.a
          href="mailto:amirgta98@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-block",
            padding: isMobile ? "0.875rem 1.75rem" : "1rem 2.5rem",
            background: "white",
            color: "#0a0a0a",
            fontWeight: 800,
            fontSize: isMobile ? "0.875rem" : "1rem",
            borderRadius: "999px",
            textDecoration: "none",
            letterSpacing: "1px",
            boxShadow: "0 0 40px rgba(255,255,255,0.2)",
            cursor: "pointer",
            // Ensure it doesn't overflow on tiny screens
            maxWidth: "100%",
            wordBreak: "break-word",
          }}
        >
          ⚓ SEND Me An Email
        </motion.a>
      </motion.div>
    </section>
  );
}