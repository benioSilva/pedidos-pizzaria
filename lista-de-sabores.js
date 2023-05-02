// var saboresStorage = localStorage.getItem("sabores");
// var saboresObjetos = JSON.parse(saboresStorage);

// var valoresStorage = localStorage.getItem("valores")
// var valoresObjetos = JSON.parse(valoresStorage)

// var listaSabores = document.getElementById("saboresPizza").querySelectorAll("li")
// console.log(listaSabores)
// var listaSaboresNome = {
//     1: listaSabores[0].innerHTML,
//     2: listaSabores[1].innerHTML,
//     3: listaSabores[2].innerHTML, 
//     4: listaSabores[3].innerHTML,
//     5: listaSabores[4].innerHTML,
//     6: listaSabores[5].innerHTML,
//     7: listaSabores[6].innerHTML,
//     8: listaSabores[7].innerHTML,
//     9: listaSabores[8].innerHTML,
// }
// console.log(listaSaboresNome)
// localStorage.setItem("sabores", JSON.stringify(listaSaboresNome))

// var listaValores = document.getElementById("valoresPizza").querySelectorAll("li");
// console.log(listaValores)
// var listaValoresValor = {
//     1: listaValores[0].innerHTML,
//     2: listaValores[1].innerHTML,
//     3: listaValores[2].innerHTML,
//     4: listaValores[3].innerHTML,
//     5: listaValores[4].innerHTML,
//     6: listaValores[5].innerHTML,
//     7: listaValores[6].innerHTML,
//     8: listaValores[7].innerHTML,
//     9: listaValores[8].innerHTML,
// }
// console.log(listaValoresValor)
// localStorage.setItem("valores", JSON.stringify(listaValoresValor))
var formularioSaboresStorage = localStorage.getItem("formularioSabores");
var formularioSaboresObjeto = JSON.parse(formularioSaboresStorage);

valorTabela()
 function comparacao(parametro1) {
    formularioSaboresObjeto = formularioSaboresObjeto.filter(function (element, index) {
         if (index != parametro1) {
             return true
         } else {
             return false
         }
     })
     localStorage.setItem("formularioSabores", JSON.stringify(formularioSaboresObjeto))
     valorTabela()
 }
 function valorTabela() {
     document.getElementById("inserirTabela").innerHTML = ""
     formularioSaboresObjeto.forEach(function (element, index) {
         console.log(element)
         document.getElementById("inserirTabela").innerHTML += '<tr>' +
             '<th scope="row">' + (index + 1) + '</th>'
         '<td>' + element.sabor2 + '</td>' +
             '<td>' + element.valor2 + '</td>' +
             '<td><button onclick="comparacao(' + index + ')" type="button">clique</button></td>'
     });
 }


