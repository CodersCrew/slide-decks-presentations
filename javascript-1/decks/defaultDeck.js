import { css } from 'styled-components';
import code from './codeSnippets';

const timelineNoContent = css`
  > .content {
    color: transparent;
  }
`;

const arrow = '/svgs/arrow.svg';
// const doubleArrow = '/svgs/double_arrow.svg';

export default {
  slides: [
    {
      template: 'Title',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/javascript.png',
        title: 'Warsztaty',
        title2: 'JavaScript 1',
        subtitle:
          'na których przekonamy się, dlaczego JS stanowi najpopularniejszyjęzyk programowania na świecie oraz zgłębimy wszystkie związanez nim warstwy abstrakcji.',
      },
    },
    {
      template: 'WhatIsProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Czym jest programowanie?',
        subtitle: '&',
        title2: 'Jak się do tego zabrać?',
      },
    },
    {
      template: 'WholeScreen',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/are-you-a-programmer.png',
      },
    },
    {
      template: 'ProgramingIcon',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Programowanie',
        content:
          'Komunikacja z maszyną za pośrednictwem specjalnie stworzonych języków, które następnie są przetwarzane na ciągi zer i jedynek.',
        items: [
          {
            icon: '/icons/light/user.svg',
          },
          {
            icon: '/icons/light/comments.svg',
          },
          {
            icon: '/icons/light/laptop-code.svg',
          },
        ],
      },
    },
    {
      template: 'MustProgramming2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jeśli chcesz nauczyć się\nprogramować',
        icon: '/icons/light/laptop-code.svg',
        title2: 'musisz programować',
      },
    },
    {
      template: 'WholeScreen',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'https://starecat.com/content/wp-content/uploads/eyes-comparison-cocaine-marijuana-beer-javascript.jpg',
      },
    },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '...i walczyć z błędami',
        image: '',
      },
    },
    {
      template: 'FightWithFails',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Walka z błędami',
        items: [
          {
            title: 'Największa ogólnoświatowa społeczność programistów',
            content: 'http://stackoverflow.com/',
            link: 'https://stackoverflow.com/',
          },
          {
            title: 'Issues na GitHubie (poniżej tylko przykład).',
            content: 'http://github.com/facebook/react/issues/',
            link: 'https://github.com/facebook/react/issues/',
          },
          {
            title: 'Grupy na fb (poniżej tylko przykład).',
            content: 'http://www.facebook.com/gropus/js.pierwsze.kroki/',
            link: 'https://www.facebook.com/gropus/js.pierwsze.kroki/',
          },
          {
            title: 'Google.',
            content: 'https://www.google.com/',
            link: 'https://www.google.com/',
          },
        ],
      },
    },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Przejdźmy do rzeczy',
      },
    },
    {
      template: 'WholeScreen',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'https://thumbs.gfycat.com/ExemplaryMelodicAmericanalligator-size_restricted.gif',
      },
    },
    {
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'JavaScript w skrócie',
        items: [
          {
            icon: '/icons/light/history.svg',
            title: 'Pojawił się w 1995 roku.',
          },
          {
            icon: '/icons/light/building.svg',
            title: 'Stworzony przez firmę Netscape.',
          },
          {
            icon: '/icons/light/browser.svg',
            title: 'Najczęściej stosowany na stronach internetowych',
          },
          {
            icon: '/icons/light/star.svg',
            title: 'Najpopularniejszy spośród języków programowania',
          },
          {
            icon: '/icons/light/suitcase.svg',
            title: 'Drugi najbardziej pożądany przez pracodawców język',
          },
          {
            icon: '/icons/brands/js.svg',
            title: 'Aktualnie występuje w 9 wersji (ECMAScript 9, ES9)',
          },
        ],
      },
    },
    {
      template: 'WholeScreen',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'https://stackify.com/wp-content/uploads/2017/12/Most-pull-requests-1.png',
      },
    },
    {
      template: 'Script',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skrypt',
        content: 'Seria poleceń wydawanych komputerowi',
        image: 'https://i.ibb.co/qNNkdym/tiramisu.png',
      },
    },
    {
      slide_id: '1',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kilka faktów o skryptach',
        content: `1.Skrypt to seria instrukcji.
        2. Każda pojedyncza instrukcja nazywana jest poleceniem.
        3. Każde polecenie kończymy średnikiem (oznacza on koniec kroku i przejście do następnego).`,
        additionalInfo: [
          {
            id: '1',
            text: `Średniki`,
            top: '66%',
            left: '61%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 354,
            height: 250,
            style: {
              top: '54%',
              left: '42%',
              transform: 'rotate(190deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 217,
            height: 200,
            style: {
              top: '60%',
              left: '49%',
              transform: 'rotate(175deg)',
            },
          },
          {
            number: '3',
            src: arrow,
            width: 230,
            height: 200,
            style: {
              top: '64.4%',
              left: '49%',
              transform: 'rotate(150deg)',
            },
          },
        ],
        codeSnippets: code.slide2,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '40%',
          left: '20%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '2',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kilka faktów o skryptach',
        content: `4. Nawiasy klamrowe oznaczają początek i koniec bloku kodu.
        5. W JSie wielkość literMaZnaczenie.
        6. Wewnątrz skryptów możemy umieszczać komentarze widoczne tylko dla programistów `,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide3,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '36%',
          left: '6%',
          background: 'light',
        },
      },
    },
    // {
    //   slide_id: '',
    //   template: 'Code',
    //   animation: {
    //     type: 'horizontal',
    //   },
    //   content: {
    //     title: '',
    //     content: '',
    //     additionalInfo: [],
    //     shapes: [],
    //     codeSnippets: code.slide4,
    //     language: 'js',
    //     stylesObj: {
    //       fontSize: 60,
    //       position: 'absolute',
    //       top: '10%',
    //       left: '6%',
    //       textAlign: 'center',
    //       background: 'light',
    //     },
    //   },
    // },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmienne',
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Po co nam zmienne?',
        items: [
          {
            number: '1',
          },
          {
            title:
              'Jeżeli chcemy aby komputer zapamiętał jakąś wartość musimy zapisać ją w pamięci (w jednej z dostępnych komórek). Dzięki temu będziemy mogli w każdej chwili odwołać się do nazwy komórki i otrzymać włożoną do niej wartość.',
          },
          {
            image: '/memory2.png',
          },
          {
            title: 'Tutaj pojawiają się jednak 3 problemy.',
          },
        ],
      },
    },
    {
      template: 'GridDream',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Po co nam zmienne?',
        items: [
          {
            title: '1. Nie mamy pojęcia, które komórki w pamięci są wolne, a które zajęte.',
          },
          {
            number: '15',
          },
          {
            subtitle: '?',
          },
          {
            title:
              'Karta RAM o pojemności 1 GB posiada 1 073 741 824 komórek na dane (tzw. bajtów). Przeszukanie sporej części z nich, aby zapisać pojedynczą wartość nie należałoby do przyjemności.',
          },
          {
            describe: `x 3 355 443`,
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 200,
            height: 250,
            style: {
              top: '30%',
              left: '40%',
              transform: 'rotate(0deg)',
            },
          },
        ],
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Po co nam zmienne?',
        items: [
          {
            title: '2. Nazwy komórek w pamięci nie są pisane dla ludzi',
          },
          {
            image: '/variables_name.png',
          },
          {
            title:
              'Przykładowa nazwa komórki w pamięci RAM może brzmieć 0x3d9ff340. Zapamiętanie, że pod taką nazwą zapisaliśmy wiek użytkownika jest dość niepraktyczne.',
          },
        ],
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Po co nam zmienne?',
        items: [
          {
            title: '3. Nie każda wartość "waży" tyle samo.',
          },
          {
            image: '/weight_value.png ',
          },
          {
            title:
              'Wiek będzie dla pamięci znacznie "lżejszy" niż tekst artykułu na blogu. Zapisanie artykułu wykorzysta więc więcej niż jedną komórkę o czym również przydałoby się poinformować komputer.',
          },
        ],
      },
    },
    {
      template: 'VariablesValue',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmienna',
        items: [
          {
            image: '/new_name_var.png ',
          },
          {
            title: `Nazwa pod jaką komputer zapamiętuje daną wartość.\n\nPozwala nam przypisać wybranej komórce/komórkom w pamięci własną nazwę. Co więcej, komputer sam określi, ile komórek jest mu potrzebnych oraz które z nich są wolne.`,
          },
        ],
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Deklaracja zmiennej',
        items: [
          {
            title: 'Stwierdzamy, że chcemy nadać jednej z komórek pamięci określoną nazwę (zarezerwować komórkę).',
          },
          {
            title: '',
          },
          {
            title: '',
          },
          {
            image: '/declaration.png ',
          },
        ],
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Przypisanie wartości',
        items: [
          {
            title: 'Wkładamy jakąś wartość do komórki o określonej nazwie.',
          },
          {
            title: '',
          },
          {
            title: '',
          },
          {
            image: '/value_attribution.png ',
          },
        ],
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Definicja zmiennej',
        items: [
          {
            title: 'Sytuacja, w której jednocześnie dokonujemy deklaracji i przypisania wartości.',
          },
          {
            title: '',
          },
          {
            title: '',
          },
          {
            image: '/definition.png ',
          },
        ],
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Słowo kluczone let/const',
        items: [
          {
            title:
              'Słowo pojawiające się przy deklaracji zmiennej. Oznacza "Zarezerwuj mi komórkę w pamięci i nazwij ją ..."',
          },
          {
            title: '',
          },
          {
            title: '',
          },
          {
            image: '/let_const.png ',
          },
        ],
      },
    },
    {
      template: 'Programmer',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/reservation.png',
      },
    },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Co można wsadzić do zmiennej?',
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Typy danych - proste',
        items: [
          {
            image: '/typy_danych.png',
          },
        ],
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Typy danych - proste',
        items: [
          {
            image: '/typy_danych1.png',
          },
        ],
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Typy danych - referencyjne',
        items: [
          {
            image: '/typy_danych2.png',
          },
        ],
      },
    },
    {
      template: 'WhatIsProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'JavaScript',
        subtitle: 'vs',
        title2: 'matematyka',
      },
    },
    {
      template: 'Programmer',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/tabela_mat.png',
      },
    },
    {
      template: 'Inkrement',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/inkr.png',
      },
    },
    {
      template: 'Konkatenacja',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/konkatenacja.png',
      },
    },
    {
      template: 'WholeScreen',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'http://devhumor.com/content/uploads/images/November2017/javascript-math.jpg',
      },
    },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadanie z olimpiady informatycznej',
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'GGMMPa',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'mKBBZY',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '',
        items: [
          {
            image: '/class.png',
          },
        ],
      },
    },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Instrukcje warunkowe',
      },
    },
    {
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/keep_calm.jpg',
        title: 'Instrukcja warunkowa',
        content: `
Konstrukcja językowa, dzięki której możemy sprawić, że wybrane bloki kodu wykonują się tylko, jeśli spełnione zostały określone warunki.

Dzięki niej możemy także sprawić, że kod wykona się tylko w konkretnych okolicznościach.
        `,
      },
    },
    {
      slide_id: '3',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'if',
        content: `Kod w klamrach wykona się jeśli zostanie spełniony warunek\n zapisany w nawiasach. `,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide6,
        language: 'js',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '4',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'else if',
        content: `Kod wykona się jeśli zostanie spełniony warunek zapisany w\n nawiasach, a żaden z poprzenich nie zostanie spełnony.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide7,
        language: 'js',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '26%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '5',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'else',
        content: `Kod wykona się jeśli nie zostanie spełniony żaden z warunków\n zdefiniowany wcześniej.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide8,
        language: 'js',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '24%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '6',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'porównania',
        content: `Zbiór operatorów umożliwiających zapisywanie warunków.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide9,
        language: 'js',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '18%',
          left: '30%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '7',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '== vs ===',
        content: '',
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide5,
        language: 'js',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '5%',
          left: '35%',
          background: 'light',
        },
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'yEPXXX',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'eKeERx',
        userId: 'KonradSzwarc',
      },
    },
    {
      slide_id: '8',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Operatory logiczne: &&',
        content: `Zwraca true, gdy oba warunki są spełnione.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide10,
        language: 'js',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '22%',
          left: '27%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '9',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Operatory logiczne: ||',
        content: `Zwraca true, gdy co najmniej jeden z warunków jest spełniony.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide11,
        language: 'js',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '22%',
          left: '27%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '10',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Operatory logiczne: !',
        content: `Zaprzeczenie. Zwraca true, gdy warunek zwraca false.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide12,
        language: 'js',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '22%',
          left: '34%',
          background: 'light',
        },
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'VdrJXR',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'OEOevV',
        userId: 'KonradSzwarc',
      },
    },
    {
      slide_id: '11',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skrócony zapis if/else',
        content: `Pozwala na prostsze przypisanie wartości zmiennych\n w zależności od spełnienia określonego warunku.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide13,
        language: 'js',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '26%',
          left: '6%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '12',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skrócony zapis if/else',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide14,
        language: 'js',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '3%',
          left: '10%',
          background: 'light',
          textAlign: 'center',
          width: 1500,
        },
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'OEOevV',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'NzwZmd',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '',
        items: [
          {
            image: '/class2.png',
          },
        ],
      },
    },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tablice',
      },
    },
    {
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'https://www.floliving.com/wp-content/uploads/2012/11/freeze-eggs.jpg',
        title: 'Tablica',
        content: `
Zbiór ułożonych po kolei elementów o dowolnym typie.
        `,
      },
    },
    {
      slide_id: '13',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie tablicy',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `Zmienna\nprzechowująca\ntablicę`,
            top: '67%',
            left: '13%',
          },
          {
            id: '2',
            text: `Początek\ntablicy`,
            top: '55%',
            left: '32%',
          },
          {
            id: '3',
            text: `Pierwszy\n element`,
            top: '57%',
            left: '46%',
          },
          {
            id: '4',
            text: `Separator\nelementów`,
            top: '57%',
            left: '63%',
          },
          {
            id: '5',
            text: `Koniec\ntablicy`,
            top: '55%',
            left: '84.5%',
          },
        ],
        codeSnippets: code.slide16,
        language: 'js',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '20%',
          left: '8%',
          background: 'light',
        },
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 200,
            height: 250,
            style: {
              top: '45%',
              left: '15%',
              transform: 'rotate(90deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 80,
            height: 200,
            style: {
              top: '41%',
              left: '34%',
              transform: 'rotate(90deg)',
            },
          },
          {
            number: '3',
            src: arrow,
            width: 150,
            height: 200,
            style: {
              top: '42%',
              left: '43%',
              transform: 'rotate(45deg)',
            },
          },
          {
            number: '4',
            src: arrow,
            width: 150,
            height: 200,
            style: {
              top: '42%',
              left: '68%',
              transform: 'rotate(135deg)',
            },
          },
          {
            number: '5',
            src: arrow,
            width: 80,
            height: 200,
            style: {
              top: '41%',
              left: '85.5%',
              transform: 'rotate(90deg)',
            },
          },
        ],
      },
    },
    {
      slide_id: '14',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Wartości i właściwości tablicy',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide17,
        language: 'js',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '3%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      template: 'WholeScreen',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'http://the9gag.com/images/pictuers/you_know_you_are_a_programmer.jpg',
      },
    },
    {
      slide_id: '15',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodanie wartości do tablicy',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide18,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '3%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '16',
      template: 'CodeWithSquare',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodanie wartości do tablicy',
        content: ``,
        additionalInfo: [],
        shapes: [],
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_401,w_480,x_0,y_0/fl_lossy/f_auto/a_ignore/v1529450556/76892f09-5f0d-49ea-945b-7b33736aca25.gif',
        codeSnippets: code.slide18,
        language: 'js',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '3%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      template: 'WhatIsProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        subtitle: 'nie jest skrótem od',
        title: 'const',
        title2: 'constans',
      },
    },
    {
      slide_id: '17',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Usunięcie wartości z tablicy',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide19,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '3%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '18',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odnajdowanie wartości w tablicy',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide20,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '10%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '',
        items: [
          {
            image: '/class3.png',
          },
        ],
      },
    },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pętle',
      },
    },
    {
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'https://i.imgur.com/Uvy2WXI.gif?noredirect/',
        title: 'Pętla',
        content: `
Konstrukcja językowa, dzięki której możemy wykonywać wybrany blok kodu określoną ilość razy.

Pętla będzie wykonywać się dopóki spełniony będzie warunek zapisany na jej początku.
        `,
      },
    },
    {
      template: 'Services3',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Co zawiera każda pętla?',
        items: [
          {
            title: 'Iterator',
            content: 'Zmienna determinująca, ile razy będzie wykonywała się pętla.',
          },
          {
            title: 'Warunek',
            content: 'Warunek, którego prawdziwość determinuje dalsze wykonanie się pętli.',
          },
          {
            title: 'Wartość początkowa',
            content: 'Wartość przyjęta przez iterator przy pierwszym wykonaniu pętli.',
          },
          {
            title: 'Aktualizacja',
            content: 'Zmiana wartości iteratora w trakcie każdego wykonania pętli.',
          },
        ],
      },
    },
    {
      slide_id: '19',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pętla for',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide21,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '15%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '20',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pętla for',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `Wartość początkowa`,
            top: '34%',
            left: '23%',
          },
          {
            id: '2',
            text: `Warunek`,
            top: '34%',
            left: '45%',
          },
          {
            id: '3',
            text: `Aktualizacja`,
            top: '36%',
            left: '60%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 100,
            height: 250,
            style: {
              top: '33%',
              left: '35%',
              transform: 'rotate(50deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 100,
            height: 200,
            style: {
              top: '34%',
              left: '48%',
              transform: 'rotate(65deg)',
            },
          },
          {
            number: '3',
            src: arrow,
            width: 100,
            height: 200,
            style: {
              top: '35%',
              left: '60%',
              transform: 'rotate(135deg)',
            },
          },
        ],
        codeSnippets: code.slide21,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '21',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pętla while',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide22,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '15%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '22',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pętla while',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `Wartość początkowa`,
            top: '19%',
            left: '23%',
          },
          {
            id: '2',
            text: `Warunek`,
            top: '29%',
            left: '45%',
          },
          {
            id: '3',
            text: `Aktualizacja`,
            top: '56%',
            left: '46%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 100,
            height: 250,
            style: {
              top: '18%',
              left: '35%',
              transform: 'rotate(90deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 100,
            height: 200,
            style: {
              top: '28%',
              left: '44%',
              transform: 'rotate(135deg)',
            },
          },
          {
            number: '3',
            src: arrow,
            width: 100,
            height: 200,
            style: {
              top: '49%',
              left: '40%',
              transform: 'rotate(180deg)',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '15%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '23',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pętla do while',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide23,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '15%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '24',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pętla do while',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `Wartość początkowa`,
            top: '34.5%',
            left: '51%',
          },
          {
            id: '2',
            text: `Warunek`,
            top: '64.5%',
            left: '60%',
          },
          {
            id: '3',
            text: `Aktualizacja`,
            top: '56%',
            left: '47%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 100,
            height: 250,
            style: {
              top: '24.5%',
              left: '45%',
              transform: 'rotate(180deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 100,
            height: 200,
            style: {
              top: '57%',
              left: '54%',
              transform: 'rotate(180deg)',
            },
          },
          {
            number: '3',
            src: arrow,
            width: 100,
            height: 200,
            style: {
              top: '49%',
              left: '41%',
              transform: 'rotate(180deg)',
            },
          },
        ],
        codeSnippets: code.slide23,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '15%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'eKyNLZ',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'wXpayR',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '',
        items: [
          {
            image: '/class4.png',
          },
        ],
      },
    },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Funkcje',
      },
    },
    {
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/inputx.png',
        title: 'Funkcja',
        content: `
Konstrukcja językowa, dzięki której możemy nazwać wybrany blok kodu, wykonujący określoną czynność.

Dzięki nadaniu nazwy możemy później używać danego bloku ponownie odwołując się wyłącznie do nazwy.
        `,
      },
    },
    {
      slide_id: '25',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie funkcji (wariant 1)',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide24,
        language: 'jsx',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '26',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie funkcji (wariant1)',
        content: `Nazwa funkcji\nZmienna, w której będziemy przechowywać funkcję.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '48.5%',
            left: '27.5%',
            width: '350px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide24,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '27',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie funkcji (wariant1)',
        content: `Parametry\nNazwy zmiennych przechowujących wartości przekazane do funkcji.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '48.5%',
            left: '46.8%',
            width: '180px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide24,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '28',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie funkcji (wariant1)',
        content: `Strzałka\nSpecjalny symbol służący do zdefiniowania funkcji.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '48.5%',
            left: '56.7%',
            width: '90px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide24,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '29',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie funkcji (wariant1)',
        content: `Klamry\nOplatają blok kodu, stanowiący funkcję.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '48.5%',
            left: '62.3%',
            width: '40px',
            height: '70px',
          },
          {
            id: '1',
            text: ``,
            top: '71.5%',
            left: '27.7%',
            width: '40px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide24,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '30',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie funkcji (wariant1)',
        content: `Zmienna wewnątrz funkcji\nZmienna istniejąca wyłącznie w klamrach danej funkcji.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '56%',
            left: '34%',
            width: '550px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide24,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '31',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie funkcji (wariant1)',
        content: `Słowo kluczowe return\nOkreśla jaka wartość ma zostać zwrócona po wykonaniu funkcji.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '64%',
            left: '34%',
            width: '550px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide24,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '32',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Użycie funkcji',
        content: `Funkcję odpalamy wpisując jej nazwę zakończoną nawiasami.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide25,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '20%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '33',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Użycie funkcji',
        content: ``,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 320,
            height: 200,
            style: {
              top: '51%',
              left: '46%',
              transform: 'rotate(265deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 320,
            height: 200,
            style: {
              top: '51%',
              left: '42%',
              transform: 'rotate(265deg)',
            },
          },
        ],
        squareInfo: [],
        codeSnippets: code.slide25,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '20%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '34',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Użycie funkcji',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `Parametry`,
            top: '33%',
            left: '46%',
          },
          {
            id: '1',
            text: `Argumenty`,
            top: '82.5%',
            left: '48%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 320,
            height: 200,
            style: {
              top: '51%',
              left: '46%',
              transform: 'rotate(265deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 320,
            height: 200,
            style: {
              top: '51%',
              left: '42%',
              transform: 'rotate(265deg)',
            },
          },
        ],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '38.5%',
            left: '46.5%',
            width: '190px',
            height: '70px',
          },
          {
            id: '2',
            text: ``,
            top: '76.5%',
            left: '48.5%',
            width: '185px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide25,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '20%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '35',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Uproszczenie 1',
        content: `Nie musimy tworzyć zmiennej. Możemy od razu zwrócić sumę.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide26,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '20%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '36',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Uproszczenie 2',
        content: `Jeśli od razu zwracamy wartość, to strzałka może zastąpić return.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide27,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '20%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '37',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Brak argumentów',
        content: `Jeśli przekażemy do funkcji za mało argumentów to nadmiarowe parametry przyjmą wartość undefined.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide28,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '25%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '38',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Wartości domyślne',
        content: `Sytuacji z poprzedniego slajdu możemy zapobiec określając domyślne wartości dla parametrów.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide29,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '25%',
          left: '20%',
          background: 'light',
        },
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'oyEjLE',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'CodePen',
      animation: {
        type: 'horizontal',
      },
      content: {
        codepenId: 'qKxONV',
        userId: 'KonradSzwarc',
      },
    },
    {
      template: 'ScriptDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '',
        items: [
          {
            image: '/class5.png',
          },
        ],
      },
    },
    {
      template: 'MustProgramming',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obiekty',
      },
    },
    {
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/obiekt_human.png',
        title: 'Obiekt',
        content: `
Zbiór zmiennych i metod, który odzwierciedla element ze świata rzeczywistego (np. człowieka) lub coś abstrakcyjnego (np. czas).
        `,
      },
    },
    {
      slide_id: '39',
      template: 'CodeWithSquare2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obiekt',
        content: ``,
        additionalInfo: [],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide30,
        image: '/obiekt_human.png',
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
          position: 'absolute',
          top: '0%',
          left: '50%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '40',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie obiektu',
        content: `Nazwa obiektu\nZmienna, w której będziemy przechowywać obiekt.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '49%',
            left: '27%',
            width: '480px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide31,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '41',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie obiektu',
        content: `Klamry\nOplatają atrybuty oraz metody związane z danym obiektem.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '49%',
            left: '52.7%',
            width: '40px',
            height: '70px',
          },
          {
            id: '2',
            text: ``,
            top: '86.5%',
            left: '27.5%',
            width: '40px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide31,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '42',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie obiektu',
        content: `Atrybut\nZmienna wewnątrz obiektu. Od zwykłej zmiennej róźni go ":" zamiast "=" przy przypisaniu wartości oraz "," zamiast ";" na końcu.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '56%',
            left: '33.7%',
            width: '630px',
            height: '70px',
          },
        ],
        codeSnippets: code.slide31,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '43',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie obiektu',
        content: `Metoda\nFunkcja wewnątrz obiektu.`,
        additionalInfo: [],
        shapes: [],
        squareInfo: [
          {
            id: '1',
            text: ``,
            top: '63%',
            left: '33.7%',
            width: '1000px',
            height: '250px',
          },
        ],
        codeSnippets: code.slide31,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '30%',
          left: '25%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '44',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dostęp do własciwości obiektu',
        content: ``,
        additionalInfo: [],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide32,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '5%',
          left: '10%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '45',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmiana do właściwości obiektu',
        content: ``,
        additionalInfo: [],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide33,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '5%',
          left: '10%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '46',
      template: 'CodeWithSquare1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zagnieżdżone właściwości',
        content: ``,
        additionalInfo: [],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide34,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '5%',
          left: '10%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '47',
      template: 'CodeWithSquare3',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '',
        content: ``,
        additionalInfo: [
          {
            id: '',
            text: 'Skoro kropek używamy w\n obiektach ...',
            top: '70%',
            left: '20%',
          },
        ],
        shapes: [],
        squareInfo: [],
        codeSnippets: code.slide35,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '0%',
          left: '10%',
          background: 'light',
        },
      },
    },
    {
      slide_id: '48',
      template: 'CodeWithSquare3',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '',
        content: ``,
        additionalInfo: [
          {
            id: '',
            text: '... to wszystko w JSie jest\nobiektem',
            top: '70%',
            left: '20%',
          },
        ],
        shapes: [],
        squareInfo: [],
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_267,w_250,x_0,y_0/fl_lossy/f_auto/a_ignore/v1529486482/124edc85-d3dd-4107-ab92-9e26262ff55b.gif',
        codeSnippets: code.slide36,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
          position: 'absolute',
          top: '0%',
          left: '10%',
          background: 'light',
        },
      },
    },
    {
      template: 'WholeScreen',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dziękujemy za uwagę',
        image: '/end_slide.png',
      },
    },
    {
      template: 'WholeScreen',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '',
        image: '/codewars.png',
      },
    },
    {
      template: 'SocialMediaIcon',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Znajdź nas na:',
        icons: [
          {
            logo: '/icons/web.svg',
            logo_light_theme: '/icons/light/web_light.svg',
            link: 'https://coderscrew.pl/',
          },
          {
            logo: '/icons/facebook.svg',
            logo_light_theme: '/icons/light/facebook_light.svg',
            link: 'https://pl-pl.facebook.com/ccrew18/',
          },
          {
            logo: '/icons/instagram.svg',
            logo_light_theme: '/icons/light/instagram_light.svg',
            link: 'https://www.instagram.com/coderscrew.pl/',
          },
          {
            logo: '/icons/linkedin.svg',
            logo_light_theme: '/icons/light/linkedin_light.svg',
            link: 'https://pl.linkedin.com/company/coderscrew',
          },
        ],
      },
    },
  ],
};
