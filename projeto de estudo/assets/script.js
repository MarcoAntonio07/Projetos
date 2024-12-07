// Declaração das variáveis
let dolar = 5.1;

let usdInput = document.querySelector("#usd"); // Seleciona o input do dólar
let brlInput = document.querySelector("#brl"); // Seleciona o input do real

// Adiciona event listener para o input do dólar
usdInput.addEventListener("keyup", () => {
    // Chama a função de conversão do dólar para real
    convert("usd-to-brl");
});

// Adiciona event listener para o input do real
brlInput.addEventListener("keyup", () => {
    // Chama a função de conversão do real para dólar
    convert("brl-to-usd");
});

// Adiciona event listener para o blur do input do dólar
usdInput.addEventListener("blur", () => {
    // Formata o valor do dólar
    usdInput.value = formatCurrency(usdInput.value);
});

// Adiciona event listener para o blur do input do real
brlInput.addEventListener("blur", () => {
    // Formata o valor do real
    brlInput.value = formatCurrency(brlInput.value);
});

// Define um valor inicial para o input do dólar e converte
usdInput.value = "1000,00";
convert("usd-to-brl");

// Funções

// Formata o valor para o padrão brasileiro (com vírgula e duas casas decimais)
function formatCurrency(value) {
    // Corrige o valor, substituindo vírgula por ponto e convertendo para número
    let fixedValue = fixValue(value);

    // Configura as opções de formatação
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    };

    // Cria um formatador de números
    let formatter = new Intl.NumberFormat("pt-BR", options);

    // Formata o valor e retorna
    return formatter.format(fixedValue);
}

// Corrige o valor, substituindo vírgula por ponto e convertendo para número
function fixValue(value) {
    let fixedValue = value.replace(",", "."); // Substitui a vírgula pelo ponto
    let floatValue = parseFloat(fixedValue); // Converte para número

    // Verifica se o valor é válido
    if (floatValue == NaN) {
        floatValue = 0;
    }

    return floatValue;
}

// Converte valores entre dólar e real
function convert(type) {
    if (type == "usd-to-brl") {
        // Pega o valor do dólar, corrige e converte para real
        let fixedValue = fixValue(usdInput.value);
        let result = fixedValue * dolar;
        result = result.toFixed(2);

        // Formata e atribui o resultado ao input do real
        brlInput.value = formatCurrency(result);
    }

    if (type == "brl-to-usd") {
        // Pega o valor do real, corrige e converte para dólar
        let fixedValue = fixValue(brlInput.value);
        let result = fixedValue / dolar;
        result = result.toFixed(2);

        // Formata e atribui o resultado ao input do dólar
        usdInput.value = formatCurrency(result);
    }
}