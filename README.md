# TypeScript

- [TypeScript](#typescript)
  - [Introduction](#introduction)
  - [Grammar](#grammar)
    - [Data types](#data-types)
    - [Function](#function)
    - [Enum](#enum)
    - [Type](#type)
    - [Interface](#interface)
    - [Interface V.S Type](#interface-vs-type)
    - [Generics](#generics)
  - [Class](#class)
    - [public](#public)
    - [private](#private)
    - [static](#static)
    - [protected](#protected)
  - [Environment](#environment)
  - [tsconfig.json](#tsconfigjson)
  - [tslint.json](#tslintjson)
  - [TS configuration](#ts-configuration)
    - [rootDir](#rootdir)
    - [allowJs](#allowjs)
    - [outDir](#outdir)
    - [inlineSourceMap](#inlinesourcemap)

## Introduction

```javascript
const message = "Hello World";

message.toLowerCase(); // "hello world"
message(); // TypeError: message is not a function
```

上面為很基本的一段定義區塊，可以很清楚的看到 message 一開始被賦值(assigned)了一段字串，message 呼叫了函式 toLowerCase，以上都沒問題，非常的正常、可運行(runnable)。

但到了第三行， message 被當成 function 進行了 function call，常常寫 JavaScript 的人一定很常看到 `TypeError: message is not a function`。

從以上非常簡單的範例我們可以清楚知道，TypeScript 所要做到的就是防止我們去猜測(guessing)該變數(variable)的型別，從一開始就 type annotation。

## Grammar

### Data types

- `string`
- `number`
- `boolean`
- `any`
- `null`
- `undefined`
- `array`
- `tuple`
- `object`

```typescript
[x] const str: string = 0;
[v] const str: string = "Dennis";

[v] const num: number = 23;

[x] const isStudent: boolean = "false";
[v] const isStudent: boolean = false;

[v] const sex: any = "male";
[v] const sex: any = null;
[v] const sex: any = undefined;

[v] const data: null = null;

// const 要求變數必須有初始值，所以改用let則可以使用undefined不用先賦值
[x] const data: undefined;
[v] let data: undefined;

// 陣列
[x] const arr: [] = {};
[v] const arr: [] = [];

// 二維陣列
[x] const arr: [][] = ["test"];
[v] const arr: [][] = [[]];

//類型陣列
[v] const arr: string[] = ['1', '2'];
[x] const arr: (string | number)[] = [1, 2];
[v] const arr: (string | number)[] = ['1', 2];

// tuple 元祖，定義陣列長度，並且各個類型的資料型態
[v] let tuple: [string, number, any] = ["Apple", 30, "好吃的蘋果"];
[v] let tuple: readonly[string,number] = ['1',2]

// 物件，對於JavaScript、TypeScript來說陣列也是物件的一種
[v] const obj: object = {};
[v] const obj: object = [];
```

### Function

```typescript
function count(num: number) {
  if (num) {
    return num * num;
  }
}
const value = count(3); //9
```

標示回傳值可以讓呼叫該函式更好閱讀

```typescript!
function count(num: number): number | void {
  if (num) {
    return num * num;
  }
}
```

如果是要傳入 callback

```typescript
function callback(fn: (output: string) => void) {
  // const output = 100; // error type
  const output = "Hello world!";
  fn(output); //Hello world!
}

callback((text) => {
  console.log(text);
});
```

---

### Enum

Enum(枚舉)

今天前端跟後端溝通，假設共同約定好狀態如下

```typescript
// 0 成功，並且結束直播
// 1 直撥中
// -1 直撥失敗
const currentStatus: number = 0;
if (currentStatus == 0) {
  console.log("successful"); //successful
}
```

但是，上面的情況會遇到，如果有新人進來，或是時間久了也忘記狀態對應的值，這時候枚舉情況就可以解決以上問題

```typescript
enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1,
}

const currentStatus: number = 0;

if (currentStatus == LiveStatus.SUCCESS) {
  console.log("successful"); //successful
}
```

---

### Type

```typescript
type User = {
  name: string;
  id: number;
};

const newUser: User = {
  name: "Dennis",
  id: 2,
};

console.log(newUser); //{ name: 'Dennis', id: 2 }
```

---

### Interface

```typescript
interface User {
  name: string;
  id: number;
}

const user1: User = {
  name: "Dennis",
  id: 2,
};
console.log(user1); //{ name: 'Dennis', id: 2 }

export {};
```

### Interface V.S Type

我們從上面可以發現，既然 Type 跟 Interface 可以做一樣的事情，那差別在哪?

> Interface 可以繼續定義並且繼承屬性，Type 則不行

```typescript
interface User {
  name: string;
  id: number;
}

interface User {
  age: number;
}

const user1: User = {
  name: "Dennis",
  id: 2,
  age: 23,
};
console.log(user1); //{ name: 'Dennis', id: 2 }

export {};
```

---

### Generics

Generics(泛型)在於不用立即定義好類型，又可以在呼叫時規定只符合輸入的類型

```typescript
interface GenericsObject<T> {
  contents: T;
}

let news: GenericsObject<string> = {
  contents: "Good morning!",
};
```

```typescript
function say<T>(content: T) {
  console.log(content);
}
say<string>("Hello I'm Dennis ");
```

定義回傳值

```typescript
function getMultiple<T>(arr: T[]): T | null {
  if (arr.length > 0) {
    return arr[0];
  }
  // return undefined; //error must be null
  return null;
}

getMultiple([2, 4, 8]);
```

多個參數函式

```typescript
function combine<T>(arr: T[], arr2: T[]): T[] | undefined {
  if (arr.length == 0 || arr2.length == 0) return undefined;
  return arr.concat(arr2);
}
// const result = combine([1, 2], ["Hello world"]); //error generics can catch input types
const result = combine<number | string>([1, 2], ["Hello world"]);

console.log(result); //[ 1, 2, 'Hello world' ]
```

---

## Class

### public

由於 public 是預設屬性，所以不帶關鍵字預設即為 public，並且需建立實體

```typescript
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getUser(): object[] {
    return [{ name: this.name, age: this.age }];
  }
}

const user1 = new User("Dennis", 23);
console.log(user1); //User { name: 'Dennis', age: 23 }
console.log(user1.getUser()); //[ { name: 'Dennis', age: 23 } ]

export {};
```

### private

私有屬性只能在其類別中取用，像是建立實體後，必須透過 getUser 方法才能知道其類別的 name、age

```typescript
class User {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getUser(): object[] {
    return [{ name: this.name, age: this.age }];
  }
}

const user1 = new User("Dennis", 23);
console.log(user1.getUser()); //[ { name: 'Dennis', age: 23 } ]
console.log(user1.name); // error

export {};
```

### static

靜態屬性可以使變數或是方法不需建立實體即可使用，並且建立實體後則無法使用

```typescript
class User {
  protected name: string;
  public age: number;
  static note: string = "name be protected & (age、getUser) be public";
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getUser(): object[] {
    return [{ name: this.name, age: this.age }];
  }
}

console.log(User.note); //name be protected & (age、getUser) be public
console.log(User.age); //error

export {};
```

### protected

protected 屬性可以使主類別或是子類別(**繼承主類別的類別**)不需建立實體即可使用，類似 static，並且建立實體後無法使用

```typescript
class User {
  protected name: string;
  public age: number;
  static note: string = "name be protected & (age、getUser) be public";
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getUser(): object[] {
    return [{ name: this.name, age: this.age }];
  }
}

class classLeader extends User {}

const user1 = new classLeader("Dennis", 23);
console.log(user1.name); //error;
console.log(classLeader.name); //Dennis

export {};
```

## Environment

由於 TypeScript 是在編譯前幫我們判斷型別的工具，所以不需要加入到生產環境，只需加到 devDependencies。

```
npm install --save-dev typescript tslint @types/node ts-node
```

查看版本

```bash!
tsc --version or tsc -v
```

![](https://i.imgur.com/AWMR391.png)

接著到專案中

```bash
tsc --init
```

![](https://i.imgur.com/8JRz4Vc.png)

我們到專案中

```typescript
//main.ts
const name: string = "Dennis";
console.log(name);
```

接著在終端機中輸入

```bash
tsc main.ts
```

![](https://i.imgur.com/AZgCGJA.png)

回報錯誤，只需要在最後一行輸入

```typescript
export {};
```

編譯器會幫我們編譯成 JavaScript 的 main.js 檔案

![](https://i.imgur.com/iO9sYs6.png)

最後使用 node 執行`.js`檔名

```bash
node main.js
```

---

## tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["es2015"],
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2015"
  }
}
```

---

## tslint.json

```json
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "rules": {
    "semicolon": true,
    "trailing-comma": false
  }
}
```

---

## TS configuration

### rootDir

![](https://i.imgur.com/AFV5JWy.png)

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "tsc main.ts && node main.js",
    "hotReload": "tsc && nodemon src/index.js"
  },
```

### allowJs

假設原本專案使用 JS，但是想要可以混用 TS，`allowJs`可以讓我們專案同時使用，避免大幅度的更改專案

![](https://i.imgur.com/mjoKy9T.png)

### outDir

我們可以創建`/dist`，並且讓執行 tsc 編譯器時，輸出到 dist 資料夾
![](https://i.imgur.com/SWAP9QR.png)

### inlineSourceMap

可以讓我們在瀏覽器中的 console 顯示第幾行執行程式碼，或是錯誤訊息提示
![](https://i.imgur.com/t8uD1ET.png)

---
