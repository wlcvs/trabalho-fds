/*

Se o botão já tiver sido pressionado o próximo clique irá remover a mensagem da tela.

*/

function exibeMensagem() {
  const novoParagrafo = document.querySelector(".novoParagrafo");

  if (novoParagrafo == undefined) {
    const botao = document.getElementById("botao");

    const novoParagrafo = document.createElement("p");

    novoParagrafo.innerHTML = "<i>Foque apenas em sua arte ﾒ</i> <strong>(essa é minha filosofia de vida!)</strong>.";
    novoParagrafo.classList.add("novoParagrafo");

    botao.insertAdjacentElement("afterend", novoParagrafo);
  } else {
    novoParagrafo.remove();
  } 
} 