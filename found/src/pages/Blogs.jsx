import React from 'react'
import SectionAttachment from '../components/SectionAttachment/SectionAttachment'
import AllBlogs from '../components/AllBlogs/AllBlogs'
const Blogs = () => {
  return (
    <div>
        <SectionAttachment
        bgImg={"https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        htext={"Blogs"}
        desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}
        />
         <AllBlogs />
    </div>
  )
}

export default Blogs