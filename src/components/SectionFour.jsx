import React from 'react'
import userOne from '../assets/user-1.png'
import userTwo from '../assets/user-2.png'
import userThree from '../assets/user-3.png'
import userFour from '../assets/user-4.png'

function SectionFour() {
  return (
    <section className='testimonials'>
        <h2>Testimonios</h2>
        <div className='testimonials-cards-container'>
            {/* CARD 1 */}
            <div className='testimonial-card'>
                <div className='testimonial-title'>
                    <img src={userOne} alt="" />
                    <h3>El Sr. Cena</h3>
                </div>
                <p>Implementamos la herramienta en nuestro negocio y ya tuvimos un crecimiento abismal en cuestion de 3 meses.</p>
            </div>
            {/* CARD 2 */}
            <div className='testimonial-card'>
                <div className='testimonial-title'>
                    <img src={userTwo} alt="" />
                    <h3>Luciano</h3>
                </div>
                <p>Las herramientas de IA de hoy son muy complicadas y tardan meses en obtener resultados.</p>
            </div>
            {/* CARD 3 */}
            <div className='testimonial-card'>
                <div className='testimonial-title'>
                    <img src={userThree} alt="" />
                    <h3>Jorge López</h3>
                </div>
                <p>Con Nucba, pudimos incorporar a varios de nuestros analistas sin problemas y ponernos en marcha en solo unas pocas horas.</p>
            </div>
            {/* CARD 4 */}
            <div className='testimonial-card'>
                <div className='testimonial-title'>
                    <img src={userFour} alt="" />
                    <h3>Juan</h3>
                </div>
                <p>Al principio, le teníamos miedo a NoCode, pero cuando lo implementamos tuvimos resultados al instante. Además tienen un buen apartado de recursos.</p>
            </div>
        </div>
        
    </section>
  )
}

export default SectionFour
