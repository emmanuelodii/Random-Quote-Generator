const newQuoteBtn = document.querySelector(".newQuote");
const quotesText = document.querySelector(".quote");
const author = document.querySelector(".author")

const quotes = (a) => {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(json =>{
      console.log(json)
       let newquotes = quotesText.innerHTML = `${json[a].text} `
        author.innerHTML = `- ${json[a].author}`
      if (json[a].author === null){
         author.innerHTML = "- Anonymous" 
      } 
    })
}
const random = () => Math.floor(Math.random() * 100) + 1;
newQuoteBtn.onclick = () => quotes(random())
