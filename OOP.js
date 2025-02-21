var Dog = /** @class */ (function () {
    function Dog(name, stomachLimit, behaviour) {
        this.stomachFullness = 0;
        this.name = name;
        this.stomachLimit = stomachLimit;
        this.behaviour = behaviour;
    }
    Dog.prototype.eat = function (food) {
        console.log("".concat(this.name, " is eating"));
        this.stomachFullness += food;
        if (this.behaviour === "bad") {
            console.log("".concat(this.name, " is behaving badly"));
            this.poop();
        }
    };
    Dog.prototype.poop = function () {
        if (this.stomachFullness >= this.stomachLimit) {
            console.log("".concat(this.name, " is pooping"));
            this.stomachFullness = 0;
        }
        else {
            console.log("".concat(this.name, " isn't pooping"));
        }
    };
    return Dog;
}());
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.feedDog = function (dog, food) {
        console.log("".concat(this.name, " is feeding ").concat(dog.name));
        dog.eat(food);
    };
    Human.prototype.takeOutDog = function (dog) {
        console.log("".concat(this.name, " is taking out ").concat(dog.name));
        dog.poop();
    };
    return Human;
}());
var zille = new Human("Zille");
var meme = new Dog("Meme", 150, "good");
var badDog = new Dog("Bad Dog", 100, "bad");
zille.feedDog(meme, 200);
zille.takeOutDog(meme);
zille.feedDog(badDog, 200);
zille.takeOutDog(badDog);
