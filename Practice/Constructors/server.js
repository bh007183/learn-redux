

class Animal{
    constructor(name, color){
    this.name = name
    this.color = color
    }

    eat = () => {
        console.log("nom nom nom")
    }
    
    
}

Animal.prototype.bark = () => {console.log("Ruf ruf ruf")}
Animal.prototype.constructor = Animal

class Cat extends Animal{
    constructor(name, color, species){
        super(name, color)
        this.species = species
    }
    meow= () => {
        console.log("meow meow" + this.species)
    }
    
    
    
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat



const tabby = new Cat("Tiggy", "silver", "Cat")
console.log(tabby.constructor)



