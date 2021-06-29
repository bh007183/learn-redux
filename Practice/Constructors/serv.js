function Animal(name, color){
    this.name = name;
    this.color = color;

    eat = () => {
        console.log("nonononnomn")
    }

}
function Cat(species){
    this.species = species
    this.super(name, color)
    

}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

const tabby = new Cat("blanckio", "orange", "Cat")
console.log(tabby)