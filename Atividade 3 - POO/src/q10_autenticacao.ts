class Autenticacao{

    usuario: string;
    senha: number;

    constructor(u: string, s: number){
        this.usuario = u; 
        this.senha = s; 
    }

    validar(): boolean{
        return this.usuario == 'admin' && this.senha == 1234;
    }
}


let autenticacao1 = new Autenticacao('admin', 1234);

console.log(autenticacao1.validar());

let autenticacao2 = new Autenticacao('usuario', 1234);

console.log(autenticacao2.validar());

let autenticacao3 = new Autenticacao('admin', 234);

console.log(autenticacao3.validar());

let autenticacao4 = new Autenticacao('usuario', 345);

console.log(autenticacao4.validar());