import './appEs.css';
import Headercom from './header/header.jsx';
import { Link } from 'react-router-dom';


export default function AppEs (){
    return(
        <div className='principalContainer'>
            <Headercom/>
            <h1 className="titues">prueba componente</h1>
        </div>
    )
}
