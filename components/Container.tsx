import type { ReactNode } from 'react'

export function Container({
  children,
  className = '',
  size = 'default',
}: {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}) {
  const max = size === 'narrow' ? 'max-w-3xl' : size === 'wide' ? 'max-w-7xl' : 'max-w-5xl'
  return <div className={`mx-auto w-full ${max} px-6 lg:px-8 ${className}`}>{children}</div>
}
