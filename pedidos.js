// var pizzasDoStorage = localStorage.getItem("catalogosDePizzas")
// var pizzasObjetos = JSON.parse(pizzasDoStorage)
// var precoDoStorage = localStorage.getItem("precoPizzas")
// var precoObjetos = JSON.parse(precoDoStorage)
function getElementNome (){
  return document.getElementById("nome")
}
// var nome = document.getElementById("nome");
var endereco = document.getElementById("endereco");
var telefone = document.getElementById("telefone");
var sabor = document.getElementById("sabor");
var valor = document.getElementById("valor");
// var status1 = document.getElementById("status");
var btnEnviar = document.getElementById("btnEnviar");
var infoDoStorage = localStorage.getItem("info");
var infoObjeto = JSON.parse(infoDoStorage);
var formularioSaboresStorage = localStorage.getItem("formularioSabores");
var formularioSaboresObjeto = JSON.parse(formularioSaboresStorage);
console.log(formularioSaboresObjeto)
loadselectPizza()



function loadselectPizza() {
  document.getElementById("sabor").innerHTML = ""
  formularioSaboresObjeto.forEach(function (element, index) {
    document.getElementById("sabor").innerHTML +=
      '<option  value=' + index + '>' + element.sabor2 + '</option>'
  })
  document.getElementById("valor").value = formularioSaboresObjeto[0].valor2//fixei o valor do primeiro objeto
}
function onChangeSaborPizza() {
  let saborSelecionadoindex = document.getElementById("sabor").value
  document.getElementById("valor").value = formularioSaboresObjeto[saborSelecionadoindex].valor2


}

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();




  var infoDoStorage = localStorage.getItem("info");
  var infoObjeto = JSON.parse(infoDoStorage);

  let dados = {
    nome: getElementNome().value,
    endereco: endereco.value,
    telefone: telefone.value,
    sabor: formularioSaboresObjeto[sabor.value].sabor2,
    valor: formularioSaboresObjeto[sabor.value].valor2,
    status: "Pendente"
  };
  console.log(infoDoStorage)
  if (infoDoStorage == null) {
    const lista = [dados]
    localStorage.setItem("info", JSON.stringify(lista))
  } else {
    infoObjeto.push(dados)
    localStorage.setItem("info", JSON.stringify(infoObjeto))
  }
  getElementNome().value = ""
  endereco.value = ""
  telefone.value = ""


})


