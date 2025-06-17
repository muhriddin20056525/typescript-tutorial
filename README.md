# **1-dars TypeScript nima**

`TypeScript` — bu JavaScript'ning kuchaytirilgan versiyasi. U kodga qat'iy turlar (type) qo‘shib, xatolarni yozish paytida aniqlashga yordam beradi. TypeScript JavaScript'ga kompilyatsiya qilinadi, shuning uchun uni hamma brauzerlar tushunadi Asosan, yirik va murakkab loyihalarda kodni aniq, tushunarli va ishonchli qilish uchun ishlatiladi.

```bash
npm install typescript -g
```

- TypeScriptni kompyuterga global tarzda o'rnatish

```bash
tsc --version
```

- Typescript versiyasini tekshirish

```bash
tsc --init
```

- `tsc --init` — loyihada TypeScript sozlamalari (`tsconfig.json fayli`)ni yaratadi.
- Bu fayl TypeScript'ning qanday ishlashini va kodni qanday kompilyatsiya qilish kerakligini belgilaydi.

```bash
tsc
```

- `ts` faylni `js` faylga kompilayetsiya qiladi

---

# **2-dars TypeScript asosiy type**

```ts
let fullName: string = "John Doe";
let age: number = 20;
let isMarried: boolean = false;
```

- o'zgaruvchilarga typelar shu ko'rinishda beriladi

---

# **3-dars Function type**

```ts
function getName(firstName: string, lastName: string) {
  console.log(`hello ${firstName} ${lastName}`);
}

getName("Muhriddin", "Davlatov");
```

- funksiya parametrlariga type berish
- parametr nomidan so'ng `:` belgisi orqali amalga oshiriladi

```ts
function getName(firstName: string, lastName: string): string {
  return `hello ${firstName} ${lastName}`;
}

const person1 = getName("Muhriddin", "Davlatov");
console.log(person1);
```

- Funksyaning o'zi qanday qiymat qaytarishini belgilash
- `getName(): string` - shnday amalga oshiriladi
- agar hech narsa qaytarmasa `void` bo'ladi

```ts
const getAdult = (age: number): boolean => {
  if (age > 18) {
    return true;
  }

  return false;
};

const isAdult = getAdult(20);
console.log(isAdult);
```

- Arrow Funcshinda type berish

---

# **4-dars Object type**

```ts
const person = {
  firstName: "Samar",
  lastName: "Badriddinov",
  city: "Tashkent",
  skills: {
    programming: "JavaScript",
    design: "Figma",
  },
};

function getName(data: { firstName: string; lastName: string }): string {
  return `hello ${data.firstName} ${data.lastName}`;
}

const person1 = getName(person);
console.log(person1);
```

- Object yaratib uni funksiyaga argument sifatida berish va funksiya argumentida kerakli xossalarni typelarini ko'rsatish

---

# **5-dars Array**

```ts
const cars: string[] = ["BMW", "Audi", "Mercedes"];
const numbers: number[] = [12, 3, 4, 5, 6];
```

- Arrayga type berish

```ts
const mixed: (string | number)[] = [1, "Hello", 2, "World"];
```

- Arrayga bir nechta malumot turini type sifatida ko'rsatish

---

# **6-dars Tupe**

`Tupe` - bu o'zgarmas uzunlikdagi va turli malumot turlarini o'z ichiga olagan massiv hisoblanadi. `Tupe` orqali malum bir tartibda va aniq turlarga ega elementlarni saqlashimiz mumkin

```ts
const person: [string, number] = ["Samar Badriddinov", 22];
```

- Massivga ushbu usulda type berilsa bu tupe deyiladi

```ts
let cordinate: [number, string | number] = [98, 12];
```

- `Tupe` ni `union` type bilan ishlatish
- Birinchi qiymat har doin `number` bo'lishi kerak 2 qiymat esa yoki `string` yoki `number` bo'lishi kerak

```ts
function getInfo(): [string, number] {
  return ["hello", 36];
}

const logger = getInfo();
console.log(logger);
```

- Funksiyalarda `Tupe` dan foydalanish
- Ushbu funksiya har doim 1-qiymati `string` va 2-qiymati `number` bo'lgan array qaytaradi

```ts
function getInfo(): [string, number] {
  return ["Samar Badriddinov", 24];
}

const logger = getInfo();

const [fullName, age] = logger;

console.log(fullName, age);
```

- `logger` funksiyasi qaytargan array malumotlarini destruktizatsiya qilish

# **7-dars Readonly**

`readonly` — o‘zgaruvchini faqat o‘qish (`read-only`) rejimida qilish uchun ishlatiladi. Ya’ni, bu qiymat bir marta belgilangandan keyin uni o‘zgartirib bo‘lmaydi.

```ts
let admins: readonly number[] = [1, 2, 3, 4, 5];
```

- `readonly` - array ni faqat o'qiladigan qildi endi unga hech qanday malumot qo'shib bo'lmaydi

