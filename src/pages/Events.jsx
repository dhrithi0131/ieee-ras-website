import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Users,
  Cpu,
  Trophy,
  Presentation,
} from "lucide-react";
import "../styles/events.css";

const events = [
  {
    year: "2024",
    type: "HACKATHON",
    title: "IEEE YESIST12",
    description:
      "IEEE RAS VIT Chennai supported teams participating in the IEEE YESIST12 international hackathon, with selected teams progressing to the Grand Finale in Tunisia.",
    icon: Trophy,
    tags: ["Innovation", "Hackathon", "International"],
    featured: true,
  },
  {
    year: "2021",
    type: "WEBINAR",
    title: "Roadmap for ML & Data Science Using Python",
    description:
      "A technical webinar introducing students to Artificial Intelligence, Machine Learning and Data Science, with a focus on practical learning paths.",
    icon: Presentation,
    tags: ["AI / ML", "Data Science", "Python"],
    featured: false,
  },
  {
    year: "2019",
    type: "TECHNICAL SESSION",
    title: "Research 101",
    description:
      "An interactive session designed to encourage students to explore research in Robotics and Automation and understand how to approach technical research.",
    icon: Cpu,
    tags: ["Research", "Robotics", "Career"],
    featured: false,
  },
  {
    year: "2019",
    type: "WORKSHOP",
    title: "Industrial Automation",
    description:
      "A technical activity focused on industrial automation and exposing students to concepts connecting engineering theory with real-world applications.",
    icon: Cpu,
    tags: ["Automation", "Industry", "Engineering"],
    featured: false,
  },
];

function Events() {
  return (
    <main className="events-page">
      {/* HERO */}
      <section className="events-hero">
        <div className="events-grid"></div>

        <div className="container events-hero-content">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            IEEE RAS / EVENTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            LEARN.
            <br />
            <span>BUILD.</span>
            <br />
            CONNECT.
          </motion.h1>

          <motion.p
            className="events-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From technical sessions and workshops to innovation challenges,
            RAS activities create spaces for students to explore robotics,
            automation and emerging technologies.
          </motion.p>
        </div>

        <div className="hero-event-mark">
          <span>EVENT_LOG</span>
          <strong>04</strong>
        </div>
      </section>

      {/* INTRO */}
      <section className="events-intro">
        <div className="container">
          <div className="events-intro-layout">
            <div>
              <span className="mini-label">01 / CHAPTER ARCHIVE</span>

              <h2>
                IDEAS
                <br />
                <span>IN MOTION.</span>
              </h2>
            </div>

            <p>
              A look at documented activities associated with IEEE Robotics
              and Automation Society at VIT Chennai.
            </p>
          </div>
        </div>
      </section>

      {/* EVENT TIMELINE */}
      <section className="events-list-section">
        <div className="container">
          <div className="event-timeline">
            {events.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.article
                  className={`event-item ${
                    event.featured ? "featured" : ""
                  }`}
                  key={`${event.year}-${event.title}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >
                  <div className="event-year">
                    <span>{event.year}</span>
                  </div>

                  <div className="event-marker">
                    <span></span>
                  </div>

                  <div className="event-card">
                    <div className="event-card-top">
                      <span className="event-type">{event.type}</span>

                      <div className="event-icon">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="event-card-main">
                      <h3>{event.title}</h3>

                      <p>{event.description}</p>

                      <div className="event-tags">
                        {event.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="event-card-corner">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVENT PHILOSOPHY */}
      <section className="events-philosophy">
        <div className="container">
          <motion.div
            className="event-philosophy-box"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="philosophy-number">02</div>

            <div className="philosophy-content">
              <span className="mini-label">MORE THAN EVENTS</span>

              <h2>
                TURN
                <br />
                <span>CURIOSITY</span>
                <br />
                INTO
                <br />
                CAPABILITY.
              </h2>

              <p>
                Every technical interaction is an opportunity to learn
                something, build something or meet someone who changes the
                way you think about technology.
              </p>
            </div>

            <div className="philosophy-orbit orbit-one"></div>
            <div className="philosophy-orbit orbit-two"></div>
            <div className="philosophy-orbit orbit-three"></div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="events-cta">
        <div className="container">
          <motion.div
            className="events-cta-inner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="mini-label">STAY CONNECTED</span>

              <h2>
                DON'T JUST
                <br />
                <span>WATCH.</span>
              </h2>
            </div>

            <a
              href="https://www.instagram.com/ieeerasvitc/"
              target="_blank"
              rel="noreferrer"
              className="events-social-link"
            >
              Follow IEEE RAS VITC
              <ArrowUpRight size={19} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Events;