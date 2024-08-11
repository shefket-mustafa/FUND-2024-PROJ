function cats(array){
    class Cat {
        name;  //<- tezi trqbwa da gi ima tuk za da gi polzwame w konstruktora 
        age;

        constructor(name,age){
            this.name=name;
            this.age=age;
        }   
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const catString of array) {
            const tokens = catString.split(" ");
            const name=tokens[0];
            const age=tokens[1];

            const cat = new Cat(name,age);
            cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);