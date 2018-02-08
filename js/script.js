//aqui inicia as configurações do modal
 setTimeout(ApresentaModal, 5);
    function ApresentaModal(){
    var modal = document.querySelector(".modal");
	    if(modal != null){// se existir a classe modal na pagina ele aparece, caso contrario não
	      document.querySelector(".modal").style.display = "block";
	      document
	        .querySelector(".modal a")
	        .addEventListener("click", function(){
	          document.querySelector(".modal").style.display = "none";
	        });// seleciona o link d modal, e ao clicar nele, o style é mudado para none
	    }
    }
	if (document.forms["modal_form"]!= undefined) {
		//validação	do modal
		var form = document.forms["modal_form"]; //joga a nome modal_form na variavel form
		form.addEventListener("submit", validarFormModal);//ver o evendo no form e aciona a função validaFormModal ao clicar
		form.email.addEventListener("keyup", function(){
			form.email.className = "";
			document.querySelector("span.nao_valido").style.display = "none";
		});// zera os campos assim que começa a digitar novamente
	};   
	//função para validar modal
	function validarFormModal(evt){
		var form = document.forms["modal_form"];//joga a nome modal_form na variavel form
		var inputEmail = form.email; //joga o imput que tem o nome email na variavel InputEmail
		var valorEmail = form.email.value;//joga o  valor que tem no imput email na variavel valorEmail
		var posicaoArroba = valorEmail.indexOf("@"); // verifica a posição que se enconta o @ e coloca na variavel posicaoArroba
		//   verifica se o email é != de vasio
		//	 verifica de o @ vem depois de 3 letras no minimo
		//   verifica se depois do @ tem um .
		if(!validarEmail(valorEmail)){
			inputEmail.className = "nao_valido";
			document.querySelector("span.nao_valido").style.display = "block";
			evt.preventDefault();
		}
	}
	//aqui termina as configurações do modal

	//validação fale-conosco
	if( document.forms["form_contato"] != undefined ){
    var form = document.forms["form_contato"];
    
    form.addEventListener("submit", function(evt){
        
        var formValido = true;
        
        if(!NaoVazio(form.nome_completo.value)){
            form.nome_completo.className = "nao_valido";
            formValido = false;
        }
        
        if(!NaoVazio(form.telefone.value)){
            form.telefone.className = "nao_valido";
            formValido = false;
        }
        
        if(!NaoVazio(form.menssagem.value)){
            form.menssagem.className = "nao_valido";
            formValido = false;
        }
        
        if(!validarEmail(form.email.value)){
            form.email.className = "nao_valido";
            formValido = false;
        }
        
        
        if(!formValido){
            evt.preventDefault();
        }
        
    });

	var inputs = document.querySelectorAll("form[name=form_contato] input[type=text]");
	for(var i=0; i < inputs.length; i++){
		inputs[i].addEventListener("keyup",function(){
			this.className = "";
			
		});
	}
	var textarea = document.querySelector("form[name=form_contato] textarea");
	textarea.addEventListener("keyup", function(){
		this.className = "";
		document.querySelector(".texto").innerHTML = this.value.length + "/500" ;
	});
}
		
		

//funções
function validarEmail(valorEmail){
	if(valorEmail != "" && valorEmail.indexOf("@") > 3 && valorEmail.lastIndexOf(".") > posicaoArroba){
			return true;
	}else{
			return false;
	}	
}
function NaoVazio(texto){
    if(texto.trim().length > 0){
        return true;
    }else{
        return false;
    }
}