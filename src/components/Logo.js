import React from 'react';
import './Logo.css'
import logo from '../images/80th food-logos_transparent.png'

function Logo() {
    return (
        <div >
       <img src={ logo } className="Logo-Brand" alt="logoChoco"/>
        {/*<div class="circulo">
            <span id="numero"> 0 </span> 
         </div> */}
         </div>
    )
}

export default Logo;
