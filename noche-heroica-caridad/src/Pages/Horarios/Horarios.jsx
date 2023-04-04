import React from 'react'
import './horarios.css'

function Horarios() {
  return (
    <>
    <div className='w-100 m-0'>
      <div className='pe-4 pt-5 text-end'>
        <span className='horariosTitulo text-light'>
          HORARIOS
        </span>
      </div>
      <div className='divExplicacion rounded-2'>
        <div className='p-4 mb-5 text-center'>
          <div className='mb-3'><i className="bi bi-people-fill personasGrupos"></i></div>
          <span className='text-center'>
            Nos dividiremos en dos grupos, 1 y 2. Mientras un grupo se encuentra adorando y acompañando a Jesús en el templo, otro grupo se encontrará viendo la película elegida para esta noche.
          </span>
        </div>
      </div>
      <div className='text-center grupoTitulo'>
        <span className=''>
          Grupo 1
        </span>
      </div>
      <div className='divExplicacion rounded-2 text-center horariosGruposTexto p-4 mb-5'>
        <div className='horarioJuntos'>00:00 - Rosario</div>
        <div className='horarioSeparados'>00:40 a 01:20 - Película</div>
        <div className='horarioSeparados'>01:20 a 02:00 - 1° Meditación</div>
        <div className='horarioSeparados'>02:00 a 02:40 - Película</div>
        <div className='horarioSeparados'>02:40 a 03:20 - 2° Meditación</div>
        <div className='horarioSeparados'>03:20 a 04:00 - Película</div>
        <div className='horarioSeparados'>04:00 a 04:40 - 3° Meditación</div>
        <div className='horarioSeparados'>04:40 a 05:10 - Película</div>
        <div className='horarioSeparados'>05:10 a 05:40 - 4° Meditación</div>
        <div className='horarioJuntos'>05:40 a 06:00 - Oración Final</div>
      </div>
      <div className='text-center grupoTitulo'>
        <span className=''>
          Grupo 2
        </span>
      </div>
      <div className='divExplicacion rounded-2 text-center horariosGruposTexto p-4 mb-5'>
        <div className='horarioJuntos'>00:00 - Rosario</div>
        <div className='horarioSeparados'>00:40 a 01:20 - 1° Meditación</div>
        <div className='horarioSeparados'>01:20 a 02:00 - Película</div>
        <div className='horarioSeparados'>02:00 a 02:40 - 2° Meditación</div>
        <div className='horarioSeparados'>02:40 a 03:20 - Película</div>
        <div className='horarioSeparados'>03:20 a 04:00 - 3° Meditación</div>
        <div className='horarioSeparados'>04:00 a 04:40 - Película</div>
        <div className='horarioSeparados'>04:40 a 05:10 - 4° Meditación</div>
        <div className='horarioSeparados'>05:10 a 05:40 - Película</div>
        <div className='horarioJuntos'>05:40 a 06:00 - Oración Final</div>
      </div>


    </div>
    </>
  )
}

export default Horarios