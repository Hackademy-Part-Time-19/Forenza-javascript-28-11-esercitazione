function inserisciCards() {
  let titolo = document.getElementById('insTitolo').value
  let paragrafo = document.getElementById('paragrafo').value
  if (titolo.trim() === '' || paragrafo.trim() === '') {
    alert('Assicurati di compilare tutti i campi.')
    return
  }
  let date = new Date().toLocaleDateString()

  document.getElementById('innerContainerCards').innerHTML += `
  <div class="cards">
  <div class="tit-art">
    <h1 id="title" >${titolo}</h1>
  </div>
  <div class="par-art">
    <p id=""text-article>${paragrafo}</p>
  </div>
  <div class="data">
    <p class="giorno">Pubblicato il  ${date}</p>
  </div>
  </div>

  `

  document.getElementById('insTitolo').value = ''
  document.getElementById('paragrafo').value = ''
}
