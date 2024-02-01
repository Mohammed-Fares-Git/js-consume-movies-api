const root = document.getElementById('root');

getMovies("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmYXJlc0FhQSIsImlhdCI6MTcwNjc3NzkzMiwiZXhwIjoxNzA2Nzc5MzcyfQ._Bgb4W_ksxFDaZgi-nSa3PV2LtZTRTvVQCY1MdT2tw4",
(d) => fillTheDom(d))

async function getMovies(token, toHtml){
    const response = await fetch("http://localhost:8089/movies/all",{
        method: "Get",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
    })

    const data = await response.json();

    toHtml(data);
}


function fillTheDom(data){
    data.forEach(e => {
        const card = document.createElement('div'); 
        const cardImage = document.createElement('img'); 
        const cardBody = document.createElement('div'); 
        const cardTitel = document.createElement('h5'); 
        const cardText = document.createElement('p');
        
        card.style = "width: 18rem;";

        card.className = "card";
        cardImage.className = "card-img-top";
        cardBody.className = "card-body";
        cardTitel.className = "card-title";
        cardText.className = "card-Text";

        cardImage.setAttribute("src",e.image)
        cardTitel.textContent = e.name;
        cardText.textContent = e.desc;

        cardBody.append(cardTitel,cardText);
        card.append(cardImage,cardBody);

        root.appendChild(card);
    });
}

const card = `<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;