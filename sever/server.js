const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/meals/:query', (req, res) => {
  const searchQuery = req.params.query;
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('API request failed');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({ error: error.message });
    });
}); // Move the closing parenthesis here

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
