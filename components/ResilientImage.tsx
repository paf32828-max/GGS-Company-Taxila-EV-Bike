'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Zap } from 'lucide-react';

interface ResilientImageProps {
  src: StaticImageData;
  alt: string;
  title?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function ResilientImage({
  src,
  alt,
  title,
  fill = true,
  priority = false,
  sizes,
  className = 'object-cover',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 p-6 text-center">
        <Zap className="w-8 h-8 text-emerald-400 mb-2" aria-hidden="true" />
        <span className="text-sm font-medium">{title || alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
