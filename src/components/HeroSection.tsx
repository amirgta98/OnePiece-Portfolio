"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cloud1X = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const cloud1Y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const cloud2X = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const cloud3X = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const cloud3Y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const cloud4X = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const cloud4Y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section
      ref={ref}
      className="hero-section"
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100dvh", 
          width: "100%",
          overflow: "hidden",
        }}
      >
        <motion.img
          src="/img/claude/1.png"
          className="HeroClaudeImage1"
          style={{ x: cloud1X, y: cloud1Y }}
        />

        <motion.img
          src="/img/claude/2.png"
          className="HeroClaudeImage2"
          style={{ x: cloud2X, y: cloud2Y }}
        />

        <motion.img
          src="/img/claude/3.png"
          className="HeroClaudeImage3"
          style={{ x: cloud3X, y: cloud3Y }}
        />

        <motion.img
          src="/img/claude/4.png"
          className="HeroClaudeImage4"
          style={{ x: cloud4X, y: cloud4Y }}
        />

        <div className="hero-content">
                <div style={{
                  color: "#ffffff99",
                  fontSize: ".9rem",
                  letterSpacing: "4px",
                  marginBottom: "1rem",
                }}>
                  WHO WE ACTULY ARE?
                </div>

                <h1 style={{
                  fontSize: "clamp(3rem,7vw,7rem)",
                  lineHeight: ".95",
                  fontWeight: 900,
                  margin: 0,
                }}>
                  Dokaland
                  <br />
                  <span style={{
                    background: "linear-gradient(90deg,#fff,#aaa,#fff)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}>
                    Is your online  
                  </span>
                  <br />
                  Business card
                </h1>

        </div>
      </div>
    </section>
  );
}