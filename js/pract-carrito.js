//console.log('carrito de compras 🍃😁')

const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const footer = document.getElementById('footer');
const templatefooter = document.getElementById('templatefooter');
const fragment = document.createDocumentFragment();

document.addEventListener('click', (e) => {
    // console.log(e.target.matches('.card .btn-outline-primary'));

    if(e.target.matches('.card .btn-outline-primary')) {
        // console.log('se esta ejecutando la requerido...');
        AgregarAlCarrito(e);
    };

    // console.log(e.target.matches('.list-group-item .btn-success'));
    if(e.target.matches('#carrito .list-group-item .btn-success')) {
        btnAumentar(e)
    };

    if(e.target.matches('#carrito .list-group-item .btn-danger')) {
        btnDisminuir(e)
    };
});

let carritoObjetos = [];

const AgregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };

    // console.log(producto);

    const indec = carritoObjetos.findIndex((item) => item.id === producto.id);
    // console.log(indec);

    if (indec === -1) {
        carritoObjetos.push(producto);
    } else {
        carritoObjetos[indec].cantidad++;
        // carritoObjetos[indec].precio = carritoObjetos[indec].cantidad * producto.precio;
    }
    
    pintarCarrito();

    console.log(carritoObjetos);

};

const pintarCarrito = () => {
  
    carritoObjetos.forEach(item => {
        carrito.textContent = '';

        const clone = template.content.cloneNode(true);
        clone.querySelector('.text-white .lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad;

        clone.querySelector('.btn-success').dataset.id = item.id;
        clone.querySelector('.btn-danger').dataset.id = item.id;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);

    pintarFooter()

};

const pintarFooter = () => {
    console.log('pintado el footer')
    footer.textContent = ""

    const total = carritoObjetos.reduce(
        (acc, current) => acc + current.cantidad * current.precio, 
        0
    );
    const clone = templatefooter.content.cloneNode(true);
    clone.querySelector('span').textContent = total;

    footer.appendChild(clone);
}

const btnAumentar = (e) => {
    console.log('me diste click...', e.target.dataset.id);
    carritoObjetos = carritoObjetos.map(item => {
        if(item.id === e.target.dataset.id) {
            item.cantidad++;
        };
        return item
    });

    pintarCarrito()
};

const btnDisminuir = (e) => {
    // console.log(e.target.dataset.id);
    carritoObjetos = carritoObjetos.filter((item) => {
        // console.log(item);
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--;
                // console.log(item);
                if (item.cantidad === 0) return;
                return item;
            }
        } else {
            return item;
        }
    });
    pintarCarrito();
    console.log(carritoObjetos);
};