
class persona{
   private nombre:string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    getNombre():string{
        return this.nombre;
    }
    static metodoEstatico():number{
        return 10;
    }

}

let persona1 = new persona("Jefferson");
console.log(persona1.getNombre());
console.log(persona.metodoEstatico());