////////////////////////////////////////////////////////////////////////////////////
/* Pop-up de anotações */
window.addEventListener("DOMContentLoaded", () => {
  // Obter todas as notas
  document.querySelectorAll(".note").forEach((note, index) => {
    const noteContent = note.dataset.note;
    const noteNumber = index + 1; // Usar o índice para gerar o número da nota (1, 2, 3...)

    // Adicionar o número da nota como data-note-number
    note.setAttribute("data-note-number", noteNumber);

    // Inserir conteúdo no footer
    const footer = document.querySelector(".footer");
    const footerNote = document.createElement("div");
    footerNote.classList.add("footer-note");

    footerNote.innerHTML = `<span class="note-number">${noteNumber}</span> ${noteContent} 
        <a href="#note-${noteNumber}" class="back-to-note">↩</a>`; // Link clicável
    footer.appendChild(footerNote);

    // Adicionar ID à nota para permitir o link de retorno
    note.setAttribute("id", `note-${noteNumber}`);

    // Criar pop-up (opcional)
    note.addEventListener("click", function (event) {
      if (document.querySelector(".popup")) return; // Não criar novo popup se já existir

      const popup = document.createElement("div");
      popup.classList.add("popup");

      const popupText = document.createElement("div");
      popupText.innerHTML = noteContent;

      const closeButton = document.createElement("span");
      closeButton.classList.add("close");
      closeButton.innerHTML = "X";
      closeButton.onclick = () => popup.remove();

      popup.appendChild(popupText);
      popup.appendChild(closeButton);
      document.body.appendChild(popup);

      popup.style.display = "block";
     popup.style.left = `${event.pageX - popup.offsetWidth / 2}px`; // Centraliza horizontalmente
popup.style.top = `${event.pageY - 50}px`; // Desloca 50px para cima (ajuste conforme necessário)
      
      // Fechar pop-up ao clicar fora dela
      document.addEventListener("click", function closePopup(event) {
        if (!popup.contains(event.target) && !note.contains(event.target)) {
          popup.remove();
          document.removeEventListener("click", closePopup); // Remover o ouvinte de evento
        }
      });
    });
  });
});

// Seleciona o botão de fechamento do pop-up e adiciona um evento de clique para fechá-lo
document.querySelector(".popup .close").addEventListener("click", function () {
  // Esconde o pop-up quando o botão de fechamento é clicado
  document.getElementById("popup").style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////
/* Adiciona HTML dentro de HTML - Header e Footer Master */
$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = "/lib/" + $(this).data("include") + ".txt";
    $(this).load(file);
  });
});
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
/* Dark Mode */
$(".inner-switch").on("click", function () {
  $("body").toggleClass("dark");
  if ($("body").hasClass("dark")) {
    $(".inner-switch").text("🌞");
  } else {
    $(".inner-switch").text("🌚");
  }
});
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
/* Acordeão */
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
/* Filtro de categoria no blog */
function filtrarCategoria(categoria) {
  // Se for "todos", exibir tudo
  if (categoria === "todos") {
    document.querySelectorAll(".item").forEach((item) => {
      item.style.display = "block";
    });
    return;
  }

  // Oculta todos os itens
  document.querySelectorAll(".item").forEach((item) => {
    item.style.display = "none";
  });

  // Exibe apenas os itens da categoria selecionada
  document.querySelectorAll(`[data-categoria="${categoria}"]`).forEach((item) => {
    item.style.display = "block";
  });
}













