import React from 'react';
import Image from 'next/image';
import './Footer.css';


import vosovyapar from '../../../public/images/voso.svg';

export default function Footer() {
  return (
   <> 
   <div className="container text-center mt-5 ">
  <div className="row footer-c">
    <div className="col">
      <Image className='mt-3' src={vosovyapar}/>
      <p className='mt-5'>  cWe are Voso Vyapar, providing a business <br></br>opportunity in India.</p>
    </div>
    <div className="col">
      <h3 className='text-center mt-5  '>Our Address</h3>
      <ul className="address-list">
        <li>
          <span><i className="fa  fa-phone-square "></i>
          </span><a className="theme-color phone-n phone-n2" href="tel:+919109178851">+91 9109178851</a></li>
          <li>
            <span><i className="fa  fa-envelope"></i></span>
            <a className="theme-color  phone-n" href="mailto:info@vosovyapar.com">info@vosovyapar.com</a></li>
          <li><span><i className="fa  fa-map"></i></span>VOSO RETAIL TECH PRIVATE LIMITED, 503, Shagun Arcade, Vijay Nagar, Indore, Madhya Pradesh 452010</li></ul>
    </div>
    <div className="col">
      <h3 className="mt-5">Extra Links</h3>
      <span>Privacy Policy<br></br></span>
      <span>Terms &amp; Conditions<br></br></span>
      <span>Refund &amp; Cancellation<br></br> </span>
      <span>Shipping &amp; Deliver</span>
  
    </div>
    <div className="col">
      <div className='box-footer'>
     <p className='mt-3'> @VOSO Vyapar Take your web design to new heights with Voso Vyapar.</p> 
      <a target="_blank" href="http://vosovyapar.com" className="text-primary">http://vosovyapar.com</a>
      </div>
      <p><span><i class="fa fa-twitter"></i></span>Voso Vyapar - Sep 2, 2023</p>
    </div>
  </div>
</div>
    <div className='footer-inside'>© copyright 2023 by vosovyapar.com</div>
   
   </>
  )
}
