import deleteOfList from './delete.js';

export default class List{
    
    constructor(){
        this.content = document.querySelector('#content');
    }

    peliTemplate(peli){
        return `
        <article class="peli-item" id="peli-${peli.id}">
            <h3 class="title">${peli.title}</h3>
            <p class="description">${peli.description}</p>

            <button class="editar" data-id="${peli.id}">Editar</button>
            <button class="borrar" data-id="${peli.id}">Borrar</button>
        </article>`;
    }


    show(pelis){
        this.content.innerHTML = '';

        //recorrer localstorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        });
    }

    //botones de borrado


    //bototnes de edicion
}