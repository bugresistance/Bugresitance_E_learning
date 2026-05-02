import React, { useEffect } from 'react'
import NavbarTop from './Shared/NavbarTop'
import UpdatedFooter from './Shared/UpdatedFooter'
import productImg from '../image/document-scanner-product.png'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const features = [
    { icon: '🔍', title: 'Advanced OCR Engine', desc: 'AI-powered text recognition with 99%+ accuracy across printed and handwritten text.' },
    { icon: '🌐', title: 'Multi-Language OCR', desc: 'Supports 100+ languages including English, Arabic, Bengali, Chinese, and more.' },
    { icon: '📄', title: 'Multiple Export Formats', desc: 'Export scanned documents as PDF, DOCX, TXT, or searchable PDF with embedded text.' },
    { icon: '☁️', title: 'Cloud Sync', desc: 'Automatically back up and access your documents across all your devices seamlessly.' },
    { icon: '✂️', title: 'Smart Crop & Enhance', desc: 'Auto-detect document edges, correct perspective, and enhance readability instantly.' },
    { icon: '🔒', title: 'Enterprise Security', desc: 'End-to-end encryption, SOC2 compliance, and role-based access for teams.' },
  ]

  const steps = [
    { num: '1', title: 'Capture', desc: 'Point your camera at any document — our AI detects and frames it automatically.' },
    { num: '2', title: 'Process', desc: 'OCR engine extracts text instantly with smart formatting and structure preservation.' },
    { num: '3', title: 'Export & Share', desc: 'Save as PDF, share via cloud, or integrate directly into your workflow tools.' },
  ]

  return (
    <div>
      <NavbarTop />

      {/* Hero */}
      <section className="product-page-hero">
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
          }}>Our Flagship Product</span>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '52px',
            fontWeight: '800',
            color: '#fff',
            lineHeight: '1.15',
            marginBottom: '20px'
          }}>
            Document Scanner{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F23460, #ff5a85)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>with OCR</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            margin: '0 auto 36px',
            lineHeight: '1.8'
          }}>
            Transform physical documents into searchable, editable digital files with our 
            AI-powered scanning and OCR technology.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-modern-primary" style={{ textDecoration: 'none' }}>
              Request a Demo
            </Link>
            <a href="#features" className="btn-modern-secondary" style={{ textDecoration: 'none' }}>
              Explore Features ↓
            </a>
          </div>
          <div style={{ marginTop: '50px' }}>
            <img
              src={productImg}
              alt="Document Scanner with OCR"
              style={{
                maxWidth: '500px',
                width: '100%',
                borderRadius: '20px',
                filter: 'drop-shadow(0 30px 80px rgba(242, 52, 96, 0.25))',
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
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
              marginBottom: '16px'
            }}>Features</span>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '38px',
              fontWeight: '700',
              color: '#1a1333',
              marginBottom: '14px'
            }}>Powerful Capabilities</h2>
            <p style={{ fontSize: '18px', color: '#6b6b6b', maxWidth: '550px', margin: '0 auto' }}>
              Everything you need to digitize, organize, and manage your documents efficiently
            </p>
          </div>
          <div className="product-features-grid">
            {features.map((f, i) => (
              <div className="product-feature-card" key={i}>
                <div className="pf-icon">{f.icon}</div>
                <h4 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1a1333',
                  marginBottom: '10px'
                }}>{f.title}</h4>
                <p style={{ fontSize: '15px', color: '#6b6b6b', lineHeight: '1.7' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container text-center">
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
            marginBottom: '16px'
          }}>How It Works</span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '38px',
            fontWeight: '700',
            color: '#1a1333',
            marginBottom: '14px'
          }}>Three Simple Steps</h2>
          <div className="steps-container">
            {steps.map((s, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{s.num}</div>
                <h4 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#1a1333',
                  marginBottom: '10px'
                }}>{s.title}</h4>
                <p style={{ fontSize: '15px', color: '#6b6b6b', lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="modern-cta">
        <div className="container">
          <h2 className="cta-heading">Ready to Go Paperless?</h2>
          <p className="cta-text">
            Join hundreds of businesses that have transformed their document workflows with our scanner.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-cta-white" style={{ textDecoration: 'none' }}>
              Get Started Today
            </Link>
            <Link to="/contact" className="btn-cta-outline" style={{ textDecoration: 'none' }}>
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      <UpdatedFooter />
    </div>
  )
}

export default ProductPage
