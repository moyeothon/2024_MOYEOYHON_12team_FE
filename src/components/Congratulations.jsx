// Congratulations.js
import React from 'react';
import * as C from '@/styles/CongratulationsStyle';
import { useLocation } from 'react-router-dom';
import CongratulationsIcon from "../assets/icons/Congratulations.svg";

const Congratulations = () => {
    const location = useLocation();
    const { nickname } = location.state || {};

    return (
        <C.LoginContainer>
            <C.CongratulationsContainer>
                <C.Title>축하합니다!</C.Title>
                
                <C.FireIconWrapper>
                   {/* <img src={CongratulationsIcon} alt="Congratulations Icon" /> */ }
                </C.FireIconWrapper>
                
                <C.Message>{nickname ? `${nickname}님` : '님'}</C.Message>
            </C.CongratulationsContainer>
        </C.LoginContainer>
    );
};

export default Congratulations;
