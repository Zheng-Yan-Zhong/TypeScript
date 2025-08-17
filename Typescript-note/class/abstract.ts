abstract class Car {
  move(): void {
    console.log("moving");
  }

  abstract shift(): void;
}

class Toyota extends Car {
  shift() {
    console.log("...");
  }
}

const t_car = new Toyota();
t_car.move();