```ts
let person: readonly [string, number] = ["John", 26];
```

- `Tupe` shaklidagi arrayga `readonly` berish

```ts
let numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
```

- `readonly` berishning 2-usuli

---

# **8-dars Enums**

`enum` — bu maxsus ro‘yxat bo‘lib, unga aniq nomlar bilan qiymatlar beriladi. U `object` ga o'xshab ketadi lekin `enum` dagi qiymatlarni o'zgartirib bo'lmaydi

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

- Oddiy `enum` yaratish usuli. Har bir kalitga typescript o'zi qiymat beradi default holatda `0 dan boshlab increment tartibida`

```ts
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}
```

- `Enum` ga qo'lda qiymat berish

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const move: Direction = Direction.Up;
console.log(move);
```

- `Enum` yaratish va undan foydalanish
- `Enum` qiymati o'zgaruvchiga tenglanganda shu o'zgaruvchining type ham u foydalanayotgan `Enum` ga teng bo'lishi kerak

---

# **9-dars Union type**

`union type` - deb bir elementga bir nechta type berishga aytiladi

```ts
let id: string | number = 1;
id = "10"; // true
id = 3; // true
id = true; // error
```

- o'zgaruvchiga union type berish

```ts
function printId(id: string | number): void {
  console.log(`The id is ${id}`);
}

printId(101); // true
printId("10"); // true
printId(false); // error
```

- funksiya parametriga union type berish

```ts
function logError(error: { message: string } | { error: string }) {
  if ("message" in error) {
    console.log("Message: ", error.message);
  } else {
    console.log("Error: ", error.error);
  }
}

logError({ message: "Hello" });
logError({ error: "This is error" });
```

- funksiya parametriga keladigan objectga union type berish
- `error` objectiga 2 ta `message` yoki `error` kalitlari keladi

```ts
let data: (string | number)[] = ["BMW", 1, "Audi", 2];
console.log(data);
```

- arrayga union type berish

---

# **10-dars Literal type**

`Literal Type` - deb aniq turdagi qiymatlarga aytiladi. Misol uchun o'zgaruvchi bor va shu o'zgaruvchining aniq qiymatlari bor va shu o'zgaruvchiga belgilangan qiymatlardan tashqari qiymat berib bo'lmaydi.

```ts
let statusMessage: "success" | "errror" | "loading" = "success";
```

- literal type yaratish
- `success | errror | loading` - bu litral typelardir

```ts
let code: 200 | 400 | 500 = 200;
```

- Number bilan litral type yaratish

```ts
function getStatus(status: "success" | "error"): "success" | "error" {
  if (status === "success") {
    return "success";
  }

  return "error";
}

console.log(getStatus("success"));
console.log(getStatus("error"));
```

- funksiyalarda literal typedan foydalanish
- ushbu funksiya parametr sifatida `"success" | "error"` qabul qiladi va faqatgina `"success" | "error"` qaytarishi mumkin va bu literal type orqali belgilangan

---

# **11-dars Type aliases**

`Type aliases` - Typescriptda malum bir turga nom berish va uni qayta ishlatish imkonini beradi.

```ts
type ID = string | number;
let userId: ID = 1;
let productId: ID = "1";
```

- `Type aliases` elon qilish va undan foydalanish
- ushbu usulda type elon qilganda undan istalgancha foydalanish mumkin

```ts
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  skills: string[];
};

const user1: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  skills: ["HTML", "CSS"],
};
```

- Objectlarda `Type aliases` bilan ishlash

```ts
type Logger = (message: string) => string;

const log: Logger = (message) => {
  return message.toUpperCase();
};

console.log(log("Hello world"));
```

- funksiyalarda `Type aliases` bilan ishlash
- `(message: string)` funksiyaning argumentiga type berish

```ts
type Person = {
  firstName: string;
  lastName: string;
};

type Employee = {
  company: string;
  role: string;
};

type CompanyWorker = Person & Employee;

const worker1: CompanyWorker = {
  firstName: "Muhriddin",
  lastName: "Davlatov",
  company: "Epam",
  role: "Software Engineer",
};
```

- Bir nechta `Type aliases` elon qilish va ularni birlashtirish
- `CompanyWorker` type `Person` va `Employee` typelarining xossalariga ham ega

```ts
type StringArray = string[];
let names: StringArray = ["Ali", "Vali"];
```

- Arraylarda `Type aliases` dan foydalnish

```ts
type Person = {
  firstName: string;
  lastName: string;
};

type PersonList = Person[];

let persons: PersonList = [
  { firstName: "Muhriddin", lastName: "Davlatov" },
  { firstName: "Asilbek", lastName: "Davlatov" },
];
```

- `PersonList` bu holatda `Person` dan tashkil topgan array bo'ladi
- `PersonList` array `Person` esa uni ichidagi objectni bildiradi

```ts
type Person = {
  firstName: string;
  lastName: string;
  wife?: Person;
};
```

- `Type aliases` o'z o'ziga murojaat qilishi mumkin

---

# **12-dars Interface**

`Interface` - Type bilan deyarli bir xil ishlaydi. Interface asosan object bilan ishlatiladi. `type ID = string | number` ko'rinishidagi oddiy typelarni `interface` bilan berib bo'lmaydi

```ts
interface Person {
  firstname: string;
  lastname: string;
}
```

- `interface` yaratish

```ts
interface Person {
  firstname: string;
  lastname: string;
}

