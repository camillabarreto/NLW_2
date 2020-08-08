//SERVIDOR
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')

//CONFIGURAÇÃO NUNJUCKS (TEMPLATE ENGINE)

const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

//INICIO E CONFIGURAÇÃO DO SERVIDOR

server
    //configurar arquivos estaticos (css, scripts, images)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    //start do servidor
    .listen(5500)