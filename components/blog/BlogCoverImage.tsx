"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DEFAULT_COVER, isRemoteImageSrc } from "@/lib/ranked/config";

export function BlogCoverImage({
  src,
  alt,
  sizes,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const [current, setCurrent] = useState(src || DEFAULT_COVER);

  useEffect(() => {
    setCurrent(src || DEFAULT_COVER);
  }, [src]);

  const resolved = current || DEFAULT_COVER;

  return (
    <Image
      src={resolved}
      alt={alt}
      fill
      quality={90}
      unoptimized={isRemoteImageSrc(resolved)}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (resolved !== DEFAULT_COVER) setCurrent(DEFAULT_COVER);
      }}
    />
  );
}
