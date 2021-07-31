// part II
// step 3
// cards page

let deck;
let nextCard;
const newCardButt = document.querySelector('#new-card');

document.onload = () => {
    deck = axios
    .get('http://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(res => {
        return res.data.deck_id;
    })
    .catch(err => {
        return err;
    });
}

let nextCard = axios
    .get(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
    .then(data => {

    })