//DOM (Document Object Model): O DOM HTML é um padrão de como acessar e modificar os elementos HTML de uma pagina.

//DOM vs BOM(Browser Object Model): BOM é tudo que esta dentro do objeto window do navegador.


/*Metodos de manipulação:
document.getElementById('titulo');  // busca elemento pelo ID
document.getElementsByTagName('li'); // busca elemento pelo Tag como array
document.getElementsByClassName('textos'); // busca pelo elemento Class, tambem pode retornar um array
document.querySelectorAll('.primeira-classe .segunda-classe'); // "." representa classe, "#" representa ID
document.querySelectorAll('li .opcao'); //combinação de tipos de busca com query
document.createElement(element); // Cria um novo elemento HTML
document.removeChild(element); // Remove um elemento
document.appendChild(element); //Adiciona um elemento dentro de outro elemento
document.replaceChild(new, old); // Subistitui o elemento */

/*Manipulação de estilos:
classList.add("novo-estilo"); // Adiciona a classe "meu estilo"
classList.remove("classe"); // Remove a classe "classe"
classList.toggle("dark-mode"); //Adiciona a classe "dark-mode" caso ela não faça parte da lista, e remove ela caso faça parte. 
document.getElementsByTagName("p").style.color = "blue"; //Seleciona os paragrafos e altera a cor para azul. */

/*Eventos:
Eventos de mouse: mouseover(mouse em cima do evento), mouseout(mouse quando sai do evento);
Eventos de click: click(Evento de click), dbclick(Evento de click duplo);
Eventos de atualização: Change, load;

const botao = document.getElementById("meuBotao");
botao.addEventListener("click", outraFuncao);
//Cria um evento de diretamente pelo JS no momento que o usuario realizar determinada ação .*/