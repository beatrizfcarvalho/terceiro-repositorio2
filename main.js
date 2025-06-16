const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent - tamanhoSenha;

const botoes = document.querySelectorAll(".parametro-senha_botao");

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

fuction diminuiTamanho() {
  if  (tamanhoSenha = tamanhoSenha > 1) {
    numeroSenha = numeroSenha -1;
  }
    numeroSenha.textContent = tamanhoSenha;
}

fuction aumentaTamanho() {
    if  (tamanhoSenha = tamanhoSenha < 20){
    tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}