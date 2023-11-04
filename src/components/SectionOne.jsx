import React from 'react'
import ScreenDesk from '../assets/screens-desk.png';

function SectionOne() {
  return (
    <section className='hero'>
      <div className='section-one-texts'>
          <h1 className='text-predicciones'>Predicciones de datos en minutos, sin escribir código.</h1>
          <p className='text-proceso'>Todo el proceso de creación de algoritmos de aprendizaje automático y predicción de resultados, en un solo click.</p>
          <button className='btn-probar-ahora'>Probar ahora</button>
      </div>
          <img src={ScreenDesk} className='img-screen-desk'/>
    </section>
  )
}

export default SectionOne
