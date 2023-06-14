import './app.css';
import Headercom from './header/header.jsx';
import About from './about/about';
import Servicios from './servicios/servicios.jsx';
import Proyectos from './proyectos/proyectos.jsx';
import Contacto from './contacto/contacto';
import Habilidades from './Habilidades/Habilidades';
import Footer from './footer/footer';
import { Link } from 'react-router-dom';



export default function App (){
    return(
        <div className='principalContainer'>
            <Headercom/>
            <About/>
            <Servicios/>
            <Proyectos/>
            <Habilidades/>
            <Contacto/>
            <Footer/>
        </div>
    )
}