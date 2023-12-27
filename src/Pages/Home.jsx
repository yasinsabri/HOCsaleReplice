import React from 'react'
import Hero from '../Component/Element/Hero'
import Join from '../Component/Element/Join'
import Reasons from '../Component/Element/Reasons'
import Discount from '../Component/Element/Discount'

const Home = () => {
  return (
    <React.Fragment>
        <Hero/>
        <Join/>
        <Reasons/>
        <Discount/>
    </React.Fragment>
  )
}

export default Home
