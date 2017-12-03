import { ADD_LETTER } from '../actions/index'

const words = ['alien', 'deterritorialization', 'nomadism', 'randomizing', 'rhizomatic'];
var result = ""
const guesses = []
var word = words[Math.floor(Math.random() * words.length)]

function wrongGuessCount(word, guesses) {
  const wrongGuesses = guesses.filter(letter => word.indexOf(letter) === -1)
  return wrongGuesses.length
  }

function showGuess(word, guesses) {
  const letters = word.split("");
  const dashes = letters.map(letter => "_ ")

  for (var i=0; i < letters.length; i++ ) {
   guesses.map(function(guess) {
     if (guess === letters[i]) {dashes[i] = letters[i]};
     });
   }
    return dashes.join(" ");
  }

  function isWinner(word, guesses) {
    var winner = showGuess(word, guesses).replace(/ /g,'');
    return winner === word;
  }

  function next(word, guesses) {
    if (wrongGuessCount(word, guesses) === 6)
      return result = ("The word was " + word + ", LOOSER!");
    if (isWinner(word, guesses)) return result = "WINNER!";
      result = showGuess(word, guesses) ;
  }

export default (state = result, { type, payload } = {}) => {
switch(type) {
    case ADD_LETTER :
    guesses.push(payload)
    next(word, guesses)
    return [result, wrongGuessCount(word, guesses)]

  default :
    return state
}
}
