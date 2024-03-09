
 let textArea= document.querySelector('.text-area');
 let mensagem = document.querySelector('.mensagem');
    
 
    function btnDescriptografar(){
        const textoDescriptografado = descriptografar(textArea.value);
        mensagem.value = textoDescriptografado;
        textArea.value = " ";
        

     }

     function descriptografar(stringdescriptografada){
        let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]]
       stringdescriptografada = stringdescriptografada.toLowerCase()

        for(let i = 0; i < matrizCodigo.length ; i++ ){
            if(stringdescriptografada.includes (matrizCodigo[i][1])){
                stringdescriptografada= stringdescriptografada.replaceAll(matrizCodigo [i][1] , matrizCodigo[i][0]);
            }
        }
        return stringdescriptografada;
    }
  


 function btnCriptografar(){
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = " ";
   

 }
    
   function criptografar(stringCriptografada){
        let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]]
        stringCriptografada = stringCriptografada.toLowerCase()

        for(let i = 0; i < matrizCodigo.length ; i++ ){
            if(stringCriptografada.includes (matrizCodigo[i][0])){
                stringCriptografada= stringCriptografada.replaceAll(matrizCodigo [i][0] , matrizCodigo[i][1]);
            }
        }
        return stringCriptografada;
    }

    function removeBackground() {
        mensagem.style.background = 'white'; 
        mensagem.style.color='#0a3871'
        removeBackground();  
    }
    function copiarConteudo() {
        
        mensagem.select();
        document.execCommand('copy');
        mensagem.setSelectionRange(0, 0);
  
        alert("Conteúdo copiado!");
      }
 
   