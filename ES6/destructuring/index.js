const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
  
let employeeInformation = (employees) =>{
    let [a, b, c] = employees;
    let {name : secondEmployeeName , department : secondEmployeeDepartment} = b;
    return {secondEmployeeName , secondEmployeeDepartment};
    
    
}

console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }

//

const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  const averageSalary = (employees2) => {
    let length = 0;
    let tSalary = 0;
    employees2.forEach(({salary})=>{
        tSalary+= salary;
        length++;
    })
    return tSalary/length;
  }
  
  console.log(averageSalary(employees2)); // Output: 60000

//

const employees3 = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

let thirdEmployeeInfo = (employees3) => {
  let [a, b, c] = employees3;
  let {name : thirdEmployeeName , age : thirdEmployeeAge , department , salary : thirdEmployeeSalary} = c;
  let Bonus = (10 / 100) * thirdEmployeeSalary;
  let E = `Employee : ${thirdEmployeeName}, Age : ${thirdEmployeeAge}, Salary : ${thirdEmployeeSalary}, Bonus : ${Bonus}`;
  return E;
  // return `Employee : ${thirdEmployeeName}, Age : ${thirdEmployeeAge}, Salary : ${thirdEmployeeSalary}, Bonus : ${Bonus}`;

}

console.log(thirdEmployeeInfo(employees3)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
