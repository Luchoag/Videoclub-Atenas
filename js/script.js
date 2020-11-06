document.getElementById("head").innerHTML = `
<h1>
<a href="index.html">VIDEOCLUB ATENAS</a>
<img width="40" src="./images/ff1.jpg" />
</h1>

<nav>
<input type="checkbox" id="nav-check" />
<div class="nav-btn">
  <label for="nav-check">
    <span></span>
    <span></span>
    <span></span>
  </label>
</div>
<div class="nav-links">
  <a href="index.html">Home</a>
  <a href="peliculas.html">Películas</a>
  <a href="series.html">Series</a>
  <a href="about.html">Nosotros</a>
  <a href="contacto.html">Contacto</a>
</div>
</nav>
`;

document.getElementById("foot").innerHTML = `
<a href="https://twitter.com" target="_blank"
><i class="fab fa-twitter-square"></i
></a>
<a href="https://facebook.com" target="_blank"
><i class="fab fa-facebook-square"></i
></a>
<a href="https://instagram.com" target="_blank"
><i class="fab fa-instagram-square"></i
  ></a>
<br />
Todos los derechos reservados © 2020
`;