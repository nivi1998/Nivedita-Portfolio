import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, MapPin,
  Code2, Layers3, Accessibility, Zap, ExternalLink, Menu, X
} from "lucide-react";
import "./styles.css";

const GITHUB = "https://github.com/nivi1998";
const LINKEDIN = "https://www.linkedin.com/in/nivedita-kumari-6452ab1a5/";
const EMAIL = "niveditasingh858@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}?subject=Portfolio%20Inquiry`;

const skills = [
  ["React.js", "Frontend"], ["JavaScript ES6+", "Frontend"], ["TypeScript", "Frontend"],
  ["Next.js", "Frontend"], ["Redux / Context API", "State"], ["HTML5 / CSS3 / SCSS", "UI"],
  ["REST APIs / Axios", "API"], ["MUI / Bootstrap", "UI"], ["Jest / RTL", "Testing"], ["AWS EC2 / S3", "Cloud"], ["Git / GitHub", "Tools"],
  ["Figma", "Design"], ["WCAG / Accessibility", "Quality"], ["Node.js / Express", "Backend"]
];

const projects = [
  {
    title: "AI Resume Analyzer",
    description: "A practical React application that analyzes resumes against job descriptions, calculates a match score and identifies relevant skills using AI API integration.",
    tags: ["React", "Node.js", "AI API", "Express"],
    github: "https://github.com/nivi1998/ResumeAnalyzer-use-AI-API-Frontend-backend",
    demo: "#"
  },
  {
    title: "E-commerce Platform",
    description: "A responsive shopping experience focused on reusable UI, product discovery, filtering, state management and a smooth checkout flow.",
    tags: ["React", "Next", "MUI", "REST API"],
    github: "https://github.com/nivi1998/next_js-demo-E-commerce-site-",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "A clean task-management interface demonstrating component architecture, reusable patterns, state handling and responsive design.",
    tags: ["React", "Context API", "Local Storage"],
    github: GITHUB,
    demo: "#"
  }
];

const experiences = [
  {
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    period: "02/2023 - Present",
    points: [
      "Modernized a legacy Salesforce-based application by rebuilding it using React, improving application performance and scalability and reducing page load time by ~30%.",
      "Built responsive, reusable UI components using React, JavaScript (ES6+), HTML5, and CSS3.",
      "Integrated frontend with Node.js REST APIs to enable secure and efficient data flow.",
      "Supported data validation and database interactions using DBeaver with relational databases.",
      "Collaborated with cross-functional teams in an Agile/Scrum environment to deliver business-critical features.",
      "Participated in code reviews to ensure code quality and adherence to standards.",
      "Collaborated with QA teams for unit testing and defect resolution.",
      "Leveraged AI tools to improve development efficiency and code quality."
    ]
  },
  {
    role: "Software Developer",
    company: "TMotion Global LTD",
    period: "04/2022 - 11/2022",
    points: [
      "Built responsive web applications using React, JavaScript, HTML5, and CSS3, focusing on performance, usability, and cross-browser compatibility with a strong foundation in component-based and scalable frontend design."
    ]
  },
  {
    role: "Software Developer",
    company: "Applied Cloud Computing",
    period: "10/2021 - 03/2022, Mumbai, India",
    points: [
      "Software application designing, building, and maintaining UI design.",
      "Developed frontend features for a ticketing/support management tool used by Bajaj Finserv and Angel One applications.",
      "Built responsive UI components using React, JavaScript (ES6+), HTML5, and CSS positioning, integrating APIs.",
      "Translated Figma designs into responsive UI components."
    ]
  },
  {
    role: "MERN Stack Developer",
    company: "CodeDrill Infotch",
    period: "04/2021 - 09/2021",
    points: [
      "Collaborated on system design and scalable architecture decisions.",
      "Wrote SQL queries for data validation."
    ]
  }
];

