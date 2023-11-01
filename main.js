// Finn HTML elementet som vi ønsker å endre på
let display = document.querySelector("#display")

// Krasj programmet viss JavaScripten ikke finner et Element med ID "display"
if (display === null) {
  // **throw new Error(message)** er en metode for oss å si at det har skjedd
  // en eller annen feil og det er ikke vits å fortsette programmet lenger
  // så stopp (krasj) det, og print ut en feilmelding
  throw new Error("Please create an HTML element with ID of display")
}

// ==============================================================================
// = Funksjonen blir "blokker" med kode som vi kan kjøre på et seiner tidspunkt =
// ==============================================================================

/**
 * Øker verdien på display elementet vårt
 */
function increment() {
  let oldValueString = display.textContent
  let oldValueNumber = parseInt(oldValueString)

  // Sjekk hvilken type oldValue er
  display.textContent = oldValueNumber + 1
}

/**
 * Minker verdien på display elementet vårt
 */
function decrement() {
  // Finn ut hva den gamle verdien er
  let oldValueString = display.textContent
  // Konverter fra streng til et tall
  let oldValueNumber = parseInt(oldValueString)

  // Oppdatere display innholdet til den nye verdien
  display.textContent = oldValueNumber - 1
}

/**
 * Legg til knappe funksjonene via JavaScript
 */

// Først hent ut elementen
let buttonIncrement = document.querySelector("#button-increment")
let buttonDecrement = document.querySelector("#button-decrement")

// Legge til funksjonene (Event Listners & Event Handlers | Hendelses Lyttere & Hendeles Håndterer)
buttonIncrement.addEventListener("click", increment)
buttonDecrement.addEventListener("click", decrement)

// ====================================
// = Funksjons argumenter / parametre =
// ====================================

/**
 * Dette er en JSDoc kommentar, brukes for å dokumenter JavaScript
 * 
 * Logger en hilsning til konsollen
 * @param {string} name navnet til en person
 * @param {string} title title til en person
 */
function greeting(name, title) {
  // Konstruer strengen (kan gjøres på litt forskjellige måter)
  let greetingString = "Greeting" + " " + title + " " + name
  
  return greetingString
}

let greetingLars = greeting("Lars", "teacher")
let greetingKatrine = greeting("Katrine", "student")
let greetingThomas = greeting("Thomas", "student")
let greetingEllen = greeting("Ellen", "student")

function greetAll() {
  console.log(greetingLars)
  console.log(greetingKatrine)
  console.log(greetingThomas)
  console.log(greetingEllen)
}

let buttonGreet = document.querySelector("#button-greet")
buttonGreet.addEventListener("click", greetAll)