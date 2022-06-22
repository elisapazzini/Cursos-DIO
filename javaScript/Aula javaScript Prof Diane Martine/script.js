// alert("Tudo certo jovem!")

// // TIPOS PRIMITIVOS
// // boolean true or false
// var VouF = false;
// console.log(VouF);

// var VouF = false;
// console.log(typeof(VouF));

// // number
// var numeroQualquer = 1;
// console.log(typeof(numeroQualquer));

// // string
// var nome = 'elisa';
// console.log (typeof(nome));

// // como declarar
// var variavel
// console.log(variavel);

// let variavel2 = 'qualquer'
// console.log(variavel2);

// const constante = 'ana'
// console.log(constante);

// O QUE SAO VETORES OU ARRAYS?
// como declarar um array?
// let array = ['string', 1, true]
// console.log(array);

// como guardar varios tipos de dados:
// let array = ['string', 1, true, ['array1'], ['array2']]
// console.log(array[2]);

// function/funcao() array[] object/objeto{};

// // forEach - lista todos os items e seus valores;
// array.forEach(function(item, index){console.log(item, index)})

// push - adiciona um item no final do array;
// array.push('novo item');
// console.log(array);

// pop -  remove um item no final do array;
// array.pop();
// console.log(array);

// shift - remove um item no inicio do array;
// array.shift();
// console.log(array);

// unshift - adiciona um item no inicio do array;
// array.unshift('elisa');
// console.log(array);

// indexOf - retorna o indice de um valor;
// console.log(array.indexOf(true));

// splice - remove ou substitui um item pelo indice;
// array.splice(1, 3);
// console.log(array);

// slice - retorna uma parte de um array existente;
// let novoArray = array.slice(0, 3);
// console.log(novoArray);

// DESESTRUTURACAO - var xicara = {cor:'azul', tamanho: 'p', funcao: tomarCafe()}
// var cor = xicara.cor;
// var tamanho = xicara.tamanho;
// var funcao = tomarCafe();

// let object = { string: 'elisa', number: 1, boolean: true, array: ["array1"], objectInterno: {objectInterno: 'objeto intero'}};
// console.log(object.objectInterno);

// var string = object.string;
// console.log(string);

// var array1 = object.array;
// console.log(array1);

// var {string, boolean, objectInterno} = object;
// console.log(string, boolean, objectInterno);

// ESTRUTURAS CONDICIONAIS
// var jogador1 = 0;
// var jogador2 = 1;
// var placar;

// if (jogador2 !== -1) {
//     if (jogador1 > 0) {
//         console.log('Jogador 1 pontuou!')
//     } else if (jogador2 > 0) {
//         console.log('Jogador 2 pontuou!')
//     } else {
//         console.log('Ninguem marcou ponto')
//     }
// }

// if ternário [condicao] ? [instrucao1] : [instrucao2];

// jogador1 != -1 && jogador2 != -1 ? console.log('Pode começar!') : console.log('Não pode comecar!');
   
//     if (jogador1 > 0 && jogador2 == 0) {
//         console.log('Jogador 1 pontuou!');
//         placar = jogador1 > jogador2;
//     } else if (jogador2 > 0 && jogador1 == 0) {
//         console.log('Jogador 2 pontuou!');
//         placar = jogador2 > jogador1;
//     } else {
//         console.log('Ninguem marcou ponto')
//     } 
    
//  // muda o retorno de acordo com os casos propostos. se não atender a nenhum caso, retorna padrão.
//     switch (placar) {
//         case placar = jogador1 > jogador2:
//             console.log('Jogador 1 ganhou!');
//             break;
//         case placar = jogador2 > jogador1:
//              console.log('Jogador 2 ganhou!');
//             break;
//             default:
//             console.log('Empate em 0x0!');
//     }

// for - repeticao de instrucao até que condicao seja falsa.
// for([expressaoInicial]; [condicao]; [incremento]) {declaracao};
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

// for (let indice = 0; indice < array.length; indice++) {
//     console.log(indice);
// }

// for/in - repeticao a partir de uma propiedade.
// for ([indice] in [objeto ou array]) { declaracao };
// com array
// for (let i in array) {
//     console.log(i);
// }
// // com object
// for (i in object){
//     console.log(i);
// }

// for/of - repetocao a partir de um valor;
// for([indice] of [array]) {declaracao};
// for (i of array){
//     console.log(i);

// while - executa uma instrucao enquanto determinada condicao for verdadeira;
var a = 0;
// while (a < 10) {
//     a++;
//     console.log(a);
// }
// leitura: enquanto 'a' for menor do que 10, 'a' vai receber mais 1 e imprimir no console.

// do/while - executa uma instrucao até que determinada condicao seja falsa
// do {
//     a++;
//     console.log(a);
// } while (a < 10);

// FUNCOES
// são blocos de comandos e instrucoes para a execucao de determinadas tarefas. Declara a funcao e sua instrucao, depois chama a funcao.
// () - indica que é um objeto do tipo function;
// {} - incica que é um bloco de instrucao;
// function nomeDaFuncao(){
//     ${instrucao:};
// }
// nomeDaFuncao();

// function funcao (){
//     console.log('Tudo certo jovem!');
// }

// funcao();

// FUNCOES COM PARAMETROS
// function nomeDaFuncao(parametro) {
//     ${instrucao};
// }

// nomeDaFuncao(valorDoParametro);

// function mensagem(primeiro, segundo){
//     console.log(primeiro, segundo);
// }

// mensagem('Tudo certo', 'brother!');

// TIPOS DE FUNCOES
// declarativas - obrigatoriamente precisa de um nome
// function funcao (){
//     console.log('sou uma mensagem de funcao delcarativa');
// }

// funcao();

// expressoes - nome é opcional
// com nomeacao
var funcao = function funcao () {
    console.log('Sou uma mensagem de função de expressão nomeada!');
}

// funcao ();

// // sem nomeacao
var funcao = function () {
    console.log('Sou uma mensagem de função de expressão nao nomeada!');
}

// funcao ();

// arrow - sintaxe curta () => {}
// // var funcao = () => {
//     ${};
// }

var funcaoArrow = () => {
    console.log('Sou uma arrow function!');
}

funcaoArrow();
