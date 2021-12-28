import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
    constructor(){
        this.storage = new Storage();
        this.list = new List();

        //conseguir elementos del dom
        this.title_field = document.querySelector('#title');
        this.description_field = document.querySelector('#description');
        this.save_btn = document.querySelector('#save');
    }

    peliSave(){
        this.save_btn.onclick = (e) => {
            e.preventDefault();

            //conseguir datos actualizados
            let pelis  = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis, lastId);

            //datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;

            //vlidacion
            if(title != '' || description != ''){
                //crear objeto a guardar
                let peli = {
                    id: lastId++,
                    title,
                    description
                };

                pelis.push(peli);

                //(guardar en LS)
                this.storage.save(pelis);

                //actualizar listado
                //this.list.addToList(peli, pelis);
                this.list.show(pelis);
            } else {
                alert('Introduce bien los datos')
            }
            return false;
        };
    }
}