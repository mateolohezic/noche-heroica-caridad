import React from 'react'
import primer from './primer.png'
import segundo from './segundo.png'
import tercero from './tercero.png'
import cuarto from './cuarto.png'
import quinto from './quinto.png'
import sexto from './sexto.png'
import septimo from './septimo.png'

function Visitas() {
  return (
    <>
        
        <div className='p-4 pb-5 mb-5 divExplicacion text-center rounded-2'>
            <div><span className='cardTituloDiv'>Visita a los templos</span></div>
            <div className='mt-4'>
                De la noche del Jueves Santo hasta el Viernes Santo en la mañana es devoción bíblica y católica visitar siete iglesias, una tradición iniciada en Roma por San Felipe Neri y que se ha propagado por el mundo entero. <br/><br/>
                La visita a las 7 iglesias tiene como fin agradecer a Jesucristo por el don de la Eucaristía y del Sacerdocio que instituyó aquella noche santa, acompañarle en la soledad y sufrimientos en el Huerto de Getsemaní, recordar las afrentas que recibió en las casas de Anás, Caifás, Herodes, Pilato, en el Calvario y estar a su lado en el silencio del sepulcro.
            </div>
        </div>
      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={primer} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>Jesús en el huerto</div>
        <div className='cardTextoDiv'>
            <div><span className='tituloIglesiaVisita'>Meditación</span></div><div className='mt-2'>Serían como las 10 de la noche cuando Jesús llegó al Huerto de Getsemaní. Su alma se llenó de tristeza, entró en agonía ante la visión de los sufrimientos que se le venían encima y la ingratitud de la humanidad. Oró por unas tres horas con lágrimas y sudor de sangre, cuyas gotas cayeron en tierra. Aquí llegó Judas y con un beso lo entregó a quienes vinieron a aprehenderle, aunque más bien fue su Amor a ti el que le entregó.</div>
            <div className='mt-4'><span className='tituloIglesiaVisita'>Oración</span></div><div className='mt-2'>Te compadecemos Jesús y te damos gracias por lo que sufriste por nuestra Salvación en la Oración del Huerto. Nos duele la traición y alevosía con que fuiste hecho preso. Concédenos fortaleza en nuestros sufrimientos y danos el don de la oración.</div>
            <div className='padrenuestros mt-4'>Se rezan 3 Padrenuestros</div>
        </div>
      </div>
      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={segundo} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>Jesús en casa de Anás</div>
        <div className='cardTextoDiv'>
            <div><span className='tituloIglesiaVisita'>Meditación</span></div><div className='mt-2'>Jesús, maniatado como un vulgar malhechor, interrogado por Anás sobre sus discípulos y doctrina, responde con entereza y mansedumbre que pregunte a quienes le han escuchado y que saben bien lo que Él ha dicho y enseñado. Un guardián le dio una bofetada que de seguro lo hizo tambalearse.</div>
            <div className='mt-4'><span className='tituloIglesiaVisita'>Oración</span></div><div className='mt-2'>Jesús, te compadecemos; te damos gracias por la injusta humillación que sufriste al ser abofeteado. Te pedimos que nos ayudes a hablar con verdad, serenidad y educación y a respetar a nuestros interlocutores.</div>
            <div className='padrenuestros mt-4'>Se rezan 3 Padrenuestros</div>
        </div>
      </div>
      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={tercero} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>En casa de Caifás</div>
        <div className='cardTextoDiv'>
            <div><span className='tituloIglesiaVisita'>Meditación</span></div><div className='mt-2'>Aquí Jesús tiene que oír cómo se tergiversan sus doctrinas. Cómo se aducen falsos testimonios en su contra. Cómo se le reta a proclamar que es Hijo de Dios, pero sin intención de reconocerle. Cómo Pedro niega conocerle. Cómo lo declaran reo de muerte.</div>
            <div className='mt-4'><span className='tituloIglesiaVisita'>Oración</span></div><div className='mt-2'>Jesús, tú eres la verdad y se amontonan mentiras para callarte. Has dicho: "la verdad los hará libres" pero tienes que ver cómo la mentira nos esclaviza. Has dicho: "ustedes son mis amigos" y con qué facilidad te negamos. En ti somos hijos de Dios y qué pobreza la de nuestra vida. Te compadecemos, Jesús, por esas traiciones y te pedimos la gracia de ser tus testigos valientes, fieles a tu amor.</div>
            <div className='padrenuestros mt-4'>Se rezan 3 Padrenuestros</div>
        </div>
      </div>
      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={cuarto} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>En casa de Pilato</div>
        <div className='cardTextoDiv'>
            <div><span className='tituloIglesiaVisita'>Meditación</span></div><div className='mt-2'>Jesús es acusado ante Pilato de malhechor, alborotador del pueblo, que prohíbe pagar el tributo al César y que se proclama rey. Pero Él también anuncia que todo el que es de la verdad escucha su voz. Lo que piden es que sea condenado a muerte.</div>
            <div className='mt-4'><span className='tituloIglesiaVisita'>Oración</span></div><div className='mt-2'>Jesús, te proclamamos Cristo Rey, porque eres el único Rey de la Verdad, de la Vida y del Amor. Te compadecemos por la tristeza que tiene que darte el descaro con que te calumnian y por la ceguera con que juegan con las palabras salidas de tu boca. Te pedimos que limpies estos labios y estos corazones con los que te recibimos, y que nuestras vidas den testimonio de Ti.</div>
            <div className='padrenuestros mt-4'>Se rezan 3 Padrenuestros</div>
        </div>
      </div>
      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={quinto} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>En casa de Herodes</div>
        <div className='cardTextoDiv'>
            <div><span className='tituloIglesiaVisita'>Meditación</span></div><div className='mt-2'>Herodes, curioso, pero sin compromiso, se alegra de ver a Jesús. Espera divertirse viéndole hacer algún milagro. Jesús guarda silencio ante la palabrería con que Herodes le halaga. Al no tener respuesta, le desprecia, se burla de Él, poniéndole una túnica blanca.</div>
            <div className='mt-4'><span className='tituloIglesiaVisita'>Oración</span></div><div className='mt-2'>Jesús, Sabiduría del Padre, ahora guardas silencio. Por ti los sencillos y humildes han visto el poder de Dios y lo han celebrado con gozo grande. Ahora estás cabizbajo. Te agradecemos la lección que nos das, te compadecemos por el ultraje que recibes y te pedimos la gracia de hablar y callar oportunamente.</div>
            <div className='padrenuestros mt-4'>Se rezan 3 Padrenuestros</div>
        </div>
      </div>
      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={sexto} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>De nuevo en casa de Pilato</div>
        <div className='cardTextoDiv'>
            <div><span className='tituloIglesiaVisita'>Meditación</span></div><div className='mt-2'>Pilato reconoce que Jesús ni es alborotador ni ha cometido delito alguno de los que le acusan. Como que quiere dejarle libre; pero claudica ante las presiones de los adversarios que han jurado acabar con Jesús porque les resulta incómodo, su conducta y sus enseñanzas chocan con sus intereses. Jesús es condenado a muerte de cruz, flagelado, coronado de espinas.</div>
            <div className='mt-4'><span className='tituloIglesiaVisita'>Oración</span></div><div className='mt-2'>Jesús, te compadecemos por las injusticias cometidas en este proceso al que fuiste sometido y en el que nosotros metimos nuestras manos. Compadecemos en ti a cuantos por ser fieles a la verdad y a la causa de Dios en sus hijos son tratados injustamente. Te pedimos la gracia de la piedad divina ante nuestras injusticias.</div>
            <div className='padrenuestros mt-4'>Se rezan 3 Padrenuestros</div>
        </div>
      </div>
      <div className='cardMisterio rounded-5'>
        <div className='cardImagenDiv'><img src={septimo} className='img-fluid rounded-4 w-100'/></div>
        <div className='cardTituloDiv'>En el Santo Sepulcro</div>
        <div className='cardTextoDiv'>
            <div><span className='tituloIglesiaVisita'>Meditación</span></div><div className='mt-2'>Jesús ha muerto en la cruz entre indecibles dolores, burlas, desprecios y abandonado de Dios. La Madre y los amigos que lo han acompañado en estos duros momentos, no han podido hacer nada. Unos amigos lo sepultan piadosamente. Se han cumplido las escrituras. Ahora a esperar el tercer día. Él, el poderoso en obras y palabras, ha dicho que resucitará.</div>
            <div className='mt-4'><span className='tituloIglesiaVisita'>Oración</span></div><div className='mt-2'>Jesús, te acompañaremos en el silencio estos días, en la espera de que tu palabra germine en nuestros corazones y contigo resucitemos hombres y mujeres nuevos en tu Resurrección. Gracias, Padre Dios, tú siempre has escuchado a tu Hijo y así, vencedor de su muerte y de la nuestra, lo has resucitado.</div>
            <div className='padrenuestros mt-4'>Se rezan 3 Padrenuestros</div>
        </div>
      </div>
      <div className='cardCancion rounded-4 pt-4 pb-4 ps-3 pe-3'>
        <div className='cardCancionTitulo'>El que muere por mí</div>
        <div className='cardCancionLetra mt-3'>
            Todo empezó en una cruz <br/>
            Donde un hombre murió y un Dios se
            entregó<br/>
            Silenciosa la muerte llegó<br/>
            Extinguiendo la luz<br/> que en un grito se
            ahogó<br/>
            Viendo su faz de dolor<br/>
            Una madre lloró y su amigo calló<br/>
            Pero siendo una entrega de amor<br/>
            Su camino siguió<br/> y en algún otro lado<br/>
            Una luz se encendió<br/>
            Siendo hombre, amigo,<br/> esclavo y
            maestro<br/>
            Siendo carga pesada,<br/> profesor y
            aprendiz<br/>
            Entregó hasta su cuerpo<br/> en el pan y en
            la vid<br/>
            Desde entonces lo he visto<br/> caminar a mi
            lado<br/>
            A ese Dios que se humilla<br/> y muere por
            mí<br/>
            Es la barca en mi playa,<br/> el ruido del
            silencio<br/>
            Que se acerca a su hijo<br/> y me abraza feliz<br/>
            Que se acerca a su hijo<br/> y me abraza feliz<br/>
            Viendo un humilde calvario<br/>
            Con un rostro cansado,<br/> soporta la cruz<br/>
            Y al verme rezando a sus pies<br/>
            Se olvida de Él,<br/> me toma en sus brazos<br/>
            Me acoge otra vez<br/>
            Siendo fuego, paloma,<br/> el agua, y el
            viento<br/>
            Siendo un niño inocente,<br/> un padre y
            pastor<br/>
            Voy a aceptar mi ofrenda<br/> que mi vida
            señor<br/>
            Desde entonces lo he visto<br/> caminar a mi
            lado<br/>
            A ese Dios que se humilla<br/> y muere por
            mí<br/>
            En la barca en mi playa,<br/> el ruido del
            silencio<br/>
            Que se acerca a su hijo<br/> y me abraza feliz<br/>
            Que se acerca a su hijo<br/> y me abraza feliz<br/>
            Y si ahora yo acepto esa cruz<br/>
            Fue por esa persona, ese Dios<br/>
            Fue por Cristo Jesús<br/>
            Desde entonces lo he visto<br/> caminar a mi
            lado<br/>
            A ese Dios que se humilla<br/> y muere por
            mí<br/>
            En la barca en mi playa,<br/> el ruido del
            silencio<br/>
            Que se acerca a su hijo<br/> y me abraza feliz<br/>
            Que se acerca a su hijo<br/> y me abraza feliz<br/>
        </div>
      </div>
    </>
  )
}

export default Visitas