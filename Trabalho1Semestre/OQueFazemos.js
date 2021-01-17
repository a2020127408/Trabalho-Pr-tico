function programas(pageName) {

    var i, texto;

    texto = document.getElementsByClassName("texto");
    for (i = 0; i < texto.length; i++) {
        texto[i].style.display = "none";
    }

    document.getElementById(pageName).style.display = "block";

}
