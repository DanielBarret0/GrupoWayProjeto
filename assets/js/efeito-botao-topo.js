document.addEventListener("DOMContentLoaded", function () {
    var botaoVoltarAoTopo = document.querySelector(".voltar-ao-topo");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            document.body.classList.add("rolado");
        } else {
            document.body.classList.remove("rolado");
        }
    });

    botaoVoltarAoTopo.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
