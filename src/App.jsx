import { useState, useEffect, useRef } from 'react'
import './App.css'

const techStack = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Sass',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express',
      'FastAPI',
      'Python',
      'PHP',
      'Laravel',
      'Java',
      'Spring Boot',
      'NestJS',
    ],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Redis', 'BullMQ', 'Git', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'PM2', 'AWS', 'Azure', 'GCP'],
  },
  {
    category: 'Payments & APIs',
    items: ['Razorpay', 'Stripe', 'Webhooks', 'REST APIs', 'GraphQL', 'Socket.io', 'JWT', 'OAuth2', 'SMTP'],
  },
]

const projects = [
  {
    id: 1,
    name: 'IoT Payment Gateway',
    category: 'Enterprise Platform',
    description: 'Built enterprise payment management platform with Razorpay integration, EMI management, role-based dashboards, automated emails, transaction management and complete backend architecture.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    stack: ['Node.js', 'Next.js', 'MySQL', 'Redis', 'Razorpay', 'Docker', 'JWT'],
    featured: true,
    link: 'https://payments.theiotacademy.co/',
  },
  {
    id: 2,
    name: 'PrepHQ – The IoT Academy',
    category: 'Platform Migration',
    description: 'Successfully migrated complete WordPress platform to custom Node.js backend without downtime. Implemented scalable APIs, Docker deployment, BullMQ queue processing and Redis caching.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
    stack: ['Node.js', 'Redis', 'BullMQ', 'Docker', 'MySQL', 'JWT'],
    featured: true,
    link: 'https://prephq.theiotacademy.co/',
  },
  {
    id: 3,
    name: 'Cruise Sails',
    category: 'API Integration',
    description: 'Integrated third-party APIs to enable real-time cruise data, pricing, and booking functionality. Ensured smooth data flow between external services and the application.',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&auto=format&fit=crop',
    stack: ['Node.js', 'API Integration', 'JavaScript'],
    link: 'https://cruisesails.com/',
  },
  {
    id: 4,
    name: 'RRC Logistic CRM',
    category: 'CRM System',
    description: 'Complex CRM system with fuel APIs, shipment tracking, and WhatsApp messaging using Twilio. Advanced business logic for pricing calculations and logistics workflows. Built on WordPress.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
    stack: ['WordPress', 'PHP', 'APIs', 'Twilio', 'MySQL'],
    link: 'https://rrclogistic.com/',
  },
  {
    id: 5,
    name: 'RD Wallpapers CRM',
    category: 'CRM System',
    description: 'Advanced pricing logic based on wallpaper dimensions. Multi-dashboard management with WhatsApp and SMTP integration. Built with Laravel and React.',
    image: 'https://images.unsplash.com/flagged/photo-1557050406-b3d281ecde9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D',
    stack: ['Laravel', 'React', 'Pricing Logic', 'SMTP', 'MySQL'],
    link: 'https://rdwallpapers.com/',
  },
  {
    id: 6,
    name: 'Airlines Ticket Fee & Tax',
    category: 'WordPress Development',
    description: 'Dynamic pages with Elementor for airline fee and tax management. Focused on clean UI/UX and accurate data presentation.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop',
    stack: ['WordPress', 'Elementor', 'PHP'],
    link: 'https://airlinesticketfeeandtx.com',
  },
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [typingText, setTypingText] = useState('')
  const [stats, setStats] = useState({ experience: 0, projects: 0, apis: 0, clients: 0 })
  const observerRef = useRef(null)
  const statsAnimated = useRef(false)
  const statsObserverRef = useRef(null)

  const typingStrings = ['Full Stack Developer', 'Backend Engineer', 'AI Developer']
  const [typingIndex, setTypingIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  // Typing effect
  useEffect(() => {
    if (charIndex < typingStrings[typingIndex].length) {
      const timeout = setTimeout(() => {
        setTypingText(prev => prev + typingStrings[typingIndex][charIndex])
        setCharIndex(charIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setTypingText('')
        setCharIndex(0)
        setTypingIndex((typingIndex + 1) % typingStrings.length)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, typingIndex])

  // Stats counter animation - FIXED
  useEffect(() => {
    const animateStats = () => {
      if (statsAnimated.current) return
      statsAnimated.current = true
      
      const targets = { experience: 2.8, projects: 30, apis: 100, clients: 25 }
      const duration = 2000
      const startTime = Date.now()

      const updateStats = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Ease out cubic for smooth animation
        const eased = 1 - Math.pow(1 - progress, 3)
        
        setStats({
          experience: eased * targets.experience,
          projects: Math.floor(eased * targets.projects),
          apis: Math.floor(eased * targets.apis),
          clients: Math.floor(eased * targets.clients),
        })

        if (progress < 1) {
          requestAnimationFrame(updateStats)
        }
      }
      updateStats()
    }

    // Create observer for stats section
    statsObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated.current) {
          animateStats()
        }
      })
    }, { threshold: 0.3 })

    const statsElement = document.getElementById('stats-section')
    if (statsElement) {
      statsObserverRef.current.observe(statsElement)
    }

    return () => {
      if (statsObserverRef.current) {
        statsObserverRef.current.disconnect()
      }
    }
  }, [])

  // Scroll animations
  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, options)

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current.disconnect()
  }, [])

  // Active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile menu
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMobileMenu()
    }
  }

  return (
    <div className="portfolio">
      {/* Animated background blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      <nav className="navbar glass">
        <div className="nav-container">
          <p className="brand">Sharun Portfolio</p>
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
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
            >Home</a>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
            >About</a>
            <a 
              href="#experience" 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}
            >Experience</a>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}
            >Skills</a>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
            >Projects</a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            >Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge glass">
              <span className="badge-dot"></span>
              Available for work
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Sharun Chaudhary</span>
            </h1>
            <div className="hero-typing">
              <span className="typing-prefix">I'm a </span>
              <span className="typing-text">{typingText}</span>
              <span className="typing-cursor">|</span>
            </div>
            <p className="hero-description">
              I build enterprise-grade full stack applications with modern technologies.
              Specializing in scalable backend systems, AI-powered features, and premium UI/UX.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
                Hire Me
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a className="btn btn-secondary" href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>
                View Projects
              </a>
              <a className="btn btn-ghost" href="https://github.com/sharun20026-dev" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-wrapper glass">
              <div className="profile-glow"></div>
              <img
                src="https://avatars.githubusercontent.com/u/251712148?v=4"
                alt="Sharun Chaudhary"
                className="profile-image"
              />
              <div className="profile-ring"></div>
            </div>
            <div className="floating-card card-1 glass">
              <span className="card-icon">🚀</span>
              <span>2.8+ Years</span>
            </div>
            <div className="floating-card card-2 glass">
              <span className="card-icon">💻</span>
              <span>30+ Projects</span>
            </div>
            <div className="floating-card card-3 glass">
              <span className="card-icon">⚡</span>
              <span>100+ APIs</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-container" id="stats-section">
          <div className="stat-item">
            <span className="stat-number">{stats.experience.toFixed(1)}+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{stats.projects}+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{stats.apis}+</span>
            <span className="stat-label">APIs Developed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{stats.clients}+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </section>

      <main>
        {/* About Section */}
        <section className="section about-section" id="about">
          <div className="section-container">
            <div className="section-header animate-on-scroll">
              <span className="section-tag">About Me</span>
              <h2>Passionate Developer<br />Building the Future</h2>
            </div>
            <div className="about-grid">
              <div className="about-content animate-on-scroll">
                <p className="about-text">
                  I'm a Full Stack Developer with 2.8+ years of experience building enterprise-grade applications.
                  My expertise spans across modern JavaScript frameworks, cloud infrastructure, and payment systems.
                </p>
                <p className="about-text">
                  I specialize in creating scalable backend systems with Node.js, FastAPI, and Python,
                  while delivering premium frontend experiences with React and Next.js.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <div>
                      <h4>100% Success Rate</h4>
                      <p>All projects delivered on time</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🏆</span>
                    <div>
                      <h4>Zero Downtime</h4>
                      <p>Successfully migrated WordPress to Node.js</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-timeline animate-on-scroll">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass">
                    <span className="timeline-year">2022 - 2025</span>
                    <h4>BCA Degree</h4>
                    <p>Meerut Institute of Technology</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass">
                    <span className="timeline-year">22-Dec-2025</span>
                    <h4>Senior Full Stack Developer</h4>
                    <p>Uniconverge Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section experience-section" id="experience">
          <div className="section-container">
            <div className="section-header animate-on-scroll">
              <span className="section-tag">Experience</span>
              <h2>Work Journey</h2>
            </div>
            <div className="experience-grid">
              <div className="experience-card glass animate-on-scroll">
                <div className="exp-header">
                  <div className="exp-company">
                    <h3>Uniconverge Technologies</h3>
                    <span className="exp-role">Senior Full Stack Developer</span>
                  </div>
                  <span className="exp-date">22-Dec-2025 - Present</span>
                </div>
                <div className="exp-tech">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">BullMQ</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">CI/CD</span>
                  <span className="tech-tag">Payment Gateway</span>
                  <span className="tech-tag">Authentication</span>
                  <span className="tech-tag">Scalable APIs</span>
                </div>
              </div>

              <div className="experience-card glass animate-on-scroll">
                <div className="exp-header">
                  <div className="exp-company">
                    <h3>Bringon Digital Pvt Ltd</h3>
                    <span className="exp-role">Full Stack Developer</span>
                  </div>
                  <span className="exp-date">Dec 2024 - Dec 2025</span>
                </div>
                <div className="exp-tech">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">WordPress</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">API Development</span>
                  <span className="tech-tag">Docker</span>
                </div>
              </div>

              <div className="experience-card glass animate-on-scroll">
                <div className="exp-header">
                  <div className="exp-company">
                    <h3>Global Matrix Solutions</h3>
                    <span className="exp-role">Software Developer</span>
                  </div>
                  <span className="exp-date">Nov 2023 - Nov 2024</span>
                </div>
                <div className="exp-tech">
                  <span className="tech-tag">Frontend</span>
                  <span className="tech-tag">Backend</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">CRM Systems</span>
                  <span className="tech-tag">Database Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section skills-section" id="skills">
          <div className="section-container">
            <div className="section-header animate-on-scroll">
              <span className="section-tag">Skills</span>
              <h2>Tech Stack</h2>
            </div>
            <div className="skills-grid">
              {techStack.map((group, index) => (
                <div key={group.category} className="skill-category-card glass animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3>{group.category}</h3>
                  <div className="skill-items">
                    {group.items.map((skill) => (
                      <span key={skill} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects-section" id="projects">
          <div className="section-container">
            <div className="section-header animate-on-scroll">
              <span className="section-tag">Portfolio</span>
              <h2>Featured Projects</h2>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.id} className={`project-card glass animate-on-scroll ${project.featured ? 'featured' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.name} className="project-image" />
                    {project.featured && (
                      <span className="featured-badge">⭐ Featured</span>
                    )}
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-stack">
                      {project.stack.map((tech) => (
                        <span key={tech} className="project-tech">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                        Live Demo
                        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section" id="contact">
          <div className="section-container">
            <div className="section-header animate-on-scroll">
              <span className="section-tag">Contact</span>
              <h2>Let's Build Something<br />Great Together</h2>
            </div>
            <div className="contact-grid">
              <div className="contact-info animate-on-scroll">
                <div className="contact-card glass">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <div>
                      <h4>Email</h4>
                      <a href="mailto:sharun6006@gmail.com">sharun6006@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <div>
                      <h4>Phone</h4>
                      <a href="tel:+916005134734">+91 6005134734</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div>
                      <h4>Location</h4>
                      <p>Noida, India</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">🔗</span>
                    <div>
                      <h4>GitHub</h4>
                      <a href="https://github.com/sharun20026-dev" target="_blank" rel="noreferrer">github.com/sharun20026-dev</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form-wrapper animate-on-scroll">
                <form className="contact-form glass" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button className="btn btn-primary btn-full" type="submit">
                    Send Message
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>© {new Date().getFullYear()} Sharun Chaudhary. Built with React.</p>
          <div className="footer-links">
            <a href="https://github.com/sharun20026-dev" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:sharun6006@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App