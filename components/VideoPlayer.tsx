'use client'

import { useRef, useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

export function VideoPlayer({
  src,
  poster,
  ariaLabel,
  width,
  height,
  restartLabel,
  className,
  videoClassName,
}: {
  src: string
  poster?: string
  ariaLabel: string
  width: number
  height: number
  restartLabel: string
  className?: string
  videoClassName?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasEnded, setHasEnded] = useState(false)

  const handleRestart = () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    setHasEnded(false)
    void v.play()
  }

  return (
    <div className={`relative ${className ?? ''}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
        width={width}
        height={height}
        onEnded={() => setHasEnded(true)}
        className={videoClassName}
      />
      <button
        type="button"
        onClick={handleRestart}
        aria-hidden={!hasEnded}
        tabIndex={hasEnded ? 0 : -1}
        className={`absolute top-full left-0 mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-paper/60 dark:hover:text-accent-soft ${
          hasEnded ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ArrowPathIcon aria-hidden="true" className="size-4" />
        {restartLabel}
      </button>
    </div>
  )
}
