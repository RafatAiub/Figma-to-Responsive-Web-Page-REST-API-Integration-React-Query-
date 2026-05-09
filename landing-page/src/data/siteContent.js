import {
  GrowthIcon,
  ShieldIcon,
  SparkIcon,
  LinkedInIcon,
  InstagramIcon,
  XIcon,
} from '../components/icons.jsx'

export const navigationLinks = ['Home', 'Services', 'About', 'Contact']

export const brand = {
  name: 'Northstar',
  subtitle: 'Creative landing pages',
}

export const heroLabel = 'Agency-quality by design'
export const heroHeading =
  'Build a landing page that feels sharp, modern, and ready to convert.'
export const heroBody =
  'We translate written briefs into clean, responsive interfaces with strong hierarchy, subtle motion, and a premium visual finish that works across mobile, tablet, and desktop.'

export const heroActions = [
  { label: 'Primary Button', href: '#services', primary: true },
  { label: 'Secondary Button', href: '#about', primary: false },
]

export const heroStats = [
  { value: '98%', label: 'Responsive score' },
  { value: '24h', label: 'Fast turnaround' },
  { value: '5-star', label: 'Client-ready polish' },
]

export const heroFeatureCards = [
  { title: 'Conversion', copy: 'Clear CTA flow' },
  { title: 'Responsive', copy: 'Stacks beautifully on mobile' },
  { title: 'Speed', copy: 'Utility-first styling' },
  { title: 'Quality', copy: 'Agency-level finish' },
]

export const services = [
  {
    title: 'Strategy Design',
    description:
      'Clear positioning, content direction, and conversion-focused structure shaped for modern brands.',
    icon: ShieldIcon,
  },
  {
    title: 'Interface Build',
    description:
      'Polished, responsive layouts with sharp hierarchy, smooth spacing, and performance-first implementation.',
    icon: SparkIcon,
  },
  {
    title: 'Growth Support',
    description:
      'Launch-ready pages with room to scale, iterate, and adapt as the product or campaign evolves.',
    icon: GrowthIcon,
  },
]

export const aboutHighlights = ['Responsive', 'Tailwind-only', 'Deployment-ready']

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: InstagramIcon },
  { label: 'X', href: 'https://x.com', icon: XIcon },
]
