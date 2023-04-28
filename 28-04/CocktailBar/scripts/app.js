urlCocktail = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const divCocktail = document.getElementById("divCocktail");
const btnCerca = document.getElementById("btnCerca");
const inputCerca = document.getElementById("inputCerca");

// implementare:
//      GRAFICA:
//      -creazione della pagina base con bootstrap
//      -creazione del form di gestione input utente
//      -personalizzazione della pagina con css

//      SCRIPT:
//      funzione x:
//          -creazione dell'url personalizzato
//          -leggere l'input all'evento text changed
//          -creazione degli elementi cards html

callApiCocktail(urlCocktail, stampaDati)

btnCerca.onclick = ()=> {
    // leggere l'input
    // modificare l'url
    // richiamare l'api
    // visualizzare le nuove card
    divCocktail.innerHTML = "";
    const cocktailRicercato = inputCerca.value;
    const nuovaUrl = urlCocktail+cocktailRicercato;
    callApiCocktail(nuovaUrl, stampaDati);
}



// funzioni

function callApiCocktail(url, callback) {

    fetch(url)
        .then(res => res.json())
        .then(data => {
            callback(data)
        })
}

function stampaDati(data) {
    for (c of data.drinks) {
        console.log(c.strDrink)
        divCocktail.innerHTML += `
        <div class="col-md-3">

            <div class="card my-4" style="width:auto">
                <img class="card-img-top" src="${c.strDrinkThumb}" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">${c.strDrink}</h4>
                    <b>Categoria:</b>
                    <br>
                    <p class="card-text">${c.strCategory}</p>
                    <button class=" btn btn-success" data-bs-toggle="collapse" data-bs-target="#D${c.idDrink}">istruzione</button>
                    <div id="D${c.idDrink}" class="collapse">
                        ${c.strInstructionsIT}
                    </div>
                    
                </div>
            </div>

        </div>
        `;

    }
}


