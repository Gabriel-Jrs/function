// calc: ENTRDAS; operandos operaçao/ prosesso: a partir da operaçao realizar o calculo e armazenar/SAIDA: resultado

function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    if(b!=0){
        return a / b
    }else{
        alert("ERR0R! Divisão por zero")
        return 
    }
    
}

function operacao(num1, num2, op) {
    let res
    switch (op) {
        case "1":
            res = soma(num1, num2)
            break
        case "2":
            res = subtracao(num1, num2)
            break
        case "3":
            res = multiplicacao(num1, num2)
            break
        case "4":
            res = divisao(num1, num2)
            break
    }
    return res
}

function menu() {
    let escolha = 0
    do {
        escolha = prompt(`
        1 - Soma
        2 - Subtração
        3 - Multiplicação
        4 - Divisão 
        0 - Sair`)

        if (escolha >= "1" && escolha <= "4") {
            let n1 = parseFloat(prompt("Digite um número"))
            let n2 = parseFloat(prompt("Digite outro número"))
            let resultado = operacao(n1, n2, escolha)
            if(resultado){
                alert("O resultado foi: " + resultado)
            }
           
        }

    } while (escolha != "0")
}

menu()
