function parseCount(count){
  let result = Number.parseInt(count);
  if(isNaN(result)){
    throw new Error("Невалидное значение");
  } return result;
}

function validateCount(count){
  try {
    parseCount(count);
  } catch (Error){
    return Error;
  } return parseCount(count);
}

class Triangle{
  constructor (a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;

    let sum = this.a + this.b;
    let sum1 = this.a + this.c;
    let sum2 = this.b + this.c;
    if(sum < this.c || sum1 < this.b || sum2 < this.a){
      throw new Error("Треугольник с такими сторонами не существует");
    } else {
      return true;
    }
  }

  getPerimeter(){
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea(){
    let p = 1/2 * this.getPerimeter();
    let Area = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
    return Number(Area.toFixed(3));
  }
}

function getTriangle(a, b, c){
  try{
    return new Triangle(a, b, c);
  } catch(Error){
      let triangle = new Object();
      triangle.getArea = function(){
        return 'Ошибка! Треугольник не существует';
      };
      triangle.getPerimeter = function(){
        return 'Ошибка! Треугольник не существует';
      };
      return triangle;
  }
}