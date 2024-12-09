const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
let string = ''
for (let i = 0; i < friends.length; i += 1) {
  string += friends[i]
  if (i < friends.length) {
    string += ','
  }
}
console.log(string)//for



const joinString = friends.join(',')
console.log(joinString)//join


const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
]
const cardToRemove = 'Карточка-3'
const indexToRemove = cards.indexOf(cardToRemove)
cards.splice(indexToRemove, 1)
console.log(cards)
const cardToInsert = 'Карточка-6'
cards.splice(4, 0, cardToInsert)
console.log(cards)
const cardToUpdate = 'Карточка-4';
cards[2] = cardToUpdate;
console.log(cards)
//cartochki trello 🥰
