import React from 'react'
import Hero from '../components/Hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import NewsLetterBox from '../components/NewsLetterBox.jsx'
import OurPolicy from '../components/OurPolicy.jsx'

function Home() {
  return (
    <div>
      <Hero />
      < LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
