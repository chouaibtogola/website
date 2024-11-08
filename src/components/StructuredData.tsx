export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RedHat Expertise",
    "description": "Professional cybersecurity services including penetration testing, social engineering, and security assessments.",
    "url": "https://redhatexpertise.netlify.app",
    "telephone": "(+223) 77544177",
    "email": "redhatexpertise@yahoo.com",
    "areaServed": "Global",
    "serviceType": [
      "Penetration Testing",
      "Social Engineering",
      "Security Assessment",
      "Vulnerability Assessment",
      "Phishing Simulation",
      "OWASP Top 10 Assessment",
      "Security Awareness Training",
      "24/7 Monitoring"
    ],
    "sameAs": [
      // Add your social media profiles here
      "https://linkedin.com/company/redhat-expertise",
      "https://github.com/redhat-expertise"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 