const myHeader = new Headers()
// myHeaders.append('Content-Type', 'text/plain');
// myHeaders.append('Content-Length', content.length.toString());
// myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');


fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
})
.then( (fetchResponse) => {
    return fetchResponse.json()
})
.then( (jsonObjects) => {
    console.log(jsonObjects)
})
.catch( (error) => {
    console.log('Gretchen, stop trying to make fetch happen, it\'s not going to happen', error)
})