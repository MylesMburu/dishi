const express = require('express');
const app = express();

app.get('/meals/:query', (req, res) => {
  const searchQuery = req.params.query; // get the search query from the request params
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data); // this will log the data to the console
      res.send(data); // send the data back to the client as a response
    })
    .catch(error => console.error(error));
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
