import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEO({
  title = 'RedHat Expertise | Professional Cybersecurity Services',
  description = 'Expert penetration testing, social engineering, and security assessment services. Protect your digital assets with industry-leading cybersecurity solutions.',
  canonical = 'https://redhatexpertise.netlify.app',
  ogImage = '/og-image.jpg',
  noindex = false
}: SEOProps) {
  const siteTitle = title.includes('|') ? title : `${title} | RedHat Expertise`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
} 