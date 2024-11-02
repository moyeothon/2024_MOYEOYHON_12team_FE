import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Main from '@/pages/Main';
import Correct from '@/pages/Correct';


const AppRouter = ({ }) => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/main' element={<Main/>} />
            <Route path='/correct' element={<Correct/>} />
        </Routes>
    )
};

export default AppRouter;