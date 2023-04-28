const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

// è una funzione del browser di tipo promise response, 
// ritorna una response in modo asincrono
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })