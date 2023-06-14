import './servicios.css';

export default function Servicios() {

    return (
        <div className='servicioscon' id='servi'>
            <div className="containerServicios">
                <h1 className='subTitulo'>Servicios</h1>
                <div className="serviciosList">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Desarrollo Web (Front-end)</h2>
                        <p>Desarrollo de aplicaciones y páginas web con React</p>
                        {/* <a href="https://pymewave.online" target='_blank'>Ver mas</a> */}
                    </div>
                    <div>
                        <i className="fa-solid fa-layer-group"></i>
                        <h2></h2>
                        <h2>Desarrollo Web (Back-end)</h2>
                        <p>Desarrollo web de la parte back-end (Enrutamiento, BD)</p>
                        {/* <a href="#" target='_blank'>Ver mas</a> */}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
