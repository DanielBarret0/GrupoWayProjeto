document.addEventListener("DOMContentLoaded", function () {
    var botaoVoltarAoTopoFinance = document.querySelector(".voltar-ao-topo-finance");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            document.body.classList.add("rolado-finance");
        } else {
            document.body.classList.remove("rolado-finance");
        }
    });

    botaoVoltarAoTopoFinance.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
