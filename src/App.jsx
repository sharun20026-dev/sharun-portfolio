import { useState, useEffect } from 'react'
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
    stack: 'Node.js, API Integration',
    description:
      'Integrated third-party APIs to enable real-time cruise data, pricing, and booking functionality. Ensured smooth data flow between external services and the application, improving reliability and user experience.',
    link: 'https://cruisesails.com/',
  },
  {
    name: 'Prephq – The IoT Academy',
    stack: 'Node.js, MySQL, API Development',
    description:
      'Successfully migrated the entire system from WordPress to a custom Node.js backend without downtime. Rebuilt database architecture, APIs, and backend logic to improve performance, scalability, and maintainability.',
    keyAchievement: 'Zero downtime migration + complete removal of WordPress dependency',
    link: 'https://prephq.theiotacademy.co/',
  },
  {
    name: 'Airlines Ticket Fee & Tax',
    stack: 'WordPress, Elementor',
    description:
      'Developed dynamic pages using Elementor and implemented structured layouts for airline fee and tax management. Focused on clean UI/UX and accurate data presentation.',
    link: 'https://airlinesticketfeeandtx.com',
  },
  {
    name: 'RRC Logistic (CRM System)',
    stack: 'Node.js, APIs, Twilio, CRM Systems',
    description:
      'Worked on a complex CRM system with multiple third-party API integrations including fuel APIs, shipment tracking APIs, and WhatsApp messaging using Twilio. Implemented advanced business logic for pricing calculations and logistics workflows.',
    keyFeatures: [
      'Real-time tracking system',
      'Automated WhatsApp notifications',
      'Complex cost & logistics calculations',
    ],
    link: 'https://rrclogistic.com/',
  },
  {
    name: 'RD Wallpapers (CRM System)',
    stack: 'Node.js, Calculation Logic, SMTP, APIs',
    description:
      'Developed a CRM system with advanced pricing logic based on wallpaper dimensions (cm/inches). Optimized pricing calculations, implemented multiple dashboards, and integrated WhatsApp messaging and SMTP email services.',
    keyFeatures: [
      'Accurate size-based pricing system',
      'Multi-dashboard management',
      'Automated messaging & email system',
    ],
    link: 'https://rdwallpapers.com/',
  },
  {
    name: 'IoT Gateway (Full Stack System)',
    stack: 'Next.js, Node.js, Razorpay, APIs',
    description:
      'Built a complex full-stack IoT management system with multiple dashboards for different user roles. Implemented EMI management, Razorpay payment integration, automated email workflows, and transaction tracking system.',
    keyFeatures: [
      '4 role-based dashboards',
      'EMI creation & payment tracking',
      'Razorpay payment integration',
      'Automated email & notification system',
      'Complex financial and transaction management',
    ],
    link: 'https://www.theiotacademy.co/',
  },
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
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
      {mobileMenuOpen && (
        <div className="menu-backdrop" onClick={closeMobileMenu}></div>
      )}
      <header className="hero" id="home">
        <nav className="top-nav">
          <p className="brand">Sharun.dev</p>
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMobileMenu}>Home</a>

            <a href="#education" onClick={closeMobileMenu}>Education</a>
            <a href="#experience" onClick={closeMobileMenu}>Experience</a>
            <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
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
                {project.keyAchievement && (
                  <p className="key-achievement">
                    <strong>Key Achievement:</strong> {project.keyAchievement}
                  </p>
                )}
                {project.keyFeatures && (
                  <div className="key-features">
                    <strong>Key Features:</strong>
                    <ul>
                      {project.keyFeatures.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
