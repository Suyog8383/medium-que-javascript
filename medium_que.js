const array = [1, 2, 3, 4, 5];
array.reverse();
// array is now [5, 4, 3, 2, 1]

const array2 = [1, 2, 3, 4, 5];
const newArray = array2.slice(1, 4);
// newArray is [2, 3, 4]

const array3 = [1, 2, 3, 4, 5];
array3.splice(2, 2, "a", "b");
// array is now [1, 2, 'a', 'b', 5]

const array4 = ["apple", "banana", "orange"];
const joinedString = array4.join(", ");
// joinedString is 'apple, banana, orange'

const array5 = [1, 2, 3, 4, 5];
array5.forEach((number) => console.log(number));
// logs 1, 2, 3, 4, 5

const str = "milk and @#$%&!bread";
const noSpecialChars = str.replace(/[^a-zA-Z0-9]/g, ""); //(/[^a-zA-Z0-9 ]/g, '')
console.log(noSpecialChars); // milk and bread
