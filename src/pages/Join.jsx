import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Cpu,
  Users,
} from "lucide-react";
import "../styles/join.css";

const paths = [
  {
    icon: Cpu,
    number: "01",
    title: "BUILD",
    description:
      "Work on technical ideas, prototypes and systems across robotics and automation.",
  },
  {
    icon: Users,
    number: "02",
    title: "COLLABORATE",
    description:
      "Meet students who share an interest in engineering, technology and innovation.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "PARTICIPATE",
    description:
      "Take part in workshops, technical sessions, challenges and chapter activities.",
  },
];

function Join() {
  return (
    <main className="join-page">

      {/* HERO */}
      <section className="join-hero">
        <div className="join-grid"></div>
        <div className="join-glow"></div>

        <div className="container join-hero-content">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            IEEE RAS / GET INVOLVED
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            DON'T JUST
            <br />
            <span>WATCH.</span>
            <br />
            BUILD.
          </motion.h1>

          <motion.p
            className="join-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Interested in robotics, automation and intelligent systems?
            Find your way into the IEEE RAS community at VIT Chennai.
          </motion.p>
        </div>

        <div className="join-terminal">
          <span>ACCESS</span>
          <strong>OPEN</strong>
        </div>
      </section>

      {/* PATHS */}
      <section className="join-paths">
        <div className="container">

          <div className="join-section-header">
            <div>
              <span className="mini-label">
                01 / FIND YOUR PATH
              </span>

              <h2>
                THERE'S
                <br />
                MORE THAN
                <br />
                <span>ONE WAY IN.</span>
              </h2>
            </div>

            <p>
              You don't need to know everything before you start.
              Curiosity, experimentation and a willingness to learn
              are enough to begin.
            </p>
          </div>

          <div className="join-path-grid">
            {paths.map((path, index) => {
              const Icon = path.icon;

              return (
                <motion.article
                  className="join-path-card"
                  key={path.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                >
                  <div className="path-top">
                    <span>{path.number}</span>

                    <div className="path-icon">
                      <Icon
                        size={23}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="path-content">
                    <h3>{path.title}</h3>

                    <p>{path.description}</p>
                  </div>

                  <div className="path-line"></div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section className="join-connect">
        <div className="container">

          <motion.div
            className="connect-box"
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="connect-content">

              <span className="mini-label">
                02 / CONNECT
              </span>

              <h2>
                START
                <br />
                <span>HERE.</span>
              </h2>

              <p>
                Follow the chapter's official channels for
                recruitment announcements, activities and updates.
              </p>

              <div className="connect-actions">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/ieeerasvitc/"
                  target="_blank"
                  rel="noreferrer"
                  className="connect-button primary"
                >
                  <span className="social-symbol">
                    ◎
                  </span>

                  Instagram

                  <ArrowUpRight size={17} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/company/ieeerasvitc/"
                  target="_blank"
                  rel="noreferrer"
                  className="connect-button"
                >
                  <span className="linkedin-text">
                    in
                  </span>

                  LinkedIn

                  <ArrowUpRight size={17} />
                </a>

              </div>
            </div>

            {/* ORBITAL VISUAL */}
            <div className="connect-visual">

              <div className="connect-ring ring-1"></div>
              <div className="connect-ring ring-2"></div>
              <div className="connect-ring ring-3"></div>

              <div className="connect-core">
                <span>RAS</span>
                <small>VITC</small>
              </div>

              <div className="connect-signal signal-1"></div>
              <div className="connect-signal signal-2"></div>
              <div className="connect-signal signal-3"></div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* IEEE RAS */}
      <section className="join-membership">
        <div className="container">

          <div className="membership-layout">

            <div>
              <span className="mini-label">
                03 / IEEE RAS
              </span>

              <h2>
                EXPLORE.
                <br />
                <span>CREATE.</span>
                <br />
                CONNECT.
              </h2>
            </div>

            <div className="membership-copy">

              <p>
                IEEE Robotics and Automation Society focuses
                on advancing the theory and practice of robotics
                and automation and fostering the exchange of
                scientific and technological knowledge in the field.
              </p>

              <a
                href="https://www.ieee-ras.org/"
                target="_blank"
                rel="noreferrer"
                className="ieee-link"
              >
                Explore IEEE RAS
                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="join-final">
        <div className="container">

          <motion.div
            className="final-content"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="mini-label">
              READY?
            </span>

            <h2>
              SEE YOU
              <br />
              <span>INSIDE.</span>
            </h2>

            <div className="final-line"></div>

            <p>
              Keep an eye on the chapter's official channels
              for opportunities to get involved.
            </p>

          </motion.div>

        </div>
      </section>

    </main>
  );
}

export default Join;