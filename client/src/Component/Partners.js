import React from 'react'

const Partners = () => {
  const stats = [
    { num: '50+', text: 'Clients Worldwide' },
    { num: '120+', text: 'Projects Delivered' },
    { num: '15+', text: 'Industry Partners' },
    { num: '5+', text: 'Countries Served' },
  ]

  const partners = [
    { name: 'TechVista', color: '#5c2cc5' },
    { name: 'CloudNine', color: '#F23460' },
    { name: 'DataFlow', color: '#7b4fd6' },
    { name: 'NexGen', color: '#3d1a8e' },
    { name: 'InnoSoft', color: '#c41e48' },
    { name: 'ByteCraft', color: '#5c2cc5' },
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
              className="partner-logo-item"
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${p.color}20, ${p.color}10)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px',
                fontSize: '22px',
                fontWeight: '800',
                color: p.color
              }}>
                {p.name.charAt(0)}
              </div>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
