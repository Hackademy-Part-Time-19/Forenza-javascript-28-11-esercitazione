var persona = { 
    nome : "Marco",
    cognome: "Bianchi",
    età: 30, 
    
    saluta : function () {
        console.log(`Ciao mi chiamo ${this.nome} ${this.cognome} ed ho ${this.età} anni`)
    }
}
persona.saluta();
