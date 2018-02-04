//Nesta aula a gente vai aprender a como criar um servidor http e mostrar um codigo html, ou se voce não entende nada de nodejs, nós vamos mostrar criar um arquivo e você conseguir acessar este arquivo pelo seu navegador, e com isso voce verá uma mensagem na tela dizendo 'Olá navegador'.

var http = require('http');//Para criarmos um local aonde iremos mostrar a mensagem devemos chamar primeiro um dos modulos do javascript responsaveis para isso, nesse caso a gente cria uma variavel chamada http que irá armazenar uma instancia da classe responsavel por fazer requisições http. Para que isso seja feito a gente utiliza o comando require que puxa os modulos e dentro dele a gente informa o nome do modulo que a gente quer, no caso é http.

//Agora que a gente tem uma instancia do modulo que trabalha com http, basta colocarmos a mão na massa, a primeira coisa que voce quer é "Acessar este arquivo pela tela do seu navegador" e para que isso seja possivel devemos chamar a instancia do modulo http e pedir pra ele criar um servidor pra gente, para isso a gente usa o comando 'createServer'.

http.createServer(

    //Aqui nos estamos informando primeiro a variavel que armazena o modulo de http e em seguida usamos o PONTO (.) este ponto significa que estamos chamando uma das funções existentes dentro daquele determinada classe, e como nos queremos chamar a função responsavel por fazer a gente acessar este arquivo na tela do navegador, devemos chamar a função createServer. Essa função ela vai criar um servidor pra gente, sem um servidor não é possivel acessar este arquivo pela tela do seu navegador :(

    //Perfeito, apartir do momento que a gente dá o createServer o nosso servidor é criado automaticamente, para acessar este servidor, basta abrir seu navegador e digitar localhost, porque isso ? Cade o www.seiladoque.... Bem inicialmente estamos criando um servidor local, e isso é feito automaticamente pelo node, mas pra frente vamos aprender a utilizar o node em um servidor da web, pra ai sim, voce acessar com www.seilaoquefor...

    //Fique calma quando voce digitar localhost não vai funcionar absolutamente nada, isso porque ainda estamos criando.

    //Pronto, agora para finalizar o servidor local ser criado, precisamos é claro, dizer em qual porta ele deve ser acessado, para isso usamos o comando listen e dentro dele informamos a porta, que pode ser 500, 600, 3000 e afins (Só toma cuidado pra nao utilizar uma das portas que ja estiver em uso por outros softwares no seu computador)

).listen(3000);//O servidor local foi criado, e para acessa-lo basta voce ir na porta 3000

//E agora para testar se o nosso codigo esta funcionando ou não, basta entrarmos no nosso navegador e digitar localhost:3000 (Este codigo vai nos levar diretamente pro nosso servidor local mais especificamente para a porta 3000, e quando ele entrar lá... voialá entramos nesse arquivo)

//Não podemos nos esquecer de executar esse arquivo no nosso prompt dando 'node http_request.js', quando fizermos isso, o pontinho vai ficar piscando, isso significa que o servidor esta no AR, pra tirar ele do ar devemos que apertar no nosso teclado as teclas: CONTROL + C, quando fizermos isso a tela para de pisca (O servidor é retirado do AR, tanto é que se voce tentar acessar vai dar problema) e voce tem a chance de digitar novamente

//OBS: Caso voce fizer uma modificação nesse arquivo com o servidor no AR (ter dado node + o nome do arquivo e o pontinho tiver piscando), as alterações não surtiram efeito, voce irá precisar fechar o servidor (control + c) e ligar ele de novo.

//Este codigo ele vai ficar rodando pra sempre, porque criamos o servidor mas não criamos um comando para fecha-lo.
