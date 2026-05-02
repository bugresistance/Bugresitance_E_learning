import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import NavbarTop from './Shared/NavbarTop'
import UpdatedFooter from './Shared/UpdatedFooter'
import ProductShowcase from './ProductShowcase'
import Partners from './Partners'

const Home = () => {
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const devServices = [
    { icon: '💻', title: 'Web Development', desc: 'Modern, scalable web applications built with cutting-edge frameworks.' },
    { icon: '📱', title: 'Mobile Development', desc: 'Native & cross-platform mobile apps for iOS and Android.' },
    { icon: '⚙️', title: 'Custom Software', desc: 'Tailored software solutions designed for your unique business needs.' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'User-centered design that creates delightful digital experiences.' },
  ]

  const testServices = [
    { icon: '🔧', title: 'Manual Testing', desc: 'Thorough manual testing to uncover critical bugs and usability issues.' },
    { icon: '🔗', title: 'API Testing', desc: 'Comprehensive API validation for reliability, security, and performance.' },
    { icon: '📊', title: 'Load Testing', desc: 'Stress and performance testing to ensure your systems scale under pressure.' },
    { icon: '🤖', title: 'Automation Testing', desc: 'CI/CD integrated test automation for faster, more reliable releases.' },
  ]

  const getVisibleServices = () => {
    if (activeTab === 'dev') return devServices
    if (activeTab === 'testing') return testServices
    return [...devServices, ...testServices]
  }

  return (
    <>
      <NavbarTop />

      {/* ===== MODERN HERO ===== */}
      <section className="modern-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 hero-content">
              <p className="hero-tagline" style={{ animation: 'fadeInUp 0.6s ease both' }}>
                Software Development & Quality Assurance
              </p>
              <h1 className="hero-heading" style={{ animation: 'fadeInUp 0.7s ease both' }}>
                We <span className="highlight">Build.</span> We <span className="highlight">Test.</span>{' '}
                We <span className="highlight">Deliver.</span>
              </h1>
              <p className="hero-description" style={{ animation: 'fadeInUp 0.8s ease both' }}>
                End-to-end software development and quality assurance services.
                From concept to deployment, we craft robust, tested, and scalable digital solutions.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animation: 'fadeInUp 0.9s ease both' }}>
                <Link to="/contact" className="btn-modern-primary" style={{ textDecoration: 'none' }}>
                  Start a Project →
                </Link>
                <Link to="/products" className="btn-modern-secondary" style={{ textDecoration: 'none' }}>
                  View Products
                </Link>
              </div>
              <div className="hero-stats" style={{ animation: 'fadeInUp 1s ease both' }}>
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12+</div>
                  <div className="stat-label">QA Services</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block" style={{ animation: 'fadeInRight 0.9s ease both' }}>
              {/* Decorative code snippet visual */}
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '36px',
                fontFamily: "'Courier New', monospace",
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: '2',
                animation: 'float 4s ease-in-out infinite'
              }}>
                <div style={{ color: '#F23460', fontWeight: '700', marginBottom: '8px', fontSize: '16px' }}>
                  {'// BugResistance'}
                </div>
                <div><span style={{ color: '#7b4fd6' }}>const</span> services = {'{'}</div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#F23460' }}>development</span>: <span style={{ color: '#4ade80' }}>'✓ Web, Mobile, Cloud'</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#F23460' }}>testing</span>: <span style={{ color: '#4ade80' }}>'✓ Manual, Automation, API'</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#F23460' }}>product</span>: <span style={{ color: '#4ade80' }}>'✓ Document Scanner OCR'</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#F23460' }}>quality</span>: <span style={{ color: '#4ade80' }}>'✓ 99% client satisfaction'</span>
                </div>
                <div>{'}'}</div>
                <div style={{ marginTop: '8px' }}>
                  <span style={{ color: '#7b4fd6' }}>export default</span> services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO - SERVICES ===== */}
      <section className="modern-section" style={{ background: '#f7f5ff', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-badge" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #5c2cc5, #F23460)',
              color: '#fff',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: '6px 18px',
              borderRadius: '50px',
              marginBottom: '16px'
            }}>What We Do</span>
            <h2 className="section-title" style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '38px',
              fontWeight: '700',
              color: '#1a1333',
              marginBottom: '16px'
            }}>Our Specializations</h2>
            <p className="section-subtitle" style={{
              fontSize: '18px',
              color: '#6b6b6b',
              maxWidth: '600px',
              margin: '0 auto 24px',
              lineHeight: '1.7'
            }}>
              Comprehensive software development and quality assurance under one roof
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="service-tabs">
            <button
              className={`service-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >All Services</button>
            <button
              className={`service-tab-btn ${activeTab === 'dev' ? 'active' : ''}`}
              onClick={() => setActiveTab('dev')}
            >Development</button>
            <button
              className={`service-tab-btn ${activeTab === 'testing' ? 'active' : ''}`}
              onClick={() => setActiveTab('testing')}
            >Testing</button>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {getVisibleServices().map((s, i) => (
              <div className="service-card-modern" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="card-icon">{s.icon}</div>
                <h4 className="card-title">{s.title}</h4>
                <p className="card-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn-modern-primary" style={{ textDecoration: 'none' }}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SHOWCASE ===== */}
      <ProductShowcase />

      {/* ===== PARTNERS ===== */}
      <Partners />

      {/* ===== CTA SECTION ===== */}
      <section className="modern-cta">
        <div className="container">
          <h2 className="cta-heading">Ready to Build Your Next Project?</h2>
          <p className="cta-text">
            From ideation to deployment, our team of developers and QA engineers
            deliver production-ready solutions with zero compromises on quality.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-cta-white" style={{ textDecoration: 'none' }}>
              Start a Project
            </Link>
            <Link to="/contact" className="btn-cta-outline" style={{ textDecoration: 'none' }}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>


      {/* ===== FOOTER ===== */}
      <UpdatedFooter />
    </>
  )
}

export default Home