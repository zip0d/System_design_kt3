// Пример нарушения SRP
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    saveToDatabase() {
      // Сохранение пользователя в базу данных
    }
  
    sendEmail() {
      // Отправка электронной почты пользователю
    }
  }
  
  // Правильное применение SRP
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  class UserRepository {
    save(user) {
      // Сохранение пользователя в базу данных
    }
  }
  
  class EmailService {
    sendEmail(user) {
      // Отправка электронной почты пользователю
    }
  }
  
// Пример нарушения OCP
class Shape {
    constructor(type) {
      this.type = type;
    }
  
    calculateArea() {
      throw new Error("This method must be implemented by subclasses");
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super("Square");
      this.sideLength = sideLength;
    }
  
    calculateArea() {
      return this.sideLength * this.sideLength;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super("Circle");
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Правильное применение OCP
  class Shape {
    calculateArea() {
      throw new Error("This method must be implemented by subclasses");
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    calculateArea() {
      return this.sideLength * this.sideLength;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }

// Пример нарушения LSP
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    setWidth(width) {
      this.width = width;
    }
  
    setHeight(height) {
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
  
    setWidth(width) {
      this.width = width;
      this.height = width;
    }
  
    setHeight(height) {
      this.width = height;
      this.height = height;
    }
  }
  
  // Правильное применение LSP
  class Shape {
    calculateArea() {
      throw new Error("This method must be implemented by subclasses");
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    calculateArea() {
      return this.sideLength * this.sideLength;
    }
  }

  // Пример нарушения ISP
class Machine {
    print() {
      // Печать документа
    }
  
    scan() {
      // Сканирование документа
    }
  
    fax() {
      // Отправка факса
    }
  }
  
  class OldPrinter extends Machine {
    scan() {
      // Не используется, но нужно реализовать, чтобы не было ошибок
    }
  
    fax() {
      // Не используется, но нужно реализовать, чтобы не было ошибок
    }
  }
  
  // Правильное применение ISP
  class Printer {
    print() {
      // Печать документа
    }
  }
  
  class Scanner {
    scan() {
      // Сканирование документа
    }
  }
  
  class Fax {
    fax() {
      // Отправка факса
    }
  }
  
















