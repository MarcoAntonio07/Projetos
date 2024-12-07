        //ANOTAÇÕES

//variaveis: Var, Let, Const
//DataTypes: String "texto", Number 24, Boolean True and False
//Concatenação / Tamplate String: ${variável}


//ARRAY e OBJETOS//

//ARRAY  = Variável que guarda varios Elementos
/*
let ingredientes = ["agua", "massa", "corante"]
console.log(ingredientes[2]) //A contagem sempre começa em 0


//OBJETO = lista de propriedades de um determinado Objeto

let personagem = {
    nome: "Marco",
    idade: 24,
    sexo: "Masculino" //nomes de propriedades devem ser definidas com letras minusculas e sem caracteres especiais
}


//FUNÇÕES//

function somar(a, b) {
    let resultado = a + b // Processo
    return resultado //Output retornado
}

let x = somar(2, 4) //Inputs mandados para a função
console.log(`${x}`)
let m = somar(24, 48)
console.log(`${m}`)


//ARROW FUNCTION//

let somar2 = (a, b) => {
    let resultado = a + b // Processo
    return resultado //Output retornado
}


//CONDICIONAIS//

let idade = 18

if (idade >= 18) {
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}



//LAÇOS DE REPETIÇÃO//

let lista = [10, 20, 30, 40, 50]

for (let pos = 0; pos <= lista.indexOf(50); pos++) {
    console.log(pos)
}



//EVENTOS//

1º Exemplo

//FUNÇÂO a ser chamada
function avisar() {
    alert("Opa, botão clicado")
}

//VARIAVEL que armazena o elemento BUTTON pelo seu ID
let botao = document.querySelector("#botao");

//Chama e define o evento que será disparado e define qual será a ação após o disparo do evendo, no caso rodar a função (avisar)
botao.addEventListener("click", avisar)



2º Exemplo

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
    console.log("apertou no campo USD")
})

brlInput.addEventListener("keyup", () => {
    console.log(brlInput.value)
})

*/
