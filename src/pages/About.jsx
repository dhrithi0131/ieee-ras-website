import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Cpu,
  Workflow,
  Radio,
  Target,
} from "lucide-react";

import "../styles/about.css";

const focusAreas = [
  {
    number: "01",
    title: "ROBOTICS",
    description:
      "The design and development of robotic systems that interact with the physical world.",
    icon: Bot,
  },
  {
    number: "02",
    title: "AUTOMATION",
    description:
      "Systems that combine sensing, control and computation to automate physical processes.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "INTELLIGENT SYSTEMS",
    description:
      "The intersection of computation, perception and decision-making in autonomous systems.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "CONTROL",
    description:
      "Understanding how systems sense, respond and maintain desired behaviour.",
    icon: Radio,
  },
];

function About() {
  return (
    <motion.main
      className="page about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* =========================================
          PAGE HERO
      ========================================== */}

      <section className="about-hero">
        <div className="about-hero-grid"></div>

        <div className="container about-hero-container">
          <div className="about-hero-meta">
            <span className="section-label">
              01 / ABOUT RAS
            </span>

            <span className="about-code">
              VITC / IEEE-RAS
            </span>
          </div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            WHERE
            <br />
            <span>IDEAS</span>
            <br />
            BECOME
            <br />
            SYSTEMS.
          </motion.h1>

          <div className="about-hero-bottom">
            <p>
              IEEE Robotics & Automation Society at VIT Chennai
              is a technical chapter centred around robotics,
              automation and the technologies that make intelligent
              physical systems possible.
            </p>

            <div className="about-scroll-mark">
              <span>EXPLORE</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          WHO WE ARE
      ========================================== */}

      <section className="about-introduction section">
        <div className="container">

          <div className="about-section-header">
            <span className="section-label">
              02 / WHO WE ARE
            </span>

            <span className="section-number">
              002
            </span>
          </div>

          <div className="about-intro-grid">

            <h2>
              A TECHNICAL
              <br />
              COMMUNITY
              <br />
              FOR <span>MAKERS.</span>
            </h2>

            <div className="about-intro-copy">
              <p className="large-copy">
                Robotics brings together disciplines that are
                usually taught separately — mechanics, electronics,
                control, software and intelligence.
              </p>

              <p>
                IEEE RAS exists within that intersection. At VIT
                Chennai, the chapter forms part of the university's
                technical-chapter ecosystem and connects students
                with the broader field of robotics and automation.
              </p>

              <p>
                The wider IEEE Robotics & Automation Society
                identifies the advancement and exchange of
                scientific and technological knowledge in robotics
                and automation as part of its mission.
              </p>

              <a
                href="https://www.vit.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                VIT Chennai
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          PRINCIPLE
      ========================================== */}

      <section className="about-principle">
        <div className="container">

          <div className="principle-layout">

            <div className="principle-marker">
              <Target size={25} />
              <span>MISSION</span>
            </div>

            <div className="principle-content">

              <span className="section-label">
                03 / THE IDEA
              </span>

              <h2>
                LEARN THE
                <br />
                SYSTEM.
                <br />
                <span>BUILD THE FUTURE.</span>
              </h2>

              <div className="principle-line"></div>

              <p>
                From understanding how a sensor works to exploring
                autonomous behaviour, robotics is ultimately about
                turning knowledge into systems that can sense,
                reason and act.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          FOCUS AREAS
      ========================================== */}

      <section className="about-focus section">
        <div className="container">

          <div className="about-section-header">
            <span className="section-label">
              04 / FIELD OF INTEREST
            </span>

            <span className="section-number">
              004
            </span>
          </div>

          <div className="focus-heading">
            <h2>
              THE
              <br />
              <span>STACK.</span>
            </h2>

            <p>
              Robotics is not a single discipline. It is a stack of
              interconnected technologies.
            </p>
          </div>

          <div className="focus-grid">

            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  className="focus-card"
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="focus-card-top">
                    <span>{area.number}</span>

                    <Icon
                      size={22}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div className="focus-card-content">
                    <h3>{area.title}</h3>

                    <p>{area.description}</p>
                  </div>

                  <div className="focus-card-line"></div>
                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================
          VIT CONNECTION
      ========================================== */}

      <section className="about-vortex section">
        <div className="container">

          <div className="vortex-box">

            <div className="vortex-grid"></div>

            <div className="vortex-circle vortex-circle-one"></div>
            <div className="vortex-circle vortex-circle-two"></div>
            <div className="vortex-circle vortex-circle-three"></div>

            <div className="vortex-center">
              <span>IEEE</span>
              <strong>RAS</strong>
              <small>VIT CHENNAI</small>
            </div>

            <div className="vortex-copy">

              <span className="section-label">
                05 / THE CHAPTER
              </span>

              <h2>
                PART OF A
                <br />
                <span>LARGER NETWORK.</span>
              </h2>

              <p>
                IEEE RAS VIT Chennai sits within the larger IEEE
                ecosystem at VIT Chennai, alongside other IEEE
                technical chapters and student communities.
              </p>

              <a
                href="/join"
                className="vortex-button"
              >
                Get involved
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>
      </section>
    </motion.main>
  );
}

export default About;