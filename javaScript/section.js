document.addEventListener("DOMContentLoaded", cargarNoticias);

function cargarNoticias() {
  fetch("archivo.json")
    .then((response) => response.json())
    .then((data) => mostrarNoticias(data))
    .catch((error) => console.error("Error al cargar noticias:", error));
}

function mostrarNoticias(noticias) {
  const noticiasContainer = document.getElementById("noticias-container");

  noticias.forEach((noticia) => {
    const noticiaElement = document.createElement("div");
    noticiaElement.classList.add("noticia");

    const tituloElement = document.createElement("h3");
    tituloElement.textContent = noticia.titulo;

    const contenidoElement = document.createElement("p");
    contenidoElement.textContent = noticia.contenido;

    noticiaElement.appendChild(tituloElement);
    noticiaElement.appendChild(contenidoElement);
    noticiasContainer.appendChild(noticiaElement);
  });
}