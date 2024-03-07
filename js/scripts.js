/*

var valorDoCampo = jQuery("#idadeUsuario").val();

*/

function verificarIdade(){

	console.log("Início função");

	var idade = jQuery("#idadeUsuario").val();

	if(idade>=18){
		jQuery("#retornoConsulta").html(`Você é maior de idade!`);
	}if(idade<18){
		jQuery("#retornoConsulta").html(`Você é MENOR de idade!`);
	}

	console.log("Fim função");

}  
