// var precoDoStorage = localStorage.getItem("precoPizzas")
// var precoObjetos = JSON.parse(precoDoStorage)

//  var pizzasDoStorage = localStorage.getItem("catalogosDePizzas")
//  var pizzasObjetos = JSON.parse(pizzasDoStorage)

//  var listaPizza = document.getElementsByClassName("pizzas")
//  console.log(listaPizza)
//  var pizzaNomes = {1: listaPizza[0].innerHTML, 2: listaPizza[1].innerHTML, 3: listaPizza[2].innerHTML, 4: listaPizza[3].innerHTML}
//  console.log(pizzaNomes)

//  localStorage.setItem("catalogoDePizzas", JSON.stringify(pizzaNomes))
 
//  var precoPizza = document.getElementsByClassName("valor")
//  var precoPizzaIndividual = {1: precoPizza[0].innerHTML, 2: precoPizza[1].innerHTML, 3: precoPizza[2].innerHTML, 4: precoPizza[3].innerHTML}
//  console.log(precoPizzaIndividual)

//  localStorage.setItem("precoPizzas", JSON.stringify(precoPizzaIndividual))
 
 var formularioSaboresStorage = localStorage.getItem("formularioSabores");
 var formularioSaboresObjeto = JSON.parse(formularioSaboresStorage);
console.log(formularioSaboresObjeto) 
preencherCardapio()


 function preencherCardapio (){
    document.getElementById("pizzas").innerHTML = ""
    formularioSaboresObjeto.forEach(function (element, index) {
        document.getElementById("pizzas").innerHTML+= '<tr>' +
        '<th scope="row">' + (index + 1) + '</th>' +
        '<td>' + element.sabor2 + '</td>' +
        '<td>' + element.valor2 + ',00' + '</td>' 
    });
 }