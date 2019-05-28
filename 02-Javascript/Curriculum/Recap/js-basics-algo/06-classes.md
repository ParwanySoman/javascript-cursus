
# Algorithmics with JavaScript 06 - Classes

Classes are mostly used in object-oriented programming which is a complex technique and this course do not aim at teaching it deeply.

So instead we will have a brief overview of classes in JavaScript just before we finish this training.

## Theory

### Classes

```javascript
class Human {
  constructor(firstName, name) {
    this.firstName = firstName;
    this.name = name;
  }
  get fullName() {
    return this.firstName + " " + this.name;
  }
  set fullName(val) {
    this.firstName = val.split(" ")[0];
    this.name = val.split(" ")[1];
  }
  talk() {
    console.log("Hi, my name is " + this.firstName + " " + this.name);
  }
}

let obj1 = new Human("Gerard", "Lambert");

console.log(obj1.firstName) // Gerard
console.log(obj1.fullName) // Gerard Lambert

obj1.fullName = "Renaud Sechan";

console.log(obj1.firstName); // Renaud

let obj2 = new Human("John", "Smith");

obj1.talk(); // Hi, my name is Renaud Sechan
obj2.talk(); // Hi, my name is John Smith
```

**Classes** are like an object template. They allow to create objects.

### Constructor and instances

Classes often have a **constructor**. It's a function that will be called when the object is created.

When we create an object from a class we call that object an **instance** of that class. The act of creating it is called the **instanciation**.

```javascript
class Car {
  // this is the constructor
  constructor(brand) {
    this.brand = brand;
  }
}

// x is an instance of the class Car
let x = new Car("Mercedes");
```

We instanciate objects using the `new` keyword. When doing so the new object will be created and the constructor called.

### Methods and this

Classes will usually contain ```methods```. That's just another name for function in the context of classes.

Methods (just like the constructor or the accessors) can use the `this` keyword to access the current object.

```javascript
class Country {
  constructor(name) {
    this.name = name;
  }
  declareWar(other) {
    console.log(this.name + " declare war to " + other);
  }
}

new Country("United States").declareWar("everyone");
```

### Accessors

As we've seen it you can access any attribute inside an object simply using the `.` operator. Classes allow us to make "fake" attributes that will instead trigger a function when we try to get or set them.

```javascript
class Film {
  constructor(cast) {
    this.cast = cast;
  }
  get firstCastMember() {
    return this.cast[0];
  }
  set firstCastMember(val) {
    this.cast[0] = val;
  }
}

let starWars = new Film(["Mark Hamill", "Harrison Ford"]);
console.log(starWars.firstCastMember); // Mark Hammil
starWars.firstCastMember = "Carrie Fisher";
console.log(starWars.firstCastMember); // Carrie Fisher
```

### Class inheritance

Even though it's an advanced technique mostly used in frameworks that we will not discuss much more, know that it's possible to re-use the features of a class in another class. That's what's called **inheritance**.

```javascript
class A {
  constructor(x) {
    this.x = x;
  }
  k() {
    return this.x + 2;
  }
}

class B extends A {
  k() {
    return super.k() + 3;
  }
}

console.log(new B(1).k()); // 6
```

## Exercises

### Exercise 6.1

Create a class named `Circle` with attributes `xPos`, `yPos` and `radius`. Add a method named `move(xOffset, yOffset)` that will adjust the position of the circle. Add a getter accessor named `surface` that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.

### Exercise 6.2

Create a class name `Rectangle` with attributes `topLeftXPos`, `topLeftYPos`, `width` and `lenght`. Add a method named `collides(otherRectangle)` that returns `true` only if the current rectangle collides with `otherRectangle`.

Test the `collides(otherRectangle)` method by using multiple test cases.

### Exercise 6.3

Create a program that will re-use the `Rectangle` class you created previously. It should generate 1000 random instances of `Rectangle` with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.

## Ressources

* [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
