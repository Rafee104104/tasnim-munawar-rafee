import Image from 'next/image'
import { SITE } from '../lib/data'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-2">{SITE.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">B.Sc. in Computer Science & Engineering — Full-Stack Developer</p>
          <p className="text-sm text-gray-700 dark:text-gray-300 max-w-2xl">
            Dedicated novice in computer science and engineering with experience building web apps, performing API integrations, and supporting software in production. Skilled with Svelte, Node, Prisma, Tailwind, and SQL databases. Contact: <a href={`mailto:${SITE.email}`} className="text-primary underline">{SITE.email}</a>
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={SITE.github} className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:scale-105 transition" target="_blank" rel="noreferrer">
              {/* GitHub SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.19a11.08 11.08 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.21-1.5 3.19-1.19 3.19-1.19.63 1.65.24 2.87.12 3.17.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.09.78 2.2 0 1.59-.01 2.88-.01 3.27 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" /></svg>
              <span>View on GitHub</span>
            </a>
            <a href={SITE.cv} className="px-4 py-2 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">Download CV</a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-900 shadow-lg">
            <Image src="/photo1.jpg" alt="Tasnim Photo" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
