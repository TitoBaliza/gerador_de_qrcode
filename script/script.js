// formulario de login pagina index

function logar() {

  let login = document.getElementById('login').value;
  let senha = document.getElementById('senha').value;
  let mensagemErro = document.querySelector(".erro");

  if (login == "admin" && senha == "admin") {

    window.location.href = "qrcode.html";

  } else {
    mensagemErro = mensagemErro.innerHTML = "Login ou Senha Incorretos use> usuário: admin e senha:admin";
  }
};

// Gera QR Code pagina Qrcode


const input = document.getElementById("capturaTexto");
const qrcode = document.getElementById("qrcode");
const erroEspaco = document.getElementById("erroEspaco");
const imagem_Qrcode = document.getElementById("imagem_Qrcode");
const campoVasio = document.getElementById("campoVasio");


document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let vasio = input.value.length;
    if (input.value.indexOf(" ") == -1 && vasio > 0 ) {
      imagem_Qrcode.style.display = "none";
      erroEspaco.style.display = "none";
      campoVasio.style.display = "none";
      qrcode.style.display = "block";
       genQRCode();
    } else if(vasio == 0){
      qrcode.style.display = "none";
      campoVasio.style.display = "block";
      imagem_Qrcode.style.display = "block";
      erroEspaco.style.display = "none";
        }else{
      campoVasio.style.display = "none";
      qrcode.style.display = "none";
      imagem_Qrcode.style.display = "block";
      erroEspaco.style.display = "block";
    }
  }
});

function genQRCode() {
  if (!input.value) return;

  qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input.value}`;
};

