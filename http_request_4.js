//Nesta guia vamos aprender a como a gente pode captar alguns patametros que o usuario pode colocar na URL, por exemplo, vamos supor que voce como usuario digou assim: localhost:3000 e queira ir para uma nova tela diferente daquela mensagem de boas vindas assim que voce digita localhost:3000/jogos... Bem nesta guia vamos aprender a fazer isso

var http = require('http');


var servidor = http.createServer(function (req, res) {

  //Para fazer aquilo que queremos temos que saber qual parametro que o usuario no caso voce, esta enviando pra cá pra dentro... Para saber disso temos que pegar a requisição que o navegador faz assim que entra no servidor... sabe aonde ela esta não ?

  //Dentro da variavel req, é claro, lá dentro tem a URL (aquilo que queremos), dados do navegador (Não precisamos disso), tempo de resposta (tbm não precisamos disso), e afins.

  //Para pegar esses dados podemos fazer o seguinte:

  var url = req.url;//Como os dados existentes dentro do req na verdade são uma especie de array (Com chaves e valores), basta utilizarmos o ponto (.) e selecionarmos o chave que nos queremos que no caso é a chave de URL.

  //O que tem dentro dessa chave ?

  console.log(url);//Se digitarmos assim localhost:3000/carros ele vai retornar tudo o que estiver depois do ultimo zero do 3 mil, que no caso ele retornará /carros

  //Agora que voce entendeu a logica meu amigo, é bem fácil, extremamente fácil... Entendende de IF's e Else's ?

  //Espero que sim, então voltando ao assunto da nossa guia, assim que ele digitar localhost:3000/carros seja mostrado uma mensagem de: 'Voce esta na area de carros', se ele entrar na area de '/beleza' vai mostrar 'Que tal fazer as unhas hoje ?' e caso não venha nada ou ele digite alguma coisa que não existe... bem ai podemos ficar com a mensagem de que isso é um html, mãos na massa:

  if (url == '/carros'){
   res.end('<html><body>Voce esta na area de carros</body></html>');

  }else if(url == '/beleza'){
   res.end('<html><body>Que tal fazer as unhas hoje ?</body></html>');

  }else{
   res.end('<html><body>Isso é um HTML</body></html>');

  }

  //Bem simples não acha ? Relaxa que isso é so o começo, voce não vai precisar fazer isso toda vez que seu website tiver uma guia nova, uma categoria nova nem nada, a tecnologia evoluiu muito, hoje a gente tem maneiras mais inteligentes de gerenciar isso e a resposta esta no padrão MVC (Vamos ver isso nas aulas futuras =))


});


servidor.listen(3000);
