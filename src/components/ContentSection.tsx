interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ContentSection({ 
  title, 
  subtitle, 
  children, 
  className = '' 
}: ContentSectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-xl text-gray-600">{subtitle}</p>
          )}
        </header>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
} 