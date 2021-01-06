function openPage(evt, pageName) {
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
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";

}