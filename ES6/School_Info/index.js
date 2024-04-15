const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};


/* ->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->-> */


// Problem 10: countCalculation [1]

const countCalculation = (school) => {
  let { departments: { math: { teachers: mathTeachersCount, students: mathStudentsCount }, history: { teachers: historyTeachersCount, students: historyStudentsCount } } } = school;
  return { mathTeachersCount: mathTeachersCount, mathStudentsCount: mathStudentsCount, historyTeachersCount: historyTeachersCount, historyStudentsCount: historyStudentsCount }
}

console.log(countCalculation(school));


/* ->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->-> */


// Problem 11: findTopStudent [1]

const findTopStudent = (school, course) => {
  let { students } = school;
  let courseMaxMarks = 0;
  let maxMarksStudent;
  for(let student of students){
    let {scores} = student;
    let courseScore = scores[course];
    if(courseScore > courseMaxMarks){
      courseMaxMarks = courseScore;
      maxMarksStudent = student;
    }
   
    
  }
  return maxMarksStudent;

}

console.log(findTopStudent(school, "history"));


/* ->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->-> */



// Problem 12: addNewDept [1]

const addNewDept = (school , art) => {
  let {departments} = school;
  let newObj = {...departments , art};
  departments = newObj;
  school = {...school, departments};
  return school;
}

let art = {
  teachers: 2, students : 50
};
console.log(addNewDept(school, art));


/* ->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->-> */



// Problem 13: highestStudentCountDepartment[1]

const highestStudentCountDepartment = (school) =>{
  let highestCount = 0;
  let highestStudentDepartment;
  let {departments} = school;
  for(let a in departments){
      const { students } = departments[a];
      if (students > highestCount) {
        highestCount = students;
        highestStudentDepartment = a;
      }
  }
  return highestStudentDepartment;
}

console.log(highestStudentCountDepartment(school));//math


/* ->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->-> */



// Problem 14: Greeting Message [1]

const generateGreeting = (name , language = "English") => {
  let greetings = {
    English : ` Hello, ${name}! `,
    Spanish : `Hola, ${name}!`,
    French : `Bonjour, ${name}!`
  }
  return greetings[language];
}

console.log(generateGreeting("Akash Yadav", "Spanish"));