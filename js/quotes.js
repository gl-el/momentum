const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuot = document.querySelector('.change-quote');
let quoteNumber = 0;

async function getQuotes(changeLang) {
  const quotes = 'assets/quotes.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  if (!changeLang) {
  quoteNumber = getRandomNum(0, data[lang].length-1);
  quote.textContent = `${data[lang][quoteNumber].text}`;
  author.textContent = `${data[lang][quoteNumber].author}`;
  } else {
    quote.textContent = `${data[lang][quoteNumber].text}`;
    author.textContent = `${data[lang][quoteNumber].author}`
  }
}

getQuotes(false)

changeQuot.addEventListener('click', async () => {
  const prevQuote = quote.textContent;
  await getQuotes(false)
  if (prevQuote === quote.textContent) getQuotes(false);
})