import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as L from '@/styles/LoginStyle';
import { useNavigate, useLocation } from 'react-router-dom';
import P1 from '@/assets/profile_1.png';
import P2 from '@/assets/profile_2.png';
import P3 from '@/assets/profile_3.png';
import P4 from '@/assets/profile_4.png';
import P5 from '@/assets/profile_5.png';
import NextBtn from '@/assets/NextBtn.png';
import PrevBtn from '@/assets/PrevBtn.png';
import StartIcon from "@/assets/icons/Start.svg";

const profile = [
    { name: 'P1', src: P1 },
    { name: 'P2', src: P2 },
    { name: 'P3', src: P3 },
    { name: 'P4', src: P4 },
    { name: 'P5', src: P5 },
];

const Login = ({ language }) => {
    const [nickname, setNickname] = useState('');
    const [currentP, setCurrentP] = useState(0);
    const [message, setMessage] = useState('');
    const [isJoining, setIsJoining] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNext = () => {
        setCurrentP((prevP) => (prevP + 1) % profile.length);
    };

    const handlePrev = () => {
        setCurrentP((prevP) => (prevP === 0 ? profile.length - 1 : prevP - 1));
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setIsJoining(searchParams.has('roomId'));
    }, [location.search]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let roomId;

            // 방에 참가하는 경우
            if (isJoining) {
                const searchParams = new URLSearchParams(location.search);
                roomId = searchParams.get('roomId');
                navigate(`/waiting?roomId=${roomId}&nickname=${nickname}`);
            } else {
                // 방을 생성하는 경우
                const response = await axios.post('http://localhost:8080/createRoom', { nickname });
                if (response.status === 201) {
                    roomId = response.data.roomId;
                    navigate(`/waiting?roomId=${roomId}&nickname=${nickname}&isHost=true`);
                }
            }

            // 프로필 저장 API 호출
            const profileResponse = await axios.post('http://localhost:8080/user/save', {
                userDto: {
                    profile: profile[currentP].name, // 선택된 프로필 이름
                    username: nickname,
                    role: 'ADMIN',
                },
            });

            if (profileResponse.status === 200) {
                console.log('프로필이 성공적으로 저장되었습니다.');
            }
        } catch (error) {
            if (error.response) {
                const { status, message } = error.response.data;
                setMessage(language === 'ko' ? message : 'Failed to save user profile.');
            } else {
                setMessage(language === 'ko' ? '방 만들기에 실패했습니다. 다시 시도해 주세요.' : 'Failed to create a room. Please try again.');
            }
        }
    };

    return (
        <L.LoginContainer>
            <L.Form onSubmit={handleSubmit}>
                <L.Title>{language === 'ko' ? '프로필을 만들어주세요' : 'Create Your Profile'}</L.Title>
                <L.Footer>
                    <button type="button" onClick={handlePrev}>
                        <img className='Btnimg' src={PrevBtn} alt="Previous" />
                    </button>
                    <L.Profile src={profile[currentP].src} alt={profile[currentP].name} />
                    <button type="button" onClick={handleNext}>
                        <img className='Btnimg' src={NextBtn} alt="Next" />
                    </button>
                </L.Footer>

                <L.Input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder={language === 'ko' ? '닉네임을 입력해주세요.' : 'Enter your nickname.'}
                />
                <L.Button type="submit">
                    <img src={StartIcon} alt="다시 아이콘" />
                    {isJoining ? (language === 'ko' ? '참가하기' : 'Join Room') : (language === 'ko' ? '방 만들기' : 'Create Room')}
                </L.Button>
            </L.Form>
            {message && <L.Message>{message}</L.Message>}
        </L.LoginContainer>
    );
};

export default Login;