function App() {
  const [open, setOpen] = React.useState(false);
  const nav = ["about", "skills", "projects", "experience", "contact"];

  const handleEmailClick = async (event) => {
    event.preventDefault();

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(EMAIL);
      } catch (err) {
        console.warn("Clipboard copy failed", err);
      }
    }

    if (typeof window !== "undefined") {
      window.location.href = EMAIL_LINK;
      window.alert("Email address copied. You can paste it into your mail app if the mail client does not open.");
    }
  };

  return (
    <div className="app">
      <header className="header">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">NK</span>
          <span>Nivedita Kumari</span>
        </a>
        <nav className={open ? "nav open" : "nav"}>
          {nav.map(id => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{id}</a>)}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Let's connect</a>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Frontend Developer</span>
            <h1>Building <span>clean, scalable</span> web experiences.</h1>
            <p className="lead">
              I'm Nivedita Kumari, a Frontend Developer with 5+ years of experience
              building responsive, user-focused applications with React and modern web technologies.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects <ArrowUpRight size={17}/></a>
              <a className="btn secondary" href="/Nivedita-Kumari-Resume.pdf" download>
                Download Resume <Download size={17}/>
              </a>
            </div>
            <div className="socials">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={EMAIL_LINK} onClick={handleEmailClick} aria-label="Email"><Mail /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-one"></div><div className="orb orb-two"></div>
            <div className="code-card">
              <div className="dots"><i/><i/><i/></div>
              <code><span>const</span> developer = {"{"}<br/>
                &nbsp;&nbsp;name: <b>"Nivedita"</b>,<br/>
                &nbsp;&nbsp;role: <b>"Frontend"</b>,<br/>
                &nbsp;&nbsp;focus: [<b>"React"</b>, <b>"UX"</b>]<br/>
              {"}"};</code>
            </div>
            <div className="floating-chip"><Zap size={16}/> Performance + UX</div>
            <div className="floating-chip chip-two"><Accessibility size={16}/> Accessible UI</div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading"><span>01</span><div><p className="eyebrow">About me</p><h2>Turning ideas into useful interfaces.</h2></div></div>
          <div className="about-grid">
            <div>
              <p>I'm a Frontend Developer focused on creating responsive, maintainable and accessible web applications. My core strength is building reusable React components and connecting polished interfaces with APIs and application state.</p>
              <p>I enjoy solving real product problems, improving user experience and collaborating across design, backend and product teams.</p>
            </div>
            <div className="quote-card"><Layers3/><blockquote>“Good interfaces make complex things feel simple.”</blockquote><small>— My approach to frontend development</small></div>
          </div>
        </section>

        <section className="section soft" id="skills">
          <div className="section-heading"><span>02</span><div><p className="eyebrow">Technical skills</p><h2>Tools I work with.</h2></div></div>
          <div className="skill-grid">
            {skills.map(([name, cat]) => <div className="skill" key={name}><Code2 size={18}/><div><strong>{name}</strong><small>{cat}</small></div></div>)}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading"><span>03</span><div><p className="eyebrow">Featured work</p><h2>Projects that show how I build.</h2></div></div>
          <div className="project-grid">
            {projects.map((p, i) => <article className="project-card" key={p.title}>
              <div className={`project-icon icon-${i}`}><Layers3 size={22}/></div>
              <div className="project-top"><span>0{i+1}</span><a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`}><Github size={19}/></a></div>
              <h3>{p.title}</h3><p>{p.description}</p>
              <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
              <div className="card-links"><a href={p.demo}>Live demo <ExternalLink size={15}/></a><a href={p.github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a></div>
            </article>)}
          </div>
        </section>

        <section className="section soft" id="experience">
          <div className="section-heading"><span>04</span><div><p className="eyebrow">Experience</p><h2>Career journey.</h2></div></div>
          <div className="timeline">
            {experiences.map((job) => (
              <div className="experience" key={`${job.company}-${job.role}`}>
                <div className="experience-head">
                  <div>
                    <h3>{job.role}</h3>
                    <strong>{job.company}</strong>
                  </div>
                  <span>{job.period}</span>
                </div>
                <ul>
                  {job.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-banner">
          <div><p className="eyebrow">Resume</p><h2>Want the full picture?</h2><p>Download my latest resume for detailed experience, skills and projects.</p></div>
          <a className="btn light" href="/Nivedita-Kumari-Resume.pdf" download>Download Resume <Download size={17}/></a>
        </section>

        <section className="section contact" id="contact">
          <div className="section-heading"><span>05</span><div><p className="eyebrow">Contact</p><h2>Let's build something useful.</h2></div></div>
          <div className="contact-grid">
            <div><p>I'm open to frontend opportunities and conversations around React, UI engineering and modern web applications.</p>
              <div className="contact-items">
                <a href={EMAIL_LINK} onClick={handleEmailClick}><Mail/> <span>Email<br/><b>{EMAIL}</b></span></a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin/> <span>LinkedIn<br/><b>View profile</b></span></a>
                <a href={GITHUB} target="_blank" rel="noreferrer"><Github/> <span>GitHub<br/><b>@nivi1998</b></span></a>
                <div><MapPin/> <span>Location<br/><b>India</b></span></div>
              </div>
            </div>
            <div className="contact-card"><Mail size={28}/><h3>Have an opportunity?</h3><p>Feel free to reach out for frontend roles, projects or collaboration.</p><a className="btn primary" href={EMAIL_LINK} onClick={handleEmailClick}>Send me an email <ArrowUpRight size={17}/></a></div>
          </div>
        </section>
      </main>

      <footer><div className="brand"><span className="brand-mark">NK</span><span>Nivedita Kumari</span></div><span>Frontend Developer · © {new Date().getFullYear()}</span><a href="#home"><ArrowUpRight size={16}/></a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
