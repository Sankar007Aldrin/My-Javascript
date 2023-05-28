const button = document.getElementById('button')
const audio = document.getElementById('audio')


// Disabling a button when joke being told
function toggleButton() {
    button.disabled = !button.disabled
}
// Passing jokes to VocieRSS API

function setJokes(joke) {
    console.log(joke)
    VoiceRSS.speech({
                key: 'c80982be5a7943188416df281496f29b',
                src: joke,
                hl: 'en-us',
                v: 'Linda',
                r: 0, 
                c: 'mp3',
                f: '44khz_16bit_stereo',
                ssml: false
            });
}

async function getJokes() {
    let joke = ''
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit'
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        if(data.setup){
          joke = `${data.setup} ... ${data.delivery}`
        }else{
            joke = data.joke
        }
        //Joke to Speech Fn
        setJokes(joke)
        // Disabling button 
        toggleButton()
    } catch(error){
        console.log('Whoops', error)
    }
}
  

button.addEventListener('click', getJokes)
audio.addEventListener('ended', toggleButton)