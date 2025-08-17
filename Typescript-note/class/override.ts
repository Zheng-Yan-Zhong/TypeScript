interface Shout {
  shout(): void;
}
class Animal implements Shout {
  // shout = (): void => console.log("...");
  shout(): void {
    console.log("...");
  }
}

class Cat extends Animal {
  shout() {
    console.log("meow....");
  }
}

const cat = new Cat();
cat.shout(); //meow....
