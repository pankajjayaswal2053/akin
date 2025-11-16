
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  lazy?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, width, height, className = '', lazy = true }) => {
  const webpSrc = src.replace(/\.(jpg|png)$/, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={src} type={src.endsWith('.png') ? 'image/png' : 'image/jpeg'} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={lazy ? 'lazy' : 'eager'}
      />
    </picture>
  );
};

export default OptimizedImage;
