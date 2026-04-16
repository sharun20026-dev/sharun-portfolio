import { useState } from 'react'
import './App.css'

const skills = [
  'Python',
  'JavaScript',
  'PHP',
  'React',
  'Next.js',
  'Node.js',
  'FastAPI',
  'Laravel',
  'MySQL',
  'REST API Integration',
  'Payment Gateway Integration',
  'Admin Panel Development',
  'Deployment & Hosting',
  'Frontend Development',
  'Backend Development',
  'Full Stack Development',
  'Git',
]

const projects = [
  {
    name: 'Cruise Sails',
    stack: 'Travel Platform | Backend + API Integrations',
    description:
      'Travel-focused website where I handled backend logic, data flow, and production-level feature wiring.',
    link: 'https://cruisesails.com/',
  },
  {
    name: 'RRC Logistic',
    stack: 'Logistics Website | Frontend + Backend Contribution',
    description:
      'Business logistics platform where I contributed across UI updates and backend structure for scalable content management.',
    link: 'https://rrclogistic.com/',
  },
  {
    name: 'RD Wallpapers',
    stack: 'Content Platform | Frontend + Backend Contribution',
    description:
      'Wallpaper/content website with clean user browsing flow and backend-backed content management support.',
    link: 'https://rdwallpapers.com/',
  },
  {
    name: 'Airlines Ticket Fee & Tax',
    stack: 'Travel Utility Site | Frontend + Backend Contribution',
    description:
      'Informational travel utility platform where I worked on frontend presentation and backend-controlled content delivery.',
    link: 'https://airlinesticketfeeandtx.com',
  },
  {
    name: 'Yards and Parts',
    stack: 'Automotive Niche Platform | Frontend + Backend Contribution',
    description:
      'Niche automotive website with support in both interface improvements and backend functionality maintenance.',
    link: 'https://www.yardsandparts.us/',
  },
  {
    name: 'Prephq - The IoT Academy',
    stack: 'EdTech Portal | Backend Development',
    description:
      'Handled backend development for the Prephq learning platform, including feature modules and system stability improvements.',
    link: 'https://prephq.theiotacademy.co/',
  },
  {
    name: 'IoT Gateway',
    stack: 'IoT Platform | Frontend + Backend',
    description:
      'Built and contributed to both frontend and backend layers of the IoT Gateway platform for complete end-to-end functionality.',
    link: 'https://www.theiotacademy.co/',
  },
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    window.location.href = `mailto:sharun6006@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="portfolio">
      <header className="hero" id="home">
        <nav className="top-nav">
          <p className="brand">Sharun.dev</p>
          <div className="nav-links">
            <a href="#home">Home</a>

            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Full Stack Developer | AI Developer</p>
            <h1>Hi, I&apos;m Sharun Chaudhary</h1>
            <p className="hero-copy">
              I build full stack products with strong backend logic and modern
              frontend experience. My focus is scalable apps, clean code, and
              AI-powered features.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://github.com/sharun20026-dev"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
              <a className="btn btn-ghost" href="mailto:sharun6006@gmail.com">
                Email Me
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <img
              src="https://avatars.githubusercontent.com/u/251712148?v=4"
              alt="Sharun Chaudhary"
            />
            <h2>Sharun Chaudhary</h2>
            <p>Noida, India</p>
            <p>MCA | Top Software Engineer Goal</p>
          </aside>
        </div>
      </header>

      <main>
       

        <section className="panel" id="education">
          <h2>Education</h2>
          <div className="education-grid">
            <article className="education-card">
              <p className="edu-year">2022 - 2025</p>
              <h3>Bachelor Degree (BCA)</h3>
              <p>Meerut Institute of Technology</p>
            </article>
            <article className="education-card">
              <p className="edu-year">2025 - 2027</p>
              <h3>Master Degree (MCA)</h3>
              <p>Meerut Institute of Engineering and Technology, Meerut</p>
            </article>
          </div>
        </section>

        <section className="panel" id="experience">
          <h2>Experience</h2>
          <div className="education-grid">
            <article className="education-card">
              <p className="edu-year">1+ Year</p>
              <h3>Bringon Digital Pvt Limited</h3>
              <p>Worked as a Full Stack Developer on client projects.</p>
            </article>
            <article className="education-card">
              <p className="edu-year">Currently Working</p>
              <h3>Uniconverge Technologies</h3>
              <p>Contributing as a Full Stack Developer on live products.</p>
            </article>
          </div>
        </section>

        <section className="panel" id="skills">
          <h2>Tech Stack</h2>
          <div className="chip-wrap">
            {skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="panel" id="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="project-stack">{project.stack}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Visit Project
                </a>
              </article>
            ))}
          </div>
        </section>
      

        <section className="panel contact" id="contact">
          <h2>Let&apos;s Build Something Great</h2>
          <p>
            Available for  work, collaborations, and software
            engineering opportunities.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label className="form-control" htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="form-control" htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label className="form-control" htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>

          <div className="contact-links">
            <a href="mailto:sharun6006@gmail.com">sharun6006@gmail.com</a>
            <a href="tel:+916005134734">+91 6005134734</a>
            <a
              href="https://github.com/sharun20026-dev"
              target="_blank"
              rel="noreferrer"
            >
              github.com/sharun20026-dev
            </a>
          </div>
        </section>
        
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Sharun Chaudhary. Built with React.</p>
      </footer>
    </div>
  )
}

export default App
