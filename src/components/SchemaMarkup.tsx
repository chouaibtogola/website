import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RedHat Expertise",
    "image": "/og-image.jpg",
    "description": "Expert cybersecurity services including penetration testing, social engineering, and security assessments.",
    "@id": "https://redhatexpertise.netlify.app",
    "url": "https://redhatexpertise.netlify.app",
    "telephone": "(+223) 77544177",
    "email": "redhatexpertise@proton.me",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ML"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.6392,
      "longitude": -8.0029
    },
    "sameAs": [
      "https://www.linkedin.com/in/chouaib-youssouf-togola-3a6664336/"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
} 