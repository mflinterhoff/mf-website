// Central registry so content data can reference heroicons by string key.
import type { ComponentType, SVGProps } from 'react'
import {
  AcademicCapIcon,
  SparklesIcon,
  FlagIcon,
  PuzzlePieceIcon,
  PresentationChartLineIcon,
  BanknotesIcon,
  ScaleIcon,
  ArrowsRightLeftIcon,
  Squares2X2Icon,
  BoltIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
  SwatchIcon,
  BuildingOffice2Icon,
  CpuChipIcon,
  MegaphoneIcon,
  EnvelopeIcon,
  PhoneIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import type { Area } from '@/content/types'

export type IconType = ComponentType<SVGProps<SVGSVGElement>>

export const ICONS: Record<string, IconType> = {
  // Sub-page navigation
  vita: AcademicCapIcon,
  inspiration: SparklesIcon,
  approach: FlagIcon,
  questions: PuzzlePieceIcon,
  // Experiences
  'refining-business-models': PresentationChartLineIcon,
  'organizing-finances': BanknotesIcon,
  'corporate-restructuring': ScaleIcon,
  'software-changes': ArrowsRightLeftIcon,
  'tool-integration': Squares2X2Icon,
  'generative-ai': BoltIcon,
  'websites-commerce': GlobeAltIcon,
  'quality-usability': CheckBadgeIcon,
  'branding-design-systems': SwatchIcon,
  // Contact
  email: EnvelopeIcon,
  phone: PhoneIcon,
  lab: BeakerIcon,
}

export const AREA_ICONS: Record<Area, IconType> = {
  corporate: BuildingOffice2Icon,
  it: CpuChipIcon,
  marketing: MegaphoneIcon,
}

export function getIcon(key: string): IconType {
  return ICONS[key] ?? SparklesIcon
}
