/* WAY FINANCE DESTAQUE */
document.addEventListener("DOMContentLoaded", function () {
    // Seletor para todas as classes desejadas (substitua ".pagina-way" pelos seus seletores)
    var elements = document.querySelectorAll(".highligth");
    var elements = document.querySelectorAll(".highligth-finance");

    // Itera sobre cada elemento e adiciona a classe "active"
    elements.forEach(function (element) {
        element.classList.add("active");
    });
});