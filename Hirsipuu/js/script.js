const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
  "programming",
  "javascript",
  "database",
  "markup",
  "framework",
  "variable",
  "coding"
]

let randomizedWord = ''
let maskedWord = ''
let guesses = 0

const newGame = () => {
  let randomIndex = Math.floor(Math.random() * words.length)
  randomizedWord = words[randomIndex]
  while (randomizedWord.length === 0) {
    randomIndex = Math.floor(Math.random() * words.length)
    randomizedWord = words[randomIndex]
  }
  maskedWord = "*".repeat(randomizedWord.length)
  console.log(randomizedWord)
  output.innerHTML = maskedWord
}

const win = () => {
  alert(`You have guessed right, the word is ${randomizedWord}. You needed ${(guesses + 1)} guesses.`)
  guesses = 0
  span.textContent = `${guesses}`
  newGame()
}

const replaceFoundChars = (guess) => {
  guesses++
  span.textContent = `${guesses}`
  for (let i = 0;i<randomizedWord.length;i++) {
    const char = randomizedWord.substring(i,i+1)
    if (char === guess) {
      let newString = maskedWord.split('')
      newString.splice(i,1,guess)
      newString = newString.join('')
      maskedWord = newString
    }
  }
  output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress',(e) => {
  if (e.key === 'Enter') {
    e.preventDefault() //Prevent form submission

    const guess = input.value
    if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
      win()
    } else if (guess.length === 1) {
      replaceFoundChars(guess)
      if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
        win()
      }
    } else {
      alert("You guessed wrong!")
      guesses++
      span.textContent = `${guesses}`
    }
    input.value = ''
  }
})