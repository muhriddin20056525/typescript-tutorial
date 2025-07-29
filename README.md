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

---

# **34-dars Type in generic**

```ts
type Pair<T, U> = [T, U];

const pair1: Pair<number, string> = [1, "one"];
const pair2: Pair<string, number> = ["one", 1];
```

- `Type` da `generic` dan foydalanish

```ts
// Ikkita generic qabul qiladi
interface IUser<T, U> {
  name: T;
  showAge(age: U): void;
}
// Ikkita genericga (string va number) typelarini jo'natyapdi
const user1: IUser<string, number> = {
  name: "John",
  showAge(age) {
    console.log(`Name: ${this.name}, Age: ${age}`);
  },
};

user1.showAge(25);
```

- `Interface` da `Generic` dan foydalanish

```ts
// <T extends { length: number }> - Faqatgina legth metodini ko'rsatish uchun cheklov o'rnatish
function getLength<T extends { length: number }>(item: T): number {
  // Faqatgina length methodini ishlatish mumkin
  return item.length;
}

console.log(getLength("Hello World"));
```

- `Generic` larda cheklov qo'yish (qaysi methodlarni ko'rsatishini cheklash bu yerda faqat `length` methodini ko'rsatadi)

```ts
// Generik funksiya: T - obyekt turi, K - T ichidagi mavjud kalitlardan biri
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  // obj[key] - berilgan kalit orqali obyekt ichidan qiymat olinmoqda
  return obj[key];
}

// user - oddiy obyekt: id, name va email degan 3 ta property bor
const user = {
  id: 1,
  name: "John Doe",
  email: "john@gmail.com",
};

// getProperty orqali 'user' obyektidan 'name' property qiymatini olyapmiz
const userName = getProperty(user, "name");

// Olingan qiymatni konsolga chiqaramiz: "John Doe"
console.log(userName);
```

- `Object` da `Generic` dan foydalanish va ishlatiladigan xossalarga cheklov o'rnatish

```ts
interface HasId {
  id: number;
}

const user = {
  id: 1,
  name: "John",
};
// Interfaceni generic sifatida berish
// <T extends HasId> - faqatgina (HasId) ichidagi xossani qaytaradi
function getById<T extends HasId>(obj: T) {
  return obj.id;
}
```

- Interface ni generic sifatida berib funksiya qaytaradigan xossaga cheklov qo'ysih

---

# **35-dars Class**

```ts
// Classga Generic berish
class Shape<T> {
  // Class xossasiga Generic berish
  private content: T;

  // Constructorga Generic berish
  constructor(content: T) {
    this.content = content;
  }

  // Class methodiga Generic berish
  getValue(): T {
    return this.content;
  }
}

// Classdan object yaratishda Generic berish
const shape = new Shape<string>("Hello");
shape.getValue();

const shape2 = new Shape<number>(123);
shape2.getValue();
```

- `Class` larda `Generic` dan foydalanish

```ts
// T - bu content u-n Generic
// U - bu radius u-n Generic
class Shape<T, U> {
  // Xossalarga Generic lar berish
  private content: T;
  radius: U;

  // Consturctorga Generic lar berish
  constructor(content: T, radius: U) {
    this.content = content;
    this.radius = radius;
  }
  // Methodda generic ishlatish
  getValue(): T {
    return this.content;
  }

  // Methodda generic ishlatish
  getRasius(): U {
    return this.radius;
  }
}

// Class dan object yaratishda Generic ishlatish (1-qiymat T, 2-qiymat U)
const shape = new Shape<string, number>("Hello", 20);
shape.getValue();
shape.getRasius();
```

- `Class` da 2 ta `Generic` dan foydalanish

---

# **36-dars Keyof va Typeof**

```ts
// Object
const user = {
  name: "John",
  age: 30,
};

// Bu usul orqali user objectinig typelari olinadi agarda user objectiga yangi xossa qo'shilsa ham bu type UserType o'zgaruvchisiga avtomatik yoziladi
type UserType = typeof user;

// Funksiyada UserType dan foydalanish
function logger(user: UserType) {
  console.log(user);
}

logger(user);
```

- Typeof orqali dinamic objectlarda type berish

```ts
// Type
type IUser = {
  name: string;
  age: number;
  isMarried: boolean;
};

// IUser typedagi barcha kalitlarni Keyof orqali UserKeys o'zgaruvchisiga yuklaydi
type UserKeys = keyof IUser;

// UserKeys o'zgaruvchisida funksiyada foydalanish
function getUserKey(key: UserKeys) {
  console.log(key);
}

getUserKey("age");
```

- Keyof orqali objectning barcha keylarini (xossalarini) olish

---

# **37-dars Indexed access & Conditional type**

`Indexed access type` - objectning muayyan qiymatini typeini olish uchun ishlatiladi.

```ts
type User = {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;
};

// User typeining qiymati orqali yangi type yaratildi
type UserName = User["name"];
```

- Type ning muayyan bit qiymatini typini olish

```ts
// T dan kelgan typeni extends orqali boolen yoki yo'qligi tekshirilyapdi
type IsBoolean<T> = T extends boolean ? "Yes" : "No";

type A = IsBoolean<boolean>;
```

- Generic orqali kelgan qiymatni shart asosida tekshirish

```ts
interface IAdmin {
  role: "admin";
  access: true;
}

interface IGuest {
  role: "guest";
  access: false;
}
// Role Access bu yangi type u T generic ga kelayotgan role xossasi orqali shart qo'yilib qiymat olyapdi
type RoleAccess<T> = T extends { role: "admin" } ? true : false;
type AdminAccess = RoleAccess<IAdmin>;
type GuestAccess = RoleAccess<IGuest>;
```

- Interfacelar orqali condition typedan foydalanish

---

# **38-dars Readonly, Partial, Required**

`Partial` - generic qabul qiladi va undagi barcha xususiyatlarni berishni ixtiyoriy qilib beradi.

```ts
interface IProduct {
  name: string;
  price: string;
  id: number;
}

// Partial orqali interfaceni funksiya argumentiga type sifatida berish
function createProduct(product: Partial<IProduct>) {
  console.log(product);
}

createProduct({ name: "Shoes", price: "20" });
```

- Bu yerda funksiya argumenti `partial` yordamida `type` berildi va unga `id` berilmadi lekin `partial` dan foydalanilganligi sababli xatolik chiqmaydi

```ts
interface IProduct {
  id: number;
  name: string;
  price?: string;
}
// Required orqali interfaceni funksiya argumentiga type sifatida berish
function createProduct(product: Required<IProduct>) {
  console.log(product);
}

createProduct({ name: "Shoes", price: "20" });
```

- `Required` interface ichidagi barcha typelarni qatiy qilib qo'yadi
- `price?: string;` bu ham qatiy bo'ladi `required` ishlatilganligi uchun. `?` belgisi bo'lsa ham

```ts
interface IProduct {
  id: number;
  name: string;
  price: string;
}

// Interfaceni readonly ga aylantirish yangi type ochish orqali
type ReadonlyProduct = Readonly<IProduct>;

const product: ReadonlyProduct = {
  id: 1,
  name: "Shoes",
  price: "20",
};

// Bu xatolik beradi
product.name = "adidas";
```

- `Readonly` orqali type berilganda undagi xossalarni o'qish mumkin bo'ladi lekin o'zgartirish emas.

