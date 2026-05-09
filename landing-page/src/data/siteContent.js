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
  'Elevate your digital presence with agency-grade design.'
export const heroBody =
  'We transform complex written briefs into high-performance, responsive web experiences. Our focus is on precision, speed, and a premium visual finish that commands attention.'

export const heroActions = [
  { label: 'Start Project', href: '#contact', primary: true },
  { label: 'View Services', href: '#services', primary: false },
]

export const heroStats = [
  { value: '100%', label: 'Responsive Design' },
  { value: 'Sub-1s', label: 'Load Performance' },
  { value: 'A+', label: 'Design Quality' },
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
