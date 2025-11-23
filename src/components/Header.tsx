import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { SITE } from '../lib/data'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold text-lg text-gray-900 dark:text-gray-100 hover:opacity-90">{SITE.name}</a>
        </Link>
        <div className="flex items-center gap-4">
          <a href={SITE.github} className="text-gray-600 dark:text-gray-300 hover:text-primary" target="_blank" rel="noreferrer">GitHub</a>
          <a href={SITE.linkedin} className="hidden sm:inline text-gray-600 dark:text-gray-300 hover:text-accent" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={SITE.cv} className="text-sm bg-primary text-white px-3 py-1 rounded hover:opacity-90" download>Download CV</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
