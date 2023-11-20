function saldoDeVitorias(nome, vitorias, derrotas){
    let saldoDeVitorias = vitorias - derrotas
    let nivel 
    if (saldoDeVitorias <= 10) {
        nivel = "Ferro"
    }else if (saldoDeVitorias > 10 && saldoDeVitorias <= 20) {
        nivel = "Bronze"
    }else if (saldoDeVitorias > 20 && saldoDeVitorias <= 50) {
        nivel = "Prata"
    }else if (saldoDeVitorias > 50 && saldoDeVitorias <= 80) {
        nivel = "Ouro"
    }else if (saldoDeVitorias > 80 && saldoDeVitorias <= 90) {
        nivel = "Diamante"
    }else if (saldoDeVitorias > 90 && saldoDeVitorias <= 100) {
        nivel = "Lendário"
    }else if (saldoDeVitorias >= 101) {
        nivel = "Imortal"
    }

    console.log("O Herói de nome " + nome + " tem saldo de vitorias " + saldoDeVitorias + " e está no nível " + nivel)

}

saldoDeVitorias("Bernardo", 20, 3)