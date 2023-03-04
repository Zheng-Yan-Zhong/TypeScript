# TypeScript

* [Environment](#Environment)
* [TS configuration](#TS-configuration)
* [Grammar](#Grammar)
  * [Data types](#Data-types)
  * [Enum](#Enum)
  * [Function](#Function)
  * [Generics](#Generics)

## Environment

```
npm install typescript -g
```

如果有錯誤訊息，則需使用超級使用者模式

![](https://i.imgur.com/rdVNpvu.png)

```
sudo npm install typesript -g
```

接著到專案中
```
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
```
tsc main.ts
```
![](https://i.imgur.com/AZgCGJA.png)

會回報錯誤，只需要在最後一行輸入
```typescript
export {}
```
編譯器會幫我們編譯成JavaScript的main.js檔案

![](https://i.imgur.com/iO9sYs6.png)

```
node main.js
```

如果覺得編譯後還要執行麻煩的話

可以寫一個小腳本
```
tsc main.ts && node main.js
```
![](https://i.imgur.com/RjkANkO.png)

```
npm run start
```

![](https://i.imgur.com/7fXxvf6.png)

當然也可以安裝`nodemon`
```javascript
npm install nodemon
```

![](https://i.imgur.com/aBIAnbI.png)

```
npm run serve
```
就可以執行熱刷新，也就是存檔後重新執行程式
![](https://i.imgur.com/D8QZJkU.png)

![](https://i.imgur.com/JfVdb7R.gif)


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
假設原本專案使用JS，但是想要可以混用TS，`allowJs`可以讓我們專案同時使用，避免大幅度的更改專案

![](https://i.imgur.com/mjoKy9T.png)

### outDir
我們可以創建`/dist`，並且讓執行tsc編譯器時，輸出到dist資料夾
![](https://i.imgur.com/SWAP9QR.png)

### inlineSourceMap
可以讓我們在瀏覽器中的console顯示第幾行執行程式碼，或是錯誤訊息提示
![](https://i.imgur.com/t8uD1ET.png)


---

## Grammar

### Data types

* string
* number
* boolean
* any
* null
* undefined
* array`[ ]`
* tuple
* object


```typescript=
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

### Enum

Enum(枚舉)

今天前端跟後端溝通，假設共同約定好狀態如下

```typescript=
// 0 成功，並且結束直播
// 1 直撥中
// -1 直撥失敗
const currentStatus: number = 0;
 if (currentStatus == 0) {
   console.log("successful"); //successful
 }
```

但是，上面的情況會遇到，如果有新人進來，或是時間久了也忘記狀態對應的值，這時候枚舉情況就可以解決以上問題

```typescript=
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

### Function

```typescript=
function sum(a: number, b: number) {
  return a + b;
}
const num = sum(1, 2);
```

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

