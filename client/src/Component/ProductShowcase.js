import React from 'react'
import { Link } from 'react-router-dom'
import productImg from '../image/document-scanner-product.png'

const ProductShowcase = () => {
  const features = [
    { icon: '🔍', text: 'Advanced OCR with 99%+ accuracy' },
    { icon: '🌐', text: 'Multi-language support (100+ languages)' },
    { icon: '📄', text: 'Export to PDF, Word, and plain text' },
    { icon: '☁️', text: 'Cloud sync across all your devices' },
    { icon: '✂️', text: 'Smart crop & auto-enhance' },
    { icon: '🔒', text: 'Enterprise-grade security & encryption' },
  ]

  return (
    <section className="product-showcase">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 product-content" style={{ animation: 'fadeInLeft 0.8s ease both' }}>
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
            }}>Our Product</span>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '40px',
              fontWeight: '700',
              color: '#fff',
              lineHeight: '1.25',
              marginBottom: '18px'
            }}>
              Document Scanner <br />
              <span style={{
                background: 'linear-gradient(135deg, #F23460, #ff5a85)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>with OCR</span>
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: '1.8',
              marginBottom: '28px',
              maxWidth: '480px'
            }}>
              Transform any document into editable, searchable digital text instantly. 
              Our AI-powered OCR engine delivers unmatched accuracy across 100+ languages.
            </p>
            <ul className="product-feature-list">
              {features.map((f, i) => (
                <li key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="feature-icon">{f.icon}</span>
                  {f.text}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn-modern-primary" style={{ textDecoration: 'none' }}>
                Learn More →
              </Link>
              <a href="#contact" className="btn-modern-secondary" style={{ textDecoration: 'none' }}>
                Request Demo
              </a>
            </div>
          </div>
          <div className="col-lg-6 product-image-wrapper" style={{ animation: 'fadeInRight 0.8s ease both' }}>
            <img
              src={productImg}
              alt="Document Scanner with OCR Product"
              style={{
                maxWidth: '85%',
                filter: 'drop-shadow(0 20px 60px rgba(242, 52, 96, 0.2))',
                borderRadius: '20px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
