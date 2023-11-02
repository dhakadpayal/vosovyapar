import React from 'react'

export default function Contact() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  mynav">
              <div className="container-fluid">
             
                    <Image src={vosovyapar} className='voso_logo' />
                  
                 <div>
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item nav_margin">
                         <a className="nav-link active " aria-current="page" href="#">About Us</a>
                    </li>
                    <li className="nav-item nav_margin">
                        <a className="nav-link active" aria-current="page" href="#">How It Work</a>
                    </li>
                    <li className="nav-item nav_margin">
                        <a className="nav-link active" aria-current="page" href="#">Themes</a>
                    </li>
                    <li className="nav-item nav_margin">
                        <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                    </li>
                    <li className="nav-item nav_margin">
                        <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
                  
              </div>
          </nav>
    </div>
  )
}
