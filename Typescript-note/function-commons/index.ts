// basic
function count(num: number) {
  if (num) {
    return num * num;
  }
}

const value = count(3); //9
console.log(value);

// return void
function callback(fn: (output: string) => void) {
  // const output = 100; // error type
  const output = "Hello world!";
  fn(output); //Hello world!
}

callback((text) => {
  console.log(text);
});

function getUser(fn: () => object | null) {
  const name = fn();
  console.log(name); //{ name: 'Dennis' }
  return name;
}

getUser(() => {
  return { name: "Dennis" };
});

export {};
