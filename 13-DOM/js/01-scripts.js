let elemento;
// podemo selecionar cualquier elemento del dom
elemento = document
elemento = document.all
elemento = document.body
elemento = document.domain
elemento = document.forms
elemento = document.forms[0].id
elemento = document.forms[0].classList
elemento = document.links
elemento = document.links[4].classList
elemento = document.links[4].className
elemento = document.images
elemento = document.scripts
elemento = document.scripts

// ======================================
// selecionar elementos por su clase 
const header = document.getElementsByClassName('header')
const hero = document.getElementsByClassName('hero')

// si las clases existen mas de una vez ,e traeran todas las clases
const contenedor = document.getElementsByClassName('contenedor')
// si no exite te traera una coleccion vacia
const contenedores = document.getElementsByClassName('contenedo')

// =======================================
// los id, si hay varios formularios traera el 
// primero que encuentre ya que los id son unicos
const formulario = document.getElementById('formulario')
// =======================================

//  querySelector,  es un selector muy similar a los utilizados en css
// permite selccionar tambien id

// const card = document.querySelector('.card')
// podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info')
// selecionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
// selecionando id
const formulario2 = document.querySelector('#formulario')

// selecionar etiquetas HTML
const nav = document.querySelector('nav')

// console.log(nav)

//=======================================
// acceder a un elemento y traer su contenido, podemos utilizar chaining o encadenamiento
// const encabezado = document.querySelector('.contenido-hero h1')
// console.log(encabezado.innerText)//si en css visibility hidden no lo encuetra
// console.log(encabezado.textContent)//si lo va encontrar
// console.log(encabezado.innerHTML)//trae html

// const nuevoHeading = 'Nuevo Heading'
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading


// =====================================
// seleccionando imagenes

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg'

// cambiar css
// const encabezador = document.querySelector('h1')
// encabezador.style.backgroundColor = 'red'
// encabezador.style.fontFamily = 'Arial'
// encabezador.style.textTransform = 'upperCase'

// ========================================
// agregando clases
const cardd = document.querySelector('.card')
cardd.classList.add('nueva-clase')

// ========================================
// traversing del DOM O RECORRER EL DOM
// los elementos tienen nodos que se relacionan y son de diferente tipo
// const navegacion = document.querySelector('.navegacion')
// console.log(navegacion.childNodes)//los saltos de linea son considerados elementos
// console.log(navegacion.children)//trae los elementos reales
// console.log(navegacion.children[2])//trae un hijo especifico del nodo o array de elementos

const card = document.querySelector('.card')
// console.log(card.children[1].children[1].textContent = 'nuevo heading')
// console.log(card.children[0].src = 'img/hacer1.jpg')

// =========================================
// traversing del hijo al padre hacia atras
// console.log(card.parentElement.parentElement.parentElement)
// card.nextElementSibling
// card.previousElementSibling
// console.log(card.firstElementChild)
// console.log(card.lastElementChild)
// =========================================

// eliminar elementos
// const primerEnlace = document.querySelector('a')
// primerEnlace.remove()
// console.log(primerEnlace)


// eliminar desde el padre
const navegacion = document.querySelector('.navegacion')
// navegacion.removeChild(navegacion.children[1])
navegacion.children[3].remove()