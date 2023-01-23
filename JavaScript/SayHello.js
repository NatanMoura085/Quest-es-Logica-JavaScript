let pessoa = {
    nome: 'Natan',
    sobrenome: 'moura',
    idade: 23,
    endereço: {
        rua: 'gotham city',
        numero: 150

    }

}
const {nome} = pessoa
let SayHello = () =>{
  
  
    console.log(`Ola bem-vindo ${nome}`)

}
SayHello(pessoa.nome);