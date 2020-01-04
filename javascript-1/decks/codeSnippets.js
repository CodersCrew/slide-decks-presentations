export default {
  slide2: [
    {
      id: '1',
      content: `let a = 5;\na = a + 27 * 8;\nconsole.log(a);`,
    },
  ],
  slide3: [
    {
      id: '1',
      content: `
      // Komentarz jednoliniowy\n zrobCos() {...}             /* Komentarz\n\t                            wieloliniowy */\n                                ZrobCos() {...}`,
    },
  ],
  slide4: [
    {
      id: '1',
      content: `              \n     let age = 15;\n Zarezerwuj komórkę w pamięci i nazwij ją age po\n czym wsadź do niej wartość 15 po czym przejdź do\nkolejnego kroku.`,
    },
  ],
  slide5: [
    {
      id: '1',
      content: `const a = 10;\nconst b = 10;\nconst c = '10';\n\na == b // true\na == c // true\n\na === b // true\na === c // false`,
    },
  ],
  slide6: [{ id: '1', content: `if (warunek1) {\n // warunek1 został spełniony\n}` }],
  slide7: [
    {
      id: '1',
      content: `if (warunek1) {\n // warunek1 został spełniony\n} else if (warunek2) {\n // warunek2 został spełniony, a\n // warunek1 nie został spełniony\n}`,
    },
  ],
  slide8: [
    {
      id: '1',
      content: `if (warunek1) {\n // warunek1 został spełniony\n} else if (warunek2) {\n // warunek2 został spełniony, a\n // warunek1 nie został spełniony\n} else {\n // żaden warunek nie został spełniony.\n}`,
    },
  ],
  slide9: [
    {
      id: '1',
      content: `== // Równy (wartość)\n=== // Równy (wartość i typ)\n!= // Różny (wartość)\n!== // Różny (wartość i typ)\n> // Większy niż\n< // Mniejszy niż\n>= // Większy lub równy\n<= // Mniejszy lub równy`,
    },
  ],
  slide10: [
    {
      id: '1',
      content: `true  && true  // true\nfalse && true  // false\ntrue  && false // false\nfalse && false // false`,
    },
  ],
  slide11: [
    {
      id: '1',
      content: `true  || true  // true\nfalse || true  // true\ntrue  || false // true\nfalse || false // false`,
    },
  ],
  slide12: [
    {
      id: '1',
      content: `!true  // false\n!false // true `,
    },
  ],
  slide13: [
    {
      id: '1',
      content: `(warunek) ? /* spełniony */ : /* niespełniony */;`,
    },
  ],
  slide14: [
    {
      id: '1',
      content: `\t    let a;\n          if (warunek) {\n         a = 'opcja1';\n       } else {\n         a = 'opcja2';\n}\n\n const a = (warunek) ? 'opcja1' : 'opcja2';`,
    },
  ],
  slide15: [
    {
      id: '1',
      content: `<form action="" method="post" enctype="text/plain">
      <input type="text" placeholder="USERNAME" name="username" required>
      <input type="email" placeholder="EMAIL" name="email" required>
      <input type="password" placeholder="PASSWORD" name="password" required>
      <div class="size-xs">
        By creating an account you agree to our <a href="#">Terms/Privacy</a>
      </div>
      <button type="submit">CREATE ACCOUNT</button>\n</form>`,
    },
  ],
  slide16: [
    {
      id: '1',
      content: `const myArr = ['Item', 2, 'something', false];`,
    },
  ],
  slide17: [
    {
      id: '1',
      content: `const myArr = ['a', 'b', 'c'];\n\n// Wartości\nmyArr[0] // 'a'\nmyArr[1] // 'b'\nmyArr[2] // 'c'\nmyArr[3] // undefined\n\n// Właściwości\nmyArr.length // 3`,
    },
  ],
  slide18: [
    {
      id: '1',
      content: `const myArr = ['b', 'c'];\n\n// Na końcu.\nmyArr[2] = 'd';\nmyArr[myArr.length] = 'd';\nmyArr.push('d');\n\n// Na początku.\nmyArr.unshift('a');`,
    },
  ],
  slide19: [
    {
      id: '1',
      content: `const myArr = ['b', 'c'];\n\n// Z końca.\nmyArr.pop();\n\n// Z początku.\nmyArr.shift();`,
    },
  ],
  slide20: [
    {
      id: '1',
      content: `const myArr = ['b', 'c'];\n\nmyArr.includes('b'); // true\nmyArr.includes('a'); // false`,
    },
  ],
  slide21: [
    {
      id: '1',
      content: `for (let i=0; i<5; i++) {\n\t// Kod wykonywany 5razy.\n}`,
    },
  ],
  slide22: [
    {
      id: '1',
      content: `let i = 0;\nwhile (i < 5) {\n\t// Kod wykonany 5 razy.\n\ti++;\n}`,
    },
  ],
  slide23: [
    {
      id: '1',
      content: `let i = 0;\ndo {\n\t// Kod wykonany 5 razy.\n\ti++;\n} while (i < 5);`,
    },
  ],
  slide24: [
    {
      id: '1',
      content: `const add = (a, b) => {\n\tconst sum = a + b;\n\treturn sum;\n}`,
    },
  ],
  slide25: [
    {
      id: '1',
      content: `const add = (a, b) => {\n\tconst sum = a + b;\n\treturn sum;\n}\n\nconst x = add(1, 2); // x -> 3`,
    },
  ],
  slide26: [
    {
      id: '1',
      content: `// const add = (a, b) => {\n\t// const sum = a + b;\n\t// return sum;\n// }\n\nconst x = add = (a, b) => {\n\treturn a + b;\n}`,
    },
  ],
  slide27: [
    {
      id: '1',
      content: `// const x = add = (a, b) => {\n\t// return a + b;\n// }\n\n const add = (a, b) => a + b;`,
    },
  ],
  slide28: [
    {
      id: '1',
      content: `const add = (a, b) => a + b;\n\nconst x = add(); // x -> NaN`,
    },
  ],
  slide29: [
    {
      id: '1',
      content: `const add = (a = 0, b = 0) => a + b;\n\nconst x = add();\t\t\t// x -> 0\nconst y = add(5);\t\t\t// y -> 5\nconst z = add(5, 4)\t\t\t// z -> 9\nconst xyz = add(5, 4, 3)\t// xyz -> 9`,
    },
  ],
  slide30: [
    {
      id: '1',
      content: `{\n\tfirstName: 'Janusz',\n\tlastName: 'Nowak',\n\tage: 21,\n\theight: 179,\n\tweight: 75,\n\twalkTo: (x,y) => {\n\t\t// Some code.\n\t},\n\tspeak: (sentence) => {\n\t\t// Some code.\n\t}\n}`,
    },
  ],
  slide31: [
    {
      id: '1',
      content: `const person1 = {\n\tname: 'Janusz Nowak',\n\tsayHello: () => {\n\t\tconsole.log('Hello World');\n\t},\n}`,
    },
  ],
  slide32: [
    {
      id: '1',
      content: `const person1 = {\n\tname: 'Janusz Nowak',\n\tsayHello: () => {\n\t\tconsole.log('Hello World');\n\t},\n}\n\nperson1.name;  // 'Janusz Nowak'\nperson1.sayHello();  // 'Hello Wolrd' <- w konsoli`,
    },
  ],
  slide33: [
    {
      id: '1',
      content: `const person1 = {\n\tname: 'Janusz Nowak',\n\tsayHello: () => {\n\t\tconsole.log('Hello World');\n\t},\n}\n\nperson1.name = 'Jan Kowalski';\n\nperson1.name;  // 'Jan Kowalski'`,
    },
  ],
  slide34: [
    {
      id: '1',
      content: `const person1 = {\n\tname: {\n\t\tfirstName: 'Janusz',\n\t\tlastName: 'Nowak',\n\t}\n}\n\nperson1.name.firstName; // Janusz\n\nperson1.name.lastName; // Nowak`,
    },
  ],
  slide35: [
    {
      id: '1',
      content: `const str = 'code';\nconst arr = [1, 2, 3];\nconst person1 = { name: 'Janusz Nowak' }\n\nperson1.name; // Janusz Nowak\narr.length; // 3\nstr.length; // 4`,
    },
  ],
  slide36: [
    {
      id: '1',
      content: ``,
    },
  ],
};
