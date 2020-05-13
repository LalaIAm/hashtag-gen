const express = require('express');
const AYLIENTextAPI = require('aylien_textapi');

const router = express.Router();

const textapi = new AYLIENTextAPI({
  application_id: process.env.APP_ID,
  application_key: process.env.AYLIEN_API,
});

const getAnalyzedText = async (req, res) => {
  const url = req.body.url

  try {
      await textapi.combined(
      {
        url: url,
        endpoint: ['hashtags', 'sentiment', 'summarize'],
      },
      function (err, result) {
        if (err === null) {
          const data = result.results;
          console.log('data: ', data);
          res.send(data)
        } else {
          console.log(err);
        }
      }
    );

    
  } catch (error) {
    console.log(error);
  }
};

router.post('/analyze', getAnalyzedText);

module.exports = router;
