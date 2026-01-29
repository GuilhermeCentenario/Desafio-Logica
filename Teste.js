// Interpolação de variaveis

let id = 2
if(id === 3){
	getData()
}
else{
	mainSaveData()
}


function mainSaveData(){
//Função que chama todas as functions (desejadas
 	getData()
    checkValue()
    sendToDataBase()
}

//Função que pega todos os dado
function getData(){
//logica que implementa a ação desejada
	console.log("Pega os dados")
    	if ( 1 < 3){
    	console.log("Número encontrado")
        torrar("pão de forma", "Juvena")
   	}
}

function sendToDataBase(){
// Sempre na function precisa ter apenas uma ação para se quebrar quebrar só um 
	console.log("Envia todos os dados para o BD")
}

function checkValue (){

}

function torrar(pao, nome){
    console.log("Torrada feita com: " + pao)
    console.log("Pedido do: " + nome)
}
