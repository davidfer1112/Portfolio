import App from './app.jsx';
import AppEs from './appEs.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Prerender(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/Es' element={<AppEs/>}/>
            </Routes>
        </BrowserRouter>
    );

}


export default Prerender;