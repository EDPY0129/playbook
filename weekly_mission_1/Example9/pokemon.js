class poke{
    constructor(Pokemon){
        this.Pokemon=Pokemon;
    }

    sayHello () {
        console.log(`Mi pokemon ${this.Pokemon} te saluda!!!`)
      }
    
      // método
    sayMessage (message) {
        console.log(`Mi pokemon ${this.Pokemon} dice: ${message}`)
      }
}

module.exports = poke;