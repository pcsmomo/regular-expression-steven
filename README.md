# regular-expression-steven

Mastering Regular Expressions in JavaScript by Steven Hancock

# Details

<details open>
  <summary>Click to Contract/Expand</summary>

## Section 1: Getting Started with Regular Expressions

### 3. Getting Started

```js
const txt = "Programming courses always starts with a hello world example.";
let regex1 = new RegExp("hello");
let regex2 = /world/;
```

[RegExp](https://regexr.com/)

### 4. Using Regular Expressions in JavaScript

#### 2 methods with `RegExp`

1. .test()
   ```js
   console.log(regex1.test(txt)); // []
   ```
2. .exec()
   ```js
   console.log(regex1.exec(txt));
   // [
   //   'hello',
   //   index: 41,
   //   input: 'Programming courses always starts with a hello world example.',
   //   groups: undefined
   // ]
   ```

#### 4 methods with `string`

1. .match()

   ```js
   console.log(txt.match(regex1));
   // [
   //   'hello',
   //   index: 41,
   //   input: 'Programming courses always starts with a hello world example.',
   //   groups: undefined
   // ]

   // if it's more than one
   // ['hello', 'hello']
   ```

2. .search()
   ```js
   console.log(txt.search(regex1)); // index
   // 41
   ```
3. **.replace()** : often used
   ```js
   console.log(txt.replace(regex1, "hi"));
   // Programming courses always starts with a hi world example.
   ```
4. .split()
   ```js
   console.log(txt.split(regex1));
   // [ 'Programming courses always starts with a ', ' world example.' ]
   ```

### 5. Understanding Regular Expression Flags

```js
let regex1 = new RegExp("hello", "i");
let regex2 = /world/i;
```

- g : global, match more than one occurance.
- i : case insensitive match, case doesn't matter
- m : multi-line match

#### if multiple matches

- new RegExp().exec()

  ```js
  console.log(regex1.exec(txt)); // []
  console.log(regex1.exec(txt)); // []
  console.log(regex1.exec(txt)); // []
  console.log(regex1.exec(txt)); // null

  // it will return one by one indexed from the previous match
  ```

- "".match()

  ```js
  console.log(txt.match(regex1));
  // [
  //   'hello',
  //   index: 41,
  //   input: 'Programming courses always starts with a hello world example.',
  //   groups: undefined
  // ]

  console.log(txt.match(regex1));
  // when it's more than one
  // ['hello', 'hello']
  ```

</details>
