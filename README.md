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
   // 1. No group
   // [
   //   'hello',
   //   index: 41,
   //   input: 'Programming courses always starts with a hello world example.',
   //   groups: undefined
   // ]
   //
   // 2. When there's group like `/^(\d\d\d\d)[-./](\d{1,2})[-./](\d{1,2})$/`
   // [
   //    '2018/03/09',
   //    '2018',
   //    '03',
   //    '09',
   //    index: 0,
   //    input: '2018/03/09',
   //    groups: undefined
   // ]
   ```
   - if it has multiple matches, it only returns the first match (even with `g`, global flag)

#### 4 methods with `string`

1. .match()
   ```js
   console.log(txt.match(regex1));
   // 1. without `g`, global flag -> detailed information
   // [
   //   'hello',
   //   index: 41,
   //   input: 'Programming courses always starts with a hello world example.',
   //   groups: undefined
   // ]
   //
   // 2. with with `g` flag -> only matching words
   // ['hello', 'hello']
   ```
2. .search()
   ```js
   console.log(txt.search(regex1)); // index
   // 41
   ```
3. **.replace()** : often used. doesn't change the original text
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

### 6. Using Regexpal

- [RegexPal](https://www.regexpal.com/)
- [RegExp](https://regexr.com/)

## Section 2: Specifying Characters in Regular Expressions

### 8. Understanding Metacharacters

- [Meta characters - IBM](https://www.ibm.com/docs/en/rational-clearquest/9.0.1?topic=tags-meta-characters-in-regular-expressions)

| Meta character | Description                                                                                                                                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \              | Marks the next character as either a special character or a literal.<br>For example, n matches the character n, whereas \n matches a newline character.<br>The sequence \\ matches \ and \( matches (.                                                                 |
| ^              | Matches the beginning of input.                                                                                                                                                                                                                                        |
| $              | Matches the end of input.                                                                                                                                                                                                                                              |
| \*             | Matches the preceding character zero or more times. For example, zo\* matches either z or zoo.                                                                                                                                                                         |
| +              | Matches the preceding character one or more times. For example, zo+ matches zoo but not z.                                                                                                                                                                             |
| ?              | Matches the preceding character zero or one time. For example, a?ve? matches the ve in never.                                                                                                                                                                          |
| .              | Matches any single character except a newline character.                                                                                                                                                                                                               |
| (pattern)      | Matches a pattern and remembers the match.<br>The matched substring can be retrieved from the resulting matches collection by using this code: <br>Item [0]...[n]. To match parentheses characters ( ), use \( or \).                                                  |
| x\|y           | Matches either x or y. For example, z\|wood matches z or wood. (z\|w)oo matches zoo or wood.                                                                                                                                                                           |
| {n}            | n is a non-negative integer. Matches exactly n times.<br>For example, o{2} does not match the o in Bob, but matches the first two os in foooood.                                                                                                                       |
| {n,}           | In this expression, n is a non-negative integer.<br>Matches the preceding character at least n times.<br>For example, o{2,} does not match the o in Bob and matches all the os in foooood.<br>The o{1,} expression is equivalent to o+ and o{0,} is equivalent to o\*. |
| {n,m}          | The m and n variables are non-negative integers.<br>Matches the preceding character at least n and at most m times.<br>For example, o{1,3} matches the first three os in fooooood.<br>The o{0,1} expression is equivalent to o?.                                       |
| [xyz]          | A character set. Matches any one of the enclosed characters.<br>For example, [abc] matches the a in plain.                                                                                                                                                             |
| [^xyz]         | A negative character set. Matches any character that is not enclosed.<br>For example, [^abc] matches the p in plain.                                                                                                                                                   |
| [a-z]          | A range of characters. Matches any character in the specified range.<br>For example, [a-z] matches any lowercase alphabetic character in the English alphabet.                                                                                                         |
| [^m-z]         | A negative range of characters. Matches any character that is not in the specified range.<br>For example, [m-z] matches any character that is not in the range m through z.                                                                                            |
| \A             | Matches only at beginning of a string.                                                                                                                                                                                                                                 |
| \b             | Matches a word boundary, that is, the position between a word and a space.<br>For example, er\b matches the er in never but not the er in verb.                                                                                                                        |
| \B             | Matches a nonword boundary. The ea\*r\B expression matches the ear in never early.                                                                                                                                                                                     |
| \d             | Matches a digit character.                                                                                                                                                                                                                                             |
| \D             | Matches a non-digit character.                                                                                                                                                                                                                                         |
| \f             | Matches a form-feed character.                                                                                                                                                                                                                                         |
| \n             | Matches a newline character.                                                                                                                                                                                                                                           |
| \r             | Matches a carriage return character.                                                                                                                                                                                                                                   |
| \s             | Matches any white space including spaces, tabs, form-feed characters, and so on.                                                                                                                                                                                       |
| \S             | Matches any non-white space character.                                                                                                                                                                                                                                 |
| \t             | Matches a tab character.                                                                                                                                                                                                                                               |
| \v             | Matches a vertical tab character.                                                                                                                                                                                                                                      |
| \w             | Matches any word character including underscore. This expression is equivalent to [A-Za-z0-9_].                                                                                                                                                                        |
| \W             | Matches any non-word character. This expression is equivalent to [^a-za-z0-9_].                                                                                                                                                                                        |
| \z             | Matches only the end of a string.                                                                                                                                                                                                                                      |
| \Z             | Matches only the end of a string, or before a newline character at the end.                                                                                                                                                                                            |

### 10. The dotAll Flag, "s"

[Regular Expression Flags](https://javascript.info/regexp-introduction#flags)

| Flag | Description                                                                                                                                               |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| i    | With this flag the search is case-insensitive: no difference between A and a (see the example below).                                                     |
| g    | With this flag the search looks for all matches, without it – only the first match is returned.                                                           |
| m    | Multiline mode (covered in the chapter Multiline mode of anchors ^ $, flag "m").                                                                          |
| s    | Enables “dotall” mode, that allows a dot . to match newline character \n (covered in the chapter Character classes).                                      |
| u    | Enables full Unicode support. The flag enables correct processing of surrogate pairs. More about that in the chapter Unicode: flag "u" and class \p{...}. |
| y    | “Sticky” mode: searching at the exact position in the text (covered in the chapter Sticky flag "y", searching at position).                               |

### 12. Matching Control Characters

[Full list of control characters - IBM](https://www.ibm.com/docs/en/db2oc?topic=reference-regular-expression-control-characters)

| Character | Description                                      |
| --------- | ------------------------------------------------ |
| \t        | tab, Match a HORIZONTAL TABULATION, \u0009       |
| \v        | vertival tab                                     |
| \n        | new line, Match a LINE FEED, \u000A              |
| \r        | carriage return, Match a CARRIAGE RETURN, \u000D |

## After this course

- Practice advanced regular expression
- Find the way use it in termianl or for text files (and see how fast it is)

## Section 3: Working with Character Sets

### 15. Using Character Sets

there's no metacharacters in character set except `-`

### 17. Excluding a Character Set : `^`

And `^` targets after the caret

### 18. Escaping Metacharacters in a Character Set

#### Metacharacters you may need to escape

`-`, `^`, `\`, `]`

### 19. Using Shorthand for Character Sets

[Shorthand Character Classes](https://www.regular-expressions.info/refshorthand.html)

| Character | Description   |
| --------- | ------------- |
| \d        | [0-9]         |
| \w        | [a-zA-Z0-9_]  |
| \s        | [\t\r\n]      |
| \D        | [^0-9]        |
| \W        | [^a-za-z0-9_] |
| \S        | [^\t\r\n]     |

## Section 4: Using Repetition in Regular Expressions

### 22. Using Repetition in Your Patterns

| Character | Description                      |
| --------- | -------------------------------- |
| +         | Matches one or more occurrences  |
| ?         | Matches zero or one occurrences  |
| \*        | Matches zero or more occurrences |

### 23. Understanding Greediness and Laziness in Regular Expressions

| Character | Description |
| --------- | ----------- |
| .\*       | Greediness  |
| .\*?      | Laziness    |

### 24. Specifying a Repetition Amount

| Character  | Description                     |
| ---------- | ------------------------------- |
| {min, max} | Matches min to max occurrences  |
| {min}      | Matches min occurrences         |
| {min,}     | Matches min or more occurrences |

## Section 5: Using Anchored Expressions

### 29. Using Start and End Anchors

| Character | Description                               |
| --------- | ----------------------------------------- |
| ^         | Anchor the match to the start of the line |
| $         | Anchor the match to the end of the line   |

### 31. Working with Word Boundaries

| Character | Description                                             |
| --------- | ------------------------------------------------------- |
| \b        | Word boundary - Pattern bounded by a non-word character |
| \B        | Non-word boundary - Pattern bounded by a word character |

- References position, not an actual character
- Word characters: `\w` or [a-zA-Z0-9_]

> `/\wplan/g` and `/\Bplan/g`\
> `\w` includes the character, but `\B` doesn't include it

### 32. Writing Accurate Regular Expressions

- When possible, define the quantity of repeated expression.
- Narrow the scope of repeated expressions
- Provide clear starting and ending points

## Section 6: Working with Alternates and Groups

### 35. Specifying Options

- alternate: `|`
- group: `()`

### 38. Understanding Capturing Groups

```js
/(yo)\1/; // \1 is a backreference to the first capturing group
```

| Character         | Description                                  | example                              |
| ----------------- | -------------------------------------------- | ------------------------------------ |
| \1 (after group)  | a backreference to the first capturing group | /(yo)\1/                             |
| ?: (within group) | a non-capturing group                        | /^(?:\d\d\d\d)([-./])(\d{1,2})\1\2$/ |

> usecase of `?:`? \
> when you already have a complicated regular expression with capturing groups\
> and you want to use a group and don't want to break the rest of the expression

### 40. Named Capture Groups

```js
/<(<tag>\w*)>(.*?)<\/\k<tag>>/g;
```

### 41. Using Lookahead Groups

| Character         | Description                                        | example        |
| ----------------- | -------------------------------------------------- | -------------- |
| ?= (within group) | a lookahead group which doesn't consume characters | /\w+(?=\.com)/ |

```js
// Useful example, Password validation
const txt3 = "passwordA1";
const r3 = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
```
