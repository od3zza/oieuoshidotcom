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
function filtrarCategoria(categoria) {
            // Se for "todos", exibir tudo
            if (categoria === "todos") {
                document.querySelectorAll('.item').forEach(item => {
                    item.style.display = 'block';
                });
                return;
            }
            
            // Oculta todos os itens
            document.querySelectorAll('.item').forEach(item => {
                item.style.display = 'none';
            });
            
            // Exibe apenas os itens da categoria selecionada
            document.querySelectorAll(`[data-categoria="${categoria}"]`).forEach(item => {
                item.style.display = 'block';
            });
        }
        
        function atualizarContadores() {
            document.getElementById('contos-count').textContent = document.querySelectorAll('[data-categoria="contos"]').length;
            document.getElementById('poesias-count').textContent = document.querySelectorAll('[data-categoria="poesias"]').length;
           document.getElementById('criticas-count').textContent = document.querySelectorAll('[data-categoria="criticas"]').length;
        }
        
        atualizarContadores();



/////////////////////



