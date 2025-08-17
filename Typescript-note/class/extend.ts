class Car {
  move(): void {
    console.log("moving");
  }
}

class Toyota extends Car {}

const t_car = new Toyota();
t_car.move();

export default {};
