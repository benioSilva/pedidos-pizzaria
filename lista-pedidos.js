var infoDoStorage = localStorage.getItem("info");
var infoObjeto = JSON.parse(infoDoStorage);
preencherTabela() 

    function verificar(num){//verificar me diz que jubilauObjeto é igual a um filter que vai utilizar uma condição
      infoObjeto = infoObjeto.filter(function(element,index){
        if (index!=num){//se o valor index do jubilauObjeto for diferente do valor ele me retorna true 
          return true
        } else{
          return false
        }
      })/* função filter para filtrar os index usando o if para comparação de dados */
      localStorage.setItem("info", JSON.stringify(infoObjeto))/* depois do filtro ele insere os dados do jubilau no localStorage*/ 
      preencherTabela()
      console.log(infoObjeto)

    }
    // var confirmar = document.getElementById("confirmar")
                      
    //                     confirmar.addEventListener("click", function(event){
    //                      event.preventDefault();
                         
 
    //                      document.getElementById("troca").innerHTML = "Pedido Entregue"
                         
    //                   });
    
    // let confirmacaoEntrega = document.getElementById("confirmar");
    // confirmacaoEntrega.addEventListener('click', StatusEntregue())
    
    // let confirmar = document.getElementById("confirmar");
    //                   confirmar.addEventListener('click', trocarStatus())
                       
                        
    //                     function trocarStatus (){
    //                       document.getElementById("trocar").innerHTML="Pedido Entregue"
    //                     }
    
        
      function confirmarEntrega(index){
        console.log(index)
        infoObjeto[index].status="Pedido Entregue"
        preencherTabela()
        localStorage.setItem("info", JSON.stringify(infoObjeto))
      }
                       
  

    function preencherTabela(){ //declarando a função preencherTabela
      document.getElementById("corpo1").innerHTML=""
      infoObjeto.forEach(function (element, index) {//forEach me tras dois valores (element e index)  
      console.log(element)
      document.getElementById("corpo1").innerHTML+='<tr>'+ 
                        '<th scope="row">'+ (index+1) +'</th>'+
                        '<td>'+element.nome +'</td>'+
                        '<td>'+ element.endereco +'</td>'+
                        '<td>'+ element.telefone +'</td>'+
                        '<td>'+ element.sabor +'</td>'+
                        '<td>'+ element.valor +'</td>'+
                        '<td id="trocar">'+element.status+'</td>'+
                        '<td><button  onclick="confirmarEntrega('+index+')" id="confirmar" type="button">confirmar</button></td>'+
                        //'<td><button onclick="" type="button"> confirmar </td>'+
                        '<td><button onclick="verificar('+index+')" type="button">click</button></td>'
                        /* na função onclick eu inseri um botao que ao rodar a função verificar, ele me dá o valor do index(indice)
                        como ele vai acabar sendo igual ao valor de num pq o meu parametro passa a ser o mesmo index, ele passa a 
                        retornar o valor de false na validação do "if" o que o apaga da minha lista de cadastro (apenas os que eu clicar)
                        */
            
                      '</tr>'
                      
                  


                      
                      
                      
                      /*usando o innerHTML para replicar os codigos HTML corfome for Replicado com forEach respeitando
                      a semantica entre string, variavel e formula*/
                      
                        
                      })
                     

    
  }
   
  
  