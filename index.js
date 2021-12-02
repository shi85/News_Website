console.log("News Api JS file working...")

let source = 'bbc-news';
let apiKey = '4041c96a08ae4696b256d5f2d2ccb057';

let newsContainer = document.querySelector('#newsContainer');


//creating xhr object
const xhr = new XMLHttpRequest();

//opening xhr to create a get request
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//when response is ready
xhr.onload = function() {
    
    if(this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);

        let news = "";

        articles.forEach(element => {
            news += `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ${element.title}
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#newsContainer">
                            <div class="accordion-body">${element.description}
                                <br>
                                <strong>Read Full Story :</strong> <a href = "${element.url}" target = "_blank">Read More..</a>
                            </div>
                        </div>
                    </div>`
        });
                newsContainer.innerHTML = news;

    }else {
        console.error("Oops!! Some error occured!!")
    }
}

xhr.send();

