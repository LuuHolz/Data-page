import React from 'react'
import Tw from '../assets/tw.png'
import Fb from '../assets/fb.png'
import In from '../assets/in.png'
import Phone from '../assets/phone.png'
import Ubi from '../assets/ubi.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-nav-container'>
            <h3>#SOMOSDATOS</h3>
            <ul className='footer-nav'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Ejemplos</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Status</a></li>
            </ul>
        </div>

        <div className='footer-nav-container'>
            <h3>Producto</h3>
            <ul className='footer-nav'>
                <li><a href="#">Integraciones</a></li>
                <li><a href="#">Vídeos en uso</a></li>
                <li><a href="#">Seguridad</a></li>
            </ul>
        </div>

        <div className='footer-nav-container'>
            <h3>Compañía</h3>
            <ul className='footer-nav'>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Carreras</a></li>
                <li><a href="#">Contactános</a></li>
            </ul>
        </div>

        
        <div className='footer-nav-container'>
            <ul className='footer-nav'>
                <li>Segurola y Habana 4310</li>
                <li>0303 123 1564</li>
            </ul>
        </div>

        <div className='redes'>
            <ul className='redes-nav'>
                <li><a href="#"><img src={Tw} alt="" /></a></li>
                <li><a href="#"><img src={Fb} alt="" /></a></li>
                <li><a href="#"><img src={In} alt="" /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
