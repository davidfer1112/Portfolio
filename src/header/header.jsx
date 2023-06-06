import './header.css';
import { Link } from 'react-router-dom';


export default function Headercom (){
    return(
        <div className='headercontain'>
            <div className='containernav'>
                <nav>

                    <div className='image-container'>
                        <Link to={'/Es'}>
                                <img src="../../public/images/banderaColombia.jpg" className='imgidi'/>
                        </Link>
                        <Link to={'/'}>
                                <img src="../../public/images/banderaUSA.jpg" className='imgidi'/>
                        </Link>
                    </div>
                    
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}