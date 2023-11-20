import React from 'react'
import SectionAttachment from '../components/SectionAttachment/SectionAttachment'
import ContactComp from '../components/ContactComp/ContactComp'
import Map from '../components/Map/Map'

const ContactUs = () => {
  return (
    <div>
        <SectionAttachment
        bgImg={"https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg"}
        htext={"Contact us"}
        desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
        />
        <Map/>
        <ContactComp/>
    </div>
  )
}

export default ContactUs