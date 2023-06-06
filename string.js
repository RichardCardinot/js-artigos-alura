// linha para dividir o conteúdo no console
const linha = () => console.log("=======================================================}");

// =======================================================
linha();

let nome = "André"

// Ao usar o template string, podemos pular de linha sem utilizar caracteres de escape, como o \n, por exemplo.
let poema = `
   E agora, ${nome}?
   A festa acabou,
   a luz apagou,
   o povo sumiu,
   a noite esfriou,
   e agora, ${nome}?
   e agora, você?
   você que é sem nome,
   que zomba dos outros,
   você que faz versos,
   que ama, protesta?
   e agora, ${nome}?
`

console.log(poema);

// =======================================================
linha();

// A propriedade length serve para nos informar o tamanho de uma string.
const palavra="Alura";
console.log(`A palavra "Alura" tem ${palavra.length} caracteres.`);

// =======================================================
linha();

// Com o método charAt() conseguimos acessar um caractere de uma string. 
// Lembre-se que, por baixo dos panos, strings são arrays de caracteres, 
// e em cada posição temos o caractere que compõe a string.
console.log(`A posição 3 da String com valor "alura" tem o conteúdo "${palavra.charAt(3)}".`) //r

// outra forma de efetuar a mesma operação:
console.log(`A posição 3 da String com valor "alura" tem o conteúdo "${palavra[3]}".`) //r

// =======================================================
linha();

// Para saber qual a posição de um caractere dentro da string.
console.log(`O "a" da palavra "${palavra}" está na posição ${palavra.indexOf("a")} da String.`) //4

//Atenção! Se o caractere que se busca na string for encontrado em mais de uma posição, será retornada somente a primeira ocorrência!
const palavraDivertidamente="Divertidamente"
console.log(`Mesmo havendo dois "e" na palavra "${palavraDivertidamente}", somente a primeira posição será retornada: ${palavraDivertidamente.indexOf("e")}!!!`) //3

// O resultado da execução do indexOf() é um valor numérico.

// =======================================================
linha();

console.log(`A palavra ${palavra} com .toUpperCase() vira ${palavra.toUpperCase()}.`) //ALURA
console.log(`A palavra ${palavra} com .toLowerCase() vira ${palavra.toLowerCase()}.`) //alura

// =======================================================
linha();

// Outra função muito interessante é a substr() (substring), que permite 
// que façamos a extração de parte de uma string, conforme o código abaixo:

let frase= "Mergulhando em tecnologia."
console.log(`A String com o conteúdo "${frase}" utilizando o .substr(0,11) retorna apenas "${frase.substr(0,11)}".`) // Mergulhando

// O resultado da execução do métodosubstr() é uma nova string .

// =======================================================
linha();

// Podemos utilizar também o método slice(), que usamos com arrays. 
// Ele é similar ao substring() e retornará parte de uma string, desde 
// que passemos nos parâmetros o índice de início e de fim. Veja abaixo:

let fraseDois= "Mergulhando em tecnologia."
console.log(`A String com o conteúdo "${fraseDois}" utilizando o .slice(0,11) retorna apenas "${fraseDois.slice(0,11)}".`)

// O resultado da execução do método slice() é uma nova string .

// =======================================================
linha();

// Com a função replace() temos a possibilidade de substituir parte de uma string por outra. 
let nomeTres = "André";
let comunicacao = "Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",  nomeTres));

// =======================================================
linha();

// O método concat() é uma opção para concatenar strings sem a utilização do operador de adição (+).
let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."));

// =======================================================
linha();

// O método split() é bem interessante, pois com ele conseguimos quebrar uma string com base 
// em caracteres separadores que vamos informar para o método como parâmetro.

let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens);

// O resultado da execução do método split() é um array de strings.

// =======================================================
linha();

// O trim() remove os espaços em branco no início ou fim de uma string.
let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(`A String com valor "${login}" usando o .trim() retorna "${loginSemEspaco}".`); //andre@emailteste.com

// Variações: trimEnd(),trimStart(),trimLeft() e trimRight()