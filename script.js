const generateQuote = () => {
  let url = 'https://type.fit/api/quotes';
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let randNum = Math.floor(Math.random() * 1500 + 1);
      let randomQuote = data[randNum];
      document.querySelector('#quote').innerHTML = `"${randomQuote.text}"`;
      document.querySelector('#author').innerHTML = `- ${
        randomQuote.author ? randomQuote.author : ''
      }`;
    });
};
