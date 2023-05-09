//class: modelo da entidade/objto

class contaBancaria{

    constructor(agencia, numeroConta, saldo, limite){
        this.agencia = agencia
        this.numeroConta = numeroConta
        this.saldo = saldo
        this.limite = limite
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        this.saldo -= valor
    }

    consultaSaldo(){
        return this.saldo
    }
}

c1 = new contaBancaria(42, 1337, 5000, 10000)

console.log(c1.consultaSaldo())

c1.depositar(3000)

console.log(c1.consultaSaldo())

