interface usuario{
    nombreUsuario: string;
    password:string;
    confirmarPassword?:string;
}

let usuario1:usuario = {nombreUsuario: "Jeff", password:"1234"};
console.log(usuario1);

interface Abordar{
    AbordarTransporte():void;
}

let avion:Abordar = {
    AbordarTransporte: function(){
        console.log("Abordando");
    }
}

avion.AbordarTransporte();