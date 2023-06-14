import React, { useState } from 'react';
import './header.css';

export default function Headercom() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState("-200px");

    function abrirmenu() {
        setMenuOpen(true);
        setMenuPosition("0");
    }
  
    function cerrarmenu() {
        setMenuOpen(false);
        setMenuPosition("-200px");
    }

    return (

        <div className='headercontain' id='header'>
            <div className='containernav'>

                <nav>
                    <img src="../../public/images/logo_sin_fondo.png" className='logo' />
                    <ul id='menu' className={menuOpen ? 'open' : ''} style={{ right: menuPosition }}>

                        <li><a href="#header">Home</a></li>
                        <li><a href="#acerca">Acerca</a></li>
                        <li><a href="#servi">Servicios</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#habilidadescon">Habilidades</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <i className="fa-solid fa-xmark" onClick={cerrarmenu}></i>

                    </ul>
                    <i className="fa-solid fa-bars" onClick={abrirmenu}></i>
                </nav>

                <div className='textoHeader'>

                    <p>Estudiante de ingeniería en sistemas</p>
                    <h1>Hola, soy <span>David</span><br />Pérez de Colombia</h1>
                    
                </div>
            </div>
        </div>
  );
}
