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
