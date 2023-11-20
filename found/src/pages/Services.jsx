import React from 'react'
import SectionAttachment from '../components/SectionAttachment/SectionAttachment'
import AllServices from '../components/AllServices/AllServices'


const Services = () => {
  return (
    <div className='services'>
        <SectionAttachment
        bgImg={"https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        htext={"Services"}
        desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
        />
        <AllServices/>
       
    </div>
  )
}

export default Services