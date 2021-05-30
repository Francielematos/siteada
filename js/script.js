var nome = document.getElementById("nome");
var email = document.getElementById("email");
var number = document.getElementById("number");

document.getElementById("myBtn").addEventListener("click", validaFormulario);

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("number").value != "")
  {
    alert("Tudo certo! Logo você receberá mais informações sobre as mulheres que fizeram história na tecnologia")
    }else{
    alert("Por favor, preencha todos os campos antes de clicar em enviar")
  }
}
