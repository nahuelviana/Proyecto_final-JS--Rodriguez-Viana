// Definimos un objeto que contenga información sobre cada comida
const menu = [
  {
    nombre: "Hamburguesa",
    precio: 3000,
    ingredientes: ["pan", "carne", "lechuga", "tomate", "cebolla", "salsa"],
  },
  {
    nombre: "Pizza",
    precio: 2500,
    ingredientes: [
      "masa",
      "salsa",
      "queso",
      "pepperoni",
      "cebolla",
      "pimiento",
    ],
  },
  {
    nombre: "Ensalada",
    precio: 1500,
    ingredientes: [
      "lechuga",
      "tomate",
      "zanahoria",
      "pepino",
      "aceitunas",
      "vinagreta",
    ],
  },
];

// Definimos una función que muestra el menú
function mostrarMenu() {
  console.log("=== MENÚ ===");
  for (let i = 0; i < menu.length; i++) {
    const { nombre, precio } = menu[i];
    console.log(`${i + 1}. ${nombre} - $${precio}`);
  }
}

// Definimos un array para guardar las órdenes de los clientes
let ordenes = [];

// Definimos una función que permite al usuario hacer una orden
function hacerOrden() {
  let opcion = parseInt(
    prompt("Ingrese el número de la comida que desea ordenar:")
  );
  while (opcion < 1 || opcion > menu.length) {
    console.log("Ingrese una opción válida.");
    opcion = parseInt(
      prompt("Ingrese el número de la comida que desea ordenar:")
    );
  }
  const cantidad = parseInt(prompt("Ingrese la cantidad de esa comida:"));
  const comida = menu[opcion - 1];
  const subtotal = comida.precio * cantidad;
  const orden = { comida, cantidad, subtotal };
  ordenes.push(orden);
  console.log(
    `Orden de ${cantidad} ${comida.nombre} agregada a la cuenta. Subtotal: $${subtotal}`
  );
}

// Definimos una función que muestra la cuenta total de las órdenes
function mostrarCuenta() {
  let total = 0;
  console.log("=== CUENTA ===");
  for (let i = 0; i < ordenes.length; i++) {
    const { comida, cantidad, subtotal } = ordenes[i];
    console.log(
      `${cantidad} ${comida.nombre} - $${comida.precio} c/u - subtotal: $${subtotal}`
    );
    total += subtotal;
  }
  console.log(`TOTAL: $${total}`);
}

// Definimos una función que muestra los ingredientes de una comida
function mostrarIngredientes() {
  // Preguntar al cliente qué comida quiere ver
  const comida = prompt(
    "¿Qué comida quieres ver? (Hamburguesa, Pizza, Ensalada)"
  ).toLowerCase();

  // Buscar la comida en el menú
  const comidaSeleccionada = menu.find(
    (item) => item.nombre.toLowerCase() === comida
  );

  // Si se encontró la comida, imprimir sus ingredientes
  if (comidaSeleccionada) {
    console.log(`Ingredientes de ${comidaSeleccionada.nombre}:`);
    for (let i = 0; i < comidaSeleccionada.ingredientes.length; i++) {
      console.log(comidaSeleccionada.ingredientes[i]);
    }
  } else {
    console.log("La comida seleccionada no está en el menú.");
  }
}

function vaciarCarrito() {
  ordenes = [];
  console.log("El carrito de compras ha sido vaciado.");
}

// Hacemos que el programa se ejecute en un ciclo mientras el usuario no decida salir
let salir = false;
while (!salir) {
  const opcion = parseInt(
    prompt(
      "Ingrese una opción:\n1. Ver menú\n2. Hacer orden\n3. Ver cuenta\n4. mostrar ingredientes\n5. Borar pedido\n7. Salir"
    )
  );
  switch (opcion) {
    case 1:
      mostrarMenu();
      break;
    case 2:
      hacerOrden();
      break;
    case 3:
      mostrarCuenta();
      break;
    case 4:
      mostrarIngredientes();
      break;
    case 5:
      vaciarCarrito();
      break;
    case 6:
      PasarAlPago();
    case 7:
      salir = true;
      break;
    default:
      console.log("Opción inválida");
      break;
  }
}
