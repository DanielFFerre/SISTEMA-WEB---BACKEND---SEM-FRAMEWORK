const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

//acessa o css
app.use(express.static('.'));

// JPEGs e pngs
app.get("/jpeg",(req,res)=>{
  res.sendFile(path.join(__dirname,"img/imagem.jpg"))
});
app.get("/img1",(req,res)=>{
  res.sendFile(path.join(__dirname,"img/caderno do superman.jpg"))
});
app.get("/img2",(req,res)=>{
  res.sendFile(path.join(__dirname,"img/mascara do batman.png"))
});
app.get("/img3",(req,res)=>{
  res.sendFile(path.join(__dirname,"img/roupa flash.png"))
});

// Rota Raiz (Acessar apenas localhost:3000/)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/quemsou", (req, res) => {
  res.sendFile(path.join(__dirname, "quemsou.html"));
});

app.get("/perguntas", (req, res) => {
  res.sendFile(path.join(__dirname, "perguntas.html"));
});

app.get("/produtos", (req, res) => {
  res.sendFile(path.join(__dirname, "produtos.html"));
});

app.get("/prod1", (req, res) => {
  res.sendFile(path.join(__dirname, "prod1.html"));
});

app.get("/prod2", (req, res) => {
  res.sendFile(path.join(__dirname, "prod2.html"));
});

app.get("/prod3", (req, res) => {
  res.sendFile(path.join(__dirname, "prod3.html"));
});


app.use((req, res) => {
  res.status(404).send(`
  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>404 - Dragon Ball Z</title>
    <style>
      body {
        background: linear-gradient(180deg, #0f0c29, #302b63, #24243e);
        color: white;
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        text-align: center;
      }
      h1 {
        font-size: 100px;
        color: #ff0000;
        text-shadow: 3px 3px 10px black;
        margin: 0;
        animation: shake 0.5s infinite;
      }
      @keyframes shake {
        0% { transform: translate(0px,0px) rotate(0deg);}
        25% { transform: translate(5px,-5px) rotate(-5deg);}
        50% { transform: translate(-5px,5px) rotate(5deg);}
        75% { transform: translate(5px,5px) rotate(-5deg);}
        100% { transform: translate(0px,0px) rotate(0deg);}
      }
      a {
        font-size: 22px;
        color: white;
        text-decoration: none;
        background: #ff9800;
        padding: 12px 25px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <h1>404</h1>
    <p>Pagina não encontrada!</p>
    <a href="/index">Voltar para o site</a>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});