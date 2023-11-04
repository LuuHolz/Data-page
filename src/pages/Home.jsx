import React from 'react'
import Navbar from '../components/Navbar'
import ScreenDesk from '../assets/screens-desk.png';

function Home() {
  return (
    <div>
        <Navbar/>

        <div className='section-one'>
            <div className='section-one-texts'>
                <h1 className='text-predicciones'>Predicciones de datos en minutos, sin escribir código.</h1>
                <p className='text-proceso'>Todo el proceso de creación de algoritmos de aprendizaje automático y predicción de resultados, en un solo click.</p>
                <button className='btn-probar-ahora'>Probar ahora</button>
            </div>
            <img src={ScreenDesk} alt="screen" className='img-screen-desk'/>
        </div>

    </div>
  )
}

export default Home
