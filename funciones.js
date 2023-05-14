//productos
const productos = [
  //buzos
  {
    id: "buzo01",
    titulo: "buzo black and white",
    imagen: "../imgs/buzos/buzo black and white.jpg",
    categoria: {
      id: buzo,
    },
    precio: 2000,
  },
  {
    id: "buzo02",
    titulo: "buzo blue",
    imagen: "../imgs/buzos/buzo blue.jpg",
    categoria: {
      id: buzo,
    },
    precio: 2300,
  },
  {
    id: "buzo3",
    titulo: "buzo boreal",
    imagen: "../imgs/buzos/buzo boreal.jpg",
    categoria: {
      id: buzo,
    },
    precio: 2200,
  },
  {
    id: "pantalon1",
    titulo: "pantalon black",
    imagen: "../imgs/pantalones/pantalon black.jpg",
    categoria: {
      id: pantalon,
    },
    precio: 1900,
  },
  {
    id: "pantalon2",
    titulo: "pantalon brown",
    imagen: "../imgs/pantalones/pantalon brown.jpg",
    categoria: {
      id: pantalon,
    },
    precio: 1800,
  },
  {
    id: "pantalon3",
    titulo: "pantalon jean",
    imagen: "../imgs/pantalones/pantalon jean.jpg",
    categoria: {
      id: pantalon,
    },
    precio: 1950,
  },
  {
    id: "remera1",
    titulo: "remera fvking",
    imagen: "../imgs/remeras/remera fuking.jpg",
    categoria: {
      id: remera,
    },
    precio: 1300,
  },
  {
    id: "remera2",
    titulo: "remera leave the road",
    imagen: "../imgs/remeras/remera leave the road.jpg",
    categoria: {
      id: remera,
    },
    precio: 1500,
  },
  {
    id: "remera3",
    titulo: "remera out cast",
    imagen: "../imgs/remeras/remera out cast.jpg",
    categoria: {
      id: remera,
    },
    precio: 1400,
  },
  {
    id: "zapatilla1",
    titulo: "zapatillas orange and white",
    imagen: "../imgs/zapatillas/zapatilla orange and white.jpg",
    categoria: {
      id: zapatilla,
    },
    precio: 5000,
  },
  {
    id: "zapatilla2",
    titulo: "zapatillas red and white",
    imagen: "../imgs/zapatillas/zapatilla red and white.jpg",
    categoria: {
      id: zapatilla,
    },
    precio: 7000,
  },
  {
    id: "zapatilla3",
    titulo: "zapatilla green and white",
    imagen: "../imgs/zapatillas/zapatilla green and white.jpg",
    categoria: {
      id: zapatilla,
    },
    precio: 6000,
  },
];

const contenedorproductos = document.querySelector("#contenedor-productos");

function cargarproductos() {
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-detalles">
      <h3 class="producto-titulo">${producto.titulo}</h3>
      <p class="producto-precio">$${producto.precio}</p>
      <button class="producto-agregar" id="${producto.id}">Agregar</button>
    </div>
    `;
    contenedorproductos.append(div);
  });
}

cargarproductos();
