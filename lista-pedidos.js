var jubilauDoStorage = localStorage.getItem("jubilau");
var jubilauObjeto = JSON.parse(jubilauDoStorage);
preencherTabela() /* preencherTabela recebe uma função chamada verificar com um parametro*/
    function verificar(num){//verificar me diz que jubilauObjeto é igual a um filter que vai utilizar uma condição
      jubilauObjeto = jubilauObjeto.filter(function(element,index){
        if (index!=num){//se o valor index do jubilauObjeto for diferente do valor ele me retorna true 
          return true
        } else{
          return false
        }
      })/* função filter para filtrar os index usando o if para comparação de dados */
      localStorage.setItem("jubilau", JSON.stringify(jubilauObjeto))/* depois do filtro ele insere os dados do jubilau no localStorage*/ 
      preencherTabela()
      console.log(jubilauObjeto)

    }

    function preencherTabela(){ //declarando a função preencherTabela
      document.getElementById("corpo").innerHTML=""
      jubilauObjeto.forEach(function (element, index) {//forEach me tras dois valores (element e index)  
      console.log(element)
      document.getElementById("corpo").innerHTML+='<tr>'+ 
                        '<th scope="row">'+ (index+1) +'</th>'+
                        '<td>'+element.nome +'</td>'+
                        '<td>'+ element.endereco +'</td>'+
                        '<td>'+ element.telefone +'</td>'+
                        '<td>'+ element.sabor +'</td>'+
                        '<td>'+ element.valor +'</td>'+
                        '<td><button onclick="verificar('+index+')" type="button" class="btn btn-secondary">click</button></td>'
                        /* na função onclick eu inseri um botao que ao rodar a função verificar, ele me dá o valor do index(indice)
                        como ele vai acabar sendo igual ao valor de num pq o meu parametro passa a ser o mesmo index, ele passa a 
                        retornar o valor de false na validação do "if" o que o apaga da minha lista de cadastro (apenas os que eu clicar)
                         
                        */
                      '</tr>'/*usando o innerHTML para replicar os codigos HTML corfome for Replicado com forEach respeitando
                      a semantica entre string, variavel e formula*/

    });
    }