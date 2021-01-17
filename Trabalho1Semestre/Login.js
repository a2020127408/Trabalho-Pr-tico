window.onload = () =>{
    this.sessionStorage.setItem("utilizador","nome");
    this.sessionStorage.setItem("senha","1234");
}
var input = document.getElementsByTagName('input');
login  = document.getElementsByClassName('stress');
var user;
var pass;



function myFunction(){
    if ((input[0].value != "") && (input[1].value != "")) {
        if (((input[0].value == sessionStorage.getItem("utilizador")) && (input[1].value == sessionStorage.getItem("senha"))) ||((document.getElementById("user").value == user) && (document.getElementById("pass").value == pass))) {
           
          location.replace("InfoGeral.html");
            
        }
        else {
            if ((input[0].value != sessionStorage.getItem("utilizador") || (document.getElementById("user").value != user))) {
                input[0].nextElementSibling.textContent = "Utilizador não registado";
                setTimeout(() => {
                    input[0].nextElementSibling.textContent = "";
                }, 2000);
            }
            if ((input[1].value != sessionStorage.getItem("senha")) || (document.getElementById("pass").value != pass)) {
                var c = document.getElementById("alt").childNodes;
                c[6].textContent = "Senha não registada";
                setTimeout(() => {
                c[6].textContent = "";
                }, 2000);
            }
        }
    }else
        if(input[0].value == ""){
            input[0].nextElementSibling.textContent = "Utilizador vazio";
            setTimeout(() => {
                input[0].nextElementSibling.textContent = "";
            }, 2000); 
        }
        if(input[1].value == ""){
            var c = document.getElementById("alt").childNodes;
            c[6].textContent = "Senha vazia";
            setTimeout(() => {
            c[6].textContent = "";
            }, 2000); 
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

function registo(){
 
    if(document.getElementById("user").value == "" ){
        document.getElementById("user").nextElementSibling.textContent = "Utilizador vazio";
                setTimeout(() => {
                    document.getElementById("user").nextElementSibling.textContent = "";
                }, 2000);
    }

    if(document.getElementById("pass").value == "" ){
        document.getElementById("pass").nextElementSibling.textContent = "Senha vazia";
                setTimeout(() => {
                    document.getElementById("pass").nextElementSibling.textContent = "";
                }, 2000);
    }
    
    if(document.getElementById("mail").value == "" ){
        document.getElementById("mail").nextElementSibling.textContent = "E-mail vazio";
                setTimeout(() => {
                    document.getElementById("mail").nextElementSibling.textContent = "";
                }, 2000);
    }

    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
}

function aparecerreg(){
      
      for (var x = 0; x < document.getElementsByClassName("registo").length; x++) {
        document.getElementsByClassName("registo")[x].classList.add("active");
      }

      for (var x = 0; x < document.getElementsByClassName("stress").length; x++) {
        document.getElementsByClassName("stress")[x].classList.remove("active");
      }
}

function aparecer(){

    for (var x = 0; x < document.getElementsByClassName("registo").length; x++) {
        document.getElementsByClassName("registo")[x].classList.remove("active");
      }

      for (var x = 0; x < document.getElementsByClassName("stress").length; x++) {
        document.getElementsByClassName("stress")[x].classList.add("active");
      }
}