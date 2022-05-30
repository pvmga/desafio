function formulario(formulario) {
    if (formulario == "clientes") {
        let div1 = document.getElementById("produtos");
        div1.setAttribute("hidden", "hidden");

        let div2 = document.getElementById("pedidos");
        div2.setAttribute("hidden", "hidden");

        let div3 = document.getElementById("clientes");
        div3.removeAttribute("hidden", "hidden");

    } else if (formulario == "produtos") {
        let div1 = document.getElementById("clientes");
        div1.setAttribute("hidden", "hidden");

        let div2 = document.getElementById("pedidos");
        div2.setAttribute("hidden", "hidden");

        let div3 = document.getElementById("produtos");
        div3.removeAttribute("hidden", "hidden");
    } else {

        let div1 = document.getElementById("clientes");
        div1.setAttribute("hidden", "hidden");

        let div2 = document.getElementById("produtos");
        div2.setAttribute("hidden", "hidden");

        let div3 = document.getElementById("pedidos");
        div3.removeAttribute("hidden", "hidden");

    }

}