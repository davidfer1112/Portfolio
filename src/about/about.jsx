import './about.css';


export default function About (){
    return(
        <div className='about'>
            <div className='containerAbout'>
                <div className='fila'>
                    <div className='aboutCol1'>
                        <img src="https://via.placeholder.com/300" alt="Imagen genérica"/>
                    </div>
                    <div className='aboutCol2'>
                        <h1 className='subTitulo'>Acerca de Mí</h1>
                        <p>Hola soy ......... hoy ....... lunes......... todos los dias .........
                           quiero.......... decir que .......... el dia....... como lo creo .....
                           martes......... me agrada ........... comer ....... al ver ....... que
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}