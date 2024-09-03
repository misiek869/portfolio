'use client'
import About from './components/AboutMe/About'
import Cta from './components/CallToAction/Cta'
import ContactMe from './components/ContactMe/ContactMe'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'

export default function HomePage() {
	return (
		<main className='min-h-screen relative'>
			<Home />
			<Portfolio />
			<About />
			<ContactMe />
			<Cta />
		</main>
	)
}
