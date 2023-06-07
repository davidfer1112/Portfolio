import './app.css';
import Headercom from './header/header.jsx';
import About from './about/about';
import { Link } from 'react-router-dom';


export default function App (){
    return(
        <div className='principalContainer'>
            <Headercom/>
            <About/>
            <h1 className="titu">compo test</h1>
        </div>
    )
}