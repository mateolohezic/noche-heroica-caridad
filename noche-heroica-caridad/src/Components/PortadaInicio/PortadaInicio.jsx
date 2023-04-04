import React from 'react'
import './portadaInicio.css'

function PortadaInicio() {
  return (
    <>
    <div className='w-100 m-0'>
        <div className='pe-4 pt-5 text-end'>
            <span className='tituloPortada text-light'>
                NOCHE<br/><span className='heroicaTexto'>HEROICA</span>
            </span>
        </div>
        <div className='pt-4 ps-3 pe-3 mt-4 mb-5 text-center'>
            <span className='oracionPortada text-light'>
                Señor, <b>Tú</b> has muerto en la Cruz por mí, yo ahora <b>ofrezco esta noche por Tí</b>.<br/>Amén
            </span>
        </div>
        <div className='text-center'>
            <div><span className='textoBotones'>¡Sigue nuestro horario! <i className="bi bi-stopwatch"></i></span></div>
            <div className='mt-3'><a href='/Horarios' className='text-decoration-none'><button type="button" className="btn botonGris me-3">HORARIOS</button></a></div>
        </div>
        <div className='text-center mt-5'>
        <div><span className='textoBotones'>¡Vívelo con nosotros! <i className="bi bi-book"></i></span></div>
            <div className='mt-3'><a href='/Guia' className='text-decoration-none'><button type="button" className="btn botonGris me-3">GUÍA</button></a></div>
        </div>
        <div className='pt-4 divExplicacion rounded-2'>
            <div className='oracionPortada text-center'><span className='tituloPregunta'>¿Por qué en la noche?</span></div>
            <div className='ps-3 pe-3 pt-4 mt-3 pb-2 mb-5 text-center'>
                <span className='text-center'>
                    El sentido de todo esto es, esencialmente, acompañar a Jesús durante su oración en el huerto de los Olivos. Retirado del bullicio, en la soledad de la noche, eleva su oración al Padre Celestial y se prepara a sufrir los tormentos más atroces para redimirnos del pecado; allí pide por todos los pecadores y por el mundo entero, sin excluir a nadie de su oración. Por todos, sin excepción, ofrece su Preciosísima Sangre que derrama hasta la última gota.
                    <br/><br/>¿Hasta la última gota?<br/>
                    Pensemos en estas palabras.
                </span>
            </div>
            <div className='oracionPortada text-center'><span className='tituloPregunta'>Gracias obtenidas</span></div>
            <div className='ps-3 pe-3 pt-4 mt-3 pb-5 mb-5 text-center'>
                <span className='text-center'>
                    <div className='textoGraciaObtenida p-4 rounded-5 m-4 mt-0'>
                        <div className='mb-3'>
                            <i className="bi bi-1-circle-fill numeroDeGraciaObtenida"></i>
                        </div>
                        <div>
                            El adorador nocturno del Santísimo Sacramento adora a Dios  y disfruta especialmente del regalo infinito que supone la presencia real de Jesús.
                        </div>
                    </div>
                    <div className='textoGraciaObtenida p-4 rounded-5 m-4 mt-0'>
                        <div className='mb-3'>
                            <i className="bi bi-2-circle-fill numeroDeGraciaObtenida"></i>
                        </div>
                        <div>
                            Conversa personalmente con Él en la Eucaristía, durante el silencio de la noche.
                        </div>
                    </div>
                    <div className='textoGraciaObtenida p-4 rounded-5 m-4 mt-0'>
                        <div className='mb-3'>
                            <i className="bi bi-3-circle-fill numeroDeGraciaObtenida"></i>
                        </div>
                        <div>
                            La espiritualidad propia del adorador nocturno trata de imitar a Cristo, adorador del Padre, que durante su vida mortal oraba frecuentemente de noche.
                        </div>
                    </div>
                    <div className='textoGraciaObtenida p-4 rounded-5 m-4 mt-0'>
                        <div className='mb-3'>
                            <i className="bi bi-4-circle-fill numeroDeGraciaObtenida"></i>
                        </div>
                        <div>
                            Por tal razón, el adorador abandona las comodidades del hogar, el calor de su familia para ir a rezar una noche en el templo en medio de muchas incomodidades; se sacrifica por sus hermanos, por desconocidos.
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default PortadaInicio