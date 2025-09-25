function valordVenda() {
    let valor = []
    let vvenda = parseFloat(prompt("Digite quantas vendas você teve?"))
    for (let i = 0; i < vvenda; i++) {
        valor = parseFloat(prompt(`Digite o valor da venda ${i + 1}:`))
        valor.push(vvenda)
    }
    vendas
    return
}
function vendas()


function desejo(esc) {
    switch (esc) {
        case "1":
            valordVenda(esc)
            break
        case "2":
            vendas(esc)
            break
        case "3":
            dispesas(esc)
            break
        case "4":
            despesas(esc)
            break
    }


}

function menu() {
    let escolha = 0
    do {
        escolha = prompt(`
    1) Inserir Valor de uma Venda
	2) Ver status das vendas do dia (numero de vendas e valor total vendido)
	3) Inserir Valor de uma Despesa 
	4) Ver total de despesas do dia
	5) Encerrar `)

        if (escolha >= "1" && escolha <= "4") {
            desejo = (escolha)

        }

    } while (escolha != "5")
}
menu()
