import React from 'react'

const Partners = () => {
  const stats = [
    { num: '20+', text: 'Clients Worldwide' },
    { num: '25+', text: 'Projects Delivered' },
    { num: '10+', text: 'Industry Partners' },
    { num: '3+', text: 'Countries Served' },
  ]

  const partners = [
    { name: 'BrainB', logo: '/partners/BrainB.png' },
    { name: 'CDA', logo: '/partners/CDAB.png' },
    { name: 'Dhumketu', logo: '/partners/Dhumketu logo.png' },
    { name: 'JCI', logo: '/partners/JCI logo.png' },
    { name: 'Paarel', logo: '/partners/PAAREL.png' },
    { name: 'For The Light', logo: '/partners/for the light_logo-01.png' },
    { name: 'Law', logo: '/partners/law.png' },
    { name: 'Gojeta', logo: '/partners/gojeta.png' },
  ]

  return (
    <section className="partners-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '40px' }}>
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
          }}>Trusted Partners</span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '38px',
            fontWeight: '700',
            color: '#1a1333',
            marginBottom: '16px',
            lineHeight: '1.25'
          }}>Companies That Trust Us</h2>
          <p style={{
            fontSize: '18px',
            color: '#6b6b6b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            We partner with forward-thinking organizations to deliver exceptional software solutions
          </p>
        </div>

        {/* Stats */}
        <div className="partners-stats">
          {stats.map((s, i) => (
            <div className="partner-stat" key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-text">{s.text}</div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="partners-logos">
          {partners.map((p, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
              }}
            >
              <img
                src={p.logo}
                alt={p.name}
                style={{
                  maxWidth: '340px',
                  maxHeight: '180px',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
