function Student(name, gender, age) {
 this.name = name;
 this.gender = gender;
 this.age = age;
 this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
 if (this.marks !== undefined) {
  this.marks.push(...marks);
 } 
}

Student.prototype.getAverage = function () {
 let marksSum = 0;
 // let marksNumber = 0;
 let result;

 if (this.marks === undefined || this.marks.length === 0) {
  return 0;
 }

 if (this.marks.length > 0) {
  for(let value of this.marks) {
   marksSum += value;
   // marksNumber += 1;
  }
  result = marksSum / this.marks.length;
 }

 return result;
}

Student.prototype.exclude = function (reason) {
 delete this.marks;
 delete this.subject;
 this.excluded = reason;
}

// let a = new Student("Alex", "male", 33);
// let h = new Student("Helen", "female", 29);
// let f = new Student("Faceless", "unknown", 100);
// a.addMarks(1, 2, 3);