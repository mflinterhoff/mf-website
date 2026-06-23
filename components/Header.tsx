'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import type { SiteContent, Locale } from '@/content/types'
import { localeHref } from '@/lib/i18n'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header({ content, locale }: { content: SiteContent; locale: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { nav, ui } = content

  return (
    <header className="sticky top-0 z-40">
      {/* Translucent white gradient tint with progressive blur — stronger blur
          toward the bottom edge than the top, and no hard bottom border. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -bottom-2.5 -z-10">
        <div className="absolute inset-x-0 top-0 bottom-5.5 bg-gradient-to-b from-white/100 to-white/90 dark:from-ink/100 dark:to-ink/90" />
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black,black_55%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,black_55%,transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,transparent_30%,black_75%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_30%,black_75%,transparent)]" />
      </div>
      <nav aria-label="Global" className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 pt-3.5 pb-7 lg:px-8">
        <Link href={localeHref(locale, '/')} className="-m-1.5 shrink-0 p-1.5">
          <span className="sr-only">Matthias Flinterhoff, {ui.home}</span>
          <img src="/logo-nav.png" alt="Matthias Flinterhoff" className="h-9 w-auto sm:h-10" />
        </Link>

        <div className="hidden items-center gap-x-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.key}
              href={localeHref(locale, item.href)}
              className="text-sm font-medium capitalize text-ink/75 transition hover:text-accent dark:text-paper/75 dark:hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher locale={locale} label={ui.languageLabel} />
          <ThemeToggle label={ui.toggleTheme} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle label={ui.toggleTheme} />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex size-9 items-center justify-center rounded-full text-ink/70 ring-1 ring-ink/10 dark:text-paper/70 dark:ring-paper/15"
            aria-label={ui.openMenu}
          >
            <Bars3Icon aria-hidden="true" className="size-5" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileOpen} onClose={setMobileOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-md" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-paper p-6 ring-1 ring-ink/10 dark:bg-ink dark:ring-paper/10">
          <div className="flex items-center justify-between">
            <Link href={localeHref(locale, '/')} onClick={() => setMobileOpen(false)} className="-m-1.5 p-1.5">
              <span className="sr-only">Matthias Flinterhoff</span>
              <img src="/logo-nav.png" alt="Matthias Flinterhoff" className="h-9 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex size-9 items-center justify-center rounded-full text-ink/70 ring-1 ring-ink/10 dark:text-paper/70 dark:ring-paper/15"
              aria-label={ui.closeMenu}
            >
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-2 divide-y divide-ink/5 dark:divide-paper/10">
              <div className="space-y-1 py-4">
                {nav.map((item) => (
                  <Link
                    key={item.key}
                    href={localeHref(locale, item.href)}
                    onClick={() => setMobileOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium capitalize text-ink/85 hover:bg-ink/5 dark:text-paper/85 dark:hover:bg-paper/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="py-5">
                <LanguageSwitcher locale={locale} label={ui.languageLabel} />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
