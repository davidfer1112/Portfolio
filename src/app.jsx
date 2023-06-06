import './app.css';
import Headercom from './header/header.jsx';
import { Link } from 'react-router-dom';


export default function App (){
    return(
        <div className='principalContainer'>
            <Headercom/>
            <h1 className="titu">compo test</h1>
        </div>
    )
}