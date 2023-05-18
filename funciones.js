//productos
const productos = [
  //buzos
  {
    id: "buzo01",
    titulo: "Buzo black and white",
    imagen: "../imgs/buzos/buzo black and white.jpg",
    categoria: {
      id: "buzos",
      nombre: "buzos",
    },
    precio: 2500,
  },
  {
    id: "buzo02",
    titulo: "Buzo blue",
    imagen: "../imgs/buzos/buzo blue.jpg",
    categoria: {
      id: "buzos",
      nombre: "buzos",
    },
    precio: 2100,
  },
  {
    id: "buzo3",
    titulo: "Buzo boreal",
    imagen: "../imgs/buzos/buzo boreal.jpg",
    categoria: {
      id: "buzos",
      nombre: "buzos",
    },
    precio: 2000,
  },
  {
    id: "pantalon1",
    titulo: "Pantalon black",
    imagen: "../imgs/pantalones/pantalon black.jpg",
    categoria: {
      id: "pantalones",
      nombre: "pantalones",
    },
    precio: 2400,
  },
  {
    id: "pantalon2",
    titulo: "Pantalon brown",
    imagen: "../imgs/pantalones/pantalon brown.jpg",
    categoria: {
      id: "pantalones",
      nombre: "pantalones",
    },
    precio: 2300,
  },
  {
    id: "pantalon3",
    titulo: "Pantalon jean",
    imagen: "../imgs/pantalones/pantalon jean.jpg",
    categoria: {
      id: "pantalones",
      nombre: "pantalones",
    },
    precio: 2200,
  },
  {
    id: "remera1",
    titulo: "Remera fvking",
    imagen: "../imgs/remeras/remera fuking.jpg",
    categoria: {
      id: "remeras",
      nombre: "remeras",
    },
    precio: 2100,
  },
  {
    id: "remera2",
    titulo: "Remera leave the road",
    imagen: "../imgs/remeras/remera leave the road.jpg",
    categoria: {
      id: "remeras",
      nombre: "remeras",
    },
    precio: 2500,
  },
  {
    id: "remera3",
    titulo: "Remera out cast",
    imagen: "../imgs/remeras/remera out cast.jpg",
    categoria: {
      id: "remeras",
      nombre: "remeras",
    },
    precio: 2600,
  },
  {
    id: "zapatilla1",
    titulo: "Zapatillas orange and white",
    imagen: "../imgs/zapatillas/zapatilla orange and white.jpg",
    categoria: {
      id: "zapatillas",
      nombre: "zapatillas",
    },
    precio: 2500,
  },
  {
    id: "zapatilla2",
    titulo: "Zapatillas red and white",
    imagen: "../imgs/zapatillas/zapatilla red and white.jpg",
    categoria: {
      id: "zapatillas",
      nombre: "zapatillas",
    },
    precio: 2700,
  },
  {
    id: "zapatilla3",
    titulo: "Zapatilla green and white",
    imagen: "../imgs/zapatillas/zapatilla green and white.jpg",
    categoria: {
      id: "zapatillas",
      nombre: "zapatillas",
    },
    precio: 2500,
  },
];

//realizo la carga de los productos al dom


const contenedorproductos = document.getElementById("contenedor-productos");
let botonesagregar = document.querySelectorAll(".producto-agregar");

function cargarproductos(productoselegidos) {
  contenedorproductos.innerHTML = "";
  productoselegidos.forEach((producto) => {
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
  botonesagregar.forEach((boton) => {
    boton.addEventListener("click", AgregarAlCarrito);
  });
}

//creando carrito y agregando productos


let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"))

if (productosEnCarritoLS) {
  productosEnCarrito = productosEnCarritoLS
} else {
  productosEnCarrito = []
}


function AgregarAlCarrito(e) {
  const idboton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idboton
  );
  if (productosEnCarrito.some((producto) => producto.id === idboton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idboton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
  const form = document.getElementById("form-" + idboton);
}
