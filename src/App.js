import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Social from './components/Social'

export default function App() {
  return (
    <main className='text-[#b3446c] bg-pink-200 body-font'>
      <Navbar />
      <About />
      <Social />
      <Projects />
      <Skills />
    </main>
  );
}
