import React from 'react'
import Notifications from '../assets/Boards-notifications-pc.png';

function SectionFive() {
  return (
    <section className='cta'>
        <div className='cta-card-container'>
            <div className='cta-title'>
                <h2>Empieza ahora</h2>
                <button className='btn-accion'>Véalo en acción</button>
            </div>
            <img src={Notifications} alt="" />
        </div>
    </section>
  )
}

export default SectionFive
