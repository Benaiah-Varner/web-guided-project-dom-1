// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)
const data = [
  { heading: 'Dog 1' },
  { heading: 'Dog 2' },
]

// 1- Making a clone of the div.card ad appending it to the div.card-group
const firstCard = document.querySelector('.card')
// you get either an element or null (the first match, if several elements match the css select)
const copyOfFirstCard = firstCard.cloneNode(true)
const cardContainer = document.querySelector('.card-group') // use querySelector the parent element of the cards
cardContainer.appendChild(copyOfFirstCard)

const cards = document.querySelectorAll('.card')
const secondCard = cards[1]
cards.forEach((card, idx) => {
  const h2 = card.querySelector('h2')
  h2.textContent = data[idx].heading
})
const realArrayOfCards = Array.from(cards)
console.log(realArrayOfCards)

// 2- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll

const header = document.querySelector('header')
const logoTitle = document.querySelector('#logoTitle')
const card = secondCard
const cardImage = secondCard.querySelector('img')
const cardTitle = secondCard.querySelector('h2')
const cardSubtitle = secondCard.querySelector('h3')
const cardText = secondCard.querySelector('p.card-text')
const cardLink1 = secondCard.querySelector('a')
const cardLink2 = secondCard.querySelector('a:nth-of-type(2)')

// 3- Changing an element's text content
//  textContent, innerText (subtle differences)
cardTitle.textContent = "New H2"
cardSubtitle.textContent = "New H3"
cardText.textContent = "New Card Text"
cardLink1.textContent = "New Link 1"
cardLink2.textContent = "New Link 2"

// 4- Accessing and changing element attributes
//  with dot notation
//  setAttribute, getAttribute
cardImage.src = 'https://i.ytimg.com/vi/h5TpJb_jE-M/maxresdefault.jpg'
cardImage.setAttribute('src', 'https://i.ytimg.com/vi/kjauYmXoElc/hqdefault.jpg')

// 5- Changing the style (the "sky" classname should turn bg color to blue)
//  by changing the class names on the element
// card.setAttribute('class', 'card sky')
card.classList.add('sky')
header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => {
  header.classList.toggle('sky')
}, 1000)
//  by manipulating inline styles on the element
card.style.backgroundColor = 'royalblue'

// 6- Creating new elements and appending them
const newLink = document.createElement('a')
newLink.textContent = 'Blog'
newLink.href = '#'

// 7- Removing an existing element and putting it back
