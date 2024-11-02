import React, { useEffect } from 'react';
import * as C from '@/styles/CongratulationsStyle';
import { useLocation, useNavigate } from 'react-router-dom';

const TodayRecommend = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { nickname } = location.state || {};

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/recommendation', { state: { nickname } }); 
        }, 5000); 

        return () => clearTimeout(timer);
    }, [navigate, nickname]);

    return (
        <C.LoginContainer>
            <C.CongratulationsContainer>
                <C.Title>오늘의 추천</C.Title>
                
                <C.Message>{nickname ? `${nickname}님` : '님, 이런 영화는 어떠세요?'}</C.Message>
            </C.CongratulationsContainer>
        </C.LoginContainer>
    );
};

export default TodayRecommend;
