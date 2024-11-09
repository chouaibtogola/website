interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height 
}: OptimizedImageProps) {
  return (
    <img 
      src={src}
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      className={className}
      decoding="async"
    />
  );
} 