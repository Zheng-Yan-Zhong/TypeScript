class GenericAdder<T extends number | string> {
  initialValue: T;

  constructor(initialValue: T) {
    this.initialValue = initialValue;
  }

  // add(arg1: T, arg2: T): T {
  //   return arg1 + arg2; //Operator '+' cannot be applied to types 'T' and 'T'.
  // }

  add(arg1: T, arg2: T): T {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
      return (arg1 + arg2) as T;
    }
    if (typeof arg1 === "string" && typeof arg2 === "string") {
      return (arg1 + arg2) as T;
    }
    throw new Error("invalid type");
  }
}
