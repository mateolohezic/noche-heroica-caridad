import React from 'react'
import primer from './primer.png'
import segundo from './segundo.png'
import tercero from './tercero.png'
import cuarto from './cuarto.png'
import quinto from './quinto.png'

function Rosario() {
  return (
    <>
        <div className='tituloRosario text-muted rounded-3 pt-3 ps-2 pe-2'>
        <h1>Rezo del<br/>Santo Rosario</h1>
        <p>Contemplamos los <b>Misterios Luminosos</b>.</p>
      </div>

      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={primer} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>El bautismo de Jesús en el río Jordán</div>
        <div className='cardTextoDiv'>
          En este misterio Jesús, siendo Dios mismo, se hace bautizar por un hombre, demostrando su infinita humildad, sus infinitas ansias de que le amemos, de que nos unamos a Él y le dejemos acompañarnos y conducirnos por su dulcísima voluntad.<br/><br/>Le pidamos al Señor que nos ayude a reconocer Su amor en cada pequeño detalle de nuestra vida. Que le amemos en cada acto, pensamiento y palabra, que sepamos ver cuán amados somos por el Padre.
        </div>
      </div>
      <div className='cardCancion rounded-4 pt-4 pb-4 ps-3 pe-3'>
        <div className='cardCancionTitulo'>Nadie Te Ama Como Yo</div>
        <div className='cardCancionLetra mt-3'>
          Cuánto he esperado este momento,<br/>
          Cuánto he esperado que estuvieras así,<br/>
          Cuánto he esperado que me hablaras,<br/>
          Cuánto he esperado que vinieras a mí,<br/>
          Yo sé bien lo que has vivido,<br/>
          Yo sé bien por qué has llorado,<br/>
          Yo sé bien lo que has sufrido,<br/>
          Pues de tu lado no me he ido.<br/>
          <br/>
          Pues nadie te ama como yo,<br/>
          Nadie te ama como yo.<br/>
          Mira la cruz,<br/>
          Esa es mi más grande prueba.<br/>
          Pues nadie te ama como yo,<br/>
          Nadie te ama como yo.<br/>
          Mira la cruz,<br/>
          Fue por tí, fue porque te amo,<br/>
          Nadie te ama como yo.<br/>
        </div>
      </div>

      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={segundo} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>La autorrevelación de Jesús en las Bodas de Caná</div>
        <div className='cardTextoDiv'>
          En el milagro de Caná, Jesús, al transformar el agua en vino, abre el corazón de los discípulos a la fe gracias a la intervención de María Santísima. El vino se acababa, la fiesta de la boda debía continuar, María, atenta, advierte a Jesús y Él obedece.<br/><br/>Que hermosa revelación de Jesús en este Misterio. El vino de nuestra esperanza se agota, se vacían nuestras copas, estamos sedientos de justicia, amor, misericordia. María intercesora nuestra, le pide a Jesús, por nosotros y ÉL, obediente a su Santa Madre, revela su poder y misericordia ante nosotros, día tras día.
        </div>
      </div>
      <div className='cardCancion rounded-4 pt-4 pb-4 ps-3 pe-3'>
        <div className='cardCancionTitulo'>Nadie Te Ama Como Yo</div>
        <div className='cardCancionLetra mt-3'>
          Yo sé bien lo que me dices,<br/>
          Aunque a veces no me hables.<br/>
          Yo sé bien lo que en tí sientes,<br/>
          Aunque nunca lo compartes.<br/>
          Yo a tu lado he caminado,<br/>
          Junto a tí yo siempre he ido.<br/>
          Y aún a veces te he cargado,<br/>
          Yo he sido tu mejor amigo.<br/>
          <br/>
          Pues nadie te ama como yo,<br/>
          Nadie te ama como yo.<br/>
          Mira la cruz,<br/>
          Esa es mi más grande prueba.<br/>
          Pues nadie te ama como yo,<br/>
          Nadie te ama como yo.<br/>
          Mira la cruz,<br/>
          Fue por tí, fue porque te amo,<br/>
          Nadie te ama como yo.<br/>
        </div>
      </div>

      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={tercero} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>El anuncio del Reino de Dios</div>
        <div className='cardTextoDiv'>
          Meditamos la predicación con la cual Jesús anuncia la llegada del Reino de Dios e invita a la conversión, perdonando los pecados a quien se acerca a ÉL con fe. Es cuando inicia el ministerio de su misericordia. El mismo Jesucristo, nos hace saber cuán misericordioso es, y cómo debemos acercarnos a ÉL para el perdón de nuestros pecados.<br/><br/>La fe y un corazón sinceramente arrepentido son la llave para entrar en el corazón misericordioso de Jesús, lograr el perdón de los pecados, la conversión y encontrar de esta manera, el camino hacia el Reino eterno.
        </div>
      </div>
      <div className='cardCancion rounded-4 pt-4 pb-4 ps-3 pe-3'>
        <div className='cardCancionTitulo'>Estoy a tu puerta</div>
        <div className='cardCancionLetra mt-3'>
          Estoy a tu puerta y llamo.<br/>
          Ábreme, déjame entrar,<br/>
          Yo conozco tu vacío,<br/>
          te quiero llenar.<br/>
          Pon tu carga en mis hombros,<br/>
          Yo te aliviaré,<br/>
          tus pesares y tu angustia,<br/>
          Yo los tomaré.<br/>
          <br/>
          Mírame, confía en Mí,<br/>
          mi corazón abierto está<br/>
          hoy por ti.<br/>
        </div>
      </div>

      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={cuarto} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>La transfiguración de Jesús</div>
        <div className='cardTextoDiv'>
        Jesús desea que nos apartemos del ruido y, en el silencio, solo escuchemos lo que intenta decirnos. Allí nos muestra lo invisible de su persona.<br/><br/>Jesús, Tu cuerpo esconde algo mas allá de lo que podemos ver. Ese día los apóstoles vieron un pedacito de tu divinidad y quedaron deslumbrados, ¿Qué palabras usar para intentar adivinar el resplandor de tu divinidad completa?Que no me olvide, Señor, de que me invitas a verla, a estar contigo para siempre, a vivir deslumbrado por Tu amor. Amén
        </div>
      </div>
      <div className='cardCancion rounded-4 pt-4 pb-4 ps-3 pe-3'>
        <div className='cardCancionTitulo'>Ábreme la puerta</div>
        <div className='cardCancionLetra mt-3'>
          Aunque grande sea el pecado,<br/>
          lo consumiré,<br/>
          pondré en ti un corazón puro<br/>
          y te renovaré.<br/>
          Yo te amo como eres,<br/>
          siempre te amaré,<br/>
          te sostengo de mi mano,<br/>
          no debes temer.<br/>
          <br/>
          Mírame, confía en Mí,<br/>
          mi corazón abierto está<br/>
          hoy por ti.<br/>
        </div>
      </div>

      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={quinto} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>La institución de la Eucaristía</div>
        <div className='cardTextoDiv'>
          En la Institución de la Eucaristía, Jesús se hace alimento, con su cuerpo y con su sangre, bajo las especies del pan y del vino, dando testimonio de su amor por la humanidad y dejando así, su luz entre los hombres para siempre.<br/><br/>Nos ha dejado su Cuerpo y su Sangre para estar siempre con nosotros, dentro de nosotros, viviendo por nosotros. Seamos dignos para que entre en "nuestra casa" y la encuentre limpia, sin mancha, ordenada y santa. Preparemos nuestra casa cada día, pues no sabemos cuándo llegará el Rey de Reyes a visitarnos.
        </div>
      </div>
      <div className='cardCancion rounded-4 pt-4 pb-4 ps-3 pe-3'>
        <div className='cardCancionTitulo'>Ábreme la puerta</div>
        <div className='cardCancionLetra mt-3'>
          Por mis llagas te he sanado,<br/>
          con mi sangre te compré.<br/>
          Mío eres para siempre,<br/>
          no te dejaré.<br/>
          Ábreme la puerta ahora,<br/>
          Yo derramaré<br/>
          toda mi misericordia<br/>
          y te consolaré.<br/>
          <br/>
          Mírame, confía en Mí,<br/>
          mi corazón abierto está<br/>
          hoy por ti.<br/>
        </div>
      </div>
      <div className='cardCancion rounded-4 pt-4 pb-4 ps-3 pe-3'>
        <div className='cardCancionTitulo'>A tanto amor</div>
        <div className='cardCancionLetra mt-3'>
          Hecha un mar de lágrimas<br/> al verlo allí en la cruz<br/>
          Se acordó del niño<br/> que ella misma diera a luz<br/>
          Y entre el firmamento<br/> y su mirada de dolor<br/>
          Bien supo serle fiel<br/> a tanto amor<br/>
          No rompió el silencio<br/> cuando el cielo se quebró<br/>
          No volteó sus ojos<br/> cuando ya no respiró<br/>
          Se sintió caer,<br/> pero así mismo no cayó<br/>
          Y amo a pesar de que<br/> todo se oscureció<br/>
          Solo besos sus pies<br/>
          Y a Dios se lo ofreció<br/>
          Sin preguntar por qué<br/>
          A todos perdonó<br/>
          Pues entendió el amor<br/>
          Que Jesús predicó<br/>
          Que su hijo predicó<br/>
          Ella entendió el amor<br/>
          Que él enseñó<br/><br/>
          Entre la llovizna, la tristeza<br/> y el temor<br/>
          Lo tomó en sus brazos<br/> cuando ya no respiró<br/>
          Junto con su alma<br/> le traspasó el corazón<br/>
          La espada que esa cruz<br/> todo lo consumó<br/>
          No rompió el silencio<br/> cuando el cielo se quebró<br/>
          No volteó sus ojos<br/> y el sepulcro se cerró.<br/>
          Se sintió caer<br/> pero su fe permaneció<br/>
          Y amó a pesar de que<br/> el mundo lo entrego<br/>
          <br/>
          Solo besos sus pies<br/>
          Y a Dios se lo ofreció<br/>
          Sin preguntar por qué<br/>
          A todos perdonó<br/>
          Pues entendió el amor<br/>
          Que Jesús predicó<br/>
          Que su hijo predicó<br/>
          Ella entendió el amor<br/>
          Que él enseñó.<br/>
        </div>
      </div>
    </>
  )
}

export default Rosario