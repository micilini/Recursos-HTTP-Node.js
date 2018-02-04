//Nesta aula iremos aprender um pouco mais sobre modulos e o famoso comomJS, vamos lá ?

/*

Modulos -> Eles nos permitem organizar o nosso codigo de tal modo a isolar determinada logica e permitir que esse bloco isolado possa ser utilizado de forma recorrente dentro da nossa aplicação ou até mesmo em outros projetos. 

Alem disso podemos criar o nosso proprio modulo e disponibiliza-lo na internet para que outras pessoas façam o uso dele, modulos estão muito ligados as classes que costumamos utilizar em orientação a objetos. E um dos objetivos da modularização de codigos em javascript se deve ao fato da redução da complexidade, separação de codigo (Cada modulo atende uma necessidade especifica) e uma manutenção menos complicada.

O EJS, Express que iremos utilizar são alguns exemplos de modulos que podemos usar no nodejs.

E se voce se lembra bem, para inclur um modulo ao seu projeto basta utilizar a função require.

ComomJS -> É um formato que define a construção desses modulos, é basicamente uma forma de escrita que permite que nosso modulo seja incorporado ao node de forma mais natural. Então temos que respeitar algumas coisas para que um simples require seja incluido na nossa aplicação!

Agora vamos para a pratica!

*/

//Para criar um modulo de exemplo, vamos criar mais um arquivo chamado mod_teste.js e salvar na mesma pasta aonde se localiza este arquivo!

//Para chamar o nosso modulo que vai retornar uma simples mensagem pra gente basta usar o require assim como fizemos com o http, observe:

var modulo_mensagem = require('./mod_teste');//Não precisamos informar o .js na extensão do arquivo uma vez que o node ja faz isso pra gente! É uma boa opção utilizar ./mod_teste (pra informar quando o nosso arquivo de modulo esta no mesmo nivel da nossa aplicação) quando o arquivo estiver fora da pasta 'node_modules' tal pasta que iremos ver um pouco mais pra frente no nosso portal de noticias.




var http = require('http');
var servidor = http.createServer(function (req, res) {

    console.log(modulo_mensagem);//Pegamos o conteudo dentro do modulo mod_teste e estamos mostrando ele aqui (A mensagem irá aparecer no prompt).

});
servidor.listen(3000);

