// Combining Arrays

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

let combiningArrays = (fruits , vegetables) => {
    let arr2 = [...fruits , ...vegetables];
    return arr2;
}

console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]

// Cloning Objects

const person = { name: "John", age: 30, address: "123 Main St" };

let cloningObjects = (person) => {
    let personCopy = {...person};
    return personCopy
}

console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }

// Merging Objects

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

let mergingObjects = (student , course) => {
    let obj = {...student , ...course};
    return obj;
}

console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }

// Combining nested arrays

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];

let combiningNestedArrays = (array1 , array2) => {
    let newArr = [...array1 , ...array2];
    return newArr;
}

  console.log(combiningNestedArrays(array1, array2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]