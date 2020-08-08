//SERVIDOR
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//CONFIGURAÇÃO NUNJUCKS (TEMPLATE ENGINE)

const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

//INICIO E CONFIGURAÇÃO DO SERVIDOR

server
    //receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    //configurar arquivos estaticos (css, scripts, images)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    //start do servidor
    .listen(5500)