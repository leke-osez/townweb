import { useEffect, useState } from "react";

type OptImgProps = {
  alt: string;
  className?: string;
  width?: number;
  height?: number;

  /** Small → Medium → Large (order matters) */
  sources: {
    src: string;
    width: number;
  }[];

  priority?: boolean;
};

export function OptImg({
  alt,
  sources,
  className = "",
  width,
  height,
  priority = false,
}: OptImgProps) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(sources[0].src);

  // progressively load larger images
  useEffect(() => {
    let cancelled = false;

    async function loadImages() {
      for (const source of sources) {
        await new Promise<void>((resolve) => {
          const img = new Image();
          img.src = source.src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });

        if (!cancelled) {
          setCurrentSrc(source.src);
        }
      }
    }

    loadImages();

    return () => {
      cancelled = true;
    };
  }, [sources]);

  return (
    <div
      className={`relative overflow-hidden bg-gray-200 ${
        !loaded ? "animate-light-pass" : ""
      } ${className}`}
      style={{ width, height }}
    >
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
