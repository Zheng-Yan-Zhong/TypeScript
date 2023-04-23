// interface
interface User<T> {
  name: T;
}

// type
type Staff<T> = {
  name: T;
};

// function

function getMultiple<T>(arr: T[]): T | null {
  if (arr.length > 0) {
    return arr[0];
  }
  // return undefined; //error must be null
  return null;
}

getMultiple([2, 4, 8]);

function combine<T>(arr: T[], arr2: T[]): T[] | undefined {
  if (arr.length == 0 || arr2.length == 0) return undefined;
  return arr.concat(arr2);
}
// const result = combine([1, 2], ["Hello world"]); //error generics can catch input types
const result = combine<number | string>([1, 2], ["Hello world"]);

console.log(result); //[ 1, 2, 'Hello world' ]

export {};
