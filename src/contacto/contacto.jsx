import './contacto.css';


export default function Contacto() {

    return (
        <div className='contacto' id='contacto'>
            
            <div className="fila">
                <div className="v">
                    <h1 className='subTitulo'>Contacto</h1>
                    <div className="redSocial">
                        <a href="https://www.linkedin.com/in/david-fernando-perez-medina-287451268/" target='_blank'><i className="fa-brands fa-linkedin"><p>Linkedin</p></i></a>
                        <a href="https://github.com/davidfer1112" target='_blank'><i className="fa-brands fa-github"><p>Github</p></i></a>
                        <a href="mailto:davidfernando1112@gmail.com" target='_blank'><i className="fa-solid fa-paper-plane"><p>Email</p></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
