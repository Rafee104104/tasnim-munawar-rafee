import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tasnim Munawar Rafee — Portfolio</title>
        <meta name="description" content="Portfolio of Tasnim Munawar Rafee — Full Stack Developer" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
