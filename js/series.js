var dataSeries = [
    {
        nombre: "Seinfeld",
        imagen: "./images/series/seinfeld.svg",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        alt: "Seinfeld logo"
    },
    {
        nombre: "Breaking Bad",
        imagen: "./images/series/breaklogo.jpg",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        alt: "Breaking Bad logo"
    },
    {
        nombre: "Game of Thrones",
        imagen: "./images/series/got.jpg",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        alt: "Game of Thrones logo"
    },
    {
        nombre: "Sherlock",
        imagen: "./images/series/sherlock.jpg",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        alt: "Sherlock logo"
    },
    {
        nombre: "The Twilight Zone",
        imagen: "./images/series/twilightzone.jpg",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        alt: "The Twilight Zone logo"
    }

]

function agregarCards() {
    var container = document.getElementById("textWrapper");
    dataSeries.forEach(serie => {
        var card = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${serie.imagen}" alt="${serie.alt}">
        <div class="card-body">
        <h5 class="card-title">${serie.nombre} </h5>
        <p class="card-text">${serie.descripcion}</p>
        <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>         
        `;
        container.innerHTML += card;
    });

}
agregarCards();
