"use strict";
// class User {
//   constructor(
//     public id: number,
//     public name: string,
//     public email: string,
//     public password: string,
//     public phone: string,
//     public address: string,
//     public city: string,
//     public state: string
//   ) {}
// }
// class UserBuilder {
//   private id!: number;
//   private name!: string;
//   private email!: string;
//   private password!: string;
//   private phone!: string;
//   private address!: string;
//   private city!: string;
//   private state!: string;
//   setId(id: number): this {
//     this.id = id;
//     return this;
//   }
//   setName(name: string): this {
//     this.name = name;
//     return this;
//   }
//   setEmail(email: string): this {
//     this.email = email;
//     return this;
//   }
//   setPassword(password: string): this {
//     this.password = password;
//     return this;
//   }
//   setPhone(phone: string): this {
//     this.phone = phone;
//     return this;
//   }
//   setAddress(address: string): this {
//     this.address = address;
//     return this;
//   }
//   setCity(city: string): this {
//     this.city = city;
//     return this;
//   }
//   setState(state: string): this {
//     this.state = state;
//     return this;
//   }
//   build(): User {
//     return new User(
//       this.id,
//       this.name,
//       this.email,
//       this.password,
//       this.phone,
//       this.address,
//       this.city,
//       this.state
//     );
//   }
// }
// const user = new UserBuilder()
//   .setId(1)
//   .setName("Muhriddin")
//   .setEmail("muhriddin@example.com")
//   .setPassword("secure123")
//   .setPhone("998901234567")
//   .setAddress("Olmazor 22")
//   .setCity("Tashkent")
//   .setState("Tashkent Region")
//   .build();
// console.log(user);
class Variant {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
class Product {
    constructor(title, description, variants = []) {
        this.title = title;
        this.description = description;
        this.variants = variants;
    }
}
class VariantBuilder {
    constructor() {
        this.name = "";
        this.price = 0;
        this.stock = 0;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setPrice(price) {
        this.price = price;
        return this;
    }
    setStock(stock) {
        this.stock = stock;
        return this;
    }
    build() {
        return new Variant(this.name, this.price, this.stock);
    }
}
class ProductBuilder {
    constructor() {
        this.title = "";
        this.description = "";
        this.variants = [];
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    addVariant(variant) {
        this.variants.push(variant);
        return this;
    }
    build() {
        return new Product(this.title, this.description, this.variants);
    }
}
const variant1 = new VariantBuilder()
    .setName("M1 Pro")
    .setPrice(2000)
    .setStock(10)
    .build();
const variant2 = new VariantBuilder()
    .setName("M1 Max")
    .setPrice(3000)
    .setStock(12)
    .build();
const product = new ProductBuilder()
    .setTitle("Mackbook Pro")
    .setDescription("Description")
    .addVariant(variant1)
    .addVariant(variant2)
    .build();
console.log(product);
