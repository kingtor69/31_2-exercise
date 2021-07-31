// part II
// step 3
// cards page

const newCardButt = document.querySelector('#new-card');
const cardTable = document.querySelector('#table');

let deck;
let deckPromise = axios
    .get('http://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(res => {
        deck = res.data.deck_id;
        return deck;
    })
    .catch(err => {
        return err;
    });

newCardButt.addEventListener('click', (e) => {
    let nextCard = axios
        .get(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
        .then(res => {
            return dealCard(res.data.cards[0].image)
        })
})

function dealCard (url) {
    card = document.createElement('img');
    card.src = url;
    card.classList.add('card');
    cardTable.appendChild(card);
}