interface Person {
  age: number;
}

let persons: Person[] = [
  { firstname: "Muhriddin", lastname: "Davlatov", age: 20 },
  { firstname: "Asilbek", lastname: "Davlatov", age: 16 },
];
```

- ushbu holatda ham xatolik chiqmaydi. 2 ta `Person` `interface` birlashadi.

```ts
interface Person {
  firstname: string;
  lastname: string;
}

interface Employee extends Person {
  company: string;
}

let persons: Employee[] = [
  { firstname: "Muhriddin", lastname: "Davlatov", age: 20 },
  { firstname: "Asilbek", lastname: "Davlatov", age: 16 },
];
```

- Bu yerda `Employee` interface `Person` interfaceidan meros oladi. Yani `Person` interfacining xossalariga ega bo'ladi

```ts
interface Person {
  readonly firstname: string;
  readonly lastname: string;
  age?: number;
}
```

- Interfaceda `Readonly` dan foydalanish
- `age?` - bu bo'lim majburiy emas.

```ts
interface Person {
  [key: string]: string | number;
}

const person: Person = {
  name: "John",
  age: 30,
};
```

- Kelayotgan malumot aniq bo'lmasa shu usuldan foydalanish mumkin

---

# **13-dars Void**

`void` - Biz yozgan funksiya hech narsa `return` qilmasa u `void` qaytaradi

```ts
function logger(text: string): void {
  console.log(text);
}

logger("Hello World");
```

- `void` qaytaradigan funksiya yozish

```ts
let unusable: void;
```

- `void` malumot turini o'zgaruvchiga berish mumkin lekin bundan hech qanday foyda yo'q

---

# **14-dars Unknown**

`unknown` — bu har qanday turdagi qiymatni qabul qiladigan, lekin ishlatishdan oldin tekshirishni talab qiladigan `any` ning xavfsizroq versiyasi hisoblanadi.

```ts
function logger(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  }
}

console.log(logger("Muhriddin"));
console.log(logger(1));
```

- `unknown` dan foydalanish

```ts
let value: unknown = 100;
let string: string = value as string;
```

- Bu yerda `unknown` turini `strin` ga o'tkazish ko'rsatilgan

---

# **15-dars Never**

`never` turi — hech qachon qiymat qaytarmaydigan funksiyalar yoki holatlar uchun ishlatiladi.
Bu funksiya hech qachon tugamaydi (masalan, doimiy xatolik beradi yoki cheksiz loopga kiradi)

```ts
function throwError(message: string): never {
  throw new Error(message);
}

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/user");
    if (!response.ok) {
      throwError("No data found");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throwError("An error occured");
  }
}

fetchData();
```

- `never` dan foydalanib xatolik qaytaradigan funksiya yaratish va uni API so'rovlarda ishlatish

---

# **16-dars Null**

`null` — bu qiymat hali mavjud emasligini bildiruvchi maxsus primitive turdir. null odatda ma’lumot hozircha yo‘qligini yoki bo‘shligini bildiradi. Null b undefined ga o'xshab ketadi lekin `null` da qiymat bo'lmaydi. `undefined` da qiymat bo'lmaydi

```ts
let x: null = null;
```

- `null` turida o'zgaruvchi ochish.
- `null` turida o'zgaruvchi ochish uchun unga qiymat sifatida `null` ni berib qo'yish kerak

```ts
function logger(msg: string | null) {
  if (msg !== null) {
    console.log(msg.toUpperCase());
  }

  console.log("No message provided");
}

logger("Hello World");
logger(null);
```

- funksiyalarda `null` dan foydalanish

```ts
let username: string | null = null;

let showUsername = username ?? "Guest";
```

- `??` agar `username` da `null` bo'lsa shundan keyingi kod ishlaydi

---

# **17-dars Type guards & Asserts**

`Type Casting (Type Assertion)` - Malumotlarni turi bilan ishlashga aytiladi. Yani bitta turdagi malumotni boshqasiga o'tkazishga aytiladi

```ts
let message: unknown = "Hello World";

