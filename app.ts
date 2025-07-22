// interface Person {
//   greeting(): void;
// }

// enum PersonType {
//   Employee = "Employee",
//   Manager = "Manager",
// }

// class Employee implements Person {
//   greeting() {
//     console.log("Hello from Employee");
//   }
// }

// class Manager implements Person {
//   greeting() {
//     console.log("Hello from Manager");
//   }
// }

// class PersonFactory {
//   static createPerson(type: string): Person {
//     if (type === PersonType.Employee) {
//       return new Employee();
//     } else if (type === PersonType.Manager) {
//       return new Manager();
//     } else {
//       throw new Error("Invalid person type");
//     }
//   }
// }

// const employee = PersonFactory.createPerson(PersonType.Employee);
// employee.greeting();

// const manager = PersonFactory.createPerson(PersonType.Manager);
// manager.greeting();

// interface PaymentMethod {
//   pay(amount: number): void;
// }

// enum PaymentType {
//   UZUM,
//   CLICK,
//   PAYME,
//   QIWI,
// }

// class UzumPayment implements PaymentMethod {
//   pay(amount: number): void {
//     console.log(`Paying ${amount} using Uzum`);
//   }
// }

// class ClickPayment implements PaymentMethod {
//   pay(amount: number): void {
//     console.log(`Paying ${amount} using Click`);
//   }
// }

// class PaymePayment implements PaymentMethod {
//   pay(amount: number): void {
//     console.log(`Paying ${amount} using Payme`);
//   }
// }

// class QiwiPayment implements PaymentMethod {
//   pay(amount: number): void {
//     console.log(`Paying ${amount} using Qiwi`);
//   }
// }

// class PaymentFactory {
//   static create(type: PaymentType): PaymentMethod {
//     switch (type) {
//       case PaymentType.UZUM:
//         return new UzumPayment();
//       case PaymentType.CLICK:
//         return new ClickPayment();
//       case PaymentType.PAYME:
//         return new PaymePayment();
//       case PaymentType.QIWI:
//         return new QiwiPayment();
//       default:
//         throw new Error("Invalid payment type");
//     }
//   }
// }

// const uzumPayment = PaymentFactory.create(PaymentType.UZUM);
// uzumPayment.pay(1000); // Paying 1000 using Uzum

// const clickPayment = PaymentFactory.create(PaymentType.CLICK);
// clickPayment.pay(2000); // Paying 2000 using Click

// const paymePayment = PaymentFactory.create(PaymentType.PAYME);
// paymePayment.pay(3000); // Paying 3000 using Payme

// const qiwiPayment = PaymentFactory.create(PaymentType.QIWI);
// qiwiPayment.pay(4000); // Paying 4000 using Qiwi

type Constructor<T> = new (...args: any[]) => T;

class Factory {
  static create<T>(Ctor: Constructor<T>, ...args: any[]): T {
    return new Ctor(...args);
  }
}

class User {
  constructor(public name: string) {}
}

class Product {
  constructor(public title: string) {}
}

const user = Factory.create(User, "John Doe");
console.log(user);

const product = Factory.create(Product, "Laptop");
console.log(product);
