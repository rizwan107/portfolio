import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);

  // Exact mapping to available files in /public/certificates/
  const certificates = [
  {
    id: 1,
    title: "Build Generative AI",
    file: "/certificates/Build Generative AI Apps and Solutions with No-Code Too certificate.pdf",
  },
  {
    id: 2,
    title: "Computational Theory",
    file: "/certificates/computational theory infosys certificate.pdf",
  },
  {
    id: 3,
    title: "Cloud Computing",
    file: "/certificates/Cloud Computing (1).pdf",
  },
  {
    id: 4,
    title: "ChatGPT Prompt Engineering",
    file: "/certificates/ChatGPT PROMPT certifiTE.pdf",
  },
  {
    id: 5,
    title: "Bits and Bytes",
    file: "/certificates/THE-BITS-AND-BITES-GOOGLE.pdf",
  },
  {
    id: 6,
    title: "Packet Switching",
    file: "/certificates/PACKET-SWITCHING-COURSERA.pdf",
  },
  {
    id: 7,
    title: "TCP/IP Networking",
    file: "/certificates/TCP-IP-Coursera.pdf",
  },
  {
    id: 8,
    title: "Peer-to-Peer",
    file: "/certificates/peer-to-peer-Coursera.pdf",
  },
  {
    id: 9,
    title: "Gen AI Nasscom",
    file: "/certificates/certificate of gen ai nasscom.png",
  }
];

  const displayedCerts = showAll ? certificates : certificates.slice(0, 3);

  const openCertificate = (fileUrl) => {
    window.open(fileUrl, "_blank");
  };

  return (
    <section id="certificates" className="section container">
      <div className="section-header-group">
        <h2 className="section-title" style={{fontSize: '2.5rem'}}>◇ Certificates</h2>
      </div>
      <div className="section-box">
        <div className="certs-list-minimal">
          {displayedCerts.map(cert => (
            <div 
              key={cert.id} 
              className="cert-card-minimal"
              onClick={() => openCertificate(cert.file)}
            >
              <div className="cert-info-minimal">
                <h4 className="cert-title-minimal" style={{fontSize: '1.2rem'}}>{cert.title}</h4>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', marginTop: '0.2rem'}}>
                  <p className="cert-org-minimal" style={{fontSize: '0.9rem'}}>{cert.org}</p>
                  {cert.tags && cert.tags.map((tag, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.75rem', 
                      fontFamily: 'var(--font-mono)', 
                      color: 'var(--accent-purple)', 
                      border: '1px solid rgba(168, 85, 247, 0.3)', 
                      padding: '0.2rem 0.5rem', 
                      borderRadius: '4px'
                    }}>{tag}</span>
                  ))}
                </div>
                <p className="cert-desc-minimal" style={{fontSize: '1rem'}}>{cert.desc}</p>
              </div>
              <div className="cert-arrow">→</div>
            </div>
          ))}
        </div>

        <div className="cert-toggle-container">
          <button 
            className="btn-primary toggle-btn" 
            style={{padding: '0.9rem 1.8rem', fontSize: '1rem'}}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show All Certificates"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
