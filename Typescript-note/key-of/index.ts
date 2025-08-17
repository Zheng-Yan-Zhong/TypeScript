function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user1 = { id: 1, name: "Bob" };

const id = getValue(user1, "id"); // number
const name = getValue(user1, "name"); // string
getValue(user, "age"); //Argument of type '"age"' is not assignable to parameter of type
