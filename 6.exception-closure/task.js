function parseCount(smthToParse) {
 const final = Number.parseFloat(smthToParse);
 if (Number.isNaN(final)) {
  throw new Error("Невалидное значение");
 }
 return final;
}

function validateCount(smthToParse) {
 try {
  return parseCount(smthToParse);
 } catch (error) {
  return error;
 }
}

class Triangle {
 constructor(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  if ((a + b) < c || (a + c) < b || (b + c) < a) {
   throw new Error("Треугольник с такими сторонами не существует");
  }
 }

 get perimeter() {
  return this.a + this.b + this.c;
 }

 get area() {
  const halfPerimeter = this.perimeter / 2;
  return parseFloat(Math.sqrt(
   (halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c))
  ).toFixed(3));
 }
}

function getTriangle(a, b, c) {
 try {
  return new Triangle(a, b, c);
 } catch (error) {
  return {
   get perimeter() {
    return "Ошибка! Треугольник не существует";
   },
   get area() {
    return "Ошибка! Треугольник не существует";
   }
  }
 }
}