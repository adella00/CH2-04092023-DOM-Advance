// let student1 = {
//   name: 'Ale',
//   age: 28,
//   programmingLanguage: ['PHP', 'C++', 'C#', 'Golang', 'Javascript', 'Java'],
// };

// let student2 = {
//   name: 'Yoga',
//   age: 55,
//   programmingLanguage: ['Love', 'Javascript'],
// };
// let student3 = {
//   name: 'Fadhlan',
//   age: 8,
//   programmingLanguage: ['India', 'Javascript'],
// };

// constructor Function
function StudentFSW(name, age, programmingLanguage) {
  this.name = name;
  this.age = age;
  this.programmingLanguage = programmingLanguage;
}

// inisialisasi object
var student1 = new StudentFSW('Hafizh', 20, ['Java']);
var student2 = new StudentFSW('Adrian', 20, ['Javascript']);
var student3 = new StudentFSW('Diki', 18, ['Physical Touch']);

console.log(student2.age);
