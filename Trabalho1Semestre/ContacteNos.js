/*var btnNotaFinal = document.querySelector('#btnSubmicao');
var opcao = document.querySelector('#option');
var txt='';
var situacao = document.querySelector('#situacao');
var msg = document.querySelector('#msg');

//Submição do formulário

btnNotaFinal.addEventListener('click', validaFormulario);

function validaFormulario() {
  if (form.checkValidity()) {
    if (mensagem.value.length < 1) {
      mensagem.setCustomValidity('Introduza a sua mensagem!');
      txt='Inválido';
      return;
    }
    if (option.value.length < 1) {
      option.setCustomValidity('Selecione uma opção!');
      txt='Inválido';
      return;
    }
    txt='Válido';
    setStatus(txt);
  }
  else {
    form.querySelectorAll(':invalid')[0].focus();
  }
}

function setStatus(txt) {
  painelStatus.style.display = 'block';
  if (txt == 'Válido') {
    painelStatus.classList.add('feito');
    situacao.textContent = 'Formulário submetido com sucesso!';
  }
  else {
    painelStatus.classList.add('naoFeito');
    situacao.textContent = 'Impossível submeter o formulário!';
  }
  if (txt != '') {
    msg.style.display = 'inline';
    msg.innerHTML = txt;
  }
  else {
    msg.style.display = 'none';
  }

}*/



const form = document.querySelector('form');
const mensagem = document.querySelector('#message');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  mensagem.classList.add('show');
  setTimeout(() => form.submit(), 2000);
});