import { SKILLS } from '../lib/data'

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((s) => (
          <div key={s} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 hover:scale-105 transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}
