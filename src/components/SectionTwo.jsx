import React from 'react'
import ChatbotDesk from '../assets/chatbot-desk.png';
import Vector from '../assets/vector.png';
import VectorUno from '../assets/vector-1.png';
import VectorDos from '../assets/vector-2.png';

function SectionTwo() {
  return (
    <section className='products'>
        <div className='section-two-texts'>
            <h2 className='text-potencia'>Potenciá tu producto</h2>
            <p>Lleve predicciones dinámicas de Ml a su propia aplicación utilizando nuestra API de bajo código. Haz predicciones en tiempo real.</p>
        </div>

        <div className='product-img-container'>
            <img src={ChatbotDesk} className='img-product'/>

            <div className='product-cards-container'>
                {/* CARD 1 */}
                <div className='product-card'>
                    <div className='card-title'>
                        <img src={Vector} />
                        <h3>Compartí el super poder</h3>
                    </div>
                    
                    <div className='card-body'>
                        <p>Comparta sus modelos con su equipo o hágalo públicos.</p>
                    </div> 
                </div>

                {/* CARD 2 */}
                <div className='product-card'>
                    <div className='card-title'>
                        <img src={VectorUno} />
                        <h3>Intuituva y accedible</h3>
                    </div>
                    
                    <div className='card-body'>
                        <p>Fácil de integrar, en todas partes.</p>
                    </div> 
                </div>

                {/* CARD 3 */}
                <div className='product-card'>
                    <div className='card-title'>
                        <img src={VectorDos} />
                        <h3>Predecí el futuro</h3>
                    </div>
                    
                    <div className='card-body'>
                        <p>Diseñado para usar sin esfuerzo, para todos. Sin código. Sin molestias. Al instante.</p>
                    </div> 
                </div>
            </div>
        </div>

    </section>
  )
}

export default SectionTwo
