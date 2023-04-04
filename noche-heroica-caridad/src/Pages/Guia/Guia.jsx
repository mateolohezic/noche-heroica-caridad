import React from 'react'
import CuartoMomento from '../../Components/CuartoMomento/CuartoMomento'
import PrimerMomento from '../../Components/PrimerMomento/PrimerMomento'
import Rosario from '../../Components/Rosario/Rosario'
import SegundoMomento from '../../Components/SegundoMomento/SegundoMomento'
import TercerMomento from '../../Components/TercerMomento/TercerMomento'
import Visitas from '../../Components/Visitas/Visitas'
import './guia.css'


function Guia() {
  return (
    <>
    <div class="bg-image"></div>
    <div className='w-100 m-0'>
      <div className='pe-4 pt-5 text-end'>
        <span className='horariosTitulo text-light'>
          GUÍA
        </span>
      </div>
      <div className='pt-4 ps-3 pe-3 mt-4 mb-5 text-center'>
        <div className='oracionInicialTitulo text-light mb-3'><span>Oración Inicial</span></div>
        <span className='oracionInicialGuia text-light'>
        Señor Jesús, en esta noche donde te invade el dolor y la angustia, y tu santa frente suda sangre, permítenos acompañarte con nuestra oración y silencio. Queremos permanecer despiertos, orando y acompañándote en tu dolor, meditando tu amor infinito y dando gracias por habernos dejado tu preciosísimo cuerpo, sangre alma y divinidad en el Santísimo Sacramento del Altar. Tú que vives y reinas por los siglos de los siglos.
        <br/><br/>
        <b>Amén.</b>
        </span>
      </div>
      <div className='p-4 pb-5 mb-5 divExplicacion text-center rounded-2'>
        <div className='oracionInicialTituloFondo text-center mb-3'><span>Visita al santísimo</span></div>
        <span className='oracionInicialGuia'>
        <b>Se reza 3 veces:</b><br/><br/>
        G: Bendito y alabado sea Jesús en el Santísimo Sacramento del altar.<br/>
        R: Sea por siempre bendito y alabado
        <br/><br/>
        Padre Nuestro, Ave María, Gloria.
        </span>
        <div className='oracionInicialTituloFondo text-center mb-3 mt-4'><span>Invocación al<br/>Espíritu Santo</span></div>
        <span className='oracionInicialGuia'>
        Señor mío y Dios mío, creo firmemente que estás aquí, que me ves y que me oyes. Te
        adoro con profunda reverencia, te pido perdón por mis pecados y la gracia para hacer
        con fruto este rato de oración. Madre mía inmaculada, San José mi padre y señor, ángel
        de mi guarda interceded por mí.
        </span>
      </div>
      <Rosario/>
      <PrimerMomento/>
      <SegundoMomento/>
      <TercerMomento/>
      <Visitas/>
      <CuartoMomento/>
    </div>
    </>
  )
}

export default Guia