//productos
const productos = [
  //buzos
  {
    id: "buzo01",
    titulo: "buzo black and white",
    imagen: "../imgs/buzos/buzo black and white.jpg",
    categoria: {
      id: "buzos",
      nombre: "buzos",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 2000, M: 2400, L: 2500 },
  },
  {
    id: "buzo02",
    titulo: "buzo blue",
    imagen: "../imgs/buzos/buzo blue.jpg",
    categoria: {
      id: "buzos",
      nombre: "buzos",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 2500, M: 2500, L: 2800 },
  },
  {
    id: "buzo3",
    titulo: "buzo boreal",
    imagen: "../imgs/buzos/buzo boreal.jpg",
    categoria: {
      id: "buzos",
      nombre: "buzos",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 3000, M: 3250, L: 3500 },
  },
  {
    id: "pantalon1",
    titulo: "pantalon black",
    imagen: "../imgs/pantalones/pantalon black.jpg",
    categoria: {
      id: "pantalones",
      nombre: "pantalones",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 1900, M: 2100, L: 2400 },
  },
  {
    id: "pantalon2",
    titulo: "pantalon brown",
    imagen: "../imgs/pantalones/pantalon brown.jpg",
    categoria: {
      id: "pantalones",
      nombre: "pantalones",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 2100, M: 2300, L: 2450 },
  },
  {
    id: "pantalon3",
    titulo: "pantalon jean",
    imagen: "../imgs/pantalones/pantalon jean.jpg",
    categoria: {
      id: "pantalones",
      nombre: "pantalones",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 4000, M: 4100, L: 4200 },
  },
  {
    id: "remera1",
    titulo: "remera fvking",
    imagen: "../imgs/remeras/remera fuking.jpg",
    categoria: {
      id: "remeras",
      nombre: "remeras",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 1500, M: 1800, L: 2000 },
  },
  {
    id: "remera2",
    titulo: "remera leave the road",
    imagen: "../imgs/remeras/remera leave the road.jpg",
    categoria: {
      id: "remeras",
      nombre: "remeras",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 2000, M: 2000, L: 2000 },
  },
  {
    id: "remera3",
    titulo: "remera out cast",
    imagen: "../imgs/remeras/remera out cast.jpg",
    categoria: {
      id: "remeras",
      nombre: "remeras",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 2300, M: 2500, L: 2800 },
  },
  {
    id: "zapatilla1",
    titulo: "zapatillas orange and white",
    imagen: "../imgs/zapatillas/zapatilla orange and white.jpg",
    categoria: {
      id: "zapatillas",
      nombre: "zapatillas",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 3000, M: 3500, L: 3600 },
  },
  {
    id: "zapatilla2",
    titulo: "zapatillas red and white",
    imagen: "../imgs/zapatillas/zapatilla red and white.jpg",
    categoria: {
      id: "zapatillas",
      nombre: "zapatillas",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 3500, M: 3600, L: 3700 },
  },
  {
    id: "zapatilla3",
    titulo: "zapatilla green and white",
    imagen: "../imgs/zapatillas/zapatilla green and white.jpg",
    categoria: {
      id: "zapatillas",
      nombre: "zapatillas",
    },
    tallas: ["S", "M", "L"],
    precios: { S: 4000, M: 4500, L: 5000 },
  },
];

//realizo la carga de los productos al dom

const contenedorproductos = document.querySelector("#contenedor-productos");
let botonesagregar = document.querySelectorAll(".producto-agregar");

function cargarproductos(productoselegidos) {
  contenedorproductos.innerHTML = "";
  productoselegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${
      producto.titulo
    }">
    <div class="producto-detalles">
      <h3 class="producto-titulo">${producto.titulo}</h3>
      <div class="producto-tallas">
        <p>Tallas:</p>
        <ul class="tallas-lista">
          ${producto.tallas
            .map(
              (talla) => `
            <li>
              <span class="talla"><input type="checkbox" name="myCheckbox" value="myValue">-${talla}-</span>
              <span class="precio">-$${producto.precios[talla]}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      <button class="producto-agregar" id="${producto.id}">Agregar</button>
    </div>
    `;
    contenedorproductos.append(div);
  });
  nuevosbotonesagregar();
}

//array de categorias y botones

const productosboton = document.querySelectorAll(".boton-categoria");
const tituloprincipal = document.getElementById("titulo-principal");
cargarproductos(productos);

productosboton.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    if (e.currentTarget.id != "todos") {
      const productocategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloprincipal.innerText = productocategoria.categoria.nombre;
      const productosboton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarproductos(productosboton);
    } else {
      tituloprincipal.innerText = "todos los productos";
      cargarproductos(productos);
    }
  });
});

// botones de articulos

function nuevosbotonesagregar() {
  botonesagregar = document.querySelectorAll(".producto-agregar");
}

function nuevosbotonesagregar() {
  botonesagregar = document.querySelectorAll(".producto-agregar");
  botonesagregar.forEach((boton) => {
    boton.addEventListener("click", AgregarAlCarrito);
  });
}

//creando carrito y agregando productos

const productosEnCarrito = [];

function AgregarAlCarrito(e) {
  const idboton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idboton
  );
  if (productosEnCarrito.some((producto) => producto.id === idboton)) {
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  console.log(productosEnCarrito);
}