---

# **39-dars Pick, Omit, Extract, Exclude**

`Pick` — bu mavjud obyekt (interface yoki type) dan faqat kerakli property (xususiyatlar) ni ajratib olishga xizmat qiladi.

```ts
// Interface
interface IUser {
  name: string;
  age: number;
  addres: string;
  email: string;
}
// Pick orqali interfacedagi xossalar orqali type yaratish
// IUser - Intnerface
// email | address - bu IUser interfacidan tanlab olinadigan xossalar
type UserContactInfo = Pick<IUser, "email" | "addres">;

// Pick va Interface orqali yaratilgan typedan foydalanish
const contact: UserContactInfo = {
  email: "example.gmail.com",
  addres: "Uzbekistan Peshku",
};
```

- `Pick` orqali Interfacedan kerakli xossalarni ajratib olish

`Omit` — bu Pickning teskarisi: berilgan interfacedan ba'zi property’larni tashlab yuboradi, qolganlarini oladi.

```ts
// Intetface
interface IUser {
  name: string;
  age: number;
  addres: string;
  email: string;
  avatar: string;
  phone: string;
  password: string;
  secretKey: string;
}

// Omit orqali interfacedagi xossalar orqali type yaratish
// IUser - Intnerface
// password | secretKey - bu IUser interfacidan tashlab yuborilaadigan xossalar
type UserContactInfo = Omit<IUser, "password" | "secretKey">;

// Omit va Interface orqali yaratilgan typedan foydalanish
const contact: UserContactInfo = {
  name: "Muhriddin",
  age: 20,
  email: "example.gmail.com",
  addres: "Uzbekistan Peshku",
  avatar: "https://image.com",
  phone: "99 108 65 25",
};
```

- `Omit` orqali interfacedagi kerak bo'lmagan xossalarii tashlab yuborib yangi type yaratish

`Extract` — bu ikki type orasidagi umumiy qismlarni ajratib oladi. Ya’ni, ikkinchi type ichida bor bo‘lgan birinchi type elementlarini tanlaydi.

```ts
// Interface
interface IAnimal {
  name: string;
  spaceies: string;
}
// Interface
interface IPlant {
  name: string;
  color: string;
}
// ikki interfaceda mavjud bo'lgan qiymatlarni Extract orqli birlashtirib type yaratish
// Extract ishlashi uchun Interfacedagi xossalarni kaliti kerak qiymati emas shuning uchun keyof dan foydalanilgan
type commonProperties = Extract<keyof IAnimal, keyof IPlant>;
```

- `Extract` orqali ikki interfaceda mavjud bo'lgan qiymatlar orqali yangi type yaratish

`Exclude` — bu Extractning teskarisi: birinchi type (odatda union) dan ikkinchi type’dagi qiymatlarni olib tashlaydi.

```ts
interface IAnimal {
  name: string;
  spaceies: string;
}

interface IPlant {
  name: string;
  color: string;
}
//  IAnimal interfaceidan IPlant interfacida mavjud bo'lmagan qiymatlardan Exclude orqali yangi type yaratish
// Exclude ishlashi uchun Interfacedagi xossalarni kaliti kerak qiymati emas shuning uchun keyof dan foydalanilgan
type commonProperties = Exclude<keyof IAnimal, keyof IPlant>;
```

- `Exclude` dan foydalanib birinchi interfacedan ikkinchi interfaceda mavjud bo'lmagan xossani olib type yaratish

---

# **40-dars ReturnType, Parametr, Awaited**

`ReturnType<T>` — bu utility type bo‘lib, u berilgan funksiya turining qaytargan qiymati (return type) ni ajratib oladi.

```ts
function calc(a: number, b: number): number {
  return a + b;
}

// ReturnTpe dan foydalanib funksiya return qilgan typeni olish
type CalcType = ReturnType<typeof calc>;

// Undan Foydalanish
const result: CalcType = calc(1, 2);
```

- `ReturnType` orqali funksiya qaytaradigan type ni yangi typega olish

`Parameters<T>` — bu utility type bo‘lib, berilgan funksiya turining argumentlar (parametrlar) ro‘yxatini ajratib oladi tuple (`[]`) shaklida.

```ts
// Ikki sonni qabul qilib, ularning yig'indisini qaytaruvchi funksiya
function calc(a: number, b: number): number {
  return a + b;
}

// `CalcType` tipi `calc` funksiyasining qaytaradigan (return) turini oladi.
// Bu holda: number, chunki `calc` number qaytaradi
type CalcType = ReturnType<typeof calc>;

// `CalcParams` esa `calc` funksiyasining parametrlarini oladi.
// Bu holda: [a: number, b: number]
type CalcParams = Parameters<typeof calc>;

// `params` degan o'zgaruvchi `calc` funksiyasining parametrlariga mos qiymatlarni oladi.
// Bu yerda `[1, 2]` bu `[number, number]` tipiga to'g'ri keladi
const params: CalcParams = [1, 2];

// `result` degan o'zgaruvchi `calc` funksiyasining natijasini saqlaydi.
// Typeni oldindan `CalcType` deb berganimiz uchun u `number` bo'ladi.
// Bu yerda `...params` orqali `[1, 2]` massivni `calc`'ga argument sifatida uzatyapmiz
const result: CalcType = calc(...params);
```

- `ReturnType` va `Parameters` dan foydalanish

```ts
class Person {
  constructor(public name: string, age: number) {}
}

type PersonParams = ConstructorParameters<typeof Person>;

const personParams: PersonParams = ["John", 30];
const person = new Person(...personParams);
```

- `Class` `Constructordagi` parametr typeini olish

`Awaited<T>` — bu TypeScript'dagi utility type bo‘lib, u Promise tipini ochib beradi, ya’ni await qilgandagi natijani beradi.

```ts
async function getName(): Promise<string> {
  return "Muhriddin";
}

// Typeni olish:
type NameType = Awaited<ReturnType<typeof getName>>;

// Bu bilan aynan shunday deyilyapti:
const name: NameType = "Muhriddin";
```

- `Awaited` dan foydalanish

---

# **41-dars Mixin**

`Mixin` — bu funksiya bo‘lib, u klassni parametr sifatida oladi va unga yangi metodlar yoki xususiyatlar qo‘shgan yangi klassni qaytaradi.

```ts
// 1. Generic konstruktor tipini aniqlayapmiz:
// Har qanday klass uchun ishlaydigan umumiy konstruktor turi.
// new (...args: any[]) => T — bu har qanday argumentlar bilan chaqiriladigan konstruktor.
type Constructor<T = {}> = new (...args: any[]) => T;

// 2. DrawShape mixin funksiyasi:
// Klassni argument sifatida oladi va unga `draw()` metodini qo‘shib, yangi klass qaytaradi.
function DrawShape<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    draw() {
      console.log("Drawing Shape"); // draw() chaqirilganda konsolga chiqariladi
    }
  };
}

// 3. FillShape mixin funksiyasi:
// Bu ham klassni oladi va `fill()` metodini qo‘shadi.
function FillShape<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    fill() {
      console.log("Filling Shape"); // fill() chaqirilganda konsolga chiqariladi
    }
  };
}

// 4. Oddiy bo‘sh klass: bu bazaviy klass sifatida ishlatiladi.
class Shape {}

// 5. Mixinlarni ketma-ket qo‘llayapmiz:
// Avval Shape ga DrawShape ni qo‘shyapti, so‘ngra unga FillShape ni.
// Tartib: FillShape(DrawShape(Shape))
const MixedShape = FillShape(DrawShape(Shape));

// 6. Endi Circle klassi MixedShape'dan meros oladi:
// MixedShape ichida draw() va fill() metodlari bor.
class Circle extends MixedShape {}

// 7. Circle obyektini yaratamiz.
const circle = new Circle();

// 8. draw() metodi chaqirilmoqda — bu DrawShape dan kelgan.
circle.draw(); // → "Drawing Shape"

// 9. fill() metodi chaqirilmoqda — bu FillShape dan kelgan.
circle.fill(); // → "Filling Shape"
```

- `Mixin` dan foydalanish

# **42-dars Decorators (part-1)**

`Decorator` — bu klasslarga, metodlarga, property'larga yoki parameter'larga qo‘shimcha funksiya yoki ma'lumot qo‘shish uchun ishlatiladigan maxsus funksiya. Ular ko‘pincha meta-programming (ya'ni kodni kod orqali o‘zgartirish) uchun ishlatiladi.

```ts
// Interface Class Uchun
interface IShape {
  name: string;
  getValue: () => string;
}

// Bu class decorator funksiyasi
// U klass yaratilganda uning nomini konsolga chiqaradi
function Logger(constructor: Function) {
  console.log(`Class Created: ${constructor.name}`);
}

// @Logger bu yerda Circle klassiga decorator sifatida qo‘shildi
// Bu Circle klassi yaratilganida Logger funksiyasi avtomatik ishga tushadi
@Logger
class Circle implements IShape {
  // IShape interfeysidan kelgan name property
  name: string = "Circle";

  constructor() {
    console.log(`Cirlce Created`);
  }

  getValue(): string {
    return this.name;
  }
}

// Yangi Object Yaratish
const shape = new Circle();
```

- `Class` uchun `Decorator` Yaratish

---

# **43-dars Decorators (part-2)**

```ts
interface IShape {
  name: string;
  getValue: () => string;
}

function Logger(constructor: Function) {
  console.log(`Class Created: ${constructor.name}`);
}

function FirstDecorator(constructor: Function) {
  console.log(`First Decorator: ${constructor.name}`);
}

@FirstDecorator
@Logger
class Circle implements IShape {
  name: string = "Circle";

  constructor() {
    console.log(`Cirlce Created`);
  }

  getValue(): string {
    return this.name;
  }
}

const shape = new Circle();
```

- Bir Nechta Decoratorni ketma ket ishlatish
- Decoratorlarni pastdan tepaga qarab o'qiydi yani birinchi `@Logger` keyin esa `@FirstDecorator` ishga tushadi

```ts
interface IShape {
  name: string;
  getValue: () => string;
}

// Bu class xossasini o'zgartieish uchun Decorator
// Lekin u ishlamaydi chunki Decorator class yaratilishidan oldin ishga tushadi bu Decorator esa classning prototype.name xossasini o'zgartiryapdi class yaratilganda esa bu kodni yangilab yuboradi yani o'zinig xossalarini bu kod ustidan yozib yuboradi
function ChangeShape(constructor: Function) {
  constructor.prototype.name = "Triangle";
}

@ChangeShape
class Circle implements IShape {
  name: string = "Circle";

  constructor() {
    console.log(`Cirlce Created`);
  }

  getValue(): string {
    return this.name;
  }
}

const shape = new Circle();
console.log(shape);
```

- `Class` xossa qiymatini o'zgartirish uchun `Decorator` yaratish (bu usul ishlamaydi)

---

# **44-dars Class decorator**

`Class decorator` — bu klassga qo‘shimcha funksionallik qo‘shish yoki uni o‘zgartirish uchun ishlatiladigan funktsiya bo‘lib, u to‘g‘ridan-to‘g‘ri klassga qo‘llanadi.

```ts
// Class uchun interface
interface IShape {
  name: string;
  getValue: () => string;
}

// Classni o'zgartiradigan funksiya
// TBase - Generic
// (...args: any[]) -  bu konstruktor har qanday miqdordagi argumentlarni olishi mumkin degani
function ChangeShape<TBase extends { new (...args: any[]): {} }>(
  constructor: TBase
) {
  // Argumentdagi constructordan meros olinib yangi class qaytarilyapdi
  return class extends constructor {
    // Class dagi eski xossa o'zgartirilyapdi
    name: string = "Tiangle";
    // Class ga yangi xossa qo'shilyapdi
    color: string = "red";
  };
}

// Decoratordan foydalanish
@ChangeShape
// Class Yaratish
class Circle implements IShape {
  name: string = "Circle";

  constructor() {
    console.log(`Cirlce Created`);
  }

  getValue(): string {
    return this.name;
  }
}

const shape = new Circle();
console.log(shape);
```

- Class dagi xossani o'zgartirish va unga yangi xossa qo'shish

```ts
interface IShape {
  name: string;
  getValue: () => string;
}
//  Bu oddiy decorator factory — ya’ni dekoratorga parametr berish imkonini beradi
function Logger(prefix: string) {
  return function (constructor: Function) {
    // Konstruktorda ismi bilan birga prefiks chiqariladi
    console.log(`${prefix} - ${constructor.name}`);
  };
}

@Logger("CREATE-CIRCLE")
class Circle implements IShape {
  name: string = "Circle";

  constructor() {
    console.log(`Cirlce Created`);
  }

  getValue(): string {
    return this.name;
  }
}

const shape = new Circle();
console.log(shape);
```

- Decorator Factorydan foydalanish

---

# **45-dars CreatedAt decorator (Kichik Amalyot)**

```ts
// Decorator Funcksiya
// T - Generic orqali type berish
function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  // Eski classdan meros olib yangi class yaratish
  return class extends constructor {
    // Ushbu decorator qaysi classga ishlasa unga yangi createdAt xossasi qo'shiladi
    readonly createdAt = new Date();
  };
}

// Decoratordan foydalanish
@CreatedAt
// Class Yaratish
class Course {
  // Class Xossalari
  name: string = "TypeScript";
  excerpt: string = "Learn stypscript from scratch";
}

// Decoratordan foydalanish
@CreatedAt
// Class Yaratish
class Lesson {
  // Class Xossalari
  name: string = "What is TypeScript";
  content: string = "Introdcution to TypeScript";
}

// Type Yaratish Class xossalariga createdAt typeini qo'shish uchun kerak
type CreatedEntity = { createdAt: Date };

// TypeScript orqali Classlaar typiga createdAt ni ham qo'shish
const course = new Course() as Course & CreatedEntity;
const lesson = new Lesson() as Lesson & CreatedEntity;

console.log(course);
console.log(lesson);
```

- TypeScript orqali `createdAt` loyihasini bajarish

---

# **46-dars Method decorator (part-1)**

`Method decorator` - Bu class ning malum bir methodiga qo'llanadigan typescript xossasi. U methodning ishlashini o'zgartirishi yoki kengaytirishi mumkin.

```ts
// Method dekoratori sifatida ishlatiladigan funksiya
function Logger(
  // Dekoratsiya qilinayotgan klass (yoki prototip)
  target: Object,
  // Metod nomi (masalan, "greeting")
  propertyKey: string,
  // Metod haqidagi meta-ma’lumot (get, set, value, writable)
  descriptor: PropertyDescriptor
) {
  // Asl metodni almashtiruvchi yangi funksiya
  descriptor.value = function (...args: any[]) {
    // Konsolga xabar chiqaradi
    console.log("Method not implemented");
    return args;
  };
  // O‘zgartirilgan metod descriptorini qaytarish
  return descriptor;
}

class User {
  constructor(public name: string, public age: number) {}
  // Metodga Logger dekoratori qo‘llash
  @Logger
  greeting() {
    throw new Error("Method not implemented");
  }
}

const user = new User("John", 30);
user.greeting();
```

- Decorator yordamida `greeting` methodi qaytarayotgan xatolikni olib uni boshqacha formatda ko'rsatish

---

# **47-dars Method decorator (part-2)**

```ts
// Bu decorator faqat admin foydalanuvchilar deleteUser() metodini ishlatishini ta'minlaydi
function Admin(
  target: Object, // Dekoratsiya qilinayotgan klass (yoki uning prototipi)
  propertyKey: string, // Metod nomi (masalan, "deleteUser")
  descriptor: PropertyDescriptor // Metod haqida meta-ma’lumot (get, set, value, writable va hokazo)
) {
  const originalMethod = descriptor.value; // Asl (o‘zgartirilmagan) metodni saqlab qo‘yamiz

  // Metodni o‘zgartiramiz — endi u adminlikni tekshiradi
  descriptor.value = function (this: { isAdmin: boolean }, ...args: any[]) {
    if (!this.isAdmin) {
      // Agar foydalanuvchi admin bo'lmasa
      console.log("Access denied: You are not an admin"); // Kirish rad etildi degan xabar chiqadi
      return; // Metod bajarilmaydi
    }

    // Aks holda, asl metodni chaqiramiz
    return originalMethod.apply(this, args);
  };

  return descriptor; // O‘zgartirilgan metodni qaytaramiz
}

// Foydalanuvchini ifodalovchi klass
class User {
  // Konstruktor: foydalanuvchining ismi, yoshi va adminligini qabul qiladi
  constructor(
    public name: string,
    public age: number,
    public isAdmin: boolean
  ) {}

  @Admin // Bu metod faqat adminlar tomonidan chaqirilishi kerak
  deleteUser() {
    console.log("Deleting User..."); // Foydalanuvchini o‘chirish amali bajariladi
  }
}

// Yangi foydalanuvchi yaratamiz: ismi John, yoshi 30, admin = true
const user = new User("John", 30, true);

// deleteUser() metodini chaqiramiz — foydalanuvchi admin bo‘lgani uchun ishlaydi
user.deleteUser();
```

- Decorator orqali Adminni aniqlash

---

# **48-dars Declare**

`declare` — bu kalit so‘z bo‘lib, u biror narsa (masalan: o'zgaruvchi, funksiya, modul, klass) tashqi kutubxonada yoki boshqa joyda mavjudligini TypeScript’ga e'lon qilish uchun ishlatiladi, lekin uning haqiqiy implementatsiyasi hozircha bu yerda yo‘q degan ma’noni bildiradi.

```ts
// Declaredan foydalanish
// trackEvent - bu declare qilinadigan funksiyaning nomi
declare function trackEvent(name: string, data: { userId: string }): void;

// Bu funksiya boshqa faylda turibdi
trackEvent("user_login", { userId: "12345" });
```

- Declaredan foydalanish tashqi kutubxonadan kelgan funksiyalarni declare qilganda xussi oddiy propsdan kelgan fnksiyaga type bergandek type beramiz

```ts
// lib/math.js

function add(a, b) {
  return a + b;
}

function subtrack(a, b) {
  return a - b;
}

function PI() {
  return 3.14;
}

// lib/math.d.ts
declare module "math" {
  export function add(a: number, b: number): number;
  export function subtrack(a: number, b: number): number;
  export function PI(): number;
}

// app.ts
import { add, subtrack, PI } from "math";

console.log(add(1, 2));
console.log(subtrack(30, 23));
console.log(PI());
```

- `lib/math.js` bu bizda npm orqali yuklab olingan kutubxona vazifasini bajarmoqda bu faylda 3 ta oddiy funksiya bor

- `lib/math.d.ts` `math.js` faylidagi funksiyalarni modul orqali `declare` qilish vazifasini bajaryapdi bu fayl

- `app.ts` faylida `math.js` faylidagi funksiyalar chaqirib ishlatilyapdi

---

# **49-dars File bilan ishlash**

```ts
// tsconfig.json
"files": ["app.ts"]
```

- Bu kod faqat `app.ts` fayli compilyatsiya qilishni belgilaydi. Boshqa faylar kompilyatsiya qilinmaydi

```ts
// tsconfig.json
"include": ["services/*.ts"]
```

- Bu kod faqatgina `services` papkasi ichidagi barcha `.ts` faylarni kompilyatsiya qiladi

```ts
// tsconfig.json
"exclude": ["auth.ts"]
```

- Bu kod faqatgina `auth.ts` faylini kompilyatsiya qilmaydi

```ts
// tsconfig.json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

- `outDir` ts fayllar qaysi papkaga kompilyatsiya qilinishini belgilaydi
- Bu holatda barcha `ts` fayllar `dist` papkasi ichiga kompilyatsiya qilinadi

```ts
// tsconfig.json
{
  "compilerOptions": {
    "removeComments": true
  }
}
```

- `removeComments` ts faylida komentariya yozilgan bo'lsa js faylga bu komentariyani kompilyatsiya qilmaydi

---

# **50-dars Asosiy konfiguratsiya**

```ts
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2020"
  }
}
```

- `target` JavaScript versiyasini o'rnatadi

```ts
// tsconfig.json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

- `experimentalDecorators` Loyihada Decoratorlardan foydalanish uchun kerak

```ts
// tsconfig.json
{
  "compilerOptions": {
    "noImplicitAny": true,
  }
}
```

- Loyihada `any` type bo'lsa fayl compilyatsiya qilinmaydi

```ts
// tsconfig.json
{
  "compilerOptions": {
    "strictPropertyInitialization": false
  }
}
```

- `strictPropertyInitialization` `false` bo'lsa class ichida constructor ishlatilmasa xatolik bermaydi `true` bo'lsa constructor ishlatish majburiy bo'ladi

```ts
// tsconfig.json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

- boshqa kutubxonalar (masalan, `node_modules`) ichidagi `.d.ts` tip fayllarini tekshirishni o'tkazib yuboradi.

---

# **51-dars Kerakli konfiguratsiya (part - 1)**

```ts
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
```

- `baseUrl` import yo‘llarini soddalashtirish uchun ishlatiladi.
- `"baseUrl": "./src"` — bu src papkasini asosiy ildiz yo‘l (root path) sifatida belgilaydi

```ts
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/": ["*"]
    }
  }
}
```

- TypeScript uchun import yo‘llarini qisqartirish (alias) vazifasini bajaradi.

```ts
// tsconfig.json
{
  "compilerOptions": {
     "strictNullChecks": true
  }
}
```

- Bu sozlama `null` va `undefined` qiymatlarini qat’iy tekshirishni yoqadi.

```ts
// tsconfig.json
{
  "compilerOptions": {
    "noUnusedLocals": true
  }
}
```

- Foydalanilmagan o'zgaruvchilar uchun ogohlantirish beradi

```ts
// tsconfig.json
{
  "compilerOptions": {
    "noUnusedParameters": true
  }
}
```

- Foydalanilmagan funksiya parametrlari uchun ogohlantirish beradi

```ts
// tsconfig.json
{
  "compilerOptions": {
   "noImplicitReturns": true
  }
}
```

- Funksiya doimiy nimadir qaytarishi kerakligini belgilaydi

---

# **52-dars Kerakli konfiguratsiya (part - 2)**

```ts
// tsconfig.json
{
  "compilerOptions": {
    "noFallthroughCasesInSwitch": true
  }
}
```

- `noFallthroughCasesInSwitch` - Swtich/Case da `break` xossasini berishni majburiy qiladi
  yoki `return` dan foydalanish kerak

```ts
// tsconfig.json
{
  "compilerOptions": {
    "resolveJsonModule": true
  }
}
```

- `resolveJsonModule` - JSON fayllarni import qilish imkonini beradi

```ts
// tsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  }
}
```

- `allowJs` - TypeScript'ga .js fayllarni ham loyihaga kiritishga ruxsat beradi.
- `checkJs` - TypeScript'ga .js fayllarda ham tahlil (type checking) qilishni buyuradi.

```ts
// tsconfig.json
{
  "compilerOptions": {
   "declaration": true
  }
}
```

- `declaration` TypeScript kompilyatoriga `.ts` fayllardan `.d.ts` ya’ni declaration fayllarini yarat deb buyuradi.

```ts
// tsconfig.json
{
  "compilerOptions": {
   "sourceMap": true
  }
}
```

- `sourceMap` - TypeScript kompilyatoriga har bir `.ts` fayl bilan birga `source map (.map)` fayl yaratishni buyuradi.

```ts
// tsconfig.json
{
  "compilerOptions": {
    "noEmit": true
  }
}
```

- `noEmit`“Hech qanday fayl yaratma (ya’ni emit qilma), faqat tahlil (type checking) qil
  degan buyruq beradi.

---

# **53-dars Foydali konfiguratsiya**

```ts
// tsconfig.json
{
  "compilerOptions": {
    "alwaysStrict": true
  }
}
```

- `alwaysStrict` har bir javascript fayda `use strict` ni yoqadi

```ts
// tsconfig.json
{
  "compilerOptions": {
    "downlevelIteration": true
  }
}
```

- `downlevelIteration` `for...of va spread operatorlari` kabi iteratsiya operatorlarini eski JavaScript versiyalarida ham to‘g‘ri ishlashini ta'minlaydi.

```ts
// tsconfig.json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true
  }
}
```

- `declarationMap` TypeScript fayllari uchun `.d.ts` turdagi deklaratsiya fayllarini va ularga mos xarita (`.d.ts.map`) fayllarini yaratadi.

```ts
// tsconfig.json
{
  "compilerOptions": {
    "experimentalDecorators": true
    "emitDecoratorMetadata": true
  }
}
```

- `emitDecoratorMetadata` TypeScript'da dekoratorlardan foydalanishga va ular haqidagi metadata ma’lumotlarni kompilyatsiya vaqtida qo‘shishga ruxsat beradi.

```ts
// tsconfig.json
{
  "compilerOptions": {
    "preserveConstEnums": true
  }
}
```

- `preserveConstEnums` const enum tipidagi enumlarni kompilyatsiya qilinganda kod ichida saqlab qoladi, ularni butunlay olib tashlamaydi.

```ts
// tsconfig.json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true
  }
}
```

- `noUncheckedIndexedAccess` indeks orqali kiriladigan obyekt yoki massiv elementlariga kirishda har doim undefined ehtimolini hisobga olishni majburiy qiladi.

```ts
// tsconfig.json
{
  "compilerOptions": {
    "noPropertyAccessFromIndexSignature": true
  }
}
```

- `noPropertyAccessFromIndexSignature` indeks imzolari (`[key: string]: type`) orqali aniqlangan xossalarga nuqta (`.`) orqali emas, faqat kvadrat qavs (`[]`) orqali murojaat qilishga majbur qiladi.

---

# **54-dars Namespace & Reference**

`namespace` — bu nomlar to‘plami bo‘lib, TypeScript’da bitta faylda yoki globalda kodlarni guruhlash uchun ishlatiladi.

```ts
// modules/math.ts

// `MathUtils` nomli namespace (ya'ni nomlar to'plami) e'lon qilinyapti.
// Bu namespace ichida funksiyalarni guruhlab saqlash mumkin.
namespace MathUtils {
  // `add` funksiyasi e'lon qilinyapti va `export` orqali tashqariga chiqarilyapti.
  // U ikkita son (a va b) qabul qiladi va ularning yig'indisini qaytaradi.
  export function add(a: number, b: number): number {
    return a + b;
  }

  // `abstract` funksiyasi ham `export` qilingan.
  // Bu funksiyada ikkita son (a va b) olinadi va ularning ayirmasi qaytariladi.
  export function abstract(a: number, b: number): number {
    return a - b;
  }
}

// app.ts

// Bu qatorda TypeScript kompilyatoriga "modules/math.ts" faylini shu faylga ulash kerakligi aytilyapti.
// U faylda `MathUtils` nomli namespace va uning funksiyalari joylashgan bo'lishi kerak.

/// <reference path="modules/math.ts" />

// Bu yerda `MathUtils` namespace ichidagi `add` funksiyasi chaqirilyapti.
// `add(4, 9)` funksiyasi 4 va 9 ni qo‘shib, natija sifatida 13 ni qaytaradi.
// `console.log(...)` esa bu natijani konsolga chiqaradi.
console.log(MathUtils.add(4, 9));
```

- `namespace` yaratish
  va undan foydalanish

---

# **55-dars Packages**

Ayrim kutubxonalar Typescriptni qo'llab quvvatlamaydi shuning uchun ularga o'zimiz qo'lda type yozishimiz kerak. Bunday typelar `decloration type` deyiladi va odatda `types.d.ts` faylida yoziladi

```ts
// types.d.ts

// "safe-json-parse/callback" degan modul borligini TypeScriptga bildiradi
declare module "safe-json-parse/callback" {
  // Callback funksiyasining turini e'lon qilayapmiz.
  // Bu funksiya ikki argument oladi: xatolik (Error yoki null) va natija (har qanday turdagi)
  type SafeParseCallback = (err: Error | null, result: any) => void;

  // Bu yerda `safeParse` funksiyasi e'lon qilinmoqda
  // U JSON formatdagi matn (`jsonString`) qabul qiladi
  // Istalgancha (optional) callback funksiyasini ham qabul qilishi mumkin
  // Va u [Error | null, any] ko‘rinishida array qaytaradi:
  //   - Birinchi element: agar xatolik bo‘lsa `Error`, bo‘lmasa `null`
  //   - Ikkinchi element: parse qilingan natija (yoki undefined)
  export function safeParse(
    jsonString: string,
    callback?: SafeParseCallback
  ): [Error | null, any];

  // safeParse funksiyasi default eksport qilinmoqda,
  // shuning uchun uni `import safeParse from "safe-json-parse/callback"` deb import qilish mumkin
  export default safeParse;
}

// app.ts

