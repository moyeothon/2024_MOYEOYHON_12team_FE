import React, { useEffect } from 'react';
import * as T from '@/styles/TodayRecommend';
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
        <T.LoginContainer>
            <T.TodayRecommendContainer>
                <T.Title>오늘의 추천</T.Title>
                <T.Divider />
                <T.Message>{nickname ? `${nickname}님` : '님, 이런 영화는 어떠세요?'}</T.Message>
            </T.TodayRecommendContainer>
        </T.LoginContainer>
    );
};

export default TodayRecommend;
