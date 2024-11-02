// Congratulations.js
import React, { useEffect } from 'react';
import * as C from '@/styles/CongratulationsStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import CongratulationsIcon from "../assets/icons/Congratulations.svg";

const Congratulations = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { nickname } = location.state || {};

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/recommendation', { state: { nickname } }); // nickname을 전달
        }, 5000); 

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
    }, [navigate, nickname]);

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
