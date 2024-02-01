import { token } from "./modules/contats.js";
import { expendCard, observeItems } from "./modules/utils.js";

const root = document.getElementById('root');


getMovies(token,
(d) => fillTheDom(d))
observeItems();


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
        const cardFooter = document.createElement('a'); 
        const cardTitel = document.createElement('h5'); 
        const cardText = document.createElement('p');
        const cardExpendingArrow = document.createElement('i');
        
        card.style = "width: 30%;";
        cardExpendingArrow.style = "color: #000000;";

        card.className = "card align-self-baseline mt-1 mb-1 item fade-in";
        cardImage.className = "card-img-top";
        cardBody.className = "card-body";
        cardFooter.className = "card-footer d-flex justify-content-center pe-auto";
        cardTitel.className = "card-title";
        cardText.className = "card-Text trans-card collapsed";
        cardExpendingArrow.className = "fa-solid fa-chevron-down trans";

        cardImage.setAttribute("src",e.image)
        cardTitel.textContent = e.name;
        cardText.textContent = e.desc;


        cardFooter.addEventListener("click",(e) => {
            expendCard(cardExpendingArrow,cardText);
        });

        cardFooter.appendChild(cardExpendingArrow);
        cardBody.append(cardTitel,cardText);
        card.append(cardImage,cardBody,cardFooter);

        root.appendChild(card);
    });
}
