function cambiaColore() {
  function generaColore(params) {
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    return 'rgb(' + r + ',' + g + ',' + b + ')'
  }
  document.getElementById('cambia').style.color = generaColore()
  document.getElementById('cambia1').style.color = generaColore()
  document.getElementById('cambia2').style.color = generaColore()
}

function rendeGrassetto(paragrafiIDs) {
  paragrafiIDs.forEach(function (paragrafoID) {
    var paragrafo = document.getElementById(paragrafoID)
    if (paragrafo) {
      if (paragrafo.style.fontWeight === 'bold') {
        paragrafo.style.fontWeight = 'normal'
      } else {
        paragrafo.style.fontWeight = 'bold'
      }
    }
  })
}
function scompariRiappari() {
  var paragrafi = document.querySelectorAll('p')
  paragrafi.forEach(function (paragrafo) {
    if (paragrafo.style.display === 'none') {
      paragrafo.style.display = 'block'
    } else {
      paragrafo.style.display = 'none'
    }
  })
}
