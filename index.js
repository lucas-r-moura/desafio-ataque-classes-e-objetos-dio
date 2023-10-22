class hero {
    constructor(nome, idade, tipo, arma){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.arma = arma
    }

    atacar(){
        if (this.tipo == 'Mago') {
            console.log(`o ${this.tipo} atacou usando ${this.arma}`)
        } else if (this.tipo == 'Guerreiro') {
            console.log(`o ${this.tipo} atacou usando ${this.arma}`)
        } else if (this.tipo == 'Monge') {
            console.log(`o ${this.tipo} atacou usando ${this.arma}`)
        } else if (this.tipo == 'Ninja') {
            console.log(`o ${this.tipo} atacou usando ${this.arma}`)
        } 
    }
}

let mago = new hero ('Lucas', '28', 'Mago', 'magia')
let guerreiro = new hero ('Rafael', '29', 'Guerreiro','espada')
let monge = new hero ('Matheus', '20', 'Monge','artes marciais' )
let ninja = new hero ('Pedro', '24', 'Ninja', 'Shuriken')

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()