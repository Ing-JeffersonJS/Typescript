"use strict";
class persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new persona("Jefferson");
console.log(persona1.getNombre());
console.log(persona.metodoEstatico());
