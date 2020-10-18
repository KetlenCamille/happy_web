//Importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//Iniciando express
const server = express()
server
    //Utilizando os arquivos estáticos
    .use(express.static('public'))

    //Configurando template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
    //Criação das rotas
    .get('/index', pages.index) 
    .get('/orphanage', pages.orphanage) 
    .get('/orphanages', pages.orphanages) 
    .get('/create-orphanage', pages.createOrphanage) 

//Ligar o servidor
server.listen(5500)

