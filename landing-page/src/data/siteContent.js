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
  name: 'Lumina',
  subtitle: 'Digital Excellence',
}

export const heroLabel = 'Next-Generation Web Experiences'
export const heroHeading =
  'We architect digital products that define industries.'
export const heroBody =
  'Lumina is a boutique digital agency specializing in high-performance web applications and brand identities. We merge technical precision with artistic vision to deliver websites that don’t just look good—they dominate.'

export const heroActions = [
  { label: 'Start a Project', href: '#contact', primary: true },
  { label: 'Explore Our Work', href: '#services', primary: false },
]

export const heroStats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Uptime Reliability' },
  { value: '24ms', label: 'Average Latency' },
]

export const heroFeatureCards = [
  { title: 'UX/UI Design', copy: 'Intuitive user flows that maximize retention.' },
  { title: 'Web Performance', copy: 'Sub-second load times for peak SEO.' },
  { title: 'Cloud Scale', copy: 'Infrastructure built to handle millions.' },
  { title: 'Brand Strategy', copy: 'Positioning that cuts through the noise.' },
]

export const services = [
  {
    title: 'Strategic Consulting',
    description:
      'We dive deep into your business model to identify growth levers and digital opportunities that competitors miss.',
    icon: ShieldIcon,
    tag: 'Analysis'
  },
  {
    title: 'Immersive Interfaces',
    description:
      'Our designs are more than just pixels. We create interactive experiences that guide users toward conversion with fluid motion.',
    icon: SparkIcon,
    tag: 'Creative'
  },
  {
    title: 'Full-Stack Engineering',
    description:
      'Clean code is our baseline. We build robust, scalable architectures using the latest modern frameworks and edge computing.',
    icon: GrowthIcon,
    tag: 'Development'
  },
]

export const aboutHighlights = [
  'Zero Technical Debt',
  'Mobile-First Architecture',
  'Edge-Optimized Assets'
]

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: InstagramIcon },
  { label: 'X', href: 'https://x.com', icon: XIcon },
]
