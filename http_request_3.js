//Nesta guia vamos organizar um pouco o nosso codigo

var http = require('http');

//Para quem sabe organizar, podemos colocar o codigo que cria o servidor dentro de uma variavel

var servidor = http.createServer(function (req, res) {
  res.end('<html><body>Isso é um HTML</body></html>');
});

//E futuramente podemos chamar essa instancia do nosso servidor informando o listen junto com a porta (é claro),

servidor.listen(3000);

// Funciona da mesma forma rs
