"use strict";
// #2. Implementing of PaymentMethod for Payment Types
class Payme {
    pay(amount) {
        console.log(`Paid ${amount} using Payme`);
    }
}
class Click {
    pay(amount) {
        console.log(`Paid ${amount} using Click`);
    }
}
class Uzum {
    pay(amount) {
        console.log(`Paid ${amount} using Uzum`);
    }
}
// #3. Bridge Pattern
class PaymentGateway {
    constructor(method) {
        this.method = method;
    }
}
// #4. Platform Class
class WebStoreGateway extends PaymentGateway {
    checkout(amount) {
        console.log(`Checkout from Web Store`);
        this.method.pay(amount);
    }
}
class MobileStoreGateway extends PaymentGateway {
    checkout(amount) {
        console.log(`Checkout from Mobile Store`);
        this.method.pay(amount);
    }
}
// #5. Usage
const payme = new Payme();
const click = new Click();
const uzum = new Uzum();
// Web Store + Payme
const webPay = new WebStoreGateway(payme);
webPay.checkout(100);
// Mobile Store Click
const mobilePay = new MobileStoreGateway(click);
mobilePay.checkout(200);
