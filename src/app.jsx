import './app.css';
import Headercom from './header/header.jsx';
import About from './about/about';
import Servicios from './servicios/servicios.jsx';
import Proyectos from './proyectos/proyectos.jsx';
import { Link } from 'react-router-dom';



export default function App (){
    return(
        <div className='principalContainer'>
            <Headercom/>
            <About/>
            <Servicios/>
            <Proyectos/>
        </div>
    )
}