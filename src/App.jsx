import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import PopularPicks from './components/PopularPicks'
import Menu from './components/Menu'
import Locations from './components/Locations'
import OurStory from './components/OurStory'
import Events from './components/Events'
import Contact from './components/Contact'
import CartDrawer from './components/CartDrawer'
import SearchOverlay from './components/SearchOverlay'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Features />
            <PopularPicks setCurrentPage={setCurrentPage} />
          </>
        )
      case 'menu': return <Menu />
      case 'locations': return <Locations />
      case 'story': return <OurStory />
      case 'events': return <Events />
      case 'contact': return <Contact />
      default: return <Hero />
    }
  }

  return (
    <div className="app-container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} setIsSearchOpen={setIsSearchOpen} />
      <main>
        {renderPage()}
      </main>
      <CartDrawer />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  )
}

export default App
