const resultsSection = document.getElementById('results-section');

const processResults = (result) => {
  let hashtags;
  let sentiment;
  let summary;

  resultsSection.style.height = '100%';
  resultsSection.style.padding = '2rem';

  for (let i = 0; i < result.length; i++) {
    if (result[i].endpoint === 'hashtags') {
      hashtags = result[i].result.hashtags;
      createHashtags(hashtags);
    } else if (result[i].endpoint === 'sentiment') {
      sentiment = result[i].result;
      console.log('sentiment', sentiment);
      displaySentiment(sentiment);
    } else if ((result[i].endpoint = 'summarize')) {
      summary = result[i].result.sentences;
      console.log('summary: ', summary);
    }
  }

  return { hashtags, sentiment, summary };
};

const updateTitle = (url) => {
  const title = document.getElementById('results-title');
  title.textContent = url;
};

const createHashtags = (hashtags) => {
  const hashtagList = document.getElementById('hashtag-list');
  const hashtagTitle = document.getElementById('hashtag-title');
  hashtagTitle.style.display = 'inline-block';

  while (hashtagList.hasChildNodes()) {
    hashtagList.removeChild(hashtagList.firstChild);
  }

  for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.textContent = hashtags[i];
    hashtagList.appendChild(li);
  }
};

const displaySentiment = (sentiment) => {
  const sentimentList = document.getElementById('sentiment-list');
  const sentimentTitle = document.getElementById('sentiment-title');
  sentimentTitle.style.display = 'inline-block';

  while (sentimentList.hasChildNodes()) {
    sentimentList.removeChild(sentimentList.firstChild);
  }

  const polarity = sentiment.polarity;
  const confidence = sentiment.polarity_confidence.toFixed(2);
  const percentage = confidence * 100;

  const cLi = document.createElement('li');
  const pLi = document.createElement('li');
  pLi.textContent = 'Sentiment: ' + polarity;
  cLi.textContent = 'Confidence: ' + percentage + '%';
  sentimentList.appendChild(cLi);
  sentimentList.appendChild(pLi);
};

export { processResults, updateTitle, createHashtags, displaySentiment };
