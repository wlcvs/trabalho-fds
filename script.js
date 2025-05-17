let contador = 0;

/*

Se o botão já tiver sido pressionado nada irá acontencer.

*/

function exibeMensagem() {
  if (contador == 0 ) {
    const botao = document.getElementById("botao");
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Foque apenas em sua arte (essa é minha filosofia de vida!).";
    novoParagrafo.classList.add("novoParagrafo");
    botao.insertAdjacentElement("afterend", novoParagrafo);

    contador++;
  } 
} 