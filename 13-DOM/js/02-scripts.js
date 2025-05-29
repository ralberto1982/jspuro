const enlace = document.createElement('a')
enlace.textContent = 'Nuevo enlace'
enlace.href = '/nuevo enlace'
enlace.target = '_blanck'
enlace.classList.add('algo')

// const navegaciones = document.querySelector('.navegacion')
// navegaciones.insertBefore(enlace, navegaciones.children[0])


// console.log(enlace)

// creando los textos para la card
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierticos'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Conciertico de super rock'
parrafo2.classList.add('titulo')
const parrafo3 = document.createElement('p')
parrafo3.textContent = '1000 esta de promcion'
parrafo3.classList.add('precio')

// creando div para la car
const info = document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// creando la imagen para la card
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'
imagen.alt = 'imagen'

// crear el div padre de la car
const card = document.createElement('div')
card.classList.add('card')
card.appendChild(imagen)
card.appendChild(info)

const contenedorCard = document.querySelector('.contenedor-cards')
// contenedorCard.appendChild(card, )
contenedorCard.insertBefore(card, contenedorCard.children[2])


// DOM scripting

const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')


btnFlotante.addEventListener('click', mostrarOcultar)

function mostrarOcultar() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo')
        this.classList.remove('activo')
        this.textContent = 'Idioma y Moneda'
    } else {
        footer.classList.add('activo')
        this.classList.add('activo')
        this.textContent = 'X'
    }

} 