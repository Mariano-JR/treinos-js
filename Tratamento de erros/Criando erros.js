//Objeto Error: ]
new Error(message, fileName, lineNumber) // todos os parametros são opcionais
//fileName e lineNumber não são padrões e podem não funcionar em todos os navegadores
const MeuErro = new Error('Mensagem Invalida'); //parametro de criação de um novo Error
MeuErro.name = 'InvalidMessage'; //Um Erro tambem pode ter um nome

throw MeuErro; //lançamento do erro no console