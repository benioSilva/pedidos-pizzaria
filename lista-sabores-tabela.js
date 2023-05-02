var saborInput = document.getElementById("inserirSabor");
var valorInput = document.getElementById("inserirValor");
var botao = document.getElementById("botaoEnviar");
var formularioSaboresStorage = localStorage.getItem("formularioSabores");
var formularioSaboresObjeto = JSON.parse(formularioSaboresStorage);

botao.addEventListener("click", function (event) {
    event.preventDefault();

    var formularioSaboresStorage = localStorage.getItem("formularioSabores");
    var formularioSaboresObjeto = JSON.parse(formularioSaboresStorage);

    let valoresDados = { sabor2: saborInput.value, valor2: valorInput.value};
    console.log(formularioSaboresStorage)
    if (formularioSaboresStorage == null) {
        const lista2 = [valoresDados]

        localStorage.setItem("formularioSabores", JSON.stringify(lista2))
    } else {
        formularioSaboresObjeto.push(valoresDados)
        localStorage.setItem("formularioSabores", JSON.stringify(formularioSaboresObjeto))

    }
    saborInput.value = ""
    valorInput.value = ""
})
