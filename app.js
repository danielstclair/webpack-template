const express = require('express');
const app = express();
app.use(express.static('public'));
const http = require('http').Server(app);
const io = require('socket.io');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFild(__dirname + '/public/index.html');
})

http.listen(port, () => {
  console.log(`listening on *:${port}`);
})