let strLength1: number = (<string>message).length;
console.log(strLength1);
```

- Bu kod `unknown` tipdagi o‘zgaruvchini `string` deb faraz qilib, uning uzunligini hisoblab, konsolga chiqaradi.

```ts
let message: unknown = "Hello World";
let strLength2: number = (message as string).length;
```

- Bu yerda `message` o‘zgaruvchisi `string` tipiga `type assertion (tipni aniqlashtirish)` yordamida o‘tkazilyapti:
- `(message as string)` — bu TypeScript'ga: “message bu yerda string deb hisobla” degani.
- Keyin `.length` metodi orqali string uzunligi olinadi.
- `"Hello World"` stringining uzunligi `11` bo‘ladi, shuning uchun `strLength2 = 11.`

`Type guards` - o'zgaruvchi bir nechta typega ega bo'lganda uni tekshirishga aytiladi

```ts
function logger(message: string | number) {
  if (typeof message === "string") {
    return message.toUpperCase();
  } else {
    return message;
  }
}
```

- funksiya argumentining typini tekshirish

```ts
class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meaw() {
    console.log("Meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meaw();
  }
}
```

- Classlardan type sifatida foydalanish
- `instanceof` yordamida `animal` o‘zgaruvchining aynan qaysi sinfga tegishli ekanligini aniqlanadi.

```ts
type Car = { speed: number };
type Plane = { altitude: number };

function getInfo(vehicle: Car | Plane) {
  if ("speed" in vehicle) {
    console.log(`Speed: ${vehicle.speed} km/h`);
  } else {
    console.log(`Altitude ${vehicle.altitude} metres`);
  }
}

getInfo({ speed: 100 });
getInfo({ altitude: 10000 });
```

- funksiya argumentiga `type` orqali `type` ko'rsatish va uni tekshirsih
- Bu yerda funksiya argumentiga `vehicle` ichida `speed` bor yoki yo'qligiga qarab funksiya turli xil natijalar qaytaradi

```ts
function logNumber(value: unknown): asserts value is number {
  if (typeof value !== "number") {
    throw new Error(`value is not a number`);
  }
}

const age: unknown = 20;

logNumber(age);
console.log(age + 10);
```

- `asserts value is number:`
  - Agar funksiya chaqirilganda xatolik `(ya'ni throw)` sodir bo‘lmasa, TypeScript value ni number deb hisoblaydi.
- agar funksiya xatolik qaytarmasa u qaytargan qiymat number deb qaraladi
- `unknown` istalgan malumot turini qabul qilishi mumkin `: asserts value is number` esa unidan `number` bo'lsagina foydalanish mumkinligni bildiryapdi

---

# **18-dars Create class**

```ts
// Class elon qilish
class Car {
  // Class tashkil topishi kerak bo'lgan xossalarni typelarini elon qilisj
  name: string;
  year: Date;

  // constructor yaratish va unga keladigan argumentlarga type berish
  constructor(name: string, year: Date) {
    this.name = name;
    this.year = year;
  }
}

// Class yordamida yangi object yaratish
const toyota = new Car("Toyota", new Date("2001-11-01"));
console.log(toyota);
```

- `Class` ga type berish va u asosida object yaratish

---

# **19-dars Constructor**

`constructor` — bu klassdan obyekt yaratish paytida avtomatik ishlaydigan maxsus metod. U obyekt yaratilganda unga boshlang‘ich qiymatlar berish uchun ishlatiladi.

```ts
// class yaratish
class Car {
  // classda bo'ladigan xossalarni tiplarini berish
  name: string;
  year: Date;
  isCar: boolean;

  // constructor yaratish va unga keladigan xossalarni tiplash. qiymat sifatida constructorga keladigan qiymatlarni tiplash mumkin lekin constructor nima qaytarishini berib bo'lmaydi
  constructor(name: string, year: Date) {
    this.name = name;
    this.year = year;
    // constructorga yoziladigan barcha qiymatham argumentidan kelishi shart emas qo'lda berib qo'yish ham mumkin
    this.isCar = true;
  }
}
```

```ts
class Car {
  name: string;
  year: Date;
  isCar: boolean;

  // constructor xossalariga default qiymat berish
  constructor(name: string = "Unknown", year: Date = new Date()) {
    this.name = name;
    this.year = year;
    this.isCar = true;
  }
}

// Default qiymat berilgani sababli constructorga qiymat bermasak ham object yaratib beradi
const chevrolet = new Car();
```

```ts
class Car {
  name!: string;
  year!: Date;

  // Oddiy usulda keladigan qiymatni tiplash
  constructor(name: string, year: Date);
  // Object usulida keladigan qiymatni tiplash
  constructor(data: { name: string; year: Date });

  // Haqiqiy constructor funksiyasi - yuqoridagi ikkalasini birlashtiradi
  // nameOrData bu string yoki object bo‘lishi mumkin
  // year esa faqat birinchi holatda kerak (ikkinchi holatda emas)
  constructor(nameOrData: string | { name: string; year: Date }, year?: Date) {
    // constructorga keladigan qiymatlar turiga qarab object tuzish, oddiy formatda kelsa
    if (typeof nameOrData === "string") {
      this.name = nameOrData;
      this.year = year!;
    } else if (typeof nameOrData === "object") {
      // object formatida kelsa
      this.name = nameOrData.name;
      this.year = nameOrData.year;
    }
  }
}

// Oddiy usulda constructorda qiymat yuborish
const toyota = new Car("Toyota", new Date("2001-11-01"));
// Object usulida constructorga qiymat yuborish
const chevrolet = new Car({ name: "Chevrolet", year: new Date("2001-11-01") });
```

- Ushbu usulda ham class yaratish mumkin

---

# **20-dars Metods**

`Method` - bu classda aniqlangan funksiyalardir

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Bu oddiy funksiya class ichida bo'lgani uchun method deyiladi yani Person classining methodi
  greeting() {
    // Class xossalariga this orqali murojaat qilinadi
    console.log(`Hello I am a ${this.name}`);
  }
}

