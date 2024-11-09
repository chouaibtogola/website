import { Link } from 'react-router-dom';

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function InternalLink({ to, children, className = '' }: InternalLinkProps) {
  return (
    <Link 
      to={to}
      className={`text-blue-600 hover:text-blue-800 underline ${className}`}
      onClick={() => {
        // Track internal link clicks for analytics
        if (window.gtag) {
          window.gtag('event', 'internal_link_click', {
            link_url: to,
            link_text: typeof children === 'string' ? children : 'link'
          });
        }
      }}
    >
      {children}
    </Link>
  );
} 