import React from "react";
import "./Certificates.css";

const certificates = [
  {
    id: 1,
    title: "Build Generative AI",
    org: "Infosys",
    desc: "Completed training on building large language models and AI-powered applications.",
    file: "/certificates/build-generative-ai.pdf",
    tags: []
  },
  {
    id: 2,
    title: "Computational Theory",
    org: "Infosys",
    desc: "Comprehensive course on algorithms, automata theory, and computational complexity.",
    file: "/certificates/computational-theory-infosys.pdf",
    tags: []
  },
  {
    id: 3,
    title: "Cloud Computing",
    org: "NPTEL",
    desc: "Covered fundamentals and architectures of cloud computing, virtualization, and distributed systems.",
    file: "/certificates/cloud-computing.pdf",
    tags: ["NPTEL Certification"]
  },
  {
    id: 4,
    title: "ChatGPT Prompt Engineering",
    org: "Infosys",
    desc: "Advanced techniques for interacting with large language models using prompt engineering.",
    file: "/certificates/chatgpt-prompt-engineering.pdf",
    tags: []
  },
  {
    id: 5,
    title: "The Bits and Bytes of Computer Networking",
    org: "Google",
    desc: "Completed comprehensive networking concepts including protocols, routing, and network architecture.",
    file: "/certificates/bits-and-bytes-google.pdf",
    tags: []
  },
  {
    id: 6,
    title: "Packet Switching Networking",
    org: "Coursera",
    desc: "Deep dive into packet switching, routing mechanisms, and network traffic management.",
    file: "/certificates/packet-switching-coursera.pdf",
    tags: []
  },
  {
    id: 7,
    title: "TCP/IP Networking",
    org: "Coursera",
    desc: "Advanced exploration of the TCP/IP suite and modern networking protocols.",
    file: "/certificates/tcp-ip-coursera.pdf",
    tags: []
  },
  {
    id: 8,
    title: "Peer-to-Peer Protocols",
    org: "Coursera",
    desc: "Studied decentralized communication models and peer-to-peer network architectures.",
    file: "/certificates/peer-to-peer-coursera.pdf",
    tags: []
  },
  {
    id: 9,
    title: "Gen AI Certification",
    org: "NASSCOM",
    desc: "Certification in Generative AI fundamentals and industry applications.",
    file: "/certificates/gen-ai-nasscom.png",
    tags: []
  },
  {
    id: 10,
    title: "C Programming Certification",
    org: "Certification",
    desc: "Completed foundational training in C programming and problem-solving.",
    file: "/certificates/c-certifi.pdf",
    tags: []
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="section container">
      <h2 className="section-title">Certificates</h2>

      <div className="certs-list-minimal">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="cert-card-minimal"
            onClick={() => window.open(cert.file, "_blank")}
          >
            <div className="cert-info-minimal">
              <h3 className="cert-title-minimal">
                {cert.title}
              </h3>

              <p className="cert-org-minimal">
                {cert.org}
              </p>

              <p className="cert-desc-minimal">
                {cert.desc}
              </p>
            </div>

            <span className="cert-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
