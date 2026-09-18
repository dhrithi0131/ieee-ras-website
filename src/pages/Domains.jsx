import { motion } from "framer-motion";
import {
  Bot,
  Cpu,
  CircuitBoard,
  BrainCircuit,
  Workflow,
  Radio,
  ScanLine,
  ArrowUpRight,
} from "lucide-react";
import "../styles/domains.css";

const domains = [
  {
    number: "01",
    icon: Bot,
    title: "Robotics",
    description:
      "Design, build and experiment with robotic systems that connect sensing, computation and physical action.",
    tags: ["Robotic Systems", "Motion", "Prototyping"],
  },
  {
    number: "02",
    icon: Cpu,
    title: "Automation",
    description:
      "Explore systems that turn complex processes into reliable, repeatable and intelligent workflows.",
    tags: ["Industrial", "Control", "Process"],
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Intelligent Systems",
    description:
      "Combine robotics with artificial intelligence, perception and decision-making to create adaptive systems.",
    tags: ["AI", "Perception", "Decision Making"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Control Systems",
    description:
      "Understand how feedback, modelling and control algorithms allow physical systems to respond precisely.",
    tags: ["Feedback", "Modelling", "Control"],
  },
  {
    number: "05",
    icon: CircuitBoard,
    title: "Embedded Systems",
    description:
      "Work at the intersection of hardware and software by building systems that interact directly with the physical world.",
    tags: ["Microcontrollers", "Sensors", "Hardware"],
  },
  {
    number: "06",
    icon: Radio,
    title: "Sensing & Communication",
    description:
      "Explore how robots perceive their environment and exchange information across connected systems.",
    tags: ["Sensors", "IoT", "Communication"],
  },
  {
    number: "07",
    icon: ScanLine,
    title: "Computer Vision",
    description:
      "Use visual information as a source of perception for robotic and autonomous systems.",
    tags: ["Vision", "Detection", "Tracking"],
  },
];

function Domains() {
  return (
    <main className="domains-page">
      <section className="domains-hero">
        <div className="domains-hero-grid"></div>

        <div className="container domains-hero-content">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            IEEE RAS / DOMAINS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            BUILD ACROSS
            <br />
            <span>DISCIPLINES.</span>
          </motion.h1>

          <motion.p
            className="domains-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Robotics is more than machines. It is where software, hardware,
            intelligence and control come together.
          </motion.p>

          <motion.div
            className="domain-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>EXPLORE AREAS</span>
            <div className="scroll-line"></div>
          </motion.div>
        </div>
      </section>

      <section className="domains-grid-section">
        <div className="container">
          <div className="domains-intro">
            <div>
              <span className="mini-label">01 / TECHNICAL AREAS</span>
              <h2>
                DIFFERENT
                <br />
                <span>PARTS.</span>
                <br />
                ONE SYSTEM.
              </h2>
            </div>

            <p>
              Explore the technologies and disciplines that form the
              foundation of robotics and automation.
            </p>
          </div>

          <div className="domains-grid">
            {domains.map((domain, index) => {
              const Icon = domain.icon;

              return (
                <motion.article
                  className="domain-card"
                  key={domain.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                >
                  <div className="domain-card-top">
                    <span className="domain-number">{domain.number}</span>

                    <div className="domain-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="domain-card-content">
                    <h3>{domain.title}</h3>

                    <p>{domain.description}</p>

                    <div className="domain-tags">
                      {domain.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="domain-card-arrow">
                    <ArrowUpRight size={20} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="domains-statement">
        <div className="container">
          <motion.div
            className="statement-box"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="statement-decoration"></div>

            <span className="mini-label">SYSTEM THINKING</span>

            <h2>
              THE MOST
              <br />
              INTERESTING
              <br />
              <span>PROBLEMS LIVE</span>
              <br />
              BETWEEN DOMAINS.
            </h2>

            <p>
              A robot needs more than a motor. It needs sensing, computation,
              control, communication and intelligence working together.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Domains;