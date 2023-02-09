const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuot = document.querySelector('.change-quote');

async function getQuotes() {
  const quotes = 'assets/quotes.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  const quoteNumber = getRandomNum(0, data[lang].length-1);
  quote.textContent = `${data[lang][quoteNumber].text}`;
  author.textContent = `${data[lang][quoteNumber].author}`;
}

getQuotes()

changeQuot.addEventListener('click', async () => {
  const prevQuote = quote.textContent;
  await getQuotes()
  if (prevQuote === quote.textContent) getQuotes();
})