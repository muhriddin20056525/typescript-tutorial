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
