const projects = [
  {
    id: 1,
    title: "Kitchen interior design",
    type: "interior Design",
    year: "2025",
    tools: ["Blender"],
    images: [
      "kitcheninterior1.png",
      "kitcheninterior2.jpeg",
    ],
  },
  {
    id: 2,
    title: "Stranger Things Alphabet word Wall",
    type: "Product Render",
    year: "2025",
    tools: ["Blender"],
    // Replace this with your real video URL (YouTube embed or .mp4)
    videoUrl: "firstvideo.mp4",
    images: [
      "ST.png",
    ],
  },
  {
    id: 3,
    title: "rajdoot bike",
    type: "Product Design",
    year: "2025",
    tools: ["Blender"],
    images: [
      "rajdoot_output_1.png",
      "rajdoot_output_2.png",
      "rajdoot_output_3.png",
      "rajdoot_output_4.png",
      "rajdoot_output_5.png",
    ],
  },
  {
    id: 4,
    title: "Living Room Interior Design",
    type: "Interior Design",
    year: "2026",
    tools: ["Blender"],
    images: [
      "LR1.png",
      "LR2.png",
      "LR3.png",
      "LR4.png",
      "LR5.png",
    ],
  },
];

const skills = {
  "3D Software": ["Blender","Maya"],
  Rendering: ["Octane", "Redshift", "Cycles", "Corona"],
  "Texturing & Sculpting": ["Substance Painter", "ZBrush", "Mari"],
  Workflow: ["Art Direction", "Lighting", "Look Dev", "Compositing"],
};

const skillLevels = [
  { label: "Modeling", level: 92 },
  { label: "Lighting & LookDev", level: 88 },
  { label: "Rendering & Compositing", level: 86 },
  { label: "Art Direction", level: 80 },
];

const NavBar = () => {
  return (
    <header className="nav">
      <div className="nav__brand">
        <span className="nav__logo-orb" />
        <div>
          <h1 className="nav__title">Jeya Kesavan</h1>
          <p className="nav__subtitle">3D Visual Designer</p>
        </div>
      </div>
      <nav className="nav__links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact" className="nav__cta">
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Portfolio 2026</p>
        <h2 className="hero__title">
          Designing{" "}
          <span className="hero__title-gradient">immersive 3D visuals</span>{" "}
          for brands that love detail.
        </h2>
        <p className="hero__text">
          I craft cinematic renders, product visualizations, and stylized 3D
          worlds with a focus on lighting, mood, and storytelling.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Selected Work
          </a>
        </div>
        <div className="hero__meta">
          <div>
            <p className="hero__meta-label">Experience</p>
            <p className="hero__meta-value">Fresher</p>
          </div>
          <div>
            <p className="hero__meta-label">Specialty</p>
            <p className="hero__meta-value">Product & Interior Design</p>
          </div>
          <div>
            <p className="hero__meta-label">Location</p>
            <p className="hero__meta-value">Remote • Tamil Nadu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onOpen }) => {
  return (
    <article className="project-card" onClick={() => onOpen(project)}>
      <div className="project-card__image-wrapper">
        <img
          src={project.images[0]}
          alt={project.title}
          className="project-card__image"
        />
        <div className="project-card__overlay" />
      </div>
      <div className="project-card__content">
        <div className="project-card__header">
          <p className="project-card__type">{project.type}</p>
          <span className="project-card__year">{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__tools">
          {project.tools.map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
          {project.videoUrl && (
            <span className="chip chip--soft">Video project</span>
          )}
        </div>
        <button
          type="button"
          className="project-card__button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(project);
          }}
        >
          View project
        </button>
      </div>
    </article>
  );
};

const ProjectsSection = ({ onOpenProject }) => {
  return (
    <section id="projects" className="section">
      <div className="section__header">
        <p className="section__eyebrow">Selected projects</p>
        <h2 className="section__title">A snapshot of recent 3D work</h2>
        <p className="section__description">
          From product shots to large-scale environments, each project is
          crafted to balance realism with bold visual direction.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectGalleryModal = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (!project) return null;

  const images = project.images || [];
  const currentImage = images[activeIndex] || images[0];

  const goNext = () => {
    if (!images.length) return;
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    if (!images.length) return;
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal__header">
          <div>
            <p className="modal__eyebrow">{project.type}</p>
            <h3 className="modal__title">{project.title}</h3>
          </div>
          <button type="button" className="modal__close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal__body">
          {project.videoUrl && (
            <div className="modal__video-wrapper">
              {project.videoUrl.endsWith(".mp4") ? (
                <video
                  src={project.videoUrl}
                  className="modal__video"
                  controls
                  playsInline
                />
              ) : (
                <iframe
                  className="modal__video"
                  src={project.videoUrl}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          )}
          <div className="modal__image-wrapper">
            {currentImage && (
              <img
                src={currentImage}
                alt={project.title}
                className="modal__image"
              />
            )}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="modal__nav modal__nav--left"
                  onClick={goPrev}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="modal__nav modal__nav--right"
                  onClick={goNext}
                >
                  ›
                </button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="modal__thumbnails">
              {images.map((img, index) => (
                <button
                  key={img}
                  type="button"
                  className={`modal__thumb${
                    index === activeIndex ? " modal__thumb--active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section section--two-column">
      <div className="section__header">
        <p className="section__eyebrow">Capabilities</p>
        <h2 className="section__title">Tools & skills in focus</h2>
        <p className="section__description">
          A versatile workflow designed for agencies, studios, and brands that
          need high-end 3D imagery on tight timelines.
        </p>
      </div>
      <div className="skills">
        <div className="skills__grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills__card">
              <h3>{category}</h3>
              <div className="skills__tags">
                {items.map((item) => (
                  <span key={item} className="chip chip--soft">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills__levels">
          {skillLevels.map((skill) => (
            <div key={skill.label} className="skills__level">
              <div className="skills__level-header">
                <span>{skill.label}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skills__bar">
                <div
                  className="skills__bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section section--about">
      <div className="about">
        <div className="about__badge">Available for freelance & collaborations</div>
        <h2 className="section__title">Designing stories in 3D space</h2>
        <p className="section__description">
          I&apos;m a 3D designer focused on building expressive visuals for
          product launches, digital campaigns, and brand identities. My work
          blends clean art direction with technical workflow, so every render is
          both aesthetically strong and production-ready.
        </p>
        <p className="section__description">
          I&apos;ve collaborated with teams across time zones, adapting to
          different pipelines while keeping communication sharp and deliveries
          reliable.
        </p>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="section section--contact">
      <div className="contact">
        <div>
          <p className="section__eyebrow">Let&apos;s build something</p>
          <h2 className="section__title">Have a project in mind?</h2>
          <p className="section__description">
            Send a short brief with references, timelines, and budget range.
            I&apos;ll respond within 24 hours with availability and next steps.
          </p>
        </div>
        <div className="contact__actions">
          <a href="mailto:pasupathikesavan863@gmail.com" className="btn btn--primary">
            Email the studio
          </a>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [activeProject, setActiveProject] = React.useState(null);

  return (
    <div className="page">
      <NavBar />
      <main>
        <Hero />
        <ProjectsSection onOpenProject={setActiveProject} />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Kesavan — 3D Design Portfolio.</p>
      </footer>
      <ProjectGalleryModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


