// Highest Paid

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  let highestPaid = (employees) => {
    let highestSalary = 0;
    let highestPaid;
    for(let employee of employees){
        let {salary} = employee;

        if(salary > highestSalary){
            highestSalary = salary;
            highestPaid = employee;
        }
    }
    return highestPaid;

  }
  
  console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

//   Destructuring To Swap

const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

//   const  destructuringToSwap = (employees2) => {
//     console.log(employees2);
//     let temp = employees2[0];
//     employees2[0] = employees2[employees2.length-1];
//     employees2[employees2.length-1] = temp;
//     return employees2;
//   }
const destructuringToSwap=(employees2)=>{
    let [a,b,c] = employees2;
    let newArray =[c,b,a];
    employees2 = newArray;
    return employees2;
}
  
  console.log(destructuringToSwap(employees2)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]

