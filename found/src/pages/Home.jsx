import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutComp from '../components/AboutComp/AboutComp'
import SectionAttachment from '../components/SectionAttachment/SectionAttachment'
import WhyTestComp from '../components/WhyTestComp/WhyTestComp'
import LastNews from '../components/LastNews/LastNews'
const Home = () => {
  return (
    <div className='home'>

      <Hero />
      <AboutComp />
      <SectionAttachment
      bgImg={"https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"}
      htext={"Delivering Results for Industry Leaders"}
      desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
      />
      <WhyTestComp />
      <LastNews />
    </div>
  )
}

export default Home