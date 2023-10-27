//console.log('carrito de compras 🍃😁')

const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const agregueBotones = document.querySelectorAll('.card .btn');

const carritoObjetos = {};

const AgregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    if(carritoObjetos.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carritoObjetos[producto.titulo].cantidad + 1;
    };

    carritoObjetos[producto.titulo] = producto;

    pintarCarrito();

    //console.log(carritoObjetos);

};

const pintarCarrito = () => {
  
    Object.values(carritoObjetos).forEach(item => {
        carrito.textContent = '';

        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);

};

agregueBotones.forEach((btn) => btn.addEventListener('click', AgregarAlCarrito));

