import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowDownRight,
  ArrowUpRight,
  Cpu,
  Bot,
  CircuitBoard,
  ScanLine,
} from "lucide-react";

import AnimatedBackground from "../components/AnimatedBackground";
import "../styles/home.css";

const domains = [
  {
    number: "01",
    title: "ROBOTICS",
    text: "Design, build and experiment with robotic systems and autonomous machines.",
    icon: Bot,
  },
  {
    number: "02",
    title: "AUTOMATION",
    text: "Explore systems that connect sensing, control and intelligent decision-making.",
    icon: CircuitBoard,
  },
  {
    number: "03",
    title: "AI & INTELLIGENCE",
    text: "Bring perception, machine learning and intelligent behaviour into physical systems.",
    icon: Cpu,
  },
];

function Home() {
  const visualRef = useRef(null);

  const pointerRef = useRef({
    x: 0,
    y: 0,
    active: false,
  });

  const handlePointerMove = (event) => {
    const visual = visualRef.current;

    if (!visual) {
      return;
    }

    const rect = visual.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const normalizedX = (x / rect.width - 0.5) * 2;
    const normalizedY = (y / rect.height - 0.5) * 2;

    pointerRef.current = {
      x: normalizedX,
      y: normalizedY,
      active: true,
    };

    const moveX = normalizedX * 22;
    const moveY = normalizedY * 22;

    const rotateX = normalizedY * -8;
    const rotateY = normalizedX * 8;

    visual.style.setProperty("--mouse-x", `${moveX}px`);
    visual.style.setProperty("--mouse-y", `${moveY}px`);
    visual.style.setProperty("--rotate-x", `${rotateX}deg`);
    visual.style.setProperty("--rotate-y", `${rotateY}deg`);

    const nodes = visual.querySelectorAll(".visual-node");

    nodes.forEach((node) => {
      const nodeRect = node.getBoundingClientRect();

      const nodeCenterX =
        nodeRect.left + nodeRect.width / 2;

      const nodeCenterY =
        nodeRect.top + nodeRect.height / 2;

      const distance = Math.hypot(
        event.clientX - nodeCenterX,
        event.clientY - nodeCenterY
      );

      const intensity = Math.max(
        0,
        Math.min(1, 1 - distance / 180)
      );

      node.style.setProperty(
        "--node-intensity",
        intensity.toFixed(2)
      );
    });
  };

  const handlePointerDown = (event) => {
    const visual = visualRef.current;

    if (!visual) {
      return;
    }

    if (event.pointerType === "touch") {
      visual.setPointerCapture(event.pointerId);
    }

    visual.classList.add("is-touching");
  };

  const resetPointer = (event) => {
    const visual = visualRef.current;

    if (!visual) {
      return;
    }

    if (
      event?.pointerType === "touch" &&
      visual.hasPointerCapture?.(event.pointerId)
    ) {
      visual.releasePointerCapture(event.pointerId);
    }

    pointerRef.current = {
      x: 0,
      y: 0,
      active: false,
    };

    visual.classList.remove("is-touching");

    visual.style.setProperty("--mouse-x", "0px");
    visual.style.setProperty("--mouse-y", "0px");
    visual.style.setProperty("--rotate-x", "0deg");
    visual.style.setProperty("--rotate-y", "0deg");

    visual.querySelectorAll(".visual-node").forEach((node) => {
      node.style.setProperty("--node-intensity", "0");
    });
  };

  return (
    <motion.main
      className="page home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedBackground />

      {/* =========================================
          HERO
      ========================================== */}

      <section className="home-hero">
        <div className="container hero-container">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-kicker">
              <span className="status-dot"></span>
              IEEE ROBOTICS & AUTOMATION SOCIETY
            </div>

            <h1>
              ASPIRE.
              <br />
              CREATE.
              <br />
              <span>AUTOMATE.</span>
            </h1>

            <p className="hero-description">
              IEEE RAS VIT Chennai is a student community
              exploring robotics, automation and intelligent
              systems through technology, experimentation and
              collaboration.
            </p>

            <div className="hero-buttons">
              <Link
                to="/domains"
                className="hero-primary"
              >
                Explore RAS
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="https://www.instagram.com/ieeerasvitc/"
                target="_blank"
                rel="noreferrer"
                className="hero-secondary"
              >
                Instagram
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          {/* =========================================
              INTERACTIVE ROBOTICS CORE
          ========================================== */}

          <motion.div
            ref={visualRef}
            className="hero-visual"
            onPointerMove={handlePointerMove}
            onPointerDown={handlePointerDown}
            onPointerUp={resetPointer}
            onPointerCancel={resetPointer}
            onPointerLeave={resetPointer}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            <div className="visual-label visual-label-top">
              SYSTEM / 01
            </div>

            <div className="interaction-hint">
              MOVE / TOUCH
            </div>

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="hero-core">
              <div className="core-inner">
                <span>RAS</span>
                <small>VITC</small>
              </div>
            </div>

            <div className="core-ring"></div>

            <div className="visual-node node-a">
              <span></span>
            </div>

            <div className="visual-node node-b">
              <span></span>
            </div>

            <div className="visual-node node-c">
              <span></span>
            </div>

            <div className="visual-node node-d">
              <span></span>
            </div>

            <div className="visual-line line-one"></div>
            <div className="visual-line line-two"></div>
            <div className="visual-line line-three"></div>

            <div className="connection connection-one"></div>
            <div className="connection connection-two"></div>

            <div className="visual-label visual-label-bottom">
              ROBOTICS / AUTOMATION
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={17} />
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================== */}

      <section className="home-intro section">
        <div className="container">

          <div className="intro-top">
            <span className="section-label">
              01 / THE CHAPTER
            </span>

            <span className="intro-index">
              IEEE RAS / VIT CHENNAI
            </span>
          </div>

          <div className="intro-grid">

            <h2>
              BUILDING
              <br />
              IDEAS THAT
              <br />
              <span>MOVE.</span>
            </h2>

            <div className="intro-copy">
              <p>
                Robotics sits at the intersection of hardware,
                software, intelligence and design.
              </p>

              <p>
                RAS brings these disciplines together through a
                technical community built around learning,
                experimentation and creating real systems.
              </p>

              <Link
                to="/about"
                className="text-link"
              >
                Discover the chapter
                <ArrowUpRight size={17} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          DOMAINS
      ========================================== */}

      <section className="home-domains section">
        <div className="container">

          <div className="section-heading-row">

            <div>
              <span className="section-label">
                02 / WHAT WE EXPLORE
              </span>

              <h2>
                FROM CODE
                <br />
                TO <span>MOTION.</span>
              </h2>
            </div>

            <Link
              to="/domains"
              className="heading-link"
            >
              View all domains
              <ArrowUpRight size={17} />
            </Link>

          </div>

          <div className="domain-grid">

            {domains.map((domain, index) => {
              const Icon = domain.icon;

              return (
                <motion.article
                  className="domain-card"
                  key={domain.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="domain-card-top">
                    <span>{domain.number}</span>

                    <Icon
                      size={22}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <h3>{domain.title}</h3>

                    <p>{domain.text}</p>
                  </div>

                  <div className="domain-card-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================
          STATEMENT
      ========================================== */}

      <section className="home-statement section">
        <div className="container">

          <div className="statement-box">

            <div className="statement-icon">
              <ScanLine size={28} />
            </div>

            <div className="statement-content">

              <span className="section-label">
                03 / BUILD WITH US
              </span>

              <h2>
                THINK IT.
                <br />
                BUILD IT.
                <br />
                <span>MAKE IT MOVE.</span>
              </h2>

              <p>
                Explore the projects, people, events and
                technical work behind IEEE RAS VIT Chennai.
              </p>

              {/* THIS BUTTON NOW USES REACT ROUTER */}
              <Link
                to="/join"
                className="statement-button"
              >
                Get involved
                <ArrowUpRight size={18} />
              </Link>

            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Home;