// "safe-json-parse/callback" modulidan default eksport qilingan `safeParse` funksiyasini import qilamiz
import safeParse from "safe-json-parse/callback";

// `safeParse` funksiyasini chaqiramiz, unga JSON matn va callback beramiz
safeParse('{ "x": 42 }', (err, result) => {
  // Agar JSON matn noto'g'ri bo'lsa `err` o'zida `Error` obyektini saqlaydi va shu yerda chiqariladi
  if (err) console.error(err);
  // Aks holda (`err` null bo'lsa), parse qilingan natijani chiqaramiz
  // Masalan: { x: 42 }
  else console.log(result);
});
```

---

# **56-dars Singleton pattern**

`Singleton pattern` bu Design Pattern bo‘lib, birgina instance (nusxa) yaratish va unga global tarzda kirish imkonini beradi. Ya’ni, classning faqat bitta nusxasi mavjud bo‘ladi, va shu nusxa butun loyiha bo‘ylab ishlatiladi.

```ts
// Singleton nomli class e'lon qilinmoqda
class Singleton {
  // static instance property — bu classning yagona nusxasini saqlaydi
  private static instance: Singleton;

  // constructor private — tashqaridan new Singleton() qilib bo‘lmasligini belgilaydi
  private constructor() {
    console.log("Singleton instance created");
  }

  // static metod — instance ni olish uchun ishlatiladi
  static getInstance(): Singleton {
    // Agar hali instance yaratilmagan bo‘lsa
    if (!Singleton.instance) {
      // Instance ni yaratadi
      Singleton.instance = new Singleton();
    }

    // Instance ni qaytaradi (yaratilgan yoki mavjud bo‘lsa)
    return Singleton.instance;
  }

  // public method — istalgan tashqi joydan chaqirish mumkin
  public someMethod(): void {
    console.log("Method called on singleton instance");
  }
}

// getInstance orqali birinchi marta instance olinmoqda
const s1 = Singleton.getInstance();

// getInstance orqali ikkinchi marta instance olinmoqda (lekin yangi emas, mavjud instance qaytadi)
const s2 = Singleton.getInstance();

// Ikkala obyektni konsolga chiqaramiz — ular bir xil bo‘lganini ko‘rish uchun
console.log(s1);
console.log(s2);
```

- `Singleton` patterndan foydalanish

```ts
// MongoConnection nomli Singleton class
class MongoConnection {
  // Singleton instance saqlanadigan static property
  private static instance: MongoConnection;

  // MongoDB bilan ulanish uchun kerakli client
  private client: MongoClient;

  // MongoDB database obyektini saqlash uchun (boshlanishda null)
  private db: Db | null = null;

  // private constructor — tashqaridan new MongoConnection() qilib bo‘lmaydi
  private constructor() {
    // MongoClient obyektini yaratamiz — bu ulanish uchun kerak
    this.client = new MongoClient(
      "mongodb+srv://muhriddindavlatov89:nqkMVpTrLPrrWNeV@cluster0.nnjstnl.mongodb.net/netflix"
    );
  }

  // Singleton instance ni olish uchun static metod
  static getIntance(): MongoConnection {
    // Agar instance hali mavjud bo‘lmasa, yangisini yaratamiz
    if (!this.instance) {
      this.instance = new MongoConnection();
    }

    // Mavjud (yoki yangi) instance ni qaytaramiz
    return this.instance;
  }

  // Bazaga ulanish funksiyasi (asinxron)
  async connect(): Promise<Db> {
    // Agar avval ulanish bo‘lgan bo‘lsa, shu db ni qaytaramiz
    if (this.db) {
      console.log(`Already connected to database`);
      return this.db;
    }

    // Aks holda, ulanishni boshlaymiz
    console.log(`Connecting to database...`);

    // MongoDB serverga ulanamiz
    await this.client.connect();

    // Ulanishdan so‘ng, ma'lumotlar bazasini tanlaymiz
    this.db = this.client.db("mydatabase");

    // Ulanganini konsolga chiqaramiz
    console.log(`Connected to the database`);

    // Bazani qaytaramiz
    return this.db;
  }
}

// Asosiy ishga tushirish funksiyasi
async function bootstrap() {
  // Birinchi instance va bazani olamiz
  const mongo1 = MongoConnection.getIntance();
  const db1 = await mongo1.connect();

  // Ikkinchi instance va bazani olamiz
  const mongo2 = MongoConnection.getIntance();
  const db2 = await mongo2.connect();

  // Har ikkala db instance bir xilmi, tekshiramiz
  if (db1 === db2) {
    console.log("Both instance are the same"); // Agar singleton ishlagan bo‘lsa, shu chiqadi
  } else {
    console.log("Instances are different"); // Aks holda (noto‘g‘ri yozilgan bo‘lsa)
  }
}

// Dastur ishga tushadi
bootstrap();
```

- `Singleton` pattern bilan `MongoDb` malumotlar bazasiga ulanish

---

# **57-dars Factory pattern**

`Factory Pattern` — bu Object yaratish uchun maxsus funksiya yoki klass bo‘lib, har safar bir xil interfeysga ega bo‘lgan, lekin turli xil turlardagi obyektlarni yaratishga imkon beradi.

```ts
// Person interfeysi - barcha odam turlarida greeting() funksiyasi bo‘lishi kerak
interface Person {
  greeting(): void;
}

// PersonType enum - bizda faqat shu ikki turdagi odamlar mavjud
enum PersonType {
  Employee = "Employee", // Ishchi
  Manager = "Manager", // Boshqaruvchi
}

// Employee klassi - Person interfeysini implement qiladi
class Employee implements Person {
  // greeting() funksiyasi - ishchi salomlashuvi
  greeting() {
    console.log("Hello from Employee");
  }
}

// Manager klassi - ham Person interfeysiga amal qiladi
class Manager implements Person {
  // greeting() funksiyasi - manager salomlashuvi
  greeting() {
    console.log("Hello from Manager");
  }
}

// PersonFactory klassi - obyektlarni yaratish uchun factory pattern
class PersonFactory {
  // createPerson() - static metod, parametr sifatida tur (type) oladi
  static createPerson(type: string): Person {
    // Agar type - Employee bo‘lsa, Employee obyektini qaytar
    if (type === PersonType.Employee) {
      return new Employee();
    }
    // Agar type - Manager bo‘lsa, Manager obyektini qaytar
    else if (type === PersonType.Manager) {
      return new Manager();
    }
    // Noto‘g‘ri type bo‘lsa, xatolik qaytar
    else {
      throw new Error("Invalid person type");
    }
  }
}

// PersonFactory orqali Employee obyektini yaratamiz
const employee = PersonFactory.createPerson(PersonType.Employee);
// Uning greeting metodini chaqiramiz
employee.greeting(); // Hello from Employ ee

// PersonFactory orqali Manager obyektini yaratamiz
const manager = PersonFactory.createPerson(PersonType.Manager);
// Uning greeting metodini chaqiramiz
manager.greeting(); // Hello from Manager
```

- Factory Pattern

```ts
// Klass konstruktorlarini ifodalovchi generic type
// Har qanday klassni (new bilan chaqiriladigan) parametr sifatida qabul qiladi
type Constructor<T> = new (...args: any[]) => T;

// Factory klassi - istalgan klassdan obyekt yaratish uchun universal funksiya
class Factory {
  // create - static va generic metod
  // Ctor - konstruktor funksiyasi (klass), args - unga beriladigan argumentlar
  static create<T>(Ctor: Constructor<T>, ...args: any[]): T {
    return new Ctor(...args); // Yangi obyekt yaratiladi va qaytariladi
  }
}

// User klassi - konstruktorida 'name' parametrini oladi
class User {
  constructor(public name: string) {} // public name bilan avtomatik property bo‘ladi
}

// Product klassi - konstruktorida 'title' parametrini oladi
class Product {
  constructor(public title: string) {} // public title bilan avtomatik property bo‘ladi
}

// User klassidan obyekt yaratamiz, Factory orqali
const user = Factory.create(User, "John Doe");
console.log(user); // Natija: User { name: 'John Doe' }

// Product klassidan obyekt yaratamiz, Factory orqali
const product = Factory.create(Product, "Laptop");
console.log(product); // Natija: Product { title: 'Laptop' }
```

- Generic orqali Factory Patterndan Foydalanish

---

# **58-dars Prototype pattern**

`Prototype Pattern` — bu Object-Oriented Design Pattern bo‘lib, yangi obyektlarni mavjud obyektning nusxasini ko‘chirish (clone qilish) orqali yaratishga asoslanadi. Bu usul yangi obyektni noldan yaratmasdan, mavjud obyektni nusxalash orqali tezroq va samaraliroq yaratishni ta’minlaydi.

```ts
// Prototype interfeysini yaratamiz, u generik turga ega bo‘lib,
// har qanday o‘zidan nusxa qaytaradigan klass uni implement qilishi mumkin
interface Prototype<T> {
  clone(): T; // clone metodi T turidagi yangi obyektni qaytaradi
}

// Person klassi Prototype interfeysini implement qiladi.
// Bu klassning obyekti o‘zidan nusxa (klon) ola oladi.
class Person implements Prototype<Person> {
  // Constructor orqali obyektga name va role qiymatlari beriladi
  constructor(public name: string, public role: string) {}

  // clone metodi mavjud obyektning yangi nusxasini qaytaradi
  clone(): Person {
    // Yangi Person obyektini shu obyektning xususiyatlari bilan yaratadi
    return new Person(this.name, this.role);
  }
}

// john nomli yangi Person obyektini yaratamiz
const john = new Person("John Doe", "Software Engineer");

// john obyektidan klon (nusxa) olib, unga yangi nom beramiz
const jane = john.clone(); // jane - bu john ning nusxasi
jane.name = "Jane Doe"; // jane ning name'ini o‘zgartiramiz

// jane dan ham yangi klon olib, name va role qiymatlarini o‘zgartiramiz
const walter = jane.clone(); // walter - bu jane ning nusxasi
walter.name = "Walter White"; // yangi ism
walter.role = "Manager"; // yangi lavozim

// Natijalarni konsolga chiqaramiz
console.log("John:", john); // asl obyekt: John Doe - Software Engineer
console.log("Jane:", jane); // klonlangan va nomi o‘zgargan: Jane Doe - Software Engineer
console.log("Walter:", walter); // yana klon va qiymatlar o‘zgartirilgan: Walter White - Manager
```

- Prototype Orqali Clone Olish
- Kamchiligi Nested Objectdan Nusxa Olinganda Asosiy Objectni Ham O'zgartiradi

---

# **59-dars Builder pattern**

`Builder pattern` — bu obyektlarni bosqichma-bosqich, murakkab konfiguratsiyalar bilan yaratish uchun ishlatiladigan dizayn patternidir.

```ts
// Foydalanuvchi (User) klassi – bu model bo‘lib, barcha kerakli ma'lumotlarni oladi
class User {
  constructor(
    public id: number, // foydalanuvchi ID raqami
    public name: string, // foydalanuvchi ismi
    public email: string, // foydalanuvchi email manzili
    public password: string, // foydalanuvchi paroli
    public phone: string, // telefon raqami
    public address: string, // uy manzili
    public city: string, // shahar
    public state: string // viloyat (yoki davlat holat)
  ) {}
}

// UserBuilder klassi – bu builder pattern orqali User obyektini yaratish uchun
class UserBuilder {
  // Har bir property `private` qilingan va `!:` bilan belgilangan
  // bu shuni anglatadiki, qiymat keyinroq belgilanadi (definitely assigned later)
  private id!: number;
  private name!: string;
  private email!: string;
  private password!: string;
  private phone!: string;
  private address!: string;
  private city!: string;
  private state!: string;

  // Quyidagi setter funksiyalar har bir property uchun yozilgan
  // Ular o‘zgaruvchiga qiymat belgilab, `this` ni qaytaradi (chain qilish uchun)

  setId(id: number): this {
    this.id = id;
    return this; // method chaining imkonini beradi
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  setPassword(password: string): this {
    this.password = password;
    return this;
  }

  setPhone(phone: string): this {
    this.phone = phone;
    return this;
  }

  setAddress(address: string): this {
    this.address = address;
    return this;
  }

  setCity(city: string): this {
    this.city = city;
    return this;
  }

  setState(state: string): this {
    this.state = state;
    return this;
  }

  // build() metodi – barcha property’lar tayyor bo‘lgach, asl User obyektini yaratadi
  build(): User {
    return new User(
      this.id,
      this.name,
      this.email,
      this.password,
      this.phone,
      this.address,
      this.city,
      this.state
    );
  }
}

// UserBuilder orqali User obyektini yaratish – builder patterndan foydalanish
const user = new UserBuilder()
  .setId(1) // ID ni belgilash
  .setName("Muhriddin") // ism
  .setEmail("muhriddin@example.com") // email
  .setPassword("secure123") // parol
  .setPhone("998901234567") // telefon
  .setAddress("Olmazor 22") // manzil
  .setCity("Tashkent") // shahar
  .setState("Tashkent Region") // viloyat
  .build(); // tayyor User obyektini yaratish

// Natijani konsolga chiqarish
console.log(user);
```

- Bulder Patterndan foydalanish

---

# **60-dars Bridge pattern**

`Bridge pattern` — bu strukturaviy dizayn pattern bo‘lib, u abstraksiyani va uni amalga oshiruvchi (implementation) qismini bir-biridan mustaqil rivojlantirish imkonini beradi. Ya’ni, bu pattern koddagi qatlamlar orasidagi bog‘liqlikni zaiflashtirish (loosely coupled) uchun ishlatiladi.

```ts
interface PaymentMethod {
  // Har qanday to'lov usuli 'pay' metodini amalga oshirishi kerak
  pay(amount: number): void;
}

// Payme uchun to‘lov usuli
class Payme implements PaymentMethod {
  pay(amount: number): void {
    // Konsolga to‘lov haqida ma’lumot chiqariladi
    console.log(`Paid ${amount} using Payme`);
  }
}

// Click uchun to‘lov usuli
class Click implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Click`);
  }
}

// Uzum uchun to‘lov usuli
class Uzum implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Uzum`);
  }
}

// PaymentGateway - bu 'abstraksiya' rolini bajaradi (Bridge Pattern'dagi)
abstract class PaymentGateway {
  // Bu class har doim biron bir to'lov usuli bilan bog'langan bo'ladi
  constructor(protected method: PaymentMethod) {}

  // checkout - bu abstrakt metod
  abstract checkout(amount: number): void;
}

// Web uchun gateway, PaymentGateway'dan meros oladi
class WebStoreGateway extends PaymentGateway {
  checkout(amount: number): void {
    // Web do'kondan checkout bosilganini bildiradi
    console.log(`Checkout from Web Store`);
    // Tanlangan to'lov usuli orqali to'lov bajariladi
    this.method.pay(amount);
  }
}

// Mobile uchun gateway
class MobileStoreGateway extends PaymentGateway {
  checkout(amount: number): void {
    console.log(`Checkout from Mobile Store`);
    this.method.pay(amount);
  }
}

// Turli to'lov usullarini yaratamiz
const payme = new Payme();
const click = new Click();
const uzum = new Uzum();

// Web Store + Payme kombinatsiyasi
const webPay = new WebStoreGateway(payme);
// To'lovni amalga oshiramiz
webPay.checkout(100);

// Mobile Store + Click kombinatsiyasi
const mobilePay = new MobileStoreGateway(click);
mobilePay.checkout(200);
```

- Bridge Pattern dan foydalanish

---

# **61-dars Facade pattern**

`Facade Pattern` — bu strukturaviy dizayn patterni bo‘lib, u murakkab tizimning ichki ishlarini yashirib, tashqi dunyoga oddiy interfeys taqdim etadi.

```ts
// AudioProccessor classi audio bilan ishlovchi komponent
class AudioProccessor {
  // Videodan audio qismini ajratib olish usuli
  extractAudio() {
    console.log("Extracting audio from video..."); // Konsolga xabar chiqaradi
  }
}

// VideoProccessor classi video bilan ishlovchi komponent
class VideoProccessor {
  // Videoni dekodlash (ochish, o'qish) usuli
  decodeVideo() {
    console.log("Decoding video..."); // Konsolga xabar chiqaradi
  }
}

// Encoder classi — yakuniy faylni kerakli formatga kodlash uchun javobgar
class Encoder {
  // format parametri orqali video/audio faylni kerakli formatga o‘zgartirish
  encode(format: string) {
    console.log(`Enkoding to format ${format}...`); // Formatni ko‘rsatib konsolga chiqaradi
  }
}

// VideoConverterFacade — yuqoridagi uchta classi birlashtiruvchi "yuzaki" interfeys (facade)
class VideoConverterFacade {
  // Ichki komponentlar — audio, video va encoder'ni privat qilib olamiz
  private audio = new AudioProccessor();
  private video = new VideoProccessor();
  private encoder = new Encoder();

  // convert — umumiy convert qilish funksiyasi
  convert(fileName: string, format: string) {
    // Convert jarayoni boshlanganini bildiradi
    console.log(`Converting ${fileName} to ${format}...`);
    // Audio ajratiladi
    this.audio.extractAudio();
    // Video dekodlanadi
    this.video.decodeVideo();
    // Formatga kodlanadi
    this.encoder.encode(format);
    // Jarayon yakunlangani konsolga chiqariladi
    console.log(`Conversion of ${fileName} to ${format} completed`);
  }
}

// Mijoz (client) facade'ni chaqiradi, ichki murakkablikdan bexabar bo‘ladi
const converter = new VideoConverterFacade();
// Faqat bitta oddiy metod orqali video konvertatsiya qilinadi
converter.convert("movie.mp4", "avi");
```

- `Facade pattern` dan foydalanish

---

# **62-dars Adapter pattern**

`Adapter Pattern` — bu Structural Design Pattern bo‘lib, u ikkita o‘zaro mos kelmaydigan interfeysga ega tizimlar o‘rtasida bog‘lovchi (adapter) vazifasini bajaradi.

```ts
// Eski (legacy) printer classi — eski tizim shunday ishlaydi
class OldPrinter {
  // Eski interfeys: faqat printText nomli metod bor
  printText(text: string) {
    console.log(`Printing Text ${text}`);
  }
}

// Yangi tizimda ishlatiladigan interfeys — biz foydalanayotgan yangi standart
interface NewPrinter {
  // Yangi interfeysga ko‘ra printDocument degan metod bo'lishi kerak
  printDocument: (document: string) => void;
}

// Adapter class — eski classni yangi interfeysga moslashtiradi
class PrinterAdapter implements NewPrinter {
  // Konstruktor orqali eski printerdan nusxa olamiz va uni private qilib saqlaymiz
  constructor(private oldPrinter: OldPrinter) {}

  // Yangi interfeysda kerak bo‘lgan metodni yozamiz
  printDocument(document: string): void {
    // Yangi metod aslida eski metodni chaqiradi — shu yerda moslashtirish bo‘lyapti
    this.oldPrinter.printText(document);
  }
}

// Eski printerdan nusxa yaratyapmiz (bu hali eski interfeys bilan ishlaydi)
const legacyPrinter = new OldPrinter();

// Adapter yordamida eski printerni yangi interfeysga moslashtiryapmiz
const adapter = new PrinterAdapter(legacyPrinter);

// Endi yangi interfeysga muvofiq bo‘lgan usulni chaqiryapmiz
adapter.printDocument("Hello World");
```

- Adapter Patterndan foydalanish

---

# **63-dars Proxy pattern**

`Proxy Pattern` — bu Design Pattern (loyiha andozasi) bo‘lib, u asl obyektga to‘g‘ridan-to‘g‘ri murojaat qilish o‘rniga uning "vakili" orqali ishlashni ta’minlaydi.

```ts
// Bu interface har qanday hujjat xizmati `readDocument` metodiga ega bo‘lishi kerakligini bildiradi
export interface DocumentService {
  readDocument(): void;
}

// Asl hujjat xizmati bo'lib, interfeysni implement qiladi
class RealDocument implements DocumentService {
  readDocument(): void {
    // Asl hujjat o'qilayotgani haqida xabar
    console.log(`Reading secure document...`);
  }
}

// Proxy klass — RealDocument'ga o'xshab harakat qiladi, lekin oldin tekshiruvdan o'tkazadi
class DocumentProxy implements DocumentService {
  // Asl hujjat xizmati — bu obyekt orqali real ish bajariladi
  private realDocument: RealDocument;

  // Proxy foydalanuvchining rolini qabul qiladi (masalan, 'admin' yoki 'user')
  constructor(private userRole: string) {
    // RealDocument'ni ichkarida yaratamiz
    this.realDocument = new RealDocument();
  }

  // Interfeysdagi metodni implement qilamiz — bu orqali ruxsatni tekshiramiz
  readDocument(): void {
    // Agar foydalanuvchi "admin" bo'lsa, hujjatni o'qishga ruxsat beriladi
    if (this.userRole === "admin") {
      console.log("Access granted to read document");
      this.realDocument.readDocument(); // Asl hujjat xizmatini chaqiramiz
    } else {
      // Agar "admin" bo'lmasa, ruxsat berilmaydi
      console.log("Access denied to read document");
    }
  }
}

// "admin" rolidagi foydalanuvchi uchun proxy obyekt yaratamiz
const admin = new DocumentProxy("admin");
// Hujjatni o'qishga harakat qiladi — ruxsat beriladi
admin.readDocument();

// "user" rolidagi oddiy foydalanuvchi uchun proxy obyekt
const user = new DocumentProxy("user");
// Hujjatni o'qishga harakat qiladi — ruxsat rad etiladi
user.readDocument();
```

- Proxy patterndan foydalanish
