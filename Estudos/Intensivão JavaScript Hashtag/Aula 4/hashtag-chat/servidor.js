const http = require('http'); //requirindo modulo http do node;
//terminal npm init -y 
//terminal npm install expres
const express = require('express');
const app = express();
const servidorHttp = http.createServer(app); //criando servidor local
const io = require('socket.io')(servidorHttp);

//() => {} arrow function
io.addListener('connecttion', (socket) => {
    console.log('usuario conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
})

app.use(express.static('public')); //usando arquivos

servidorHttp.listen(1000);      //numerando servidor
