// Animal class represents a generic animal entity.
class Animal {
    // Private field #type to store the type of the animal.
    #type;

    // Constructor to initialize the type of the animal.
    constructor(type) {
        this.#type = type;
    }

    // Getter method to retrieve the type of the animal.
    get Type() {
        return this.#type;
    }
}

// Mammal class represents a mammal animal.
class Mammal extends Animal {
    // Constructor to initialize the type of the mammal as "Mammal".
    constructor() {
        super("Mammal");
    }
}

// Bird class represents a bird animal.
class Bird extends Animal {
    // Constructor to initialize the type of the bird as "Bird".
    constructor() {
        super("Bird");
    }
}

// Lion class represents a lion, which is a mammal.
class Lion extends Mammal {
    // Private field #maneColor to store the color of the lion's mane.
    #maneColor;

    // Constructor to initialize the type of the lion as "Mammal" and the color of the mane.
    constructor() {
        super();
        this.#maneColor = "Brown";
    }

    // Getter method to retrieve the color of the mane of the lion.
    get maneColor() {
        return this.#maneColor;
    }

    // Setter method to update the color of the mane of the lion.
    set maneColor(value) {
        this.#maneColor = value;
    }
}

// Cow class represents a cow, which is a mammal.
class Cow extends Mammal {
    // Private field #milkProduction to store the milk production level of the cow.
    #milkProduction;

    // Constructor to initialize the type of the cow as "Mammal" and the milk production level.
    constructor() {
        super();
        this.#milkProduction = "High";
    }

    // Getter method to retrieve the milk production level of the cow.
    get MilkProduction() {
        return this.#milkProduction;
    }

    // Setter method to update the milk production level of the cow.
    set MilkProduction(value) {
        this.#milkProduction = value;
    }
}

// Eagle class represents an eagle, which is a bird.
class Eagle extends Bird {
    // Private field #wingspan to store the wingspan of the eagle.
    #wingspan;

    // Constructor to initialize the type of the eagle as "Bird" and the wingspan.
    constructor() {
        super();
        this.#wingspan = "Large";
    }

    // Getter method to retrieve the wingspan of the eagle.
    get Wingspan() {
        return this.#wingspan;
    }

    // Setter method to update the wingspan of the eagle.
    set Wingspan(value) {
        this.#wingspan = value;
    }
}

// Sparrow class represents a sparrow, which is a bird.
class Sparrow extends Bird {
    // Private field #wingspan to store the wingspan of the sparrow.
    #wingspan;

    // Constructor to initialize the type of the sparrow as "Bird" and the wingspan.
    constructor() {
        super();
        this.#wingspan = "Small";
    }

    // Getter method to retrieve the wingspan of the sparrow.
    get wingspan() {
        return this.#wingspan;
    }

    // Setter method to update the wingspan of the sparrow.
    set wingspan(value) {
        this.#wingspan = value;
    }
}



// Example usage
const lion = new Lion();
const cow = new Cow();
const eagle = new Eagle();
const sparrow = new Sparrow();
lion.ManeColor="Golden";
console.log(lion.ManeColor); // Output: Golden
console.log(lion.Type); // Output: Mammal