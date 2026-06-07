"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

export default function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 🔥 active section (ONLY ONE at a time)
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const video = videoRef.current;
    if (video && video.duration) {
      const SCRUB_SPEED = 0.7;
      video.currentTime = v * video.duration * SCRUB_SPEED;
    }

    // strict step switching
    if (v < 0.33) setActive(0);
    else if (v < 0.66) setActive(1);
    else setActive(2);
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener("loadedmetadata", () => {
      video.currentTime = 0;
    });
  }, []);

  const baseTextStyle: React.CSSProperties = {
    textAlign: "center",
    maxWidth: "1100px",
    color: "white",
  };

  return (
    <div>
      {/* SCROLL AREA */}
      <div ref={containerRef} style={{ height: "450vh", background: "#000" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh" }}>
          
          {/* VIDEO */}
          <video
            ref={videoRef}
            src="/video/background.mp4"
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* DARK OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.3), rgba(0,0,0,.6))",
              padding: "2rem",
            }}
          >
            {/* SECTION 1 */}
            {active === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                style={baseTextStyle}
              >
                <div style={{
                  color: "#ffffff99",
                  fontSize: ".9rem",
                  letterSpacing: "4px",
                  marginBottom: "1rem",
                }}>
                  FOR MODERN BUSINESSES
                </div>

                <h1 style={{
                  fontSize: "clamp(3rem,7vw,7rem)",
                  lineHeight: ".95",
                  fontWeight: 900,
                  margin: 0,
                }}>
                  Dokaland Has A
                  <br />
                  <span style={{
                    background: "linear-gradient(90deg,#fff,#aaa,#fff)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}>
                    Solution
                  </span>
                  <br />
                  For You
                </h1>
              </motion.div>
            )}

            {/* SECTION 2 */}
            {active === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                style={baseTextStyle}
              >
                <div style={{
                  color: "#ffffff99",
                  fontSize: ".9rem",
                  letterSpacing: "4px",
                  marginBottom: "1rem",
                }}>
                  EVERYTHING YOU NEED
                </div>

                <h1 style={{
                  fontSize: "clamp(3rem,7vw,7rem)",
                  lineHeight: ".95",
                  fontWeight: 900,
                  margin: 0,
                }}>
                  Online Stores
                  <br />
                  <span style={{
                    background: "linear-gradient(90deg,#fff,#aaa,#fff)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}>
                    Booking Systems
                  </span>
                  <br />
                  POS & Kiosks
                </h1>

                <p style={{
                  marginTop: "2rem",
                  color: "#ffffffcc",
                  fontSize: "1.2rem",
                }}>
                  Launch and manage your business from one platform.
                </p>
              </motion.div>
            )}

            {/* SECTION 3 */}
            {active === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                style={baseTextStyle}
              >
                <div style={{
                  color: "#ffffff99",
                  fontSize: ".9rem",
                  letterSpacing: "4px",
                  marginBottom: "1rem",
                }}>
                  NO DEVELOPMENT TEAM REQUIRED
                </div>

                <h1 style={{
                  fontSize: "clamp(3rem,7vw,7rem)",
                  lineHeight: ".95",
                  fontWeight: 900,
                  margin: 0,
                }}>
                  Build Your
                  <br />
                  <span style={{
                    background: "linear-gradient(90deg,#fff,#aaa,#fff)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}>
                    Digital Presence
                  </span>
                  <br />
                  In Minutes
                </h1>

                <p style={{
                  marginTop: "2rem",
                  color: "#ffffffcc",
                  fontSize: "1.2rem",
                }}>
                  Websites, ordering systems, reservations and more — ready to use.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* NEXT SECTION
      <div style={{ height: "100vh", background: "#111", color: "#fff" }}>
        Next Section
      </div> */}
    </div>
  );
}