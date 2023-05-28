const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuotesbtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

// Get quotes from API 
let apiQuotes = [];

//show loading function

function loading() {
    loader.hidden = false    //hidden is use to hide html div - hidden = false means we dont wanted to be hidden
    quoteContainer.hidden = true  // when loader is going we only gonna see container
}

// hide loading 

function complete(){

    quoteContainer.hidden = false  // after loading show quotecontainer
    loader.hidden = true   // don't show loader no more


}

// show New qoutes
function newQuotes() {
    loading()
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // Mentioning Null author names into Unknown
    if(!quote.author){
        authorText.textContent = 'Unknown'
    }else{
        authorText.textContent = quote.author
      
    }
    //Check Quote length to determine styling
    if(quote.text.length > 50){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.add('long-quote')
    }
    quoteText.textContent = quote.text
    complete()
}


async function getQuotes() {
    loading()
    const apiUrl = 'https://type.fit/api/quotes'
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes()

    }catch(error){
        //Catch Error Here
    }

}
//tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')

}

//Event Listeners
newQuotesbtn.addEventListener('click', newQuotes);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes(); 

