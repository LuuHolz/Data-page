import React from 'react'
import Macbook from '../assets/Macbook Pro.png'
import Boards from '../assets/boards-notifications.png'

function SectionThree() {
  return (
    <section className='about'>
      <div className='about-text'>
        <h2 className='about-text-h2'>En un solo click</h2>
        <p>¿Listo para comenzar?</p>
      </div>

      <div className='about-class-container'>
        <div className='about-card'>
          <h3>Haz click en eso</h3>
          <p>Elija su columna de predicción de un menú desplgable, construiremos automáticamente la IA.</p>
          <button className='btn-empezar'>Empezar</button>
          <img src={Macbook}  />
        </div>

        <div className='about-card'>
          <h3>¡Ya terminaste!</h3>
          <p>Visualice maravillosamente los resultados previstos, los principales impulsores, simule escenarios hipotéticos.</p>
          <button className='btn-empezar'>Empezar</button>
          <img src={Boards}  />
        </div>
      </div>
        
    </section>
  )
}

export default SectionThree
