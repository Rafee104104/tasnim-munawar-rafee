import { SITE } from '../lib/data'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a href={`mailto:${SITE.email}`} className="text-sm hover:underline">{SITE.email}</a>
          <a href={`tel:${SITE.phone}`} className="text-sm hover:underline">{SITE.phone}</a>
        </div>
      </div>
    </footer>
  )
}
