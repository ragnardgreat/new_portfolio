import './App.css'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NameCard from './components/NameCard'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.body.style.animation = "bgFadeWhite 1s linear forwards"
  }, [])

  return (
    <>
      <NameCard />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
