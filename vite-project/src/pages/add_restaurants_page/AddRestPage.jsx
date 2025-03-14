import React from 'react'
import Herosecn from './comps/herosecn'
import WhyPartnerWithZomato from './comps/WhyPartnerWithZomato'
import RestaurantSuccessStories from './comps/RestaurantSuccessStories'
import FAQSection from './comps/FAQSection'
// import RestaurantSuccessStories from './comps/WhyPartnerWithZomato'

const AddRestPage = () => {
  return (
    <div>
        <Herosecn/>
        <div className="mt-32"> 
          <WhyPartnerWithZomato/>
        </div>
        <RestaurantSuccessStories/>
        <FAQSection/>
        
    </div>
    
  )
}

export default AddRestPage