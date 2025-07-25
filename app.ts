// #1. Interface for payment method
interface PaymentMethod {
  pay(amount: number): void;
}

// #2. Implementing of PaymentMethod for Payment Types
class Payme implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Payme`);
  }
}

class Click implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Click`);
  }
}

class Uzum implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Uzum`);
  }
}

// #3. Bridge Pattern

abstract class PaymentGateway {
  constructor(protected method: PaymentMethod) {}

  abstract checkout(amount: number): void;
}

// #4. Platform Class

class WebStoreGateway extends PaymentGateway {
  checkout(amount: number): void {
    console.log(`Checkout from Web Store`);
    this.method.pay(amount);
  }
}

class MobileStoreGateway extends PaymentGateway {
  checkout(amount: number): void {
    console.log(`Checkout from Mobile Store`);
    this.method.pay(amount);
  }
}


// #5. Usage
const payme = new Payme()
const click = new Click()
const uzum = new Uzum()

// Web Store + Payme
const webPay = new WebStoreGateway(payme)
webPay.checkout(100)


// Mobile Store Click
const mobilePay = new MobileStoreGateway(click)
mobilePay.checkout(200)
