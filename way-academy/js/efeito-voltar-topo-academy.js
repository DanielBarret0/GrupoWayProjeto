document.addEventListener("DOMContentLoaded", function () {
    var botaoVoltarAoTopoAcademy = document.querySelector(".voltar-ao-topo-academy");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            document.body.classList.add("rolado-academy");
        } else {
            document.body.classList.remove("rolado-academy");
        }
    });

    botaoVoltarAoTopoAcademy.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
