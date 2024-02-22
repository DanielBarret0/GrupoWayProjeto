document.addEventListener("DOMContentLoaded", function () {
    var botaoVoltarAoTopoMed = document.querySelector(".voltar-ao-topo-med");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            document.body.classList.add("rolado-med");
        } else {
            document.body.classList.remove("rolado-med");
        }
    });

    botaoVoltarAoTopoMed.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
