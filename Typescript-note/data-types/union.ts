// function printId(id: string | number) {
//   console.log(id.toLowerCase()); //Property 'toLowerCase' does not exist on type 'number'.
// }

function printId(id: string | number) {
  if (typeof id == "string") {
    console.log(id.toLowerCase());
  } else {
    // ...
  }
}
