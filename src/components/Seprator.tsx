"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Seprator = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🌫️ floating images (same language as hero but softer)
  const cloudA_X = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const cloudA_Y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const cloudB_X = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const cloudB_Y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%), var(--primary-color)",
        padding: "8rem 1rem",
        textAlign: "center",
      }}
    >
      {/* 🌫️ FLOATING BACKGROUND IMAGES */}
      <motion.img
        src="/img/claude/1.png"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0%",
          x: cloudA_X,
          y: cloudA_Y,
          height:"100%",
          objectFit:"cover"
          
        }}
      />

      <motion.img
        src="/img/claude/3.png"
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          x: cloudB_X,
          y: cloudB_Y,
          height:"100%",
          objectFit:"cover"
          
        }}
      />

      {/* soft glow lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)",
          transform: "skewY(-6deg)",
        }}
      />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* small label */}
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "6px",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          What we offer
        </div>

        {/* main title */}
        <h3
          style={{
            fontSize: "clamp(3.5rem,6vw,7rem)",
            lineHeight: ".9",
            fontWeight: 900,
            margin: 0,
            color: "white",
          }}
        >
          The{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg,#ffffff,#9ca3af,#ffffff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Services
          </span>
          <br />
          We Build
        </h3>

        <p
          style={{
            marginTop: "2rem",
            color: "rgba(255,255,255,0.65)",
            fontSize: "1.2rem",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          From scalable web platforms to booking systems and online stores — everything you need to launch fast.
        </p>

        <div
          style={{
            marginTop: "3rem",
            height: "2px",
            width: "180px",
            marginInline: "auto",
            background:
              "linear-gradient(90deg,transparent,#fff,transparent)",
            opacity: 0.4,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Seprator;