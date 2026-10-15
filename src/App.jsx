import { useState, useEffect, useRef } from 'react'
import './App.css'

const SKILLS = [
  { icon: '🖥️', label: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { icon: '⚙️', label: 'Backend', items: ['Node.js', 'Express.js', 'NestJS', 'Python', 'FastAPI', 'PHP', 'Laravel', 'CodeIgniter'] },
  { icon: '🗄️', label: 'Databases & Caching', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { icon: '🤖', label: 'AI & Automation', items: ['OpenAI APIs', 'LLM Integration', 'Prompt Chaining', 'RAG', 'AI Automation', 'n8n'] },
  { icon: '🔧', label: 'DevOps & Cloud', items: ['Docker', 'BullMQ', 'Git', 'GitHub', 'CI/CD', 'Nginx'] },
  { icon: '🔐', label: 'Security & APIs', items: ['JWT', 'OAuth2', 'RBAC', 'REST APIs', 'Webhooks', 'Razorpay', 'Stripe'] },
]

const PROJECTS = [
  {
    id: 1, featured: true,
    cat: 'Enterprise Platform',
    name: 'IoT Payment Gateway',
    desc: 'Scalable payment platform with EMI workflows, role-based dashboards, real-time transaction tracking, Redis caching, background queues, and Razorpay integrations.',
    stack: ['Node.js', 'Redis', 'BullMQ', 'Razorpay', 'MySQL', 'Docker'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    live: 'https://payments.theiotacademy.co/',
  },
  {
    id: 2, featured: true,
    cat: 'Learning Platform',
    name: 'PrepHQ',
    desc: 'Backend infrastructure for a coding & learning platform with async code submissions, Docker-based execution, Redis/BullMQ queues, authentication, and submission processing.',
    stack: ['Node.js', 'Docker', 'BullMQ', 'Redis', 'REST APIs', 'JWT'],
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
    live: 'https://prephq.theiotacademy.co/',
  },
  {
    id: 3,
    cat: 'CRM System',
    name: 'RRC Logistic CRM',
    desc: 'CRM & logistics management with real-time tracking integrations, dynamic pricing calculations, customer management, and automated WhatsApp/Twilio notifications.',
    stack: ['Laravel', 'React', 'REST APIs', 'Twilio', 'WhatsApp Automation'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
    live: 'https://rrclogistic.com/',
  },
  {
    id: 4,
    cat: 'API Integration',
    name: 'Cruise Sails',
    desc: 'Third-party API integration enabling real-time cruise data, dynamic pricing, and booking functionality with smooth data flow between external services.',
    stack: ['Node.js', 'API Integration', 'JavaScript', 'MySQL'],
    img: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&auto=format&fit=crop',
    live: 'https://cruisesails.com/',
  },
  {
    id: 5,
    cat: 'CRM System',
    name: 'RD Wallpapers CRM',
    desc: 'Advanced pricing logic based on wallpaper dimensions, multi-dashboard management with WhatsApp and SMTP integration. Built with Laravel and React.',
    stack: ['Laravel', 'React', 'SMTP', 'MySQL', 'WhatsApp API'],
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop',
    live: 'https://rdwallpapers.com/',
  },
  {
    id: 6,
    cat: 'WordPress',
    name: 'Airlines Ticket Fee & Tax',
    desc: 'Dynamic pages for airline fee and tax management using Elementor. Clean UI/UX with accurate data presentation and responsive design.',
    stack: ['WordPress', 'Elementor', 'PHP', 'CSS3'],
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop',
    live: 'https://airlinesticketfeeandtx.com',
  },
]

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Uniconverge Technologies',
    date: 'Dec 2025 – Present',
    bullets: [
      'Architected a high-throughput enterprise IoT payment gateway handling 50,000+ daily events, improving transaction performance by 35% through Redis caching and optimized backend workflows.',
      'Engineered scalable backend services using Node.js and Python FastAPI, reducing cross-service API response times from 240ms to 45ms through async processing and query optimization.',
      'Developed secure REST APIs, authentication systems, payment integrations, background queues, and production-ready backend services.',
    ],
    tags: ['Node.js', 'FastAPI', 'Redis', 'BullMQ', 'Docker', 'Next.js', 'CI/CD', 'Payment Gateway'],
  },
  {
    role: 'Web Developer',
    company: 'Bringon Digital Pvt Ltd',
    date: 'May 2025 – Dec 2025',
    bullets: [
      'Developed high-performance RESTful APIs using Laravel and Node.js, supporting complex business workflows and client-facing web applications.',
      'Built secure API integrations for payment modules, customer validation, authentication, and internal business operations.',
      'Worked with React, Next.js, MySQL, and backend APIs to deliver responsive and scalable full-stack applications.',
    ],
    tags: ['Laravel', 'Node.js', 'React', 'Next.js', 'MySQL', 'REST APIs', 'Docker'],
  },
  {
    role: 'Software Developer',
    company: 'Global Matrix Solutions',
    date: 'Jun 2024 – May 2025',
    bullets: [
      'Developed core business logic for CRM applications, including lead capture, customer management, and automated follow-up workflows.',
      'Built responsive, cross-browser interfaces using HTML5, CSS3, JavaScript, and Bootstrap.',
      'Developed and integrated PHP/MySQL backend functionality and REST APIs for business applications.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST APIs', 'CRM'],
  },
]

const EDUCATION = [
  { icon: '🎓', degree: 'Master of Computer Applications (MCA)', school: 'Meerut Institute of Technology, Meerut, India', year: '2025 – 2027' },
  { icon: '📚', degree: 'Bachelor of Computer Applications (BCA)', school: 'Meerut Institute of Technology, Meerut, India', year: '2022 – 2025' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showNav, setShowNav] = useState(true)
  const [lastY, setLastY] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const observerRef = useRef(null)

  // scroll reveal
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observerRef.current.observe(el))
    return () => observerRef.current.disconnect()
  }, [])

  // active section
  useEffect(() => {
    const handler = () => {
      const sections = ['home','about','skills','projects','experience','education','contact']
      const sp = window.scrollY + (window.innerWidth < 768 ? 80 : 120)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && sp >= el.offsetTop - 60) { setActiveSection(sections[i]); break }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // hide/show nav
  useEffect(() => {
    const handler = () => {
      const cy = window.scrollY
      if (cy < 50) { setShowNav(true); setLastY(cy); return }
      setShowNav(cy < lastY)
      setLastY(cy)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [lastY])

  // lock body when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navItems = ['home','about','skills','projects','experience','contact']

  const handleSubmit = (e) => {
    e.preventDefault()
    const sub = encodeURIComponent(`Portfolio Contact: ${formData.subject || formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:sharun6006@gmail.com?subject=${sub}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      {/* NAV */}
      <nav className={`navbar ${showNav ? 'show' : 'hide'}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo" onClick={e=>{e.preventDefault();scrollTo('home')}}>
            Sharun<span>.</span>
          </a>
          <div className="nav-links">
            {navItems.map(s => (
              <a key={s} href={`#${s}`}
                className={activeSection === s ? 'active' : ''}
                onClick={e=>{e.preventDefault();scrollTo(s)}}
              >{s.charAt(0).toUpperCase()+s.slice(1)}</a>
            ))}
          </div>
          <a href="#contact" className="nav-cta" onClick={e=>{e.preventDefault();scrollTo('contact')}}>Contact</a>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={()=>setMenuOpen(!menuOpen)} aria-label="menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(s => (
          <a key={s} href={`#${s}`}
            className={activeSection === s ? 'active' : ''}
            onClick={e=>{e.preventDefault();scrollTo(s)}}
          >{s.charAt(0).toUpperCase()+s.slice(1)}</a>
        ))}
      </div>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-status">
              <span className="status-dot"/>
              Available for new opportunities
            </div>
            <h1 className="hero-headline">
              Building Digital<br/>
              Products That<br/>
              Make an <span className="hl">Impact.</span>
            </h1>
            <p className="hero-role">
              Full Stack Developer specializing in <span>MERN Stack</span>, <span>PHP/Laravel</span>,{' '}
              <span>Node.js</span>, <span>Next.js</span>, <span>REST APIs</span>, and <span>AI integrations</span>.
              Based in Noida, India.
            </p>
            <div className="hero-actions">
              <a className="btn btn-lime" href="#projects" onClick={e=>{e.preventDefault();scrollTo('projects')}}>
                Explore My Work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a className="btn btn-outline" href="#contact" onClick={e=>{e.preventDefault();scrollTo('contact')}}>Contact Me</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/sharun20026-dev" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/sharun-chaudhary-45a588284" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:sharun6006@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-card">
              <div className="cc-bar"><span className="cc-dot"/><span className="cc-dot"/><span className="cc-dot"/></div>
              <div className="cc-line"><span className="kw">const</span> <span className="fn">developer</span> = {'{'}</div>
              <div className="cc-line">&nbsp;&nbsp;<span className="str">name</span>: <span className="str">"Sharun Chaudhary"</span>,</div>
              <div className="cc-line">&nbsp;&nbsp;<span className="str">role</span>: <span className="str">"Full Stack Dev"</span>,</div>
              <div className="cc-line">&nbsp;&nbsp;<span className="str">stack</span>: [<span className="str">"Node"</span>, <span className="str">"React"</span>],</div>
              <div className="cc-line">&nbsp;&nbsp;<span className="str">ai</span>: <span className="str">"OpenAI + RAG"</span>,</div>
              <div className="cc-line">&nbsp;&nbsp;<span className="str">available</span>: <span className="nu">true</span>,</div>
              <div className="cc-line">{'}'}</div>
              <div className="cc-line cm">// Building impactful products 🚀</div>
              <div className="cc-line"><span className="fn">developer</span>.<span className="fn">hire</span>()<span className="cc-cursor"/></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">About Me</div>
            <h2 className="section-title">Who I Am</h2>
          </div>
          <div className="about-grid">
            <div className="reveal">
              <p className="about-text">
                I'm a <span>Full Stack Developer and Backend Engineer</span> experienced in building scalable web applications,
                backend services, payment systems, and AI-enabled platforms.
              </p>
              <p className="about-text">
                Proficient in <span>Node.js, Express.js, NestJS, PHP/Laravel, React, Next.js, and TypeScript</span>,
                with hands-on experience in REST APIs, microservices, Redis, Docker, authentication,
                payment integrations, background processing, and workflow automation.
              </p>
              <div className="about-cards">
                <div className="about-card"><div className="about-card-icon">⚡</div><h4>Performance First</h4><p>API response times reduced from 240ms to 45ms</p></div>
                <div className="about-card"><div className="about-card-icon">🔒</div><h4>Security Focused</h4><p>JWT, OAuth2, RBAC authentication systems</p></div>
                <div className="about-card"><div className="about-card-icon">📦</div><h4>Scalable Systems</h4><p>50,000+ daily events handled with Redis & queues</p></div>
                <div className="about-card"><div className="about-card-icon">🤖</div><h4>AI Integration</h4><p>OpenAI, LLM, RAG, Prompt Chaining, n8n</p></div>
              </div>
            </div>
            <div className="about-info reveal">
              <div className="info-item"><span className="info-icon">📍</span><div><h4>Location</h4><p>Noida, India</p></div></div>
              <div className="info-item"><span className="info-icon">📧</span><div><h4>Email</h4><a href="mailto:sharun6006@gmail.com">sharun6006@gmail.com</a></div></div>
              <div className="info-item"><span className="info-icon">📱</span><div><h4>Phone</h4><p>+91 6005134734</p></div></div>
              <div className="info-item"><span className="info-icon">💼</span><div><h4>LinkedIn</h4><a href="https://www.linkedin.com/in/sharun-chaudhary-45a588284" target="_blank" rel="noreferrer">sharun-chaudhary</a></div></div>
              <div className="info-item"><span className="info-icon">🐱</span><div><h4>GitHub</h4><a href="https://github.com/sharun20026-dev" target="_blank" rel="noreferrer">sharun20026-dev</a></div></div>
              <div className="info-item"><span className="info-icon">🎓</span><div><h4>Experience</h4><p>2+ Years Professional</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-bg" id="skills">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Technical Skills</div>
            <h2 className="section-title">My Tech Stack</h2>
            <p className="section-sub">Technologies I work with to build scalable, production-ready applications.</p>
          </div>
          <div className="skills-groups">
            {SKILLS.map((g, i) => (
              <div key={g.label} className="skill-group reveal" style={{transitionDelay:`${i*0.07}s`}}>
                <div className="skill-group-header">
                  <span className="skill-group-icon">{g.icon}</span>
                  <h3>{g.label}</h3>
                </div>
                <div className="skill-tags">
                  {g.items.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-sub">A selection of real-world projects built and shipped in production.</p>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="project-card reveal" style={{transitionDelay:`${i*0.07}s`}}>
                <div className="project-img">
                  <img src={p.img} alt={p.name} loading="lazy"/>
                  {p.featured && <span className="project-badge">Featured</span>}
                </div>
                <div className="project-body">
                  <div className="project-cat">{p.cat}</div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="project-stack">
                    {p.stack.map(t => <span key={t} className="p-tag">{t}</span>)}
                  </div>
                  <div className="project-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="pl-btn primary">
                        Live Demo
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="pl-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section exp-bg" id="experience">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Work History</div>
            <h2 className="section-title">Experience</h2>
            <p className="section-sub">Professional journey building real products that serve real users.</p>
          </div>
          <div className="exp-timeline">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="exp-item reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <div className="exp-dot"/>
                <div className="exp-card">
                  <div className="exp-header">
                    <div>
                      <div className="exp-role">{e.role}</div>
                      <div className="exp-company">{e.company}</div>
                    </div>
                    <span className="exp-date">{e.date}</span>
                  </div>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  <div className="exp-tags">
                    {e.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">Education</div>
            <h2 className="section-title">Academic Background</h2>
          </div>
          <div className="edu-grid">
            {EDUCATION.map((e, i) => (
              <div key={i} className="edu-card reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <div className="edu-icon">{e.icon}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <span className="edu-year">{e.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section exp-bg" id="contact">
        <div className="section-inner">
          <div className="reveal" style={{textAlign:'center',maxWidth:'600px',margin:'0 auto 0'}}>
            <div className="section-label" style={{justifyContent:'center'}}>Get In Touch</div>
            <h2 className="section-title">Let's Build Something Great.</h2>
            <p className="section-sub" style={{margin:'0 auto'}}>Open to full-time roles, freelance projects, and collaborations. Drop a message and I'll get back to you.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info-list reveal">
              <a href="mailto:sharun6006@gmail.com" className="c-info">
                <span className="c-icon">📧</span>
                <div><h4>Email</h4><span>sharun6006@gmail.com</span></div>
              </a>
              <a href="tel:+916005134734" className="c-info">
                <span className="c-icon">📱</span>
                <div><h4>Phone</h4><span>+91 6005134734</span></div>
              </a>
              <a href="https://www.linkedin.com/in/sharun-chaudhary-45a588284" target="_blank" rel="noreferrer" className="c-info">
                <span className="c-icon">💼</span>
                <div><h4>LinkedIn</h4><span>sharun-chaudhary-45a588284</span></div>
              </a>
              <a href="https://github.com/sharun20026-dev" target="_blank" rel="noreferrer" className="c-info">
                <span className="c-icon">🐱</span>
                <div><h4>GitHub</h4><span>sharun20026-dev</span></div>
              </a>
              <div className="c-info" style={{cursor:'default'}}>
                <span className="c-icon">📍</span>
                <div><h4>Location</h4><p>Noida, India</p></div>
              </div>
            </div>
            <div className="reveal" style={{transitionDelay:'.1s'}}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="fg">
                    <label htmlFor="cf-name">Your Name</label>
                    <input id="cf-name" name="name" type="text" placeholder="Sharun Chaudhary" required
                      value={formData.name} onChange={e=>setFormData(p=>({...p,name:e.target.value}))}/>
                  </div>
                  <div className="fg">
                    <label htmlFor="cf-email">Email Address</label>
                    <input id="cf-email" name="email" type="email" placeholder="you@example.com" required
                      value={formData.email} onChange={e=>setFormData(p=>({...p,email:e.target.value}))}/>
                  </div>
                </div>
                <div className="fg">
                  <label htmlFor="cf-subject">Subject</label>
                  <input id="cf-subject" name="subject" type="text" placeholder="Project collaboration / Job opportunity"
                    value={formData.subject} onChange={e=>setFormData(p=>({...p,subject:e.target.value}))}/>
                </div>
                <div className="fg">
                  <label htmlFor="cf-message">Message</label>
                  <textarea id="cf-message" name="message" rows="5" placeholder="Tell me about your project..." required
                    value={formData.message} onChange={e=>setFormData(p=>({...p,message:e.target.value}))}/>
                </div>
                <button type="submit" className="btn btn-lime form-submit">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
                {submitted && <div className="form-success">✓ Message sent! I'll get back to you soon.</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <p>© 2025 <span>Sharun Chaudhary</span></p>
          <div className="footer-socials">
            <a href="https://github.com/sharun20026-dev" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sharun-chaudhary-45a588284" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:sharun6006@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}
