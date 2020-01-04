export default {
  slide15: [
    {
      id: '1',
      content: `document.querySelector('.container');`,
    },
  ],
  slide19: [
    {
      id: '1',
      content: `document.querySelectorAll('.container');`,
    },
  ],
  slide20: [
    {
      id: '1',
      content: `// W a będzie siedzieć NodeList.\nconst a = document.querySelectorAll('.box');\n\n// W b będzie siedzieć tablica.\nconst b = [...a];`,
    },
  ],
  slide21: [
    {
      id: '1',
      content: `// W a będzie siedzieć tablica.\nconst a = [...document.querySelectorAll('.box')];`,
    },
  ],
  slide29: [
    {
      id: '1',
      content: `npm init`,
    },
  ],
  slide30: [
    {
      id: '1',
      content: `npm install nazwa_modułu`,
    },
  ],
  slide31: [
    {
      id: '1',
      content: `npm install --save-dev nazwa modułu`,
    },
  ],
  slide32: [
    {
      id: '1',
      content: `npm install`,
    },
  ],
  slide37: [
    {
      id: '1',
      content: `npm install --save-dev webpack webpack-cli`,
    },
  ],
  slide40: [
    {
      id: '1',
      content: `module.exports = { ... }`,
    },
  ],
  slide41: [
    {
      id: '1',
      content: `entry: ['./src/index.js']`,
    },
  ],
  slide42: [
    {
      id: '1',
      content: `output: {\n\t path: __dirname,\n\t publicPath: '/',\n\t filename: 'main.js',\n},`,
    },
  ],
  slide43: [
    {
      id: '1',
      content: `mode: 'development'`,
    },
  ],
  slide44: [
    {
      id: '1',
      content: `reslove: {\n\t extentions: ['.js'],\n},`,
    },
  ],
  slide48: [
    {
      id: '1',
      content: `npm install --save-dev babel-core babel-loader babel-preset-env`,
    },
  ],
  slide52: [
    {
      id: '1',
      content: `{\n\t "presets": ["env"]\n}`,
    },
  ],
  slide53: [
    {
      id: '1',
      content: `module: {\n\trules: [\n\t\t{\n\t\t\ttest: /\.js$/,\n\t\t\tloaders: ['babel-loader'],\n\t\t\texclude: /node_modules/,\n\t\t},\n\t],\n},`,
    },
  ],
  slide64: [
    {
      id: '1',
      content: `class Rewards {\n\tconstructor() {\n\t\tthis.rewardLines = document.querySelectorAll('.rewardLine');\n\t}\n}`,
    },
  ],
  slide68: [
    {
      id: '1',
      content: `class Rewards {\n\tconstructor() {\n\t\tthis.rewardLines = document.querySelectorAll('.rewardLine');\n\t}\n}\n\nexport default Rewards;`,
    },
  ],
  slide69: [
    {
      id: '1',
      content: `import Rewards from './Rewards';\n\nclass Game {\n\tconstructor(questions) {\n\t\tthis.rewards = new Rewards();\n\t}\n}`,
    },
  ],
  slide71: [
    {
      id: '1',
      content: `import Rewards from './Rewards';

      class Game {
        constructor(questions) {
          this.rewards = new Rewards();
        }
      }`,
    },
  ],
  slide75: [
    {
      id: '1',
      content: `class AudioPlayer {
        constructor() {
          this.sounds = {
            // Uchwyty do wszystkich plików audio.
          };
        }
      }

      export default AudioPlayer;`,
    },
  ],
  slide76: [
    {
      id: '1',
      content: `class Lifelines {
        constructor() {
          const lifelinesList = document.querySelectorAll('.lifeline');

          this.lifelines = {
            fiftyFifty: lifelinesList[0],
            askTheAudience: lifelinesList[1],
            phoneAFriend: lifelinesList[2],
          };
        }
      }

      export default Lifelines;`,
    },
  ],
  slide77: [
    {
      id: '1',
      content: `class Questions {
        constructor() {
          this.question = document.querySelector('#question');
          this.answers = {
            a: {
              container: document.querySelector('#a'),
              letter: document.querySelector('#a > span:first-child'),
              content: document.querySelector('#a > span:last-child'),
            },
          // Uchwyty do pozostałych odpowiedzi.
          };
        }
      }

      export default Questions;
      `,
    },
  ],
  slide78: [
    {
      id: '1',
      content: `class Rewards {
        constructor() {
          this.rewardLines = document.querySelectorAll('.rewardLine');
        }
      }

      export default Rewards;
      `,
    },
  ],
  slide79: [
    {
      id: '1',
      content: `import AudioPlayer from './AudioPlayer';\nimport Lifelines from './Lifelines';\nimport Questions from './Questions';\nimport Rewards from './Rewards';
      `,
    },
  ],
  slide80: [
    {
      id: '1',
      content: `class Game {
        constructor(questions) {
          // Mechanika tworzenia obiektu.
        }
      }`,
    },
  ],
  slide81: [
    {
      id: '1',
      content: `this.gameArea = document.querySelector('.gameArea');\nthis.endGame = document.querySelector('.endGame');`,
    },
  ],
  slide82: [
    {
      id: '1',
      content: `this.audio = new AudioPlayer();\nthis.lifelines = new Lifelines();\nthis.rewards = new Rewards();\nthis.questions = new Questions(questions);`,
    },
  ],
  slide83: [
    {
      id: '1',
      content: `start = () => {\n\tconsole.log('Game started!');\n};`,
    },
  ],
  slide84: [
    {
      id: '1',
      content: `{\n\t"presets": ["env"],\n\t"plugins": ["transform-class-properties"]\n}`,
    },
  ],
  slide85: [
    {
      id: '1',
      content: `import Game from './Game';\nimport questions from './questionsList';\n\nconst game = new Game(questions);\ngame.start();`,
    },
  ],
  slide91: [
    {
      id: '1',
      content: `this.sounds = {
        fiftyFifty: document.querySelector('#fifty-fifty'),
  };

  // Użycie
  this.sounds.fiftyFifty;
  // lub
  this.sounds['fiftyFifty'];`,
    },
  ],
  slide92: [
    {
      id: '1',
      content: `this.sounds = {
        askTheAudience: [/* Elementy audio */],
    };

    // Użycie
    this.sounds.askTheAudience[0];
    // lub
    this.sounds['askTheAudience'][0];`,
    },
  ],
  slide93: [
    {
      id: '1',
      content: `play = (name, key) => {
        if (key || key === 0) {
          this.sounds[name][key].play();
        } else {
          this.sounds[name].play();
        }
      };`,
    },
  ],
  slide99: [
    {
      id: '1',
      content: `constructor() {\n\tthis.audio = new AudioPlayer();\n}`,
    },
  ],
  slide100: [
    {
      id: '1',
      content: `initialize = () => {
        Object.keys(this.lifelines).map((key, i) => {
          setTimeout(() => {
            this.lifelines[key].classList.add('showed');
            this.audio.play('loadLifeline', key);
          }, i * 1000);
        });
      };`,
    },
  ],
  slide101: [
    {
      id: '1',
      content: `this.lifelines = {\n\tfiftyFifty: lifelinesList[0],\n\taskTheAudience: lifelinesList[1],\n\tphoneAFriend: lifelinesList[2],\n};`,
    },
    {
      id: '2',
      content: `['fiftyFifty', 'askTheAudience', 'phoneAFriend']`,
    },
  ],
  slide102: [
    {
      id: '1',
      content: `initialize = () => {
        Object.keys(this.lifelines)
        .map((key, i) => {
          setTimeout(() => {
            this.lifelines[key].classList.add('showed');
            this.audio.play('loadLifeline', key);
          }, i * 1000);
        });
      };`,
    },
  ],
  slide109: [
    {
      id: '1',
      content: `start = () => {\n\tthis.lifelines.initialize();\n};`,
    },
  ],
  slide111: [
    {
      id: '1',
      content: `constructor(questions) {
        // Uchwyty dla pytań.

        this.questionsList = questions;
        this.currentQuestionIndex = 0;
        this.audio = new AudioPlayer();
      }`,
    },
  ],
  slide114: [
    {
      id: '1',
      content: `askQuestion = () => {
        this.currentQuestion = this.questionsList[this.currentQuestionIndex];
        // ...
      }`,
    },
  ],
  slide115: [
    {
      id: '1',
      content: `askQuestion = () => {
        // ...
        this.question.innerText = this.currentQuestion.question;
        // ...
      };`,
    },
  ],
  slide116: [
    {
      id: '1',
      content: `askQuestion = () => {
        // ...
        Object.keys(this.answers).map(key => {
          this.answers[key].content.innerText = this.currentQuestion[key];
        });
        // ...
      };`,
    },
  ],
  slide117: [
    {
      id: '1',
      content: `Object.keys(this.answers).map(key => {
        this.answers[key].content.innerText = this.currentQuestion[key];
      });`,
    },
  ],
  slide118: [
    {
      id: '1',
      content: `['a', 'b', 'c', 'd'].map(key => {\n\tthis.answers[key].content.innerText = this.currentQuestion[key];\n});`,
    },
  ],
  slide120: [
    {
      id: '1',
      content: `'a' => {\n\tthis.answers['a'].content.innerText = this.currentQuestion['a'];\n}`,
    },
  ],
  slide121: [
    {
      id: '1',
      content: `a: {\n\tcontainer: document.querySelector('#a'),\n\tletter: document.querySelector('#a > span:first-child'),\n\tcontent: document.querySelector('#a > span:last-child'),\n},`,
    },
    {
      id: '2',
      content: `'a' => {\n\tthis.answers['a'].content.innerText = this.currentQuestion['a'];\n}`,
    },
  ],
  slide122: [
    {
      id: '1',
      content: `{\n\tquestion: 'Skąd pochodzi Conan Barbarzyńca?',\n\ta: 'z Rivii',\n\tb: 'z Oz',\n\tc: 'z Mordoru',\n\td: 'z Cimmerii',\n\tcorrectAns: 'd',\n},`,
    },
    {
      id: '2',
      content: `'a' => {\n\tthis.answers['a'].content.innerText = this.currentQuestion['a'];\n}`,
    },
  ],
  slide123: [
    {
      id: '1',
      content: `askQuestion = () => {
        // ...
        Object.keys(this.answers).map(key => {
          this.answers[key].content.innerText = this.currentQuestion[key];
        });
        // ...
      };`,
    },
  ],
  slide124: [
    {
      id: '1',
      content: `askQuestion = () => {\n\t// ...\n\tthis.currentQuestionIndex++;\n\t// ...\n};`,
    },
  ],
  slide125: [
    {
      id: '1',
      content: `askQuestion = () => {\n\t// ...\n\tthis.audio.playBackgroundMusic();\n};`,
    },
  ],
  slide129: [
    {
      id: '1',
      content: `constructor() {\n\t// ...\n\tthis.currentBackground = this.sounds.background[0];\n}`,
    },
  ],
  slide130: [
    {
      id: '1',
      content: `playBackgroundMusic = () => {\n\tthis.currentBackground.loop = false;\n\tthis.currentBackground.pause();\n\t// ...\n};`,
    },
  ],
  slide135: [
    {
      id: '1',
      content: `import _ from 'lodash';`,
    },
  ],
  slide136: [
    {
      id: '1',
      content: `playBackgroundMusic = () => {
        // ...
        const randomNumber = _.random(2);
        this.currentBackground = this.sounds.background[randomNumber];
        // ...
      };`,
    },
  ],
  slide138: [
    {
      id: '1',
      content: `playBackgroundMusic = () => {\n\t// ...\n\tthis.currentBackground.loop = true;\n\this.currentBackground.play();\n};`,
    },
  ],
  slide143: [
    {
      id: '1',
      content: `element.addEventListener('click', fn);`,
    },
  ],
  slide147: [
    {
      id: '1',
      content: `element.addEventListener('click', (e) => {...});`,
    },
  ],
  slide149: [
    {
      id: '1',
      content: `element.addEventListener('click', (e) => {\n\t// Tutaj możemy korzystać z obiektu e.\n});`,
    },
  ],
  slide160: [
    {
      id: '1',
      content: `askQuestion = () => {
        // ...
        Object.keys(this.answers).map(key => {
          this.answers[key].content.innerText = this.currentQuestion[key];
          this.answers[key].container.addEventListener('click', this.selectAnswer);
        });
        // ...
      };`,
    },
  ],
  slide162: [
    {
      id: '1',
      content: `else {
        Object.keys(this.answers).map(key => {
          this.answers[key].container.setAttribute('class', 'answer');
        });
        e.currentTarget.classList.add('answerChecked');
      }`,
    },
  ],
  slide165: [
    {
      id: '1',
      content: `if (e.currentTarget.classList.contains('answerChecked')) {
        Object.keys(this.answers).map(key => {
          this.answers[key].container
            .removeEventListener('click', this.selectAnswer);
        });
        this.checkAnswer(e.currentTarget.id);
      }`,
    },
  ],
  slide167: [
    {
      id: '1',
      content: `checkAnswer = id => {\n\tconsole.log(id);\n};`,
    },
  ],
  slide168: [
    {
      id: '1',
      content: `if (e.currentTarget.classList.contains('answerChecked')) {
        Object.keys(this.answers).map(key => {
          this.answers[key].container.removeEventListener('click', this.selectAnswer);
        });
        this.checkAnswer(e.currentTarget.id);
      } else {
        Object.keys(this.answers).map(key => {
          this.answers[key].container.setAttribute('class', 'answer');
        });
        e.currentTarget.classList.add('answerChecked');
      }`,
    },
  ],
  slide170: [
    {
      id: '1',
      content: `Object.keys(this.answers).map(key => {
        this.answers[key].container.removeEventListener('click', this.selectAnswer);
      });`,
    },
    {
      id: '2',
      content: `_.map(this.answers, answer =>
        answer.container.removeEventListener('click', this.selectAnswer),
      );`,
    },
  ],
  slide171: [
    {
      id: '1',
      content: `Object.keys(this.answers).map(key => {
        this.answers[key].container.setAttribute('class', 'answer');
      });`,
    },
    {
      id: '2',
      content: `_.map(this.answers, answer =>
        answer.container.setAttribute('class', 'answer')
      );`,
    },
  ],
  slide173: [
    {
      id: '1',
      content: `checkAnswer = id => {
        const correctAnswer = this.answers[this.currentQuestion.correctAns];
        correctAnswer.container.classList.remove('answerChecked');
        correctAnswer.container.classList.add('answerCorrect');
        // ...
      };`,
    },
  ],
  slide174: [
    {
      id: '1',
      content: `{\n\tcontainer: document.querySelector('#d'),\n\tletter: document.querySelector('#d > span:first-child'),\n\tcontent: document.querySelector('#d > span:last-child'),\n}`,
    },
  ],
  slide175: [
    {
      id: '1',
      content: `checkAnswer = id => {\n\tconst correctAnswer = this.answers[this.currentQuestion.correctAns];\n\tcorrectAnswer.container.classList.remove('answerChecked');\n\tcorrectAnswer.container.classList.add('answerCorrect');\n\t// ...\n};`,
    },
  ],
  slide177: [
    {
      id: '1',
      content: `if (id === this.currentQuestion.correctAns) {\n\t// Poprawna odpowiedź\n} else {\n\t// Błędna odpowiedź\n}`,
    },
  ],
  slide178: [
    {
      id: '1',
      content: `if (id === this.currentQuestion.correctAns) {
        if (this.currentQuestionIndex !== 12) {
          // To nie było ostatnie pytanie. Gramy dalej.
        } else {
          // To było ostatnie pytanie. Kończymy.
        }
      }`,
    },
  ],
  slide179: [
    {
      id: '1',
      content: `if (this.currentQuestionIndex !== 12) {
        window.setTimeout(this.prepareToNextQuestion, 3000);
      }`,
    },
  ],
  slide180: [
    {
      id: '1',
      content: `prepareToNextQuestion = () => {
        _.map(this.answers, answer => answer.container.setAttribute('class', 'answer'));
        this.askQuestion();
      };`,
    },
  ],
  slide186: [
    {
      id: '1',
      content: `highlight = questionNumber => {
        if (questionNumber > 1) {
          this.rewardLines[12 - questionNumber + 1].classList.remove('rewardActualLine');
        }

        this.rewardLines[12 - questionNumber].classList.add('rewardActualLine');
        this.points[12 - questionNumber].style.opacity = 1;
      };`,
    },
  ],
  slide187: [
    {
      id: '1',
      content: `constructor() {
        this.rewardLines = document.querySelectorAll('.rewardLine');
        this.points = document.querySelectorAll('.point');
      }`,
    },
  ],
  slide188: [
    {
      id: '1',
      content: `highlight = questionNumber => {
        if (questionNumber > 1) {
          this.rewardLines[12 - questionNumber + 1].classList.remove('rewardActualLine');
        }

        this.rewardLines[12 - questionNumber].classList.add('rewardActualLine');
        this.points[12 - questionNumber].style.opacity = 1;
      };`,
    },
  ],
  slide191: [
    {
      id: '1',
      content: `import Rewards from './Rewards';`,
    },
  ],
  slide192: [
    {
      id: '1',
      content: `this.rewards = new Rewards();`,
    },
  ],
  slide193: [
    {
      id: '1',
      content: `askQuestion = () => {
        // ...
        this.currentQuestionIndex++;
        this.rewards.highlight(this.currentQuestionIndex);
      };`,
    },
  ],
  slide195: [
    {
      id: '1',
      content: `const f1 = () => console.log('a');
      const f2 = () => console.log('b');

      f1(); f2(); f1();

      // Konsola
      // 'a'
      // 'b'
      // 'a'`,
    },
  ],
  slide196: [
    {
      id: '1',
      content: `const f1 = () => console.log('a');
      const f2 = () => setTimeout(() => console.log('b'), 300);

      f1(); f2(); f1();

      // Konsola
      // 'a'
      // 'a'
      // 'b'`,
    },
  ],
  slide200: [
    {
      id: '1',
      content: `const f1 = () => console.log('a');\nconst f2 = (callback) => {\n\tconsole.log('b');\n\tsetTimeout(() => {
              console.log('c');
              callback();
          }, 300);
          console.log('d');
      };

      f2(f1);\n\n// Konsola: 'b' // 'd' // 'c' // 'a'`,
    },
  ],
  slide201: [
    {
      id: '1',
      content: `const f1 = () => console.log('a');\nconst f2 = (callback) => {\n\tconsole.log('b');\n\tsetTimeout(() => {
              console.log('c');
              callback();
          }, 300);
          console.log('d');
      };

      f2(f1);\n\n// Konsola: `,
    },
  ],
  slide203: [
    {
      id: '1',
      content: `const f1 = () => console.log('a');\nconst f2 = (callback) => {\n\tconsole.log('b');\n\tsetTimeout(() => {
              console.log('c');
              callback();
          }, 300);
          console.log('d');
      };

      f2(f1);\n\n// Konsola: 'b' `,
    },
  ],
  slide205: [
    {
      id: '1',
      content: `const f1 = () => console.log('a');\nconst f2 = (callback) => {\n\tconsole.log('b');\n\tsetTimeout(() => {
              console.log('c');
              callback();
          }, 300);
          console.log('d');
      };

      f2(f1);\n\n// Konsola: 'b' // 'd' `,
    },
  ],
  slide207: [
    {
      id: '1',
      content: `const f1 = () => console.log('a');\nconst f2 = (callback) => {\n\tconsole.log('b');\n\tsetTimeout(() => {
              console.log('c');
              callback();
          }, 300);
          console.log('d');
      };

      f2(f1);\n\n// Konsola: 'b' // 'd' // 'c' `,
    },
  ],
  slide214: [
    {
      id: '1',
      content: `{
        "scripts": {
          "start": "webpack-dev-server --open"
        },
        "devDependencies": {
          "webpack-dev-server": "^3.1.4"
        },
        "dependencies": {
          "axios": "^0.18.0",
          "babel-polyfill": "^6.26.0"
        }
      }
      `,
    },
  ],
  slide218: [
    {
      id: '1',
      content: `import 'babel-polyfill';
      import Game from './Game';

      const game = new Game();
      game.start('http://api.myjson.com/bins/n7n72');
      `,
    },
  ],
  slide221: [
    {
      id: '1',
      content: `start = url => {
        axios.get(url).then(res => {
          // Co zrobić po otrzymaniu danych.
        });
      };
      `,
    },
  ],
  slide225: [
    {
      id: '1',
      content: `start = async (url) => {\n\tconst res = await axios.get(url);\n\t// Co zrobić po otrzymaniu danych.\n};
      `,
    },
  ],
};
