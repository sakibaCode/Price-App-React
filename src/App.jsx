import React, { Suspense } from 'react'
import NavBar from './components/NavBar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import axios from 'axios'
import './App.css'

const PricingPromise = axios.get('PricingData.json').then(res => res.data)

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <main>

        <Suspense fallback = {<span className="loading loading-dots loading-lg"></span>}>
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>
      </main>
      
    </>
  )
}

export default App
