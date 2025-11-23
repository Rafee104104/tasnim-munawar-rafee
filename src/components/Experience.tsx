import { EXPERIENCES } from '../lib/data'
import React from 'react'

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">Professional Experience</h2>

      <div className="relative">
        {/* center line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line rounded" style={{ width: 3 }} />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => {
            const left = idx % 2 === 0
            return (
              <div key={idx} className="md:flex md:items-center md:justify-between">
                {/* left column */}
                <div
                  className={`md:w-1/2 ${left ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
                >
                  <div className={`inline-block ${left ? 'md:animate-slideInLeft' : 'md:animate-slideInRight'} bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company} • {exp.location}</p>
                      </div>
                      <div className="text-xs text-gray-400 ml-4">{exp.start} {exp.end ? `— ${exp.end}` : ''}</div>
                    </div>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">{exp.description}</p>
                  </div>
                </div>

                {/* timeline marker for md and up */}
                <div className="md:w-0 md:flex md:justify-center">
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-teal-400 ring-4 ring-white dark:ring-gray-900 transform -translate-y-2"></div>
                  </div>
                </div>

                {/* right column (mirror) */}
                <div className={`md:w-1/2 ${!left ? 'md:pl-8 md:text-left' : 'md:pr-8'}`}>
                  {/* empty on the other side to create space (mobile stack will show cards in single column) */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
