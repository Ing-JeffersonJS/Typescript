
function Saludar(target: function): void{
    target.prototype.saludos= function():void{
        console.log("Hola Ing desde Deocradores")
    }
}

@Saludar

class hola {
    constructor(){}
}

let hola1 = new hola();
hola1.saludos();