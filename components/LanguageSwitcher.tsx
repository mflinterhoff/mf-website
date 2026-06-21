'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { LOCALES, LOCALE_LABELS, LOCALE_FLAGS, type Locale } from '@/content/types'
import { swapLocaleInPath } from '@/lib/i18n'

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() || `/${locale}`

  return (
    <Menu as="div" className="relative">
      <MenuButton
        aria-label={label}
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-ink/70 ring-1 ring-ink/10 transition hover:bg-ink/5 hover:text-ink dark:text-paper/70 dark:ring-paper/15 dark:hover:bg-paper/10 dark:hover:text-paper"
      >
        <GlobeAltIcon aria-hidden="true" className="size-4" />
        <span className="uppercase">{locale}</span>
        <ChevronDownIcon aria-hidden="true" className="size-4 opacity-60" />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="z-50 mt-2 w-44 origin-top-right rounded-xl bg-paper p-1 shadow-lg ring-1 ring-ink/10 transition data-closed:scale-95 data-closed:opacity-0 dark:bg-ink-soft dark:ring-paper/10 [--anchor-gap:0.5rem]"
      >
        {LOCALES.map((l) => (
          <MenuItem key={l}>
            <Link
              href={swapLocaleInPath(pathname, l as Locale)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm data-focus:bg-ink/5 dark:data-focus:bg-paper/10 ${
                l === locale ? 'font-semibold text-accent' : 'text-ink/80 dark:text-paper/80'
              }`}
            >
              <span aria-hidden="true">{LOCALE_FLAGS[l as Locale]}</span>
              {LOCALE_LABELS[l as Locale]}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
