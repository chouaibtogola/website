interface ResponsiveWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ResponsiveWrapper({ children, className = '' }: ResponsiveWrapperProps) {
  return (
    <div className={`px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl ${className}`}>
      {children}
    </div>
  );
} 