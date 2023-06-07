import './header.css';


export default function Headercom (){
    return(
        <div className='headercontain'>
            <div className='containernav'>
                <nav>
                    <img src="../../public/images/logo_sin_fondo.png" alt="logo" />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Acerca</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}