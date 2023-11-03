//console.log('carrito de compras 🍃😁')

const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const agregueBotones = document.querySelectorAll('.card .btn');

const carritoObjetos = [];

const AgregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    const indec = carritoObjetos.findIndex((item) => item.id === producto.id);
    console.log(indec);

    if (indec === -1) {
        carritoObjetos.push(producto);
    } else {
        carritoObjetos[indec].cantidad ++
    }


    pintarCarrito(carritoObjetos);

    console.log(carritoObjetos);

};

const pintarCarrito = (array) => {
  
   array.forEach(item => {
        carrito.textContent = '';

        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);

};

agregueBotones.forEach((btn) => btn.addEventListener('click', AgregarAlCarrito));


