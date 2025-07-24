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
  constructor(
    public name: string,
    public price: number,
    public stock: number
  ) {}
}

class Product {
  constructor(
    public title: string,
    public description: string,
    public variants: Variant[] = []
  ) {}
}

class VariantBuilder {
  private name: string = "";
  private price: number = 0;
  private stock: number = 0;

  setName(name: string) {
    this.name = name;
    return this;
  }

  setPrice(price: number) {
    this.price = price;
    return this;
  }

  setStock(stock: number) {
    this.stock = stock;
    return this;
  }

  build(): Variant {
    return new Variant(this.name, this.price, this.stock);
  }
}

class ProductBuilder {
  private title: string = "";
  private description: string = "";
  private variants: Variant[] = [];

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  setDescription(description: string): this {
    this.description = description;
    return this;
  }

  addVariant(variant: Variant): this {
    this.variants.push(variant);
    return this;
  }

  build(): Product {
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
