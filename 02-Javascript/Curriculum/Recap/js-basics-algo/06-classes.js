class Circle {
  constructor(xPos, yPos, radius) {
    this.x = xPos
    this.y = yPos
    this.r = radius
  }
  move(xOffset, yOffset) {
    this.x += xOffset
    this.y += yOffset
  }
  get surface() {
    return Math.pow(this.r, 2) * Math.PI
  }
}
let testCircle = new Circle(4,5,2)
console.log(testCircle);
console.log(testCircle.surface);
testCircle.move(2,1)
console.log(testCircle);

// EXERCISE 6.2

class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, height) {
    this.topLeftXPos = topLeftXPos
    this.topLeftYPos = topLeftYPos
    this.w = width
    this.h = height
  }
  collides(otherRectangle) {
    if (otherRectangle.topLeftXPos + otherRectangle.w <= this.topLeftXPos ||  // CASE 1: rect1 rechts van rect2
        otherRectangle.topLeftYPos - otherRectangle.h >= this.topLeftYPos ||  // CASE 2: rect1 onder rect2
        this.topLeftXPos + this.w <= otherRectangle.topLeftXPos ||            // CASE 3: rect1 links van rect2
        this.topLeftYPos - this.h >= otherRectangle.topLeftYPos) {            // CASE 4: rect1 boven rect2

      return false;
    } else {
      return true;
    }
  }
}

let rect1 = new Rectangle(2,6,4,3)
let rect2 = new Rectangle(4,4,4,4)
let rect3 = new Rectangle(6,5,3,3)
let rect4 = new Rectangle(1,5,3,6)
console.log(`Do they collide? CASE1: ${rect1.collides(rect2)}, CASE2: ${rect1.collides(rect3)}, CASE3: ${rect2.collides(rect3)}, CASE4: ${rect3.collides(rect4)}`);
// TESTCASE1: rect1 should intersect with rect2: expect 'true' will be returned
// TESTCASE2: rect1 touches borders with rect3: should return 'false', if not fix touching border case
// TESTCASE3: rect2 and 3 should intersect: expect 'true' to be returned
// TESTCASE4: obvious case where rect3 and rect4 share no borders, should return 'false'

// EXERCISE 6.3
let arrayOfRect = []
const create1000RandomRect = (array) => {
  let randomRect, a, b, c, d
  for (let i = 0; i < 1000; i++) {
    a = Math.ceil(Math.random() * 100)
    b = Math.ceil(Math.random() * 100)
    c = Math.ceil(Math.random() * 100)
    d = Math.ceil(Math.random() * 100)
    randomRect = new Rectangle(a,b,c,d)
    array.push(randomRect)
  }
  return array
}
const checkCollisions = (array) => {
  for (let n = 0; n < array.length; n++) {
    for (let i = 0; i < array.length; i++) {
      console.log(`Rectangle ${n+1} collides with rectangle ${i+1}: ${array[n].collides(array[i])}`);
    }
  }
}
let _1000RandomRect = create1000RandomRect(arrayOfRect)
checkCollisions(_1000RandomRect);
