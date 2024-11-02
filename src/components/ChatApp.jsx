import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import * as C from '@/styles/ChatStyle'
import Congrats from '@/components/Congrats'
import Send from '@/assets/send.png'

// 서버 주소에 연결 (서버가 로컬에서 5000번 포트에서 실행 중)
const socket = io('http://localhost:5000');

function ChatApp() {
  const [messages, setMessages] = useState([]); // 모든 메시지를 저장
  const [message, setMessage] = useState('');   // 입력 필드 메시지 저장
  const [isCelebrating, setIsCelebrating] = useState(false);

  useEffect(() => {
    // 'chat message' 이벤트를 받아서 화면에 표시
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // 컴포넌트가 제거될 때 이벤트 제거
    return () => socket.off('chat message');
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('chat message', message); // 입력한 메시지를 서버로 보냄
      setMessage(''); // 전송 후 입력창 초기화
    }
  };

  const handleCelebrate = () => {
    setIsCelebrating(true);
  };

  const handleCloseCelebrate = () => {
    setIsCelebrating(false);
  };

  return (
    <C.ChatApp>
      <C.ChatBox>
        {messages.map((msg, index) => (
          <C.textBox key={index}>{msg}</C.textBox>
        ))}
      </C.ChatBox>
      <C.SearchBar>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="질문을 입력해주세요"
          />
          <C.SubmitBtn type="submit">
            <img src={Send} />
          </C.SubmitBtn>
          <C.CongratsBtn onClick={handleCelebrate}>
              정답!
          </C.CongratsBtn>
        </form>
      </C.SearchBar>

      {isCelebrating && <Congrats message="축하합니다!" onClose={handleCloseCelebrate} />}
    </C.ChatApp>
  );
}

export default ChatApp;
