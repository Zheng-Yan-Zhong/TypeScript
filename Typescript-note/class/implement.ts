interface Car {
  shift(): void;
}

class Audi implements Car {
  shift(): void {}
}
/**
 * Class 'Audi' incorrectly implements interface 'Car'.
  Property 'shift' is missing in type 'Audi' but required in type 'Car'.
 */

export default {};
