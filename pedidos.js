    // var pizzasDoStorage = localStorage.getItem("catalogosDePizzas")
    // var pizzasObjetos = JSON.parse(pizzasDoStorage)
    // var precoDoStorage = localStorage.getItem("precoPizzas")
    // var precoObjetos = JSON.parse(precoDoStorage)

    var nome = document.getElementById("nome");
    var endereco = document.getElementById("endereco");
    var telefone = document.getElementById("telefone"); 
    var enviarSabor = document.getElementById("enviarSabor")
   
  
    var btnEnviar = document.getElementById("btnEnviar");
    var infoDoStorage = localStorage.getItem("info");
    var infoObjeto = JSON.parse(infoDoStorage);
    var formularioSaboresStorage = localStorage.getItem("formularioSabores");
    var formularioSaboresObjeto = JSON.parse(formularioSaboresStorage);
    console.log(formularioSaboresObjeto) 
    selectPizza()
    
   

    function selectPizza (){
      document.getElementById("sabor").innerHTML = ""
      formularioSaboresObjeto.forEach(function(element, index){
        document.getElementById("sabor").innerHTML+=
        '<option  value='+index+'>'+element.sabor2+'</option>'
      })
    }

    btnEnviar.addEventListener("click", function(event){
      event.preventDefault();
      
     
   
  
      var infoDoStorage = localStorage.getItem("info");
      var infoObjeto = JSON.parse(infoDoStorage);  
      
      let dados = {nome: nome.value, endereco: endereco.value, telefone: telefone.value};
      console.log(infoDoStorage)
      if (infoDoStorage == null){    
        const lista = [dados] 
        localStorage.setItem("info", JSON.stringify(lista))
      } else {
        infoObjeto.push(dados)
        localStorage.setItem("info",JSON.stringify(infoObjeto))
      }
      nome.value = "" 
      endereco.value = ""
      telefone.value = ""

      valor.value = ""
    })

     
