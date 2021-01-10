const myHeader = new Headers()
// myHeaders.append('Content-Type', 'text/plain');
// myHeaders.append('Content-Length', content.length.toString());
// myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
const magicPhrases = ["Don't spend it all in one place", "No, your other right", "Are you working hard, or hardly working?", "Money doesn't grow on trees", "Hi hungry, I'm Dad", "Who changed the thermostat?", "Don't tell your mother", "If you were told to jump off a cliff, would you?", "You know, when I was your age...", "You're not going out in that", "You'll understand when you're older", "If it ain't broke, don't fix it", "I'm not sleeping, I'm just resting my eyes"]
let index = 0

function displayJoke(string){
    dad_button.innerText = `"${magicPhrases[index]}"`
    display_joke.innerText = string
    index = (index + 1) % magicPhrases.length
}

const fetchJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
            // Any other search query identifiers, add here. 
        }
    })
    .then( (fetchResponse) => {
        return fetchResponse.json()
    })
    .then( (jsonObjects) => {
        displayJoke(jsonObjects.joke)
    })
    .catch( (error) => {
        console.log('Gretchen, stop trying to make fetch happen, it\'s not going to happen', error)
    })
}

dad_button.addEventListener("click", (e) => {
    fetchJoke()
    e.preventDefault()
})

window.confirm("'#1 Dad Joke Generator' is requesting to access your microphone")
