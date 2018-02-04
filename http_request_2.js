//Na ultima aula, ensinei a criar um servidor local usando nodeJS, mas aquele codigo ele tinha um determinado problema: O navegador não parava de carregar e nada era mostrado pra gente.

//Isso aconteceu porque apesar da gente ter criado o servidor, a gente precisa retornar algo pra esse usuario assim que ele acessa a porta 3000. E para isso devemos adicionar outros parametro dentro do createServer

var http = require('http');//Ja sabemos como funciona


http.createServer(function (req, res) {

  //Nos ja sabemos como funciona o createServer, mas agora apareceu mais 1 novo comando ali no meio, na verdade este comando é uma função propria do createServer que recebe duas coisas

  /*

  Na variavel chamada req (Não podemos mudar os nomes ali, se mudarmos vai dar problema, o sistema do node precisa que um deles seja req e outro res), o req ele vai receber a requisição do navegador assim que ele acessa o nosso servidor pela porta 3000.

  Quer saber qual requisição ele manda pra gente ? Basta dar um console.log abaixo

  */

  console.log(req)//O que deve ter dentro dessa variavel req, hum ? Bem voce precisa entender requisições pra entender isso aqui, mas basicamente em qualquer website, seu navegador envia isso, é como se fosse suas credencias aonde tem seu ip, o nome do navegador e muitas outras informações (OBS: Esses dados aparecem no prompt).

  /*

  Agora na variavel res, ela é responsavel por receber a resposta do servidor, bem quando um navegador entra no nosso servidor, ele quer saber da resposta, e qual essa resposta ? Uma mensagem, uma imagem, um video, um codigo HTML, um virus talvez...

  É com esse comandinho (res) que enviamos a resposta pro cliente (seu navegador) e é com ele que podemos chamar um comando responsavel para PARAR COM AQUELE LANCE DE LOADING que estava acontecendo na aula anterior.

  */


  res.write('Tu tá dentro do server!'); //Pegamos o res e chamamos a função write que é responsavel por enviar uma mensagem de texto para o navegador do cliente, vamos mandar a seguinte mensagem: 'Tu tá dentro do server!'.

  //Show de bola, se executarmos esse codigo no prompt, infelizmente não iremos ver a mensagem printada naquela telinha branca do navegador (mas acredite... ela chegou lá =))

  //Para vermos a mensagem e tudo o que há de bom, devemos executar aquele famoso lance que eu disse acima de "PARAR COM AQUELE LANCE DE LOADING", pra fazer isso basta chamar novamente a res e executar a função interna chamada end como fazemos abaixo.

  res.end();

  //É possivel enviar uma mensagem pela end ? Sim é possivel, experiemente usar res.end('Agora sai fora...');

  //Só pra constar tem como enviar codigos html dentro do write e do end tá :3

}).listen(3000); //O servidor pode ser acessado agora pela porta 3000
