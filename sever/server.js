app.listen

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

fetch(url + "pizza")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    });