import { useInView } from "motion/react";
import { useRef } from "react";
import { motion} from "motion/react";

const ARC_ENTRIES = [
  {
    ep: "Chapter 001",
    label: "THE BEGINNING",
    title: "A Kid With A Keyboard",
    body: "Born in Iran, I fell in love with the web before I understood it. No bootcamp, no CS degree — just a browser, a text editor, and a dangerous amount of curiosity. Every night was a new experiment.",
    icon: "🌊",
  },
  {
    ep: "Chapter 047",
    label: "THE GRAND LINE",
    title: "Crossing Into the Unknown",
    body: "I shipped my first real product and immediately broke production at 2 AM. That was the turning point. Pressure taught me more than any tutorial — React, Node, databases, DevOps — I learned by surviving.",
    icon: "⚓",
  },
  {
    ep: "Chapter 112",
    label: "THE NEW WORLD",
    title: "Building Dokaland",
    body: "I wanted to give businesses a digital home — not just a website, but a full platform. Online stores, booking systems, POS. Dokaland became my Thousand Sunny: built from scratch, sail-ready, and always improving.",
    icon: "🏴‍☠️",
  },
  {
    ep: "Chapter ???",
    label: "STILL WRITING",
    title: "The Adventure Continues",
    body: "Bounty: 320,000,000 Berry. Status: At large. The Marine Headquarters can't figure out what I'll build next. Neither can I — and that's the whole point.",
    icon: "⭐",
  },
];
// ─── Single arc chapter card ──────────────────────────────────────────────────
export default function ChapterCard({
  entry,
  index,
  isMobile,
}: {
  entry: (typeof ARC_ENTRIES)[0];
  index: number;
  isMobile: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  // On mobile always slide from left; on desktop alternate
  const isEven = index % 2 === 0;
  const xOffset = isMobile ? -40 : isEven ? -60 : 60;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset, y: 20 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        display: "flex",
        // On mobile always row (icon left, text right); on desktop alternate
        flexDirection: isMobile ? "row" : isEven ? "row" : "row-reverse",
        alignItems: "flex-start",
        gap: isMobile ? "0.875rem" : "2rem",
        marginBottom: isMobile ? "2rem" : "4rem",
        position: "relative",
      }}
    >
      {/* Arc icon bubble */}
      <div
        style={{
          flexShrink: 0,
          width: isMobile ? "40px" : "56px",
          height: isMobile ? "40px" : "56px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          border: "2px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isMobile ? "1.15rem" : "1.6rem",
          backdropFilter: "blur(8px)",
          marginTop: "0.5rem",
        }}
      >
        {entry.icon}
      </div>

      {/* Text block */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: isMobile ? "12px" : "16px",
          padding: isMobile ? "1.1rem 1.2rem" : "1.8rem 2rem",
          backdropFilter: "blur(12px)",
          maxWidth: "500px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          // On mobile always left accent; on desktop alternate
          borderLeft: isMobile || isEven ? undefined : undefined,
        }}
      >
        {/* Glow accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: isMobile ? 0 : isEven ? 0 : "auto",
            right: isMobile ? "auto" : isEven ? "auto" : 0,
            width: "3px",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
            borderRadius: "999px",
          }}
        />

        <div
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: isMobile ? "0.65rem" : "0.75rem",
            letterSpacing: isMobile ? "3px" : "5px",
            textTransform: "uppercase",
            marginBottom: "0.4rem",
            fontFamily: "monospace",
            // Prevent overflow on very small screens
            whiteSpace: isMobile ? "normal" : "nowrap",
            lineHeight: 1.4,
          }}
        >
          {entry.ep} — {entry.label}
        </div>

        <h3
          style={{
            fontSize: isMobile ? "clamp(1.1rem, 5vw, 1.4rem)" : "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 900,
            color: "white",
            margin: "0 0 0.75rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {entry.title}
        </h3>

        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: isMobile ? "0.875rem" : "1rem",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {entry.body}
        </p>
      </div>
    </motion.div>
  );
}
