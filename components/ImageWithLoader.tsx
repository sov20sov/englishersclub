import React, { useState } from 'react';

type ImageWithLoaderProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Optional: custom wrapper className (e.g. for aspect ratio container) */
  wrapperClassName?: string;
};

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  loading,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`relative block overflow-hidden w-full h-full ${wrapperClassName}`}>
      {/* Skeleton / loading placeholder */}
      {!loaded && (
        <span
          className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 animate-pulse"
          aria-hidden
        >
          <span className="w-10 h-10 rounded-full border-2 border-brand-coral/30 border-t-brand-coral animate-spin" />
        </span>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`block w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </span>
  );
};

export default ImageWithLoader;
