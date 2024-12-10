const express = require('express');

const server = express();

server.get('/teste', () => {
  console.log('teste')
})

server.listen(5000);