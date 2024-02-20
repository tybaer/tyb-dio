class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo || ["guerreiro", "mago", "monge", "ninja"];
    }

    atacar() {         
            switch (this.tipo) {
                case "guerreiro":
                    console.log(`O ${this.tipo} atacou usando magia`);
                    break;
                case "mago":
                    console.log(`O ${this.tipo} atacou usando espada`);
                    break;
                case  "monge":
                    console.log(`O ${this.tipo} atacou usando artes marciais`);
                    break;
                case  "ninja":
                    console.log(`O ${this.tipo} atacou usando shuriken`);
                    break;
    }
    }
}


let heroi1 = new Hero("Frodo", "45", "guerreiro");
let heroi2 = new Hero("Cohen", "100", "monge");
let heroi3 = new Hero("Saruman", "300", "mago");
let heroi4 = new Hero("KungFuPanda", "10", "ninja");

heroi1.atacar();
heroi2.atacar(); 
heroi3.atacar(); 
heroi4.atacar(); 

