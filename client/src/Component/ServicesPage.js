import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavbarTop from './Shared/NavbarTop'
import UpdatedFooter from './Shared/UpdatedFooter'

// MUI Icons - Development
import CodeIcon from '@mui/icons-material/Code'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import BrushIcon from '@mui/icons-material/Brush'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
// Standard QA
import SearchIcon from '@mui/icons-material/Search'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import LanguageIcon from '@mui/icons-material/Language'
import ReplayIcon from '@mui/icons-material/Replay'
import ApiIcon from '@mui/icons-material/Api'
import StorageIcon from '@mui/icons-material/Storage'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
// Specialized QA
import SmartToyIcon from '@mui/icons-material/SmartToy'
import ShieldIcon from '@mui/icons-material/Shield'
import DataObjectIcon from '@mui/icons-material/DataObject'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import SpeedIcon from '@mui/icons-material/Speed'
import DevicesOtherIcon from '@mui/icons-material/DevicesOther'
import LinkIcon from '@mui/icons-material/Link'
import PublicIcon from '@mui/icons-material/Public'

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState('all')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const devServices = [
    { icon: <CodeIcon />, title: 'Web Development', desc: 'Modern, scalable web applications built with cutting-edge frameworks.', link: '/service/webdevelopment' },
    { icon: <PhoneIphoneIcon />, title: 'Mobile Development', desc: 'Native & cross-platform mobile apps for iOS and Android.', link: '/service/mobiledevelopment' },
    { icon: <SettingsApplicationsIcon />, title: 'Custom Software', desc: 'Tailored software solutions for your unique business needs.', link: '/service/customsoftware' },
    { icon: <IntegrationInstructionsIcon />, title: 'API Integration', desc: 'Secure, well-documented APIs powering modern digital ecosystems.', link: '/service/apiintegration' },
    { icon: <BrushIcon />, title: 'UI/UX Design', desc: 'User-centered design that creates delightful digital experiences.', link: '/service/uiuxdesign' },
    { icon: <CloudQueueIcon />, title: 'Cloud & DevOps', desc: 'Scalable cloud infrastructure with CI/CD pipelines.', link: '/service/clouddevops' },
  ]

  const standardQA = [
    { icon: <SearchIcon />, title: 'Manual Testing', desc: 'Thorough manual testing to uncover critical bugs and usability issues.', link: '/service/manualtesting' },
    { icon: <PhoneAndroidIcon />, title: 'Mobile Testing', desc: 'Comprehensive testing across iOS and Android devices.', link: '/service/mobiletesting' },
    { icon: <LanguageIcon />, title: 'Web App Testing', desc: 'Cross-browser and responsive testing for web applications.', link: '/service/webtesting' },
    { icon: <ReplayIcon />, title: 'Regression Testing', desc: 'Ensuring new changes don\'t break existing functionality.', link: '/service/regressiontesting' },
    { icon: <ApiIcon />, title: 'API Testing', desc: 'Comprehensive API validation for reliability and security.', link: '/service/apitesting' },
    { icon: <StorageIcon />, title: 'Database Testing', desc: 'Data integrity, performance, and security validation.', link: '/service/databasetesting' },
    { icon: <DesktopWindowsIcon />, title: 'Desktop App Testing', desc: 'Quality assurance for Windows, macOS, and Linux applications.', link: '/service/desktoptesting' },
    { icon: <AccessibilityNewIcon />, title: 'Usability Testing', desc: 'User experience evaluation and accessibility compliance.', link: '/service/usabilitytesting' },
  ]

  const specializedQA = [
    { icon: <SmartToyIcon />, title: 'Automation Testing', desc: 'CI/CD integrated test automation for faster releases.', link: '/service/automationtesting' },
    { icon: <ShieldIcon />, title: 'Security Testing', desc: 'Vulnerability assessments and penetration testing.', link: '/service/securitytesting' },
    { icon: <DataObjectIcon />, title: 'Big Data Testing', desc: 'Validation of large-scale data processing pipelines.', link: '/service/bigdatatesting' },
    { icon: <CloudDoneIcon />, title: 'Cloud Testing', desc: 'Testing cloud-native and hybrid cloud applications.', link: '/service/cloudtesting' },
    { icon: <AccountTreeIcon />, title: 'ERP Testing', desc: 'End-to-end testing for enterprise resource planning systems.', link: '/service/erptesting' },
    { icon: <SpeedIcon />, title: 'Load Testing', desc: 'Stress and performance testing under heavy traffic.', link: '/service/loadtesting' },
    { icon: <DevicesOtherIcon />, title: 'IoT Testing', desc: 'Testing interconnected devices and IoT ecosystems.', link: '/service/iottesting' },
    { icon: <LinkIcon />, title: 'Blockchain Testing', desc: 'Smart contract and blockchain application validation.', link: '/service/blockchaintesting' },
    { icon: <SmartToyIcon />, title: 'AI & ML Testing', desc: 'Validation of AI models and machine learning pipelines.', link: '/service/altesting' },
    { icon: <PublicIcon />, title: 'Globalization Testing', desc: 'Localization and internationalization quality assurance.', link: '/service/globalizationtesting' },
  ]

  const renderServiceCard = (service, index, color) => (
    <Link to={service.link} key={index} style={{ textDecoration: 'none' }}>
      <div className="service-card-modern" style={{ textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px' }}>
        <div className="card-icon" style={{ flexShrink: 0, color: color }}>
          {service.icon}
        </div>
        <div>
          <h4 className="card-title" style={{ marginBottom: '6px' }}>{service.title}</h4>
          <p className="card-desc">{service.desc}</p>
        </div>
      </div>
    </Link>
  )

  return (
    <>
      <NavbarTop />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0d0b1a 0%, #1a0f3a 40%, #2d1560 70%, #5c2cc5 100%)',
        padding: '140px 0 60px',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #5c2cc5, #F23460)',
            color: '#fff',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            padding: '6px 18px',
            borderRadius: '50px',
            marginBottom: '20px'
          }}>Our Services</span>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '48px',
            fontWeight: '800',
            color: '#fff',
            lineHeight: '1.2',
            marginBottom: '18px'
          }}>
            What We <span style={{
              background: 'linear-gradient(135deg, #F23460, #ff5a85)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Offer</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Comprehensive software development and quality assurance services to build, test, and deliver exceptional digital products.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ background: '#f7f5ff', padding: '40px 0 0' }}>
        <div className="container">
          <div className="service-tabs">
            <button
              className={`service-tab-btn ${activeSection === 'all' ? 'active' : ''}`}
              onClick={() => setActiveSection('all')}
            >All Services</button>
            <button
              className={`service-tab-btn ${activeSection === 'dev' ? 'active' : ''}`}
              onClick={() => setActiveSection('dev')}
            >Development</button>
            <button
              className={`service-tab-btn ${activeSection === 'standard' ? 'active' : ''}`}
              onClick={() => setActiveSection('standard')}
            >Standard QA</button>
            <button
              className={`service-tab-btn ${activeSection === 'specialized' ? 'active' : ''}`}
              onClick={() => setActiveSection('specialized')}
            >Specialized QA</button>
          </div>
        </div>
      </section>

      {/* Software Development Section */}
      {(activeSection === 'all' || activeSection === 'dev') && (
        <section id="development" style={{ background: '#f7f5ff', padding: '60px 0' }}>
          <div className="container">
            <div style={{ marginBottom: '36px' }}>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #5c2cc5, #7b4fd6)',
                color: '#fff',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '5px 16px',
                borderRadius: '50px',
                marginBottom: '12px'
              }}>Development</span>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '32px',
                fontWeight: '700',
                color: '#1a1333',
              }}>Software Development</h2>
              <p style={{ fontSize: '16px', color: '#6b6b6b', maxWidth: '500px' }}>
                Full-stack development services to bring your ideas to life
              </p>
            </div>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              {devServices.map((s, i) => renderServiceCard(s, i, '#5c2cc5'))}
            </div>
          </div>
        </section>
      )}

      {/* Standard QA Section */}
      {(activeSection === 'all' || activeSection === 'standard') && (
        <section id="standard-qa" style={{ background: '#fff', padding: '60px 0' }}>
          <div className="container">
            <div style={{ marginBottom: '36px' }}>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #F23460, #ff5a85)',
                color: '#fff',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '5px 16px',
                borderRadius: '50px',
                marginBottom: '12px'
              }}>Quality Assurance</span>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '32px',
                fontWeight: '700',
                color: '#1a1333',
              }}>Standard QA Services</h2>
              <p style={{ fontSize: '16px', color: '#6b6b6b', maxWidth: '500px' }}>
                Core testing services to ensure your software works flawlessly
              </p>
            </div>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              {standardQA.map((s, i) => renderServiceCard(s, i, '#F23460'))}
            </div>
          </div>
        </section>
      )}

      {/* Specialized QA Section */}
      {(activeSection === 'all' || activeSection === 'specialized') && (
        <section id="specialized-qa" style={{ background: '#f7f5ff', padding: '60px 0' }}>
          <div className="container">
            <div style={{ marginBottom: '36px' }}>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #F23460, #c41e48)',
                color: '#fff',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '5px 16px',
                borderRadius: '50px',
                marginBottom: '12px'
              }}>Advanced Testing</span>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '32px',
                fontWeight: '700',
                color: '#1a1333',
              }}>Specialized QA Services</h2>
              <p style={{ fontSize: '16px', color: '#6b6b6b', maxWidth: '500px' }}>
                Advanced testing methodologies for complex systems and technologies
              </p>
            </div>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              {specializedQA.map((s, i) => renderServiceCard(s, i, '#F23460'))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="modern-cta">
        <div className="container">
          <h2 className="cta-heading">Need a Custom Solution?</h2>
          <p className="cta-text">
            Tell us about your project and we'll craft the perfect combination of development and testing services.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-cta-white" style={{ textDecoration: 'none' }}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <UpdatedFooter />
    </>
  )
}

export default ServicesPage
