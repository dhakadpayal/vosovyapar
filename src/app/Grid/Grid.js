import React from 'react'
import Image from 'next/image';
import vosoform from '../../../public/images/vosoform.png';
import vosophone from '../../../public/images/vosophone.png';
import vosolaptop from '../../../public/images/vosolaptop.png';
import vososhoee from '../../../public/images/vososhoe.png';
import vosophone2 from '../../../public/images/vosophone2.png';

import "./Grid.css";
export default function Grid() {
  return (
    <div>
        <div className="container text-center">
        <div className="row row-cols-2 ">
            <div className="col col-set">
           <h1 className="mt-5"> Fill up a Form and Get Your Website!</h1>
            <p className='mt-3'> No design, development, or hosting is required. Simply fill out a straightforward form, and your website will be created instantly. You can choose from a selection of stunning themes to personalize your site according to your brand.</p>
            <button type="button" class="btn btn-warning btn-lg rounded-pill button_set2 ">get Started</button>
            <Image src={vosoform}/>
            </div>
            <div className="col col-set2 mx-2">
                <h1 className="d-flex mt-5">Start Selling</h1>
                <span className="d-flex ">No setting up an e-commerce website or relying on 
                <br></br>
                other platforms. Start selling your 
                <br></br>
                products/services immediately with your very own 
                <br></br>
                Voso Vyapar profile. And the best part? You keep 
                <br></br>
                all the profit since the Voso Vyapar doesn't take any commission.
                </span>
                
                <Image className ="tree_set1" src={vosophone}   />
            </div>  
            <div className="col"></div>
            <div className="col col-set3 ">
                <h1>Increase your online visibility effortlessly!</h1>
                <span>Say goodbye to costly SEO investments. Voso Vyapar ensures your visibility in Google searches by expertly optimizing relevant keywords.</span>
                <Image className ="tree_set2" src={vosolaptop}/>
            </div>
        </div>
        </div>
         <div className="container text-center">
        
        
        </div>
        <div className="row">
            <div className="col col-set-4">
                <Image className="vososhoee" src={vososhoee}/>
            </div>
            <div className="col col-set-5">
            <h1 className="mt-5 text-center text-white"> Create Your Brand!</h1>
            <p className='mt-5 text-center text-white'>Avoid getting lost in crowded marketplaces or being at the mercy of ever-changing search algorithms for your sales. Take charge and build your own brand, fostering a loyal customer base, by establishing your website</p>
            <button type="button" class="btn btn-warning btn-lg rounded-pill button_set">get Started</button>
            </div>
        </div>
        <div className="container">
        <div className="row  ">
            <div className="col col-set-6 ">
                <Image className='phoneimage' src={vosophone2}/>
            </div>
            <div className="col col-set-6">
                <h4 className="mt-5">Become the 'Saved in Contact Book' go-to merchant for your valued customers</h4>
                <span>Avoid expensive marketing efforts and have your business information directly saved in your customers' phonebooks through a downloadable business card featuring your complete store details. No more hassle for them to search for other vendors - they'll have all they need in one place</span>
                <div className="progress progree-h mt-3" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                 <div className="progress-bar progrees-w" ></div>
                 
               </div>

               <h4 className="mt-5">Become the 'Saved in Contact Book' go-to merchant for your valued customers</h4>
                <span>Avoid expensive marketing efforts and have your business information directly saved in your customers' phonebooks through a downloadable business card featuring your complete store details. No more hassle for them to search for other vendors - they'll have all they need in one place</span>
                <div className="progress progree-h mt-3" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                 <div className="progress-bar progrees-w" ></div>
                 
               </div>
               <h4 className="mt-5">Become the 'Saved in Contact Book' go-to merchant for your valued customers</h4>
                <span>Avoid expensive marketing efforts and have your business information directly saved in your customers' phonebooks through a downloadable business card featuring your complete store details. No more hassle for them to search for other vendors - they'll have all they need in one place</span>
                <div className="progress progree-h mt-3" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                 <div className="progress-bar progrees-w" ></div>
               </div>
               <h4 className="mt-5">Become the 'Saved in Contact Book' go-to merchant for your valued customers</h4>
                <span>Avoid expensive marketing efforts and have your business information directly saved in your customers' phonebooks through a downloadable business card featuring your complete store details. No more hassle for them to search for other vendors - they'll have all they need in one place</span>
                <div className="progress progree-h mt-3" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                 <div className="progress-bar progrees-w" ></div>
                 
               </div>
               <h4 className="mt-5">Become the 'Saved in Contact Book' go-to merchant for your valued customers</h4>
                <span>Avoid expensive marketing efforts and have your business information directly saved in your customers' phonebooks through a downloadable business card featuring your complete store details. No more hassle for them to search for other vendors - they'll have all they need in one place</span>
                <div className="progress progree-h mt-3" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                 <div className="progress-bar progrees-w" ></div>
                 
               </div>
               <button type="button" class="btn btn-warning btn-lg rounded-pill button_set">get Started</button>
               
            </div>
        </div>
        </div>
       
    </div>
  )
}
