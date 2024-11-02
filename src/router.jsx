import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Game from '@/pages/Game';
import Correct from '@/pages/Correct';
import Recommendation from './pages/Recommendation';


const AppRouter = ({ }) => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/game' element={<Game/>} />
            <Route path='/correct' element={<Correct/>} />
            <Route path='/recommendation' element={<Recommendation/>} />
        </Routes>
    )
};

export default AppRouter;