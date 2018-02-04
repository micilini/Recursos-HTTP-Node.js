//Este arquivo é um exemplo de modulo que foi visto no arquivo modulo.js, como este modulo vai ser um modulo de exemplo, vamos criar ele com a intenção de retornar somente um teste assim que esse modulo é aberto.

//Para que isso seja possivel podemos primeiro criar uma variavel que vai armazenar o texto pra gente:

var mensagem = "Voce esta dentro do modulo =)";

//Agora para que esse modulo funcione, precisamos fazer uma pequena coisa bem simples, assim que o nosso outro arquivo javascript dá um require desse arquivo para dentro de uma variavel, não vai aparecer mensagem nenhuma uma vez que devemos retornar essa variavel mensagem assim que o modulo for instanciado (vamos dizer assim).

//Para que a mensagem apareca assim que esse arquivo for chamado pelo require, devemos respeitar umas das diretrizes do comonJS, sendo assim, podemos usar o seguinte comando:

module.exports = mensagem;//Essa função utiliza o parametro do sistema chamado module, e chamamos a função exports dizendo ao comonJS que assim que esse modulo seja acessado pelo require, assim que ele compila-lo seja retornado pra gente o conteudo existente dentro da variavel mensagem.

//Como estamos utilizando o NODEJS, automaticamente ele pega esse arquivo e meio que joga dentro do commomJS (podemos imaginar que ele é uma especie de compilador), então para que tudo funcione e a mensagem seja retornada devemos chamar o comando module + exports e informar o valor que será exportado desse nosso modulo.

//(A partir deste momento ja podemos instaciar o nosso servidor e veremos que a mensagem ja apareceu no console =))

//O modulo pode retornar um objeto, uma função, uma string, um boolean, depende excluisvamente do objetivo dele!

//Ao longo deste curso e no nosso caso como desenvolvedores vai ser muito mais frequente retornar funções deste modulo, como por exemplo:

/*

No modulo abaixo estamos retornando uma função anonima, e lá dentro dela temos a variavel que armazena a nossa mensagem e para que seja retornado, como fazemos com função galera ?

Sim damos o return... é praticamente a mesma coisa que fizemos acima!

module.exports = function(){
	var mensagem = "Voce esta dentro do modulo =)";
	return mensagem;
}

É claro que se voce testar isso da forma como o nosso outro arquivo chamado modulo.js esta estruturado vai dar ruim e prompt voce não vai ver uma mensagem e sim o nome de uma função kkkk escrito assim 'function'.

No caso para retornar esta mensagem precisamos instanciar a função anonima que esta dentro do nosso modulo, sendo assim o modulo.js deveria ficar desta forma:

var modulo_mensagem = require('./mod_teste')(); adicionamos um () para o compilador instancar a nossa função anonima

ou se preferir faça isso depois da seguinte forma no console.log:

console.log(modulo_mensagem());

*/

//E é claro, logo abaixo do nosso script (consederando que estamos criando um modulo dentro de uma função), podemos logo abaixo dele, criar outras funções, outras classes e tudo mais.

//E é desta forma que os modulos trabalham =)

