let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector(".carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll (".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar")
const contenedorTotal = document.getElementById("total")

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length >= 0) {
        contenedorCarritoVacio.classList.add("disable");
        contenedorCarritoProductos.classList.remove("disable");
        contenedorCarritoAcciones.classList.remove("disable");
        contenedorCarritoComprado.classList.add("disable");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach((producto) => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <div class="informacion-de-producto">
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <p>Cantidad: ${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <p>Precio: $${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <p>Subtotal: $${producto.precio * producto.cantidad}</p>
                </div>
            </div>
                <button id="${producto.id}" class="carrito-producto-eliminar">Eliminar</button>
            `;
            contenedorCarritoProductos.append(div);
        });
        
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
    cargarproductos();
    actualizarTotal ()
}


function eliminarDelCarrito(e) {
    const productoId = e.target.id;

    const productoIndex = productosEnCarrito.findIndex(producto => producto.id === productoId);
    if (productoIndex !== -1) {
        if (productosEnCarrito[productoIndex].cantidad > 1) {
            productosEnCarrito[productoIndex].cantidad -= 1;
        } else {
            productosEnCarrito.splice(productoIndex, 1);
        }

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        cargarProductosCarrito();
    } 
}

cargarProductosCarrito();
TotalDeCompra();
botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal (){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad),0);
    total.innerHTML = `$${totalCalculado}`;
}