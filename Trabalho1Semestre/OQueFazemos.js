window.onload = () =>{
    this.sessionStorage.setItem("utilizador","nome");
    this.sessionStorage.setItem("senha","1234");
}
var input = document.getElementsByTagName('input');
login  = document.getElementsByClassName('stress');



function myFunction(){
    if ((input[1].value != "") && (input[2].value != "")) {
        if ((input[1].value == sessionStorage.getItem("utilizador")) && (input[2].value == sessionStorage.getItem("senha"))) {
           
            for (var x = 0; x < login.length; x++) {
                login[x].style.display = "none";
              }
            document.getElementById("usuario").style.display = "flex";
            
        }
        else {
            if (input[1].value != sessionStorage.getItem("utilizador")) {
                input[1].nextElementSibling.textContent = "Utilizador não registado";
                setTimeout(() => {
                    input[1].nextElementSibling.textContent = "";
                }, 2000);
            }
            if (input[2].value != sessionStorage.getItem("senha")) {
                var c = document.getElementById("alt").childNodes;
                c[7].textContent = "Senha não registada";
                setTimeout(() => {
                c[7].textContent = "";
                }, 2000);
            }
        }
    }
} 

function Logout(){
    document.getElementById("usuario").style.display = "none";
    for (var x = 0; x < login.length; x++) {
        login[x].style.display = "flex";
      }
      input[1].value = "";
      input[2].value = "";
}