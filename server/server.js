const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors'); // cors 모듈 불러오기

const app = express();
app.use(cors()); // CORS 미들웨어 사용

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173", // 클라이언트 주소
      methods: ["GET", "POST"]
    }
  });

app.get('/', (req, res) => {
  res.send('서버가 실행 중입니다!');
});

io.on('connection', (socket) => {
  console.log('새로운 사용자가 연결되었습니다.');

  socket.on('chat message', (msg) => {
    console.log('받은 메시지:', msg);
    io.emit('chat message', msg); // 모든 사용자에게 메시지 전송
  });

  socket.on('disconnect', () => {
    console.log('사용자가 연결을 종료했습니다.');
  });
});

server.listen(5000, () => {
  console.log('서버가 http://localhost:5000 에서 실행 중입니다.');
});
