
// import '../../../../../lib//axios/axios.min.js'

/**
 * @type {HTMLInputElement} 
 */
const nameInput = document.querySelector('.jumbotron input')
const rowCards = document.querySelector('#app .row')

function handleSearch() {
  const name = nameInput.value.trim()
  if (!name) return

  axios.get(`https://api.github.com/search/users?q=${name}`)
    .then(res => {
      console.log(res.data.items)
      createCards(res.data.items)
    })
    .catch(err => {
      console.log(err)
    })

}

function createCards(arr) {
  arr.forEach(item => {
    const card = createCard(item)
    rowCards.appendChild(card)
  })
}

function createCard(item) {
  const div = document.createElement('div')
  div.className = "card"

  div.innerHTML = `
  <a href="${item.html_url}" target="_blank">
    <img src="${item.avatar_url}" style='width: 100px'/>
  </a>
  <p class="card-text">${item.login}</p>`

  return div
}