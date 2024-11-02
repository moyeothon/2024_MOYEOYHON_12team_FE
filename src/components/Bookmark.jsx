import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as He from '@/styles/HeaderStyle';
import * as B from "../styles/Bookmark"

const Bookmark = () => {

    return (
        <B.Container>
            <B.StyledBox1>
                <h2>M</h2>
                <h2>O</h2>
                <h2>Y</h2>
                <h2>E</h2>
                <h2>O</h2>
            </B.StyledBox1>
            <B.StyledBox2>
                <h2>모</h2>
                <h2>닥</h2>
                <h2>모</h2>
                <h2>닥</h2>
            </B.StyledBox2>
        </B.Container>
    );
}

export default Bookmark;
