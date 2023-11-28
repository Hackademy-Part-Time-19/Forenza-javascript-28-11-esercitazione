let agenda = {
  contatti: [
    { nome: 'Alice', numeroTelefono: '1234567890' },
    { nome: 'Paolo', numeroTelefono: '9876543210' },
  ],

  mostraContatto: function (nomeContatto) {
    let trovaContatto = this.contatti.find(function (contatto) {
      return contatto.nome === nomeContatto
    })
    if (trovaContatto) {
      console.log(
        `dettagli del contatto: \nnome ${trovaContatto.nome}\nnumero di telefono: ${trovaContatto.numeroTelefono} `
      )
    } else {
      console.log(`Il contatto ${nomeContatto} non è stato trovato`)
    }
  },

  mostraTuttiContatti: function () {
    console.log('Lista contatti:')
    this.contatti.forEach(function (contatto) {
      console.log(
        `Nome: ${contatto.nome}, Numero di telefono: ${contatto.numeroTelefono}`
      )
    })
  },

  eliminaContatto: function (nomeContatto) {
    this.contatti = this.contatti.filter(function (contatto) {
      return contatto.nome !== nomeContatto
    })

    console.log(`Il contatto ${nomeContatto} è stato eliminato.`)
  },
  aggiungiContatto: function (nome, numeroTelefono) {
    var nuovoContatto = { nome: nome, numeroTelefono: numeroTelefono }
    this.contatti.push(nuovoContatto)

    console.log(`Il contatto ${nome} è stato aggiunto con successo.`)
  },
  modificaContatti: function (nomeContatto, nuovoNome, nuovoNumeroTelefono) {
    let contattoDaModificare = this.contatti.find(function (contatto) {
      return contatto.nome === nomeContatto
    })
    if (contattoDaModificare) {
      Object.assign(contattoDaModificare, {
        nome: nuovoNome,
        numeroTelefono: nuovoNumeroTelefono,
      })
      console.log(`il contatto ${nomeContatto} è stato modificato`)
    } else {
      console.log(`il contatto ${nomeContatto} non è stato trovato`)
    }
  },
}

agenda.mostraContatto('Alice')
agenda.mostraTuttiContatti()
agenda.eliminaContatto('Alice')
agenda.aggiungiContatto('Marco')
agenda.modificaContatti('Marco', 'Federica', '343253258352')
