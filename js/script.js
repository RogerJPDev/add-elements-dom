 // Aquí tu código

 
 let lista = document.getElementById('lista')
 let boton = document.getElementById('agregar')

 boton.addEventListener('click', function(){
    let listaElementos = prompt('pon aqui los elementos que han de ir a la lista')
    lista.insertAdjacentHTML('beforeend', `<li>'${listaElementos}'</li>`)
})
