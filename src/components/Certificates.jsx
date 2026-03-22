import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);

  // Exact mapping to available files in /public/certificates/
  const certificates = [
    { id: 1, title: "🏆 Build Generative AI", org: "Infosys", desc: "Completed training on building large language models.", file: "/certificates/infosys-gen-ai.pdf", tags: [] },
    { id: 2, title: "🏆 Computational Theory", org: "Infosys", desc: "Comprehensive course on algorithms and automata.", file: "/certificates/infosys-comp-theory.pdf", tags: [] },
    { id: 3, title: "🏆 Cloud Computing", org: "NPTEL", desc: "Covered fundamentals and architectures of cloud computing.", file: "/certificates/Cloud Computing (1).pdf", tags: ["NPTEL Certification"] },
    { id: 4, title: "🏆 ChatGPT Prompt Engineering", org: "Infosys", desc: "Advanced techniques for interacting with LLMs.", file: "/certificates/ChatGPT PROMPT certificTE.pdf", tags: [] },
    { id: 5, title: "🏆 The Bits and Bytes of Computer Networking", org: "Google", desc: "Completed comprehensive networking concepts.", file: "/certificates/Coursera HMNJPLU8BR9I (1).pdf", tags: [] },
    { id: 6, title: "🏆 Packet Switching Networking", org: "Coursera", desc: "Deep dive into network traffic routing.", file: "/certificates/coursera-packet-switching.pdf", tags: [] },
    { id: 7, title: "🏆 TCP/IP Networking", org: "Google", desc: "Advanced exploration of the TCP/IP suite.", file: "/certificates/Coursera SWO76ZWAVCIA (1).pdf", tags: [] },
    { id: 8, title: "🏆 Peer-to-Peer Protocols", org: "Google", desc: "Studied decentralized communication models.", file: "/certificates/Coursera 033AFEGXRWCF.pdf", tags: [] },
    { id: 9, title: "🏆 C++ Programming", org: "NeoColab", desc: "Demonstrated proficiency in C++ programming.", file: "/certificates/neocolab-cpp.pdf", tags: [] },
    { id: 10, title: "🏆 Java Programming", org: "NeoColab", desc: "Validated expertise in Java language and concepts.", file: "/certificates/neocolab-java.pdf", tags: [] }
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
