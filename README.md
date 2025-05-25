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
