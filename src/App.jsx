import React, { useState, Suspense, lazy } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import CartDrawer from './components/CartDrawer'
import SearchOverlay from './components/SearchOverlay'
import './App.css'

const PopularPicks = lazy(() => import('./components/PopularPicks'))
const Menu = lazy(() => import('./components/Menu'))
const Locations = lazy(() => import('./components/Locations'))
const OurStory = lazy(() => import('./components/OurStory'))
const Events = lazy(() => import('./components/Events'))
const Contact = lazy(() => import('./components/Contact'))

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
        <Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>}>
          {renderPage()}
        </Suspense>
      </main>
      <CartDrawer />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  )
}

export default App
