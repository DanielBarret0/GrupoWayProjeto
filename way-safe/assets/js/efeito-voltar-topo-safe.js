document.addEventListener("DOMContentLoaded", function () {
    var botaoVoltarAoTopoSafe = document.querySelector(".voltar-ao-topo-safe");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            document.body.classList.add("rolado-safe");
        } else {
            document.body.classList.remove("rolado-safe");
        }
    });

    botaoVoltarAoTopoSafe.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