const user1 = new Person("Muhriddin");
// Class ichidagi methodni chaqirish
user1.greeting();
```

- `Class` ichida methodlar yaratish

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Parametr qabul qiladigan va string turidagi qiymat qaytaradigan method
  greeting(age: number): string {
    return `Hello ${this.name} your age ${age}`;
  }
}

const user1 = new Person("Muhriddin");
console.log(user1.greeting(20));
```

- Parametrli method yozish

```ts
// Provider tanlash uchun enum
enum Provider {
  PAYME,
  CLICK,
  UZUM,
}

// Holatni aniqlash uchun enum
enum Status {
  PENDING,
  APPROVED,
  REJECTED,
}

class Payment {
  id: Provider;
  status: Status;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: Provider) {
    this.id = id;
    // ushbu qiymatlar default yozib qo'yilgan yani constructordan kelmayapdi
    this.status = Status.PENDING;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Obyekt yaratilganidan beri qancha vaqt o‘tganini millisekundlarda hisoblaydi.
  getLifeTime() {
    return new Date().getTime() - this.createdAt.getTime();
  }

  rejectPayment(): void {
    // To'lov tasdiqlanganligini tekshiradi agar tasdiqlangan bo'lsa xatolik qaytaradi
    if (this.status == Status.APPROVED) {
      throw new Error("Payment is already approved");
    }

    // Aks holda, status ni REJECTED ga o‘zgartiradi va updatedAt ni hozirgi vaqtga tenglashtiradi.
    this.status = Status.REJECTED;
    this.updatedAt = new Date();
  }
}

const payme = new Payment(Provider.CLICK);
payme.rejectPayment();
console.log(payme);

const duration = payme.getLifeTime();
console.log(duration);
```

- To'lov qilish uchun class yozish

---

# **21-dars Overload methods**

`overload methods` — bu bitta funksiyani turli xil argumentlar bilan chaqirish imkonini beradigan usuldir. Ya'ni, bir nechta funksiya imzolari (signature) beriladi, lekin faqat bitta funksiyaning tanasi (body) bo‘ladi. Agar biror funksiya har xil turdagi yoki sonli argumentlar bilan ishlashi kerak bo‘lsa, overload orqali turli chaqiruvlarni qulay tarzda boshqarish mumkin.

```ts
enum Provider {
  PAYME,
  CLICK,
  UZUM,
}

enum Status {
  PENDING,
  APPROVED,
  REJECTED,
}

class Payment {
  id: Provider;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  providers: string[];

  constructor(id: Provider) {
    this.id = id;
    this.status = Status.PENDING;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.providers = [];
  }

  // providerlarni olib beradigan methodga overload usulida type yozish
  getProviders(provider: string): void;
  getProviders(providers: string[]): void;

  // methodning asl tanasi
  getProviders(providerOrProviders: string | string[]): void {
    // keladigan qiymatni tekshirish
    if (typeof providerOrProviders === "string") {
      // string bo'lsa arrayga qo'shadi
      this.providers.push(providerOrProviders);
    } else {
      // array kelsa oldingi qiymar bilan yangi array qiymatlarini birlashtiradi
      this.providers = this.providers.concat(providerOrProviders);
    }
  }
}

const payme = new Payment(Provider.PAYME);

// getProviders methodiga murojaat qilish (string yuborish)
payme.getProviders("Payme");
console.log(payme.providers);

// getProviders methodiga murojaat qilish (array yuborish)
payme.getProviders(["click", "uzum"]);
console.log(payme.providers);
```

---

# **22-dars Getter & Setter**

`getter va setter` — bu class ichida xossalar (property) bilan ishlashda foydalaniladigan maxsus metodlardir. Ular ma'lumotni o'qish (getter) va o‘zgartirish (setter) imkonini beradi, lekin bu jarayonlarni nazorat ostida bajaradi.

```ts
class Person {
  // private: shu methodni classdan tashqarida ishlatishni qaqiqlaydi. (_name) getter va setter ishlatiladigan class xossalari (_) bilan boshlanishi kerak
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter: _name ni o'qib olish uchun
  get name(): string {
    return this._name;
  }

  // Setter: _name ga yangi qiymat berish uchun
  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error("Ism kamida 3 ta belgidan iborat bo'lishi kerak.");
    }
    this._name = newName;
  }
}

const user = new Person("Ali");

// Getter chaqirilyapti
console.log(user.name); // Ali

// Setter orqali yangi ism berilyapti
user.name = "Vali";

// Yangi ismni chiqaramiz
console.log(user.name); // Vali

// Xato qiymat
// user.name = "Al"; // ❌ Error: Ism kamida 3 ta belgidan iborat bo'lishi kerak.
```

