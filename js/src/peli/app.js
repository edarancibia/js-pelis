import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';

export default class App{
    
    constructor(){
        //inicializar propiedades
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }

    load() {
        //añadir pelis
        this.add.peliSave();

        const pelis = this.storage.getData();
        this.list.show(pelis);

        console.log('La app ha sido incializada');
    }
}