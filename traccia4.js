function updateDate() {
  let date = new Date()
  let formatDate = date.toLocaleDateString()
  var dataElement = document.querySelector('.data')
  dataElement.textContent = 'Data: ' + formatDate
}