---

# **23-dars Implements**

`Implements` - kalit so‘zi class (sinf) orqali interface (interfeys) ni amalga oshirish (ya'ni, undan foydalanish) uchun ishlatiladi.

```ts
// Interface yaratish
interface Drivable {
  startEngine(): void;
  drive(speed: number): void;
}

// implements dan foydalanib interfaceni classga bog'lash
class Car implements Drivable {
  model: string;

  constructor(model: string) {
    this.model = model;
  }

  startEngine(): void {
    console.log("Engine Started");
  }

  drive(speed: number): void {
    console.log(`${this.model}: driving at ${speed} km/h`);
  }
}

const toyota = new Car("Toyota");
toyota.startEngine();
toyota.drive(240);
```

- Implementsdan foydalanish

```ts
interface Drivable {
  startEngine(): void;
  drive(speed: number): void;
}

interface Flayable {
  fly(speed: number): void;
}

class Car implements Drivable, Flayable {}
```

- Implements orqali bir nechta interfaceni classga bog'lash

---

# **24-dars Extends (super)**

`Extends` - deb bir classdan boshqa class meros olishiga (uning xossalari va methodlaridan nusxa olishiga) aytiladi

```ts
// Animal nomli class e'lon qilinmoqda
class Animal {
  id: number;
  name: string;

  // constructor - yangi obyekt yaratilganda ishga tushadi
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  // speak() metodi - ovoz chiqarish xatti-harakati
  speak() {
    this.id = 10 * this.id; // id ni 10 barobar oshiradi
    console.log(`${this.name} makes a sound.`);
  }

  // showInfo() metodi - obyekt haqidagi ma'lumotlarni ko‘rsatadi
  showInfo() {
    console.log(`name: ${this.name}, id: ${this.id}`); // Konsolga ism va id ni chiqaradi
  }
}
// Cat klassi - Animal klassidan meros oladi
class Cat extends Animal {
  // constructor - faqat name ni qabul qiladi
  constructor(name: string) {
    const id = Math.random(); // 0 dan 1 gacha bo‘lgan tasodifiy id yaratadi
    super(name, id); // Animal klassining constructoriga uzatadi
  }

  // speak() metodini override qiladi - ya'ni o‘zgartirib yozadi
  override speak() {
    super.speak(); // Animal klassining speak metodini chaqiradi (id *= 10 bo‘ladi)
    console.log(`${this.name} meaws.`); // Qo‘shimcha qilib mushukning ovozini chiqaradi
  }
}

const cat = new Cat("Kitty");
cat.speak();

cat.showInfo();
```

- `Extends` dan foydalanib meros olish

---

# **25-dars Composition & access modifier**

`Composition` - bu bitta class boshqa classni ichida ishlatishi, ya’ni "has-a" munosabatidir. OOP’da inheritance (meros) o‘rniga ko‘pincha composition ishlatiladi, chunki bu yanada modul va qayta foydalanish mumkin bo‘lgan kod beradi.

```ts
// 1-class user
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

// 2-class payment
class Payment {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  pay() {
    console.log(`You paid ${this.amount}`);
  }
}

// 3-class yuqoridagi har ikkala class xossalarini jamlagan class
class UserWithPayment {
  // User class shu xossaga yuklanadi
  user: User;
  // Payment class shu xossaga yuklanadi
  payment: Payment;

  // constructor orqali user va payment classlari olinadi
  constructor(user: User, payement: Payment) {
    this.payment = payement;
    this.user = user;
  }

  showInfo() {
    // User class dagi xossadan foydalanish
    this.user.sayHello();

    // Payment class dagi xossadan foydalanish
    this.payment.pay();
  }
}

// contructorga user va payment classlarini argument sifatida yuborish
const userWithPayment = new UserWithPayment(new User("John"), new Payment(100));
```

- Bu yerda 2 ta class bor va shu ikki class ni uchunchi class ga xossalar orqali berib qolgan ikki class dagi metodlardan foydalanish mumkin

```ts
class Person {
  // Protected class bu xossadan faqat shu classda va shu classdan meros olgan class ichida foydalanish mumkin
  protected age: number;

  constructor(age: number) {
    this.age = age;
  }
}

class Employee extends Person {
  // Public bu xossadan shu class ichida va tashqarida yani shu classdan object yaratilgandda ham foydalanish mumkin
  public name: string;

  // Private bu xossadan faqatgina shu class ichida foydalanish mumkin
  private salary: number;

  constructor(name: string, salary: number, age: number) {
    super(age);
    this.name = name;
    this.salary = salary;
  }

  showBonus() {
    return this.salary * 0.2;
  }

  showAge() {
    return this.age;
  }
}

// class dan object yaratish
const employee = new Employee("John Doe", 1000, 40);
// name -> public classdan tashqarida ham foydalanish mumkin
console.log(employee.name);
// salary -> private u classdan tashqarida ishlatilmaydi ammo classda method yaratib undan foydalanish mumkin
console.log(employee.showBonus());
// age -> protected undan o'zi turgan classda va undan meros olan classda foydalanish mumkin
console.log(employee.showAge());
```

- `Public`, `Private` va `Protected` class yaratish

---

# **26-dars Static & C# farqi (1-qism)**

`static` kalit so‘zi class tegishli xususiyat yoki metodni aniqlash uchun ishlatiladi. Ya’ni, bu xususiyat yoki metod obyektga emas, classning o‘ziga tegishli bo‘ladi.

```ts
class Counter {
  // xossani static qilish va default qiymat berish
  static count: number = 0;

  // Static method yaratish static methodlar faqat static xossalarni o'zgartira oladi
  static increment() {
    this.count++;
  }
}

// Static methodga murojaat qilish
Counter.increment();
// Static xossaga murojaat qilish
console.log(Counter.count);
```

- `Static` method va xossa yaratish va ularga `Class` nomi orqali murojaat qilish

```ts
class Counter {
  static count: number = 0;
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  static increment() {
    this.count++;
  }

  // title xossasidan foydalanish static bo'lmagan xossalarga faqat static bo'lmagan methodlar murojaat qila oladi
  getTitle() {
    return this.title;
  }
}
```

- Method ichida oddiy xossadan foydalanish
- Static method ichida oddiy xossani ishlatib bo'lmaydi

---

# **27-dars Static & C# farqi (2-qism)**

```ts
class Parent {
  static message: string = "Hello World";
}

// Meros olgan class
class Child extends Parent {}

// Meros olgan class orqali Meros olingan class ichidagi xossani chaqirish
console.log(Child.message);
```

- `Static` xossalarni bir `class` dan meros olgan boshqa `class` orqali ham chaqirish mumkin

```ts
namespace MathHelper {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathHelper.add(10, 3));
```

- `Static` yaratishni eski uslubi.

---

# **28-dars Abstract class**

`abstract class` — bu asosiy (bazaviy) class bo‘lib, undan bevosita obyekt yaratib bo‘lmaydi. U faqat boshqa class'lar tomonidan meros olish (inheritance) uchun mo‘ljallangan va ko‘pincha umumiy funksionallikni belgilashda ishlatiladi.

```ts
// Abstract class
abstract class Animal {
  // Abstract method
  abstract makeSound(): void;
}

// Abstract class dan meros olish ichidagi abstract method ishlatuilmaguncha xatolik chiqadi
class Cat extends Animal {
  // Abstract methoddan foydalanish
  makeSound(): void {
    console.log("Meow! Meow!");
  }
}

const cat = new Cat();
cat.makeSound();
```

- `Abstract` class yaratish va undan meros olish

---

# **29-dars This (1-qism)**

`This` - Object ichida ishlatiladigan kalit so'z bo'lib kontextga ishora qiladi. `This` ning qiymati qachon va qanday ishlatayotganimizga bog'liq

```ts
class Person {
  name: string;

  constructor(name: string) {
    // Bu yerda `this` — yangi yaratilayotgan Person obyektiga teng
    this.name = name;
  }

  greeting() {
    // Bu yerda `this` — greeting metodini chaqirayotgan obyektga teng
    console.log(`Hello ${this.name}`);
  }
}
```

- `This` dan class ichida foydalanish

```ts
class Counter {
  count: number = 0;

  increment() {
    console.log(this.count);
    this.count++;
  }
}

const c = new Counter();

// bu mustaqil funksiyaga aylanadi shunda va ushbu funksiya qaysi objectga tengligini bilmaydi natijada this = undefined bo'ladi bind esa thisni objectga bog'laydi
const incrementFn = c.increment.bind(c);
incrementFn();
incrementFn();
incrementFn();
incrementFn();
```

- `Bind` orqali `This` ni objectga bog'lash

---

# **30-dars This (2-qism)**

```ts
// Calculator nomli class e'lon qilinmoqda
class Calculator {
  // Class ichidagi "value" nomli o'zgaruvchi, boshlang'ich qiymati 0
  value: number = 0;

  // add metodi: parametr sifatida raqam oladi va value'ga qo'shadi
  add(num: number): this {
    this.value += num; // value = value + num
    return this; // this qaytmoqda, ya'ni classning o'zini (Calculator obyekti)
  }

  // subtract metodi: parametr sifatida raqam oladi va value'dan ayriladi
  subtract(num: number): this {
    this.value -= num;
    return this; // classning o'zini qaytaryapti
  }

  // multiply metodi: parametr sifatida raqam oladi va value'ni ko'paytiradi
  multiply(num: number): this {
    this.value *= num;
    return this; // yana classning o'zini qaytaryapti
  }

  // getValue metodi: value qiymatini qaytaradi
  getValue(): number {
    return this.value;
  }
}

// Calculator classidan yangi obyekt yaratilmoqda
const cacl = new Calculator();

// Method chaining orqali ketma-ket amallar bajarilmoqda
const result = cacl
  .add(5) // value = 0 + 5 = 5
  .subtract(3) // value = 5 - 3 = 2
  .multiply(2) // value = 2 * 2 = 4
  .getValue(); // 4 ni qaytaradi

console.log(result); // Konsolga 4 chiqadi
```

- Metodlar `this` qaytargani bu `method chaining` (metodlarni zanjirga ulab chaqirish) imkonini beradi.
- `this` bu yerda Calculator klassining o'zini bildiradi, va har bir metod thisni qaytarib, navbatdagi metodni chaqirishga imkon beradi.

```ts
cacl.add(5).subtract(3).multiply(2);
```

- Agar `add()`, `subtract()` va `multiply()` metodlari this ni qaytarmaganida, har bir metoddan keyin yangi chaqirish bo'lmas edi.

---

# **31-dars Generic nima**

`Generic` – bu qayta ishlatiladigan (reusable), turga bog‘liq bo‘lmagan (type-independent) kod yozish imkonini beruvchi vosita. Generic’lar orqali funksiya, interface yoki class'ni turli xil ma'lumot turlari bilan ishlaydigan qilib yozish mumkin.

```ts
// <T> bu generic
function identity<T>(arg: T): T {
  return arg;
}

// Generic orqali type berilgan funksiyaga malumot uzatayotganda uzatayotgan malumotimiz qansi turdaligini berishimiz kerak shunda funksiyadagi generik bu typeni olib funksiyada qo''laydi
identity<number>(5);
identity<string>("sam");
```

- `Generic` dan funksiyada foydalanish

```ts
interface IUser {
  name: string;
  age: number;
}

const users: Array<IUser> = [{ name: "Muhriddin", age: 20 }];
```

- `Interface` ni arrayga `Generic` sifatida berish

---

# **32-dars Generic function**

`Generic` - funksiyalarda kodni qayta foydalaniladigan qiladi.

```ts
// <T> bu generik bunga type keladi va shu typeni funksiyaga qo'llaydi
function identity<T>(val: T): T {
  return val;
}

// <string> - Genericga string type yuborish
const stringIdentity = identity<string>("Hello");
// <number> - Genericga number type yuborish
const numberIdentity = identity<number>(10);
// <boolean> - Genericga booles type yuborish
const booleanIdentity = identity<boolean>(true);
```

- Funksiyada generic bilan ishlash

```ts
// Funksiyaning har bir argumentiga alohida generic berildi va bu funksiya array qaytaradi
function identity<T, U>(val1: T, val2: U): [T, U] {
  return [val1, val2];
}

const stringIdentity = identity<string, number>("Hello", 42);
const numberIdentity = identity<number, string>(10, "Hello");
const booleanIdentity = identity<boolean, number>(true, 42);
```

- Bitta funsiyada 2 ta genericdan foydalanish

```ts
interface Name {
  name: string;
}

interface Age {
  age: number;
}

interface Married {
  isMarried: boolean;
}

// 3 ta generic qabul qiladi va 3 ta object qaytaradi qiymat sifatida object keladi
function merge<T, U, K>(obj1: T, obj2: U, obj3: K): T & U & K {
  return { ...obj1, ...obj2, ...obj3 };
}

// Interfacelarni generic sifatida yuborish
const user = merge<Name, Age, Married>(
  { name: "Jack" },
  { age: 23 },
  { isMarried: false }
);
```

- Interfecedan generic sifatida foydalanish

```ts
interface IUser {
  name: string;
}

// Genericni array sifatida qabul qiladi funksiyaning parametri
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
// Number array yuborish generic bilan
const firstNumber = getFirstElement<number>([1, 2, 3]);
// String array yuborish generic bilan
const firstString = getFirstElement<string>(["a", "b", "c"]);
// Generic sifatida interfacedan foydalanilganligi uchun object berish kerak bo'ladi array ichida
const firstUser = getFirstElement<IUser>([{ name: "John" }, { name: "Jane" }]);
```

- Funksiyada array genericdan foydalanish

```ts
// Interfacega Generic Berish
interface Shape<T> {
  radius: T;
}

function createShape<T>(val: T): Shape<T> {
  return { radius: val };
}

const firstShape = createShape<number>(10);
const secondShape = createShape<string>("10deg");
```

- Interface da Genericdan foydalanish

---

# **33-dars Promise**

```ts
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchData<T>(): Promise<T> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: T = await response.json();
  return data;
}

async function getUsers() {
  const users = await fetchData<IUser[]>();
  console.log(users);
}

getUsers();
```

- Fetch orqali apiga so'rov yuborganda genericdan foydalanish
