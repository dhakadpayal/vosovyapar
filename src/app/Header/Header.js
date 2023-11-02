import React from 'react';
import Image from 'next/image';
import vosovyapar from '../../../public/images/voso.svg';
import "./Header.css";
export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  mynav">
    <div className="container-fluid">
    <Image src={vosovyapar} className='voso_logo' />
      
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
  )
}
