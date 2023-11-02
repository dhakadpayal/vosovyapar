import React from 'react'
import "./Main.css"

import vosotree from "../../../public/images/vosotree2.png";
import Image from 'next/image';
export const Main = () => {
  return (
    <>
   
    <div>
        <h1 className="container mt-5 text-setup banner-text-inne">
            Lounch Your <br></br>Buisness Online<br></br>in Just<></>10 Minites
        </h1>
        <p className="container">
            No domain purches,no website creation
            <br></br>No SEO learrnig  and no ecommerce<br>
            </br>
            require voso vyapar details

        </p>
        <button type="button" class="btn btn-warning btn-lg rounded-pill button_setup">get Started</button>
    </div>
    <div>
      
        <Image src={vosotree} className="conatainer tree_set"/>
    </div>
    <marquee className="marqee-set">No Seo Setup Required → No Website Creation → No E-commerce Setup Required → No domain purchases</marquee>
    </>
  )
}
