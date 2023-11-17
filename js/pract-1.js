console.log('welcome to my pag 🍃'); 

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    // console.log('ejecutando datos...')
    
    try {
        loadingData(true)
        
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()

        // console.log(data)
        pintarCard(data)
    } catch (error) {
        console.log(error)
    } finally {
        loadingData(false)
    }

}

const pintarCard = (data) => {
    const cards = document.getElementById('card-dinamicas');
    const templateCard = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    // console.log(data);
    
    data.results.forEach(item => {
        // console.log(item);
        const clone = templateCard.cloneNode(true);
        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;
        clone.querySelector('.card-img-top').setAttribute('src', item.image);

        fragment.appendChild(clone);
    });
    
    // guardamos del fragment para evitar el reflow...
    cards.appendChild(fragment);
};

// aqui ocupamos el loading...
const loadingData = estado => {
    const loading = document.getElementById('loading')
    if (estado) {
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none')
    }
}
















//fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//    .then((res) => res.json())
//    .then((data) => console.log(data));