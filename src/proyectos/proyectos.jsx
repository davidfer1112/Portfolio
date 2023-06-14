import './proyectos.css';


export default function Proyectos() {

    return (
        <div className='proyectos'>
            <div className="proyectosCon">
                <h1 className='subTitulo'>Proyectos</h1>
                <div className="proyectosList">
                    <div className="resulProyecto">
                        <img src="../../public/images/proyPyme.png" alt="ProyPymeImg" />
                        <div className="capa">
                            <h3>PymeWave</h3>
                            <p>descripcion del proyecto</p>
                            <a href="https://pymewave.online" target='_blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="resulProyecto">
                        <img src="../../public/images/proyPortfolio.png" alt="ProyPymeImg"  className='imgespe'/>
                        <div className="capa">
                            <h3>Porfolio</h3>
                            <p>descripcion del proyecto</p>
                            <a href="https://davidfer1112.github.io/Portfolio/" target='_blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
