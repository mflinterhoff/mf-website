'use client'

import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeToggle({ label }: { label: string }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex size-9 items-center justify-center rounded-full text-ink/70 ring-1 ring-ink/10 transition hover:bg-ink/5 hover:text-ink dark:text-paper/70 dark:ring-paper/15 dark:hover:bg-paper/10 dark:hover:text-paper"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch. */}
      {mounted && isDark ? (
        <SunIcon aria-hidden="true" className="size-5" />
      ) : (
        <MoonIcon aria-hidden="true" className="size-5" />
      )}
    </button>
  )
}
