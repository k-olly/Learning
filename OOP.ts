type Behaviour = "good" | "bad";

class Dog {
    name:string;
    stomachFullness: number = 0;
    stomachLimit: number;
    behaviour: Behaviour;
    constructor (name: string, stomachLimit: number, behaviour: Behaviour) {
        this.name = name;
        this.stomachLimit = stomachLimit;
        this.behaviour =  behaviour;
    }
    eat(food:number) {
        console.log(`${this.name} is eating`);
        this.stomachFullness += food;
        if(this.behaviour === "bad") {
            console.log(`${this.name} is behaving badly`);
            this.poop();
        }
    }
    poop() {
        if (this.stomachFullness >= this.stomachLimit) {
            console.log(`${this.name} is pooping`);
            this.stomachFullness = 0;
        } else {
            console.log(`${this.name} isn't pooping`);
        }
    }
}

class Human {
    name:string;
    constructor(name: string) {
        this.name = name;
    }
    feedDog(dog: Dog, food: number) {
        console.log(`${this.name} is feeding ${dog.name}`);
        dog.eat(food);
    }
    takeOutDog(dog: Dog) {
        console.log(`${this.name} is taking out ${dog.name}`);
        dog.poop();
    }
}

const zille = new Human("Zille");
const meme = new Dog("Meme", 150, "good");
const badDog = new Dog("Bad Dog", 100, "bad");

zille.feedDog(meme, 200);
zille.takeOutDog(meme);
zille.feedDog(badDog, 200);
zille.takeOutDog(badDog);