import React, { useState, useEffect } from 'react';
import * as P from '@/styles/PlayerListStyle';

const PlayerList = ({ isHost }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // 서버로부터 현재 참가자 리스트를 받아오는 로직
        setPlayers([{ name: '방장', isHost: true }, { name: '참가자1', isHost: false }]);
    }, []);

    return (
        <P.Container>
            <P.Title>참가자 목록</P.Title>
            <P.List>
                {players.map((player, index) => (
                    <P.PlayerItem key={index}>
                        {player.name} {player.isHost && <P.HostBadge>⭐</P.HostBadge>}
                    </P.PlayerItem>
                ))}
            </P.List>
            {isHost && <P.InviteButton>초대하기</P.InviteButton>}
        </P.Container>
    );
};

export default PlayerList;
