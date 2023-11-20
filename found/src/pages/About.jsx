import React from 'react'
import SectionAttachment from '../components/SectionAttachment/SectionAttachment'
import TeamsComp from '../components/TeamsComp/TeamsComp'
import AboutComp from '../components/AboutComp/AboutComp'
import WhyTestComp from '../components/WhyTestComp/WhyTestComp'

const About = () => {
  return (
    <div>
        <SectionAttachment
        bgImg={"https://images.pexels.com/photos/1385056/pexels-photo-1385056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        htext={"About us"}
        desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
        />
        <TeamsComp/>
        <WhyTestComp/>
        <AboutComp />
    </div>
  )
}

export default About