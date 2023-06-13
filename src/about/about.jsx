import React, { useRef, useEffect } from 'react';
import './about.css';

export default function About() {
    // obtencion links
    const tabLinksRef = useRef([]);
    const tabContenidoRef = useRef([]);

    useEffect(() => {
        tabLinksRef.current = Array.from(document.querySelectorAll('.tabLinks'));
    }, []);

    useEffect(() => {
        tabContenidoRef.current = Array.from(document.querySelectorAll('.tabContenido'));
    }, []);

    const abrirTab = (paramname) => {
        tabLinksRef.current.forEach((tabLink) => {
            tabLink.classList.remove('activeLink');
        });

        tabContenidoRef.current.forEach((tabContenido) => {
            tabContenido.style.display = 'none';
        });

        const tabLink = document.querySelector(`.tabLinks[data-name="${paramname}"]`);
        const tabContenido = document.querySelector(`#${paramname}`);

        if (tabLink && tabContenido) {
            tabLink.classList.add('activeLink');
            tabContenido.style.display = 'block';
        }
    };

    return (
        <div className='about'>
            <div className='containerAbout'>
                <div className='fila'>
                    <div className='aboutCol1'>
                        <img src='https://via.placeholder.com/300' alt='Imagen genérica' />
                    </div>
                    <div className='aboutCol2'>
                        <h1 className='subTitulo'>Acerca de Mí</h1>
                        <p>
                            Hola soy ......... hoy ....... lunes......... todos los dias ......... quiero.......... decir que
                            .......... el dia....... como lo creo ..... martes......... me agrada ........... comer ....... al
                            ver ....... que
                        </p>

                        <div className='tabTitulo'>
                            <p className='tabLinks activeLink' data-name='habilidades' onClick={() => abrirTab('habilidades')}>
                                Habilidades
                            </p>
                            {/* <p className='tabLinks'>Experiencia</p> */}
                            <p className='tabLinks' data-name='educacion' onClick={() => abrirTab('educacion')}>
                                Educación
                            </p>
                        </div>
                        <div className='tabContenido activeTab' id='habilidades'>
                            <ul>
                                <li>
                                    <span>Desarollo web</span>
                                    <br />
                                    Desarrollo de aplicaciones y páginas web
                                </li>
                                <li>
                                    <span>React</span>
                                    <br />
                                    Manejo de framework React
                                </li>
                            </ul>
                        </div>
                        <div className='tabContenido' id='educacion'>
                            <ul>
                                <li>
                                    <span>Pontificia Universidad Javeriana</span>
                                    <br />
                                    Estudiante de Ingeniería en Sistemas
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
