import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Cpu,
  Database,
  Globe,
  Plane,
} from "lucide-react";
import "../styles/events.css";

const recentEvents = [
  {
    id: "isra-2020",
    year: "2020",
    category: "ROBOTICS / AUTOMATION",
    title: "ISRA 2020",
    subtitle: "Aerial & Guided Vehicles",
    description:
      "An IEEE RAS VITC event exploring aerial systems, guided vehicles and the evolution of robotics from conventional machines to autonomous platforms.",
    date: "27–28 March 2020",
    location: "VIT Chennai",
    image: "/images/events/isra-2020-aerial-guided-vehicles.jpg",
    icon: Plane,
    accent: "orange",
    tags: ["ROBOTICS", "AERIAL SYSTEMS", "AUTOMATION"],
  },
  {
    id: "mission-data-impossible",
    year: "2025",
    category: "DATA / TECHNICAL EVENT",
    title: "MISSION: DATA IMPOSSIBLE",
    subtitle: "IEEE RAS × OSPC VITC",
    description:
      "An exploratory data-focused event bringing together problem solving, data analysis and technical challenges through an interactive mission-style experience.",
    date: "4 February 2025",
    location: "Kamaraj Auditorium",
    image: "/images/events/mission-data-impossible.jpg",
    icon: Database,
    accent: "cyan",
    tags: ["DATA", "ANALYTICS", "CHALLENGE"],
  },
  {
    id: "big-data",
    year: "2025",
    category: "DATA SCIENCE",
    title: "BIG DATA",
    subtitle: "The Data Explosion",
    description:
      "A data-science focused initiative exploring the scale of modern data, how it is generated, and the ideas behind analysing and understanding it.",
    date: "2025",
    location: "VIT Chennai",
    image: "/images/events/big-data-data-explosion.jpg",
    icon: Database,
    accent: "orange",
    tags: ["BIG DATA", "DATA SCIENCE", "TECHNOLOGY"],
  },
  {
    id: "into-the-web",
    year: "2025",
    category: "WEB / TECHNOLOGY",
    title: "INTO THE WEB",
    subtitle: "Build. Explore. Create.",
    description:
      "A technical activity centred around web technology, development and building practical digital experiences.",
    date: "2025",
    location: "VIT Chennai",
    image: "/images/events/into-the-web.jpg",
    icon: Globe,
    accent: "cyan",
    tags: ["WEB", "DEVELOPMENT", "TECHNOLOGY"],
  },
];

function Events() {
  return (
    <main className="events-page">

      {/* HERO */}
      <section className="events-hero">
        <div className="events-hero-grid"></div>
        <div className="events-hero-glow"></div>

        <div className="container events-hero-content">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            IEEE RAS / ACTIVITIES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            IDEAS
            <br />
            <span>INTO</span>
            <br />
            ACTION.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From robotics and automation to data, web technology and
            interdisciplinary challenges — explore activities associated with
            IEEE RAS VIT Chennai.
          </motion.p>
        </div>

        <div className="events-hero-orbit">
          <div className="orbit-ring orbit-ring-one"></div>
          <div className="orbit-ring orbit-ring-two"></div>
          <div className="orbit-ring orbit-ring-three"></div>

          <div className="orbit-core">
            <Cpu size={30} strokeWidth={1.2} />
            <span>RAS</span>
            <small>VITC</small>
          </div>

          <span className="orbit-node orbit-node-one"></span>
          <span className="orbit-node orbit-node-two"></span>
          <span className="orbit-node orbit-node-three"></span>
        </div>
      </section>

      {/* RECENT EVENTS */}
      <section className="recent-events">
        <div className="container">

          <div className="events-section-heading">
            <div>
              <span className="mini-label">
                01 / RECENT EVENTS
              </span>

              <h2>
                BUILD.
                <br />
                <span>EXPERIENCE.</span>
                <br />
                REPEAT.
              </h2>
            </div>

            <p>
              Some recent significant events and activities.
            </p>
          </div>

          <div className="event-list">

            {recentEvents.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.article
                  className={`event-card event-${event.accent}`}
                  key={event.id}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >

                  <div className="event-year">
                    <span>{event.year}</span>
                    <div className="year-line"></div>
                  </div>

                  <div className="event-main">

                    {/* EVENT IMAGE */}
                    <div className="event-image-wrap">
                      <img
                        src={event.image}
                        alt=""
                      />

                      <div className="event-image-overlay"></div>

                      <div className="event-image-number">
                        0{index + 1}
                      </div>

                      <div className="event-icon">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* EVENT INFORMATION */}
                    <div className="event-content">

                      <div className="event-category">
                        {event.category}
                      </div>

                      <h3>{event.title}</h3>

                      <h4>{event.subtitle}</h4>

                      <p>{event.description}</p>

                      <div className="event-meta">

                        <span>
                          <CalendarDays size={15} />
                          {event.date}
                        </span>

                        <span>
                          <MapPin size={15} />
                          {event.location}
                        </span>

                      </div>

                      <div className="event-bottom">

                        <div className="event-tags">
                          {event.tags.map((tag) => (
                            <span key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href="https://www.instagram.com/ieeerasvitc/"
                          target="_blank"
                          rel="noreferrer"
                          className="event-link"
                        >
                          VIEW CHAPTER
                          <ArrowUpRight size={17} />
                        </a>

                      </div>

                    </div>
                  </div>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="events-cta">
        <div className="container">

          <motion.div
            className="events-cta-box"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="cta-grid"></div>

            <div className="cta-content">

              <span className="mini-label">
                02 / STAY CONNECTED
              </span>

              <h2>
                MORE
                <br />
                <span>TO COME.</span>
              </h2>

              <p>
                Follow IEEE RAS VIT Chennai for announcements,
                activities, technical sessions and upcoming
                opportunities.
              </p>

              <a
                href="https://www.instagram.com/ieeerasvitc/"
                target="_blank"
                rel="noreferrer"
                className="events-cta-button"
              >
                Follow IEEE RAS
                <ArrowUpRight size={18} />
              </a>

            </div>

            <div className="cta-visual">

              <div className="cta-circle cta-circle-one"></div>
              <div className="cta-circle cta-circle-two"></div>
              <div className="cta-circle cta-circle-three"></div>

              <div className="cta-core">
                <Cpu size={28} strokeWidth={1.2} />
                <span>RAS</span>
                <small>VIT CHENNAI</small>
              </div>

            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}

export default Events;