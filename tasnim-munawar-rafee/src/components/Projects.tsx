import { PROJECTS } from '../lib/data'
import Link from 'next/link'

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.name} className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{p.tech}</p>
              </div>
              <div className="flex items-center gap-2">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-primary transform hover:scale-110 transition">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.19a11.08 11.08 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.21-1.5 3.19-1.19 3.19-1.19.63 1.65.24 2.87.12 3.17.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.09.78 2.2 0 1.59-.01 2.88-.01 3.27 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
