import React from 'react'
import Image from 'next/image';
import './Slider.css';
import vosologo from '../../../public/images/vosologo.png';
import vosomedia from '../../../public/images/vosomedia.png';

export default function Slider() {
  return (
    <>
        <div className='slider_1 mt-2'>
            <h1 className='text-center text-white mt-5'>Testimonials</h1>
                <p className="text-center text-white mt-3">Discover the Transformation Impact of Voso Vyapar on Vyaparis' Lives</p>
               <div className="slide_2">
                    <Image className='voso-logo' src={vosologo}/>
                    <h5 className='text-center text-white'>Deepak Narayen Joshi, Hyderabad</h5>
                    <p className="text-white mx-2">Voso Vyapar improved my local business's online presence. With their SEO skills, I now get more inquiries and customers from the city. Voso Vyapar is the key to online success for local businesses!</p>
               </div>
        </div>
        <div className='color-b'>
        <div class="row ">
            <div class="col container">
                <h1 className='text-center text-white mt-5'>Introducing voso<br></br> vyapar - Your one-<br></br>stop solution!</h1>
                <p className='text-center text-white mt-3'>No need for customers to search for <br></br>your information across multiple <br></br>platforms. Your Voso vyapar Profile conveniently <br></br>consolidates everything in one place<br></br> - from social media profiles and contact <br></br>details to addresses, marketplace links, <br></br>payment links, and much more.</p>
                <button type="button" class="btn btn-warning btn-lg rounded-pill button_set">get Started</button>
            </div>
            <div class="col">
                <Image className="vosomedia" src={vosomedia}/>
            </div>
        </div>
        </div>
       
    </>

  )
}
