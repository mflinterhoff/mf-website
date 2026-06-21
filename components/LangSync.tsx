'use client'

import { useEffect } from 'react'
import type { Locale } from '@/content/types'

/** Keeps <html lang> in sync with the active locale (root layout renders lang="en"). */
export function LangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  return null
}
