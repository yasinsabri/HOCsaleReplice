import React from 'react'
import Hero from '../Component/Element/Hero'
import Join from '../Component/Element/Join'
import Reasons from '../Component/Element/Reasons'
import Discount from '../Component/Element/Discount'
import Vision from '../Component/Element/Vision'
import BuyMore from '../Component/Element/BuyMore'

const Home = () => {
  return (
    <React.Fragment>
        <Hero/>
        <Join/>
        <Reasons/>
        <Discount/>
        <Vision/>
        <BuyMore/>
    </React.Fragment>
  )
}

export default Home
