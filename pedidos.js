    // var pizzasDoStorage = localStorage.getItem("catalogosDePizzas")
    // var pizzasObjetos = JSON.parse(pizzasDoStorage)
    // var precoDoStorage = localStorage.getItem("precoPizzas")
    // var precoObjetos = JSON.parse(precoDoStorage)

    var nome = document.getElementById("nome");
    var endereco = document.getElementById("endereco");
    var telefone = document.getElementById("telefone"); 
    var sabor = document.getElementById("saborNumero"); 
    var valor = document.getElementById("valor"); 
    var btnEnviar = document.getElementById("btnEnviar");
    var infoDoStorage = localStorage.getItem("info");
    var infoObjeto = JSON.parse(infoDoStorage);
    
    //console.log(jubilauDoStorage)
   // console.log(jubilauObjeto)
    
   
    
    /*if (jubilauDoStorage != null) {
      alert(jubilauObjeto.nome + '\n' + jubilauObjeto.email + '\n' + jubilauObjeto.idade);
    }*/

    btnEnviar.addEventListener("click", function(event){
      event.preventDefault();
      
     
   
  
      var infoDoStorage = localStorage.getItem("info");
      var infoObjeto = JSON.parse(infoDoStorage);  
      
      let dados = {nome: nome.value, endereco: endereco.value, telefone: telefone.value, sabor: sabor.value, valor: valor.value};
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
      sabor.value = ""
      valor.value = ""
    })

     
