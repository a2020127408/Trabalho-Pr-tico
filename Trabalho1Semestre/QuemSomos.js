function openCity(evt, cityName) {
  //Declarar as variáveis
  var i, tabcontent, tablinks;

  //Esconder todos os elementos com class="tabcontent"
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //Remover a classe "active" de todos os elementos com class="tablinks"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //Mostrar a tab atual e adiciona a classe "active" ao botão que abriu a tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

}


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}