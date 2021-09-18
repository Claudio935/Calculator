

var digitar1=""
var digitar=""
var operacao=0;
var calc;
var result=0
function toType(n){
  
  valor = document.getElementById(n).getAttribute("id");
  if(!isNaN(valor)||valor=="."){
    document.getElementsByClassName("equacao")[0].innerText += valor
   }
   
    
   
  
  if(operacao==0){
    if(!isNaN(valor)|| valor=="."){
    digitar+=valor
    document.getElementsByClassName("resultado")[0].innerText = ""
    
    
    }else {
      operacao+=1
      switch(valor){
        case "soma":
          document.getElementsByClassName("equacao")[0].innerText += "+"
          calc=1
          break
        case "menos":
          document.getElementsByClassName("equacao")[0].innerText += "-"
          calc=2
          break
        case "dividi":
          document.getElementsByClassName("equacao")[0].innerText += "/"
          calc=3
          break
        case "vezes":
          document.getElementsByClassName("equacao")[0].innerText += "*"
          calc=4
          break
        case "C":
          document.getElementsByClassName("resultado")[0].innerText =""
          document.getElementsByClassName("equacao")[0].innerText = ""
          calc=0
          operacao=0
          digitar=0
          break
          case "Ce":
            document.getElementsByClassName("resultado")[0].innerText =""
              document.getElementsByClassName("equacao")[0].innerText = ""
              
              break
        
      }
       
    }}
  else if(operacao==1){
    if(!isNaN(valor)|| valor=="."){
      digitar1+=valor
    
    }
      else{
        switch(calc){
          case 1:
           digitar = parseFloat(digitar)+parseFloat(digitar1)
            calc=0
            operacao=1
            digitar1=""
            console.log(digitar)
            
            break
          case 2:
            digitar = parseFloat(digitar)- parseFloat(digitar1)
            console.log(digitar)
            operacao=1
            calc=0
            digitar1=""
            break
          case 3:
            digitar = parseFloat(digitar)/ parseFloat(digitar1)
            console.log(digitar)
            operacao=1
            calc=0
            digitar1=""
            break
          case 4:
            digitar = parseFloat(digitar)* parseFloat(digitar1)
            console.log(digitar)
            operacao=1
            calc=0
            digitar1=""
            break
        }
      }
      

  }
 if (calc==0 && operacao==1){
  switch(valor){
    case "soma":
      document.getElementsByClassName("equacao")[0].innerText += "+"
      calc=1
      break
    case "menos":
      document.getElementsByClassName("equacao")[0].innerText += "-"
      calc=2
      break
    case "dividi":
      document.getElementsByClassName("equacao")[0].innerText += "/"
      calc=3
      break
    case "vezes":
      document.getElementsByClassName("equacao")[0].innerText += "*"
      calc=4
      break
    case "equals":
      document.getElementsByClassName("resultado")[0].innerText = digitar
      document.getElementsByClassName("equacao")[0].innerText = ""
      
      break
      case "C":
        document.getElementsByClassName("resultado")[0].innerText =""
          document.getElementsByClassName("equacao")[0].innerText = ""
          calc=0
          operacao=0
          digitar=0
          break
          case "Ce":
            document.getElementsByClassName("resultado")[0].innerText =""
              document.getElementsByClassName("equacao")[0].innerText = ""
              
              break
  }
 }
 if(isNaN(document.getElementsByClassName("resultado")[0].innerText)){
  document.getElementsByClassName("resultado")[0].innerText= "Erro"
  calc=0
  operacao=0
  digitar=0
 }
  }