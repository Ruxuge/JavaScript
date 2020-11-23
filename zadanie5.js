const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', garde: 65 },
  { name: 'Katie', grade: 90 }
];

let student = students.filter(student => {
  if ( student.grade > 84 && student.grade < 95 ){
    console.log(student);
  }
});