import { motion ,useInView } from "motion/react";
import { useRef} from "react";
// ─── Bounty / Wanted Poster ───────────────────────────────────────────────────
export default function WantedPoster({ isMobile }: { isMobile: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotate: -6, y: 80 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: -3, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ rotate: 0, scale: 1.04 }}
      style={{
        position: "relative",
        cursor: "pointer",
        transformOrigin: "center bottom",
        // On mobile, shrink and center the poster
        maxWidth: isMobile ? "220px" : "380px",
        margin: isMobile ? "0 auto" : undefined,
      }}
    >
      {/* Tape strips */}
      <div
        style={{
          position: "absolute",
          top: "-18px",
          left: "50%",
          transform: "translateX(-50%) rotate(-2deg)",
          width: isMobile ? "60px" : "80px",
          height: isMobile ? "22px" : "28px",
          background: "rgba(255,240,100,0.55)",
          backdropFilter: "blur(4px)",
          zIndex: 2,
          borderRadius: "2px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-14px",
          left: "20%",
          transform: "rotate(8deg)",
          width: isMobile ? "36px" : "50px",
          height: isMobile ? "18px" : "22px",
          background: "rgba(255,240,100,0.35)",
          backdropFilter: "blur(4px)",
          zIndex: 2,
          borderRadius: "2px",
        }}
      />

      {/* Shadow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "8px",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(255,200,50,0.15)",
          zIndex: 0,
        }}
      />

      {/* The actual poster image */}
      <img
        src="/img/aboutMe/wanted.png"
        alt="WANTED — AMIRREZA YAZDANPANAH"
        style={{
          display: "block",
          width: "100%",
          maxWidth: isMobile ? "220px" : "380px",
          borderRadius: "8px",
          position: "relative",
          zIndex: 1,
          filter: "sepia(0.15) contrast(1.05)",
        }}
      />
    </motion.div>
  );
}
