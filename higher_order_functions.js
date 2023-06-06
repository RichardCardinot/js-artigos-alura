// higher order functions
// funções de ordem superior

// Uma higher order function é uma função que recebe uma outra como argumento, ou uma função que retorna outra função.

// => função callback (called back function)
const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
}
  
// => função callback (called back function)
const autentica = (cargo) => {
let array = []
for( i = 0; i < cargo; i++){
        array.push(i)
    }
    return true;
 }
  
// => funções de ordem superior (higher order function)
const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
        autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
        autentica(900000)
    }
    return acesso(pessoa.nome)
}

  //  passando para a função "login" os parâmetros esperados: um objeto com as chaves cargo e nome e a função autentica.
  console.log(login({cargo: `diretoria`, nome: `Leia`}, autentica));