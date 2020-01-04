import { css } from 'styled-components';
import code from './codeSnippets';
import { isAbsolute } from 'upath';

const timelineNoContent = css`
  > .content {
    color: transparent;
  }
`;

const arrow = 'static/svgs/arrow.svg';

export default {
  slides: [
    {
      slide_id: '0',
      template: 'Title',
      animation: {
        type: 'horizontal',
      },
      content: {
        images: [
          {
            number: '1',
            path: '/static/images/npm.png',
          },
          {
            number: '2',
            path: '/static/images/webpack.png',
          },
        ],
        title: 'WARSZTATY JavaScript 2',
        subtitle:
          'na których przekopiecie się z nami przez zaawansowane zagadnienia związane z JSem i stworzymy swój pierwszy starter automatyzujący powtarzalne kroki tworzenia stron i aplikacji.',
      },
    },
    {
      slide_id: '1',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Co dziś kodujemy?',
      },
    },
    {
      slide_id: '2',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://konradszwarc.github.io/JavaScript2-Milionerzy/',
      },
    },
    {
      slide_id: '3',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/github-repo-img.png',
        title: 'Repozytorium projektu',
        link: 'https://github.com/KS-archive/JavaScript2-Milionerzy',
        width: 1600,
      },
    },
    {
      slide_id: '4',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/folder-structure-audio.png',
        title: 'Struktura folderów',
        content: `Pliki audio z podkładem muzycznym z gry oraz dźwiękami kół ratunkowych.`,
        shapes: [],
        width: 800,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '5',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/folder-structure-img.png',
        title: 'Struktura folderów',
        content: `Grafiki kół ratunkowych, zdjęcie w tle oraz favicon.`,
        shapes: [],
        width: 600,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '6',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/folder-structure-gitignore.png',
        title: 'Struktura folderów',
        content: `Lista plików i folderów, które powinny być ignorowane przez Gita. Zachodzące w nich zmiany nie będą commitowane.`,
        shapes: [],
        width: 1000,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '7',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/folder-structure-indexhtml.png',
        title: 'Struktura folderów',
        content: `Plik HTML zawierający strukturę strony z grą.`,
        shapes: [],
        width: 600,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '8',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/folder-structure-readme.png',
        title: 'Struktura folderów',
        content: `Plik w formacie markdown stanowiący opis aplikacji. GitHub odpowiednio sformatuje i wyświetli jego zawartość na głównej stronie repozytorium.`,
        shapes: [],
        width: 1300,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '9',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/folder-structure-stylecss.png',
        title: 'Struktura folderów',
        content: `Stylowanie dla gry.`,
        shapes: [],
        width: 600,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '10',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.
        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. Wybór odpowiedzi oraz jej potwierdzenie.
        6. Walidacja odpowiedzi i przejście do kolejnego pytania.
        ...
        `,
        shapes: [],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '11',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `
        ...
        7. Dodanie muzyki do wyboru odpowiedzi.
        8. Podświetlenie aktualnej nagrody.
        9. Koło pół na pół.
        10. Koło pytanie do publiczności.
        11. Koło telefon do przyjaciela.
        12. Zakończenie gry lub wycofanie się.
        `,
        shapes: [],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '12',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.
        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. Wybór odpowiedzi oraz jej potwierdzenie.
        6. Walidacja odpowiedzi i przejście do kolejnego pytania.
        ...
        `,
        shapes: [
          {
            number: '1',
            width: 840,
            height: 1,
            style: {
              top: '39%',
              left: '23%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '13',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Interakcja z HTML',
      },
    },
    {
      slide_id: '14',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/dom.png',
        title: 'DOM',
        content: `Obiektowy Model Dokumentu
        Hierarchiczny model dokumentu HTML stworzony aby mogły z nim wchodzić w interakcję inne języki programowania.`,
        width: 1100,
        shapes: [],
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '15',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak złapać 1 element?',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide15,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '16',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak złapać 1 element?',
        content: `Obiekt globalny odpowiedzialny za interakcje między JS'em aDOM.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 300,
            height: 100,
            style: {
              top: '48%',
              left: '17%',
            },
          },
        ],
        codeSnippets: code.slide15,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '17',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak złapać 1 element?',
        content: `Metoda wyszukująca w dokumencie pierwszy (od góry) element dopasowany do przekazanego selektora CSS. Zwraca pojedynczy element.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 450,
            height: 100,
            style: {
              top: '48%',
              left: '33%',
            },
          },
        ],
        codeSnippets: code.slide15,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
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
        title: 'Jak złapać 1 element?',
        content: `Selektor CSS, na podstawie którego chcemy wyszukać coś wdokumencie.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 395,
            height: 100,
            style: {
              top: '48%',
              left: '58%',
            },
          },
        ],
        codeSnippets: code.slide15,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '19',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak złapać wiele elementów?',
        content: `Metoda wyszukująca w dokumencie wszystkie elementy dopasowane do przekazanego selektora CSS. Zwraca wszystkie dopasowane elementy w postaci NodeList.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 525,
            height: 100,
            style: {
              top: '48%',
              left: '31%',
            },
          },
        ],
        codeSnippets: code.slide19,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
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
        title: 'NodeList',
        content: `NodeList NIE jest tablicą. Jest to zupełnie inny typ danych i posiada znacznie mniej metod, niż tablice.
        Aby przekonwertować NodeList na tablicę możemy skorzystać z tzw. spread operator dostępnego w ES6.
        `,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide20,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '30%',
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
        title: 'NodeList',
        content: `NodeList NIE jest tablicą. Jest to zupełnie inny typ danych i posiada znacznie mniej metod, niż tablice.
        Aby przekonwertować NodeList na tablicę możemy skorzystać z tzw. spread operator dostępnego w ES6.
        `,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide21,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '40%',
        },
      },
    },
    {
      slide_id: '22',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/game-structure.png',
        title: 'Struktura HTML w grze',
        width: 1400,
      },
    },
    {
      slide_id: '23',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/game-structure1.png',
        title: 'Struktura HTML w grze',
        width: 1400,
      },
    },
    {
      slide_id: '24',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/gifs/strukturaHTML.gif',
        title: 'Struktura HTML w grze',
        content: `65 linii kodu na samo złapanie elementów w DOM?
        To jak duża będzie ta aplikacja?`,
        width: 1000,
      },
    },
    {
      slide_id: '25',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.

        a) Ułatwmy sobie rozszerzanie projektu (npm).
        b) Przygotujmy się na większą ilość plików JS'owych (Webpack).
        c) Dajmy sobie możliwość pracy z najnowszymi funkcjonalnościami JS'a.

        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. ...
        `,
        shapes: [
          {
            number: '1',
            width: 840,
            height: 1,
            style: {
              top: '29%',
              left: '16%',
            },
          },
        ],
        stylesObj: {
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '26',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.

        a) Ułatwmy sobie rozszerzanie projektu (npm).
        b) Przygotujmy się na większą ilość plików JS'owych (Webpack).
        c) Dajmy sobie możliwość pracy z najnowszymi funkcjonalnościami JS'a.

        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. ...
        `,
        shapes: [
          {
            number: '1',
            width: 880,
            height: 1,
            style: {
              top: '38%',
              left: '15%',
            },
          },
        ],
        stylesObj: {
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '27',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'NPM',
      },
    },
    {
      slide_id: '28',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/npm_js.png',
        title: 'NPM',
        content: `Node Package Manager
        System służący do pobierania i zarządzania paczkami (bibliotekami) napisanymi w JavaScripcie.
        `,
        shapes: [],
        stylesObj: {
          marginTop: '10%',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '29',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Wykorzystanie npm w projekcie',
        content: `Inicjalizuje npm w danym projekcie. Tworzy plik package.json, w ktorym przechowywane będą dane o projekcie i wykorzystanych w nim modułach.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide29,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '30',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Wykorzystanie npm w projekcie',
        content: `Dodaje do projektu zależność (bibliotekę), która zostanie wykorzystana wewnątrz tworzonej aplikacji. Biblioteka zostanie dodana do "dependencies".`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide30,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '31',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Wykorzystanie npm w projekcie',
        content: `Dodaje do projektu zależność (bibliotekę), która zostanie wykorzystana wyłącznie na etapie tworzenia aplikacji. Biblioteka zostanie dodana do "devDependencies". `,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide31,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '32',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Wykorzystanie npm w projekcie',
        content: `Instaluje wszystkie zależności zapisane w pliku package.json (zarówno dependencies, jak i devDependencies).`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide32,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '33',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.

        a) Ułatwmy sobie rozszerzanie projektu (npm).
        b) Przygotujmy się na większą ilość plików JS'owych (Webpack).
        c) Dajmy sobie możliwość pracy z najnowszymi funkcjonalnościami JS'a.

        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. ...
        `,
        shapes: [
          {
            number: '1',
            width: 1180,
            height: 1,
            style: {
              top: '48%',
              left: '15%',
            },
          },
        ],
        stylesObj: {
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '34',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Webpack',
      },
    },
    {
      slide_id: '35',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/what-is-webpack.png',
        title: 'Webpack',
        content: `Narzędzie, które potrafi spakować wiele różnych typów zasobów do jednego wynikowego zasobu.`,
        width: 1200,
      },
    },
    {
      slide_id: '36',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodanie Webpacka do projektu',
        content: `Webpack jest nam potrzebny tylko na etapie tworzenia aplikacji, więc dodajemy go do devDependencies.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 350,
            height: 100,
            style: {
              top: '48%',
              left: '40%',
            },
          },
        ],
        codeSnippets: code.slide31,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '37',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodanie Webpacka do projektu',
        content: `Biblioteka zawierająca wszystkie funkcjonalności, jakie oferuje Webpack.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 240,
            height: 100,
            style: {
              top: '48%',
              left: '53%',
            },
          },
        ],
        codeSnippets: code.slide37,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '38',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodanie Webpacka do projektu',
        content: `Biblioteka pozwalająca używać Webpacka z poziomu konsoli.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 370,
            height: 100,
            style: {
              top: '48%',
              left: '67%',
            },
          },
        ],
        codeSnippets: code.slide37,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '39',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/webpack-config.png',
        title: 'Konfiguracja Webpacka',
        content: `Konfigurację domyślnie zapisujemy w pliku o nazwie webpack.config.js.
        \nWebpack automatycznie wyszuka w głównym folderze projektu plik o tej nazwie.`,
        width: 900,
        shapes: [],
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '40',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Konfiguracja Webpacka',
        content: `Zapis zgodny ze składnią Node.js informujący, że gdy odnosimy się do danego pliku, chcemy otrzymać obiekt zapisany po znaku równości.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide40,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '41',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Konfiguracja Webpacka',
        content: `Plik JSowy, od którego webpack ma rozpocząć tworzenie wynikowego zasobu. `,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide41,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '42',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Konfiguracja Webpacka',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: 'Dane dotyczące wynikowego pliku JSa',
            top: '36%',
            left: '45%',
          },
          {
            id: '2',
            text: 'Folder docelowy.',
            top: '44%',
            left: '65%',
          },
          {
            id: '3',
            text: 'Ścieżka do zasobów.',
            top: '52%',
            left: '65%',
          },
          {
            id: '4',
            text: 'Nazwa pliku',
            top: '60%',
            left: '70%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 200,
            height: 100,
            style: {
              top: '33%',
              left: '30%',
              transform: 'rotate(180deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 200,
            height: 100,
            style: {
              top: '41%',
              left: '52%',
              transform: 'rotate(180deg)',
            },
          },
          {
            number: '3',
            src: arrow,
            width: 200,
            height: 100,
            style: {
              top: '49%',
              left: '52%',
              transform: 'rotate(180deg)',
            },
          },
          {
            number: '4',
            src: arrow,
            width: 200,
            height: 100,
            style: {
              top: '57%',
              left: '57%',
              transform: 'rotate(180deg)',
            },
          },
        ],
        codeSnippets: code.slide42,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '15%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '43',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Konfiguracja Webpacka',
        content: `Tryb, w którym działa webpack. 'development' powoduje szybkie działanie webpacka, a 'production' maksymalnie zmniejsza rozmiar wynikowego pliku.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide43,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '44',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Konfiguracja Webpacka',
        content: `Sprawia, że łącząc ze sobą pliki JSowe (podczas importowania) nie będziemy musieli za każdym razem dopisywać rozszerzenia .js`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide44,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '45',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.

        a) Ułatwmy sobie rozszerzanie projektu (npm).
        b) Przygotujmy się na większą ilość plików JS'owych (Webpack).
        c) Dajmy sobie możliwość pracy z najnowszymi funkcjonalnościami JS'a (Babel).

        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. ...
        `,
        shapes: [
          {
            number: '1',
            width: 1480,
            height: 1,
            style: {
              top: '56%',
              left: '12%',
            },
          },
        ],
        stylesObj: {
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '46',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Babel',
      },
    },
    {
      slide_id: '47',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/babel.png',
        title: 'Babel',
        content: `Tzw. transpilator. Narzędzie, które potrafi przekształacić kod JavaScript napisany zgodnie z nową składnią (np. ES6) na kod zrozumiały dla większej ilości przeglądarek.`,
        width: 800,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '48',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodanie Babela do projektu',
        content: `Główna biblioteka Babela odpowiedzialna za transpilację kodu.`,
        additionalInfo: [],
        shapes: [
          {
            id: '1',
            width: 230,
            height: 100,
            style: {
              top: '54%',
              left: '40%',
            },
          },
        ],
        codeSnippets: code.slide48,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '40%',
        },
      },
    },
    {
      slide_id: '49',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodanie Babela do projektu',
        content: `Główna Biblioteka, dzięki której webpack w trakcie "składania" plików JSowych skorzysta z Babela.`,
        additionalInfo: [],
        shapes: [
          {
            id: '1',
            width: 280,
            height: 100,
            style: {
              top: '54%',
              left: '52%',
            },
          },
        ],
        codeSnippets: code.slide48,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '40%',
        },
      },
    },
    {
      slide_id: '50',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodanie Babela do projektu',
        content: `"Słownik" do Babela zawierający tłumaczenia najnowszej obecnie dostępnej specyfikacji JSa.`,
        additionalInfo: [],
        shapes: [
          {
            id: '1',
            width: 380,
            height: 100,
            style: {
              top: '54%',
              left: '67%',
            },
          },
        ],
        codeSnippets: code.slide48,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '40%',
        },
      },
    },
    {
      slide_id: '51',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/babelrc.png',
        title: 'Konfiguracja Babela',
        content: `Konfigurację domyślnie zapisujemy w pliku o nazwie .babelrc.`,
        width: 700,
        shapes: [],
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '52',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Konfiguracja Babela',
        content: `Informacja, z jakich "słowników" korzystać ma Babel w trakcie tłumaczenia kodu.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide52,
        language: 'javascript',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '53',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Konfiguracja Babela',
        content: `Zapis w konfiguracji Webpacka, dzięki któremu wykorzysta on Babela na każdym pliku z rozszerzeniem.js, pomijając pliki znajdujące się w folderze node_modules.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide53,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '27%',
        },
      },
    },
    {
      slide_id: '54',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/gifs/uff.gif',
        title: '',
        width: 1200,
      },
    },
    {
      slide_id: '55',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/klasa.png',
        title: '',
        width: 1550,
      },
    },
    {
      slide_id: '56',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Klasy',
      },
    },
    {
      slide_id: '57',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/klasa-obiekt.png',
        title: 'Klasa',
        content: `"Przepis" pozwalający na stworzenie obiektu. \n\nPozwala na dynamiczne tworzenie obiektów, o podobnych cechach, w których tylko niektóre właściwości posiadają tę samą wartość.`,
        width: 900,
        shapes: [],
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '58',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/dog-to-object.png',
        title: 'Klasa',
        link: 'https://www.guru99.com/java-oops-class-objects.html',
        width: 1300,
      },
    },
    {
      slide_id: '59',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/spot-difference.png',
        title: 'Klasa',
        link: 'https://www.guru99.com/java-oops-class-objects.html',
        width: 1300,
      },
    },
    {
      slide_id: '60',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/common-characteristic.jpg',
        title: 'Klasa',
        link: 'https://www.guru99.com/java-oops-class-objects.html',
        width: 1200,
      },
    },
    {
      slide_id: '61',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/common-actions.png',
        title: 'Klasa',
        link: 'https://www.guru99.com/java-oops-class-objects.html',
        width: 1200,
      },
    },
    {
      slide_id: '62',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/dog.png',
        title: 'Klasa',
        link: 'https://www.guru99.com/java-oops-class-objects.html',
        width: 600,
      },
    },
    {
      slide_id: '63',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/dog1.png',
        title: 'Klasa',
        link: 'https://www.guru99.com/java-oops-class-objects.html',
        width: 1200,
      },
    },
    {
      slide_id: '64',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie klasy',
        content: `Słowo kluczowe powodujące utworzenie klasy.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 140,
            height: 80,
            style: {
              top: '45%',
              left: '10%',
            },
          },
        ],
        codeSnippets: code.slide64,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '65',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie klasy',
        content: `Nazwa klasy. Dobrą praktyką jest pisanie jej zawsze z wielkiej  (tzw. Upper Camel Case).`,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 180,
            height: 80,
            style: {
              top: '45%',
              left: '17%',
            },
          },
        ],
        codeSnippets: code.slide64,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '66',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie klasy',
        content: `Metoda wbudowana, która będzie odpalać się za każdym razem, gdy będziemy tworzyć obiekt na podstawie klasy.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1450,
            height: 180,
            style: {
              top: '53%',
              left: '15%',
            },
          },
        ],
        codeSnippets: code.slide64,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '67',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie klasy',
        content: `Słowo oznaczające "w tej klasie". W momencie tworzenia obiektówna podstawie klasy zostanie każdorazowo podmienione na nazwę konkretnego obiektu.
        `,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 100,
            height: 80,
            style: {
              top: '56%',
              left: '20%',
            },
          },
        ],
        codeSnippets: code.slide64,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '68',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Eksportowanie klasy',
        content: `Spowoduje, że za każdym razem, gdy będziemy importować zdanego pliku, domyślnie zaimportowana zostanie klasa Rewards.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 550,
            height: 80,
            style: {
              top: '73%',
              left: '10%',
            },
          },
        ],
        codeSnippets: code.slide68,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '69',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Importowanie klasy',
        content: `Nazwa importowanego elementu. Może być dowolna, ale warto by odpowiadała nazwie pliku, z którego importujemy zawartość.
        `,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 750,
            height: 80,
            style: {
              top: '40%',
              left: '28%',
            },
          },
        ],
        codeSnippets: code.slide69,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '70',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Importowanie klasy',
        content: `Ścieżka względna (relatywna) do pliku, z którego chcemy importować.
        `,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 420,
            height: 80,
            style: {
              top: '40%',
              left: '45%',
            },
          },
        ],
        codeSnippets: code.slide69,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '71',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie obiektu',
        content: `Słowo kluczowe oznaczające "utwórz nowy obiekt na bazie klasy".`,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 80,
            height: 60,
            style: {
              top: '63%',
              left: '56%',
            },
          },
        ],
        codeSnippets: code.slide71,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '72',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie obiektu',
        content: `Nazwa klasy, na podstawie której tworzymy obiekt.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 180,
            height: 60,
            style: {
              top: '63%',
              left: '60%',
            },
          },
        ],
        codeSnippets: code.slide71,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '73',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Utworzenie obiektu',
        content: `Argumenty przekazane w tych nawiasach trafią do konstruktora klasy.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 40,
            height: 60,
            style: {
              top: '63%',
              left: '69%',
            },
          },
        ],
        codeSnippets: code.slide71,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '74',
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Podział gry na klasy',
        content: '',
        items: [
          {
            service_id: '1',
            title: 'AudioPlayer',
            content: 'Odgrywanie dźwięków.',
          },
          {
            service_id: '2',
            title: 'Game',
            content: 'Mechanika gry jako całości.',
          },
          {
            service_id: '3',
            title: 'Lifelines',
            content: 'Obsługa kół ratunkowych.',
          },
          {
            service_id: '4',
            title: 'Questions',
            content: 'Zadawanie pytań i sprawdzanie odpowiedzi.',
          },
          {
            service_id: '5',
            title: 'Rewards',
            content: 'Określanie wysokości nagrody.',
          },
        ],
      },
    },
    {
      slide_id: '75',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide75,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '76',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide76,
        language: 'javascript',
        stylesObj: {
          fontSize: 30,
        },
      },
    },
    {
      slide_id: '77',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide77,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '78',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide78,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '79',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Importujemy wszystkie wcześniej utworzone klasy.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide79,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '80',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Tworzymy główną klasę. Podczas tworzenia na jej podstawie obiektu, będziemy mogli przekazać mu listę pytań.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide80,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '81',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Przypisujemy klasie uchwyty do całego obszaru gry oraz przycisku kończącego grę.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide81,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '82',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Tworzymy obiekty na podstawie wcześniej zaimportowanych klas i przypisujemy je do głównej klasy gry.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide82,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '83',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Dodajemy metodę, której zadaniem będzie rozpoczęcie gry.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide83,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
        },
      },
    },
    {
      slide_id: '84',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Aby sposób zapisu metod z poprzedniego slajdu działał musimy dodać do Babela plugin o nazwie transform-class-properties.`,
        additionalInfo: [
          {
            id: '1',
            text: '.babelrc',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide84,
        language: 'javascript',
        stylesObj: {
          fontSize: 55,
        },
      },
    },
    {
      slide_id: '85',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Importujemy główną klasę obsługującą grę.`,
        additionalInfo: [
          {
            id: '1',
            text: 'index.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 650,
            height: 70,
            style: {
              top: '45%',
              left: '24%',
            },
          },
        ],
        codeSnippets: code.slide85,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '86',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Importujemy tablicę zawierającą listę pytań i odpowiedzi.`,
        additionalInfo: [
          {
            id: '1',
            text: 'index.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1000,
            height: 70,
            style: {
              top: '51%',
              left: '24%',
            },
          },
        ],
        codeSnippets: code.slide85,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '87',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Tworzymy obiekt gry na bazie klasy Game i przypisujemy go do zmiennej game.`,
        additionalInfo: [
          {
            id: '1',
            text: 'index.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 830,
            height: 70,
            style: {
              top: '63%',
              left: '24%',
            },
          },
        ],
        codeSnippets: code.slide85,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '88',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod projektu',
        content: `Wywołujemy metodę start z nowo utworzonego obiektu.`,
        additionalInfo: [
          {
            id: '1',
            text: 'index.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 330,
            height: 70,
            style: {
              top: '69%',
              left: '24%',
            },
          },
        ],
        codeSnippets: code.slide85,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '89',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.
        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. Wybór odpowiedzi oraz jej potwierdzenie.
        6. Walidacja odpowiedzi i przejście do kolejnego pytania.
        ...
        `,
        shapes: [
          {
            number: '1',
            width: 1000,
            height: 1,
            style: {
              top: '46%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '90',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `2. Wczytanie kół ratunkowych z odegraniem dźwięku.



        a) Dodanie do AudioPlayer metody odgrywającej dźwięki.
        b) Dodanie do Lifelines medody inicjalizującej koła.
        c ) Inicjalizacja kół wewnątrz klasy Game.
        `,
        shapes: [
          {
            number: '1',
            width: 1080,
            height: 1,
            style: {
              top: '60%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '91',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odgrywanie dźwięków',
        content: `Czasami do konkretnego audio odwołujemy się podając jedynie jego klucz w obiekcie this.sounds.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide91,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '92',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odgrywanie dźwięków',
        content: `W innych przypadkach musimy określić zarówno klucz, jak i indeks dźwięku w tablicy.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide92,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '93',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odgrywanie dźwięków',
        content: `W takiej sytuacji nasza metoda do odgrywania dźwięku powinna móc przyjąć zarówno nazwę dźwięku (name), jak i indeks dźwięku w przypadku tablicy (key).`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 220,
            height: 70,
            style: {
              top: '42%',
              left: '37%',
            },
          },
        ],
        codeSnippets: code.slide93,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '94',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odgrywanie dźwięków',
        content: `Jeżeli przekażemy do funkcji zarówno nazwę, jak i indeks to obydwa zostaną wykorzystane do odnalezienia elementu w this.sounds.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 430,
            height: 70,
            style: {
              top: '47%',
              left: '37%',
            },
          },
        ],
        codeSnippets: code.slide93,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '95',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odgrywanie dźwięków',
        content: `Jeżeli przekażemy tylko nazwę dźwięku funkcja założy, że this.sounds[name] zawiera konkretny dźwięk (a nie tablicę).`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 110,
            height: 70,
            style: {
              top: '57%',
              left: '39%',
            },
          },
        ],
        codeSnippets: code.slide93,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '96',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/mdn.png',
        title: 'MDN',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement',
        width: 1300,
      },
    },
    {
      slide_id: '97',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odgrywanie dźwięków',
        content: `Metoda odgrywająca dźwięk znajdujący się w danym elemencie.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '5%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 120,
            height: 70,
            style: {
              top: '52%',
              left: '63%',
            },
          },
          {
            number: '2',
            width: 120,
            height: 70,
            style: {
              top: '62%',
              left: '58%',
            },
          },
        ],
        codeSnippets: code.slide93,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '98',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `2. Wczytanie kół ratunkowych z odegraniem dźwięku.



        a) Dodanie do AudioPlayer metody odgrywającej dźwięki.
        b) Dodanie do Lifelines medody inicjalizującej koła.
        c ) Inicjalizacja kół wewnątrz klasy Game.
        `,
        shapes: [
          {
            number: '1',
            width: 940,
            height: 1,
            style: {
              top: '67%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '99',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `Do klasy odpowiedzialnej za koła ratunkowe przypisujemy obiekt, utworzony na bazie klasy AudioPlayer.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide99,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '100',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `Tworzymy tablicę zawierającą listę kluczy z obiektu this.lifelines.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 540,
            height: 60,
            style: {
              top: '45%',
              left: '29%',
            },
          },
        ],
        codeSnippets: code.slide100,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '101',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `Tworzymy tablicę zawierającą listę kluczy z obiektu this.lifelines.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 210,
            height: 60,
            style: {
              top: '45%',
              left: '35%',
            },
          },
          {
            number: '2',
            width: 280,
            height: 60,
            style: {
              top: '50%',
              left: '35%',
            },
          },
          {
            number: '3',
            width: 240,
            height: 60,
            style: {
              top: '55%',
              left: '35%',
            },
          },
          {
            number: '4',
            src: arrow,
            width: 100,
            height: 100,
            style: {
              top: '63%',
              left: '40%',
              transform: 'rotate(90deg)',
            },
          },
        ],
        codeSnippets: code.slide101,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '102',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `Metoda, która wykona przekazaną jej funkcję dla każdego elementu w tablicy (w tym przypadku 3 razy).`,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 940,
            height: 320,
            style: {
              top: '48%',
              left: '29%',
            },
          },
        ],
        codeSnippets: code.slide102,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '103',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `Przy każdym wykonaniu funkcji wewnętrznej w key znajdzie się konkretny element z tablicy, a w i jego indeks w tej tablicy.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 940,
            height: 320,
            style: {
              top: '48%',
              left: '29%',
            },
          },
        ],
        codeSnippets: code.slide102,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '104',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `Globalna metoda, która spowoduje wywołanie przkazanej do niej funkcji po czasie określonym w drugim parametrze (i * 1000).
        `,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 940,
            height: 210,
            style: {
              top: '53%',
              left: '31%',
            },
          },
        ],
        codeSnippets: code.slide102,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '105',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `W obiekcie this.lifelines wyszukujemy właściwość o określonymkluczu. Przy pierwszym wykonaniu będzie to 'fiftyFifty'.
        `,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 390,
            height: 50,
            style: {
              top: '58%',
              left: '33%',
            },
          },
        ],
        codeSnippets: code.slide102,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '106',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `Do listy klas danego elementu dodajemy klasę 'showed'.
        `,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 450,
            height: 50,
            style: {
              top: '58%',
              left: '54%',
            },
          },
        ],
        codeSnippets: code.slide102,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '107',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `Korzystamy z metody odgrywającej dźwięk z poziomu obiektu audio.
        `,
        additionalInfo: [
          {
            id: '1',
            text: 'Lifelines.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 750,
            height: 50,
            style: {
              top: '63%',
              left: '33%',
            },
          },
        ],
        codeSnippets: code.slide102,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '108',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `2. Wczytanie kół ratunkowych z odegraniem dźwięku.



        a) Dodanie do AudioPlayer metody odgrywającej dźwięki.
        b) Dodanie do Lifelines medody inicjalizującej koła.
        c ) Inicjalizacja kół wewnątrz klasy Game.
        `,
        shapes: [
          {
            number: '1',
            width: 760,
            height: 1,
            style: {
              top: '74%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '109',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Inicjalizacja kół',
        content: `Wykorzystujemy nową metodę obiektu stworzonego na bazie klasy Lifelines.
        `,
        additionalInfo: [
          {
            id: '1',
            text: 'Game.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide109,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '110',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.
        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. Wybór odpowiedzi oraz jej potwierdzenie.
        6. Walidacja odpowiedzi i przejście do kolejnego pytania.
        ...
        `,
        shapes: [
          {
            number: '1',
            width: 640,
            height: 1,
            style: {
              top: '53%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '111',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodajemy zmienne',
        content: `Tworzymy zmienną przechowującą listę pytań przekazanych doklasy, przy tworzeniu na jej podstawie obiektu.
        `,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 650,
            height: 50,
            style: {
              top: '58%',
              left: '37%',
            },
          },
        ],
        codeSnippets: code.slide111,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '112',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodajemy zmienne',
        content: `Tworzymy zmienną przechowującą indeks aktualnie zadanego pytania.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 620,
            height: 50,
            style: {
              top: '63%',
              left: '37%',
            },
          },
        ],
        codeSnippets: code.slide111,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '113',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Tworzymy zmienną przechowującą obiekt, który będzie odpowiedzialny za odgrywanie dźwięków.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 620,
            height: 50,
            style: {
              top: '68%',
              left: '37%',
            },
          },
        ],
        codeSnippets: code.slide111,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '114',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Tworzymy atrybut przechowujący aktualnie zadawane pytanie. Do pytania uzyskujemy dostęp wyciągając element z tablicy this.questionList.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide114,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '115',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Do elementu o id 'question' (uchwyt stworzyliśmy w konstruktorze) wkładamy tekst aktualnego pytania.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide115,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '116',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Tworzymy mapę wkładającą treść każdego pytania do odpowiedniego elementu w HTML.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide116,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '117',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Najpierw wyjmujemy wszystkie klucze z obiektu this.answers i tworzymy z nich tablicę.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 500,
            height: 50,
            style: {
              top: '53%',
              left: '13%',
            },
          },
        ],
        codeSnippets: code.slide117,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '118',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `W rezultacie w zaznaczonym miejscu znajdzie się tablica zaprezentowana poniżej.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide118,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '119',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Metoda map wykona się 4 razy, ponieważ w tablicy znajdują się 4 elementy. Za każdym razem do funkcji wewnątrz map zostanie przekazany jeden element z tablicy.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide118,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '120',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Przy pierwszym wykonaniu do funkcji zostanie przekazane 'a'(pierwszy element z tablicy).`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide120,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '121',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Następnie funkcja odnajdzie uchwyt, który zapisaliśmy w konstruktorze.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 800,
            height: 50,
            style: {
              top: '52%',
              left: '35%',
            },
          },
          {
            number: '2',
            width: 440,
            height: 50,
            style: {
              top: '72%',
              left: '23%',
            },
          },
        ],
        codeSnippets: code.slide121,
        language: 'javascript',
        stylesObj: {
          fontSize: 30,
        },
      },
    },
    {
      slide_id: '122',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Następnie do złapanego elementu HTML zostanie wstawiony tekst odpowiedzi 'a' z obiektu zawierającego aktualne pytanie.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 200,
            height: 50,
            style: {
              top: '44%',
              left: '35%',
            },
          },
          {
            number: '2',
            width: 400,
            height: 50,
            style: {
              top: '75%',
              left: '55%',
            },
          },
        ],
        codeSnippets: code.slide122,
        language: 'javascript',
        stylesObj: {
          fontSize: 25,
        },
      },
    },
    {
      slide_id: '123',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Po wykonaniu mapy 4 razy wszystkie pola z odpowiedziami będą już uzupełnione.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide123,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '124',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Skoro pytanie zostało już zadane możemy bez problemu zwiększyć indeks obecnego pytania o 1.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide124,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '125',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zadawanie pytania',
        content: `Po zadaniu pytania wywołujemy metodę obiektu this.audio odpowiedzialną za odegranie dźwięku w tle. Metodę tę utworzymyw kolejnym kroku.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide125,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '126',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.
        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. Wybór odpowiedzi oraz jej potwierdzenie.
        6. Walidacja odpowiedzi i przejście do kolejnego pytania.
        ...
        `,
        shapes: [
          {
            number: '1',
            width: 680,
            height: 1,
            style: {
              top: '60%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '127',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `4. Muzyka w tle po wczytaniu pytań.



        a) Zatrzymanie muzyki w tle, jeśli była odgrywana.
        b) Losowy wybór jednego z 3 podkładów.
        c) Rozpoczęcie odgrywania wybranego podkładu.
        `,
        shapes: [
          {
            number: '1',
            width: 680,
            height: 1,
            style: {
              top: '50%',
              left: '25%',
            },
          },
        ],
        stylesObj: {
          marginTop: '100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '128',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/mdn.png',
        title: 'MDN',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement',
        width: 1300,
      },
    },
    {
      slide_id: '129',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Muzyka w tle',
        content: `Tworzymy atrybut, który będzie przechowywał aktualnie wybrany element z muzyką w tle, a następnie przypisujemy do niego pierwszy element z tablicy z podkładami.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide129,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '130',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Muzyka w tle',
        content: `Na wypadek, jakby muzyka w tle była już odgrywana wyłączamy jej zapętlenie a następnie zatrzymujemy jej odgrywanie.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide130,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '131',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak wylosować cyfrę?',
      },
    },
    {
      slide_id: '132',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/stack-overflow.png',
        title: 'Stack Overflow',
        link: 'https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range#',
        width: 1300,
      },
    },
    {
      slide_id: '133',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/lodash.png',
        title: 'Lodash',
        content: `Biblioteka zawierająca zbiór ponad 100 funkcji przydatnych przytworzeniu stron i aplikacji JSowych.`,
        width: 600,
        shapes: [],
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '134',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/lodash-website.png',
        title: 'Lodash',
        link: 'https://lodash.com/docs/4.17.15#random',
        width: 1300,
      },
    },
    {
      slide_id: '135',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Muzyka w tle',
        content: `Importujemy bibliotekę Lodash do projektu. Wśród programistów przyjęło się importowanie jej pod nazwą '_'.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide135,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '136',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Muzyka w tle',
        content: `Tworzymy zmienną, do której przypiszemy losową cyfrę z zakresu od 0 do 2.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 800,
            height: 50,
            style: {
              top: '55%',
              left: '18%',
            },
          },
        ],
        codeSnippets: code.slide136,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '137',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Muzyka w tle',
        content: `Z tablicy dźwięków w tle wybieramy element o wylosowanym indeksie a następnie przypisujemy go do atrybutu this.currentBackground.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1400,
            height: 50,
            style: {
              top: '60%',
              left: '18%',
            },
          },
        ],
        codeSnippets: code.slide136,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '138',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Muzyka w tle',
        content: `Włączamy zapętlenie obecnego tła i rozpoczynamy jego odgrywanie.`,
        additionalInfo: [
          {
            id: '1',
            text: 'AudioPlayer.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide138,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '139',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.
        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. Wybór odpowiedzi oraz jej potwierdzenie.
        6. Walidacja odpowiedzi i przejście do kolejnego pytania.
        ...
        `,
        shapes: [
          {
            number: '1',
            width: 840,
            height: 1,
            style: {
              top: '67%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '140',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `5. Wybór odpowiedzi oraz jej potwierdzenie.


        a) Sprawienie, że odpowiedzi będą reagować na kliknięcia.
        b) Obsłużenie pierwszego kliknięcia na odpowiedź.
        c) Obsłużenie drugiego kliknięcia na odpowiedź.
        `,
        shapes: [
          {
            number: '1',
            width: 840,
            height: 1,
            style: {
              top: '51%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '141',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zdarzenia',
      },
    },
    {
      slide_id: '142',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/gifs/click.gif',
        title: 'Zdarzenia',
        content: 'Mechanizm zaimplementowany w JSie, dzięki któremu możemy wywoływać funkcje w momencie, gdy na stronie "coś się stanie" (np. użytkownik kliknie element).',
        width: 800,
      },
    },
    {
      slide_id: '143',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodawanie zdarzenia',
        content: `Element, do którego podepniemy tzw. obserwator zdarzeń.
        Może to być element HTML, złapany za pomocą uchwytu lub obiekt globalny, jak document, czy window.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 220,
            height: 70,
            style: {
              top: '57%',
              left: '22%',
            },
          },
        ],
        codeSnippets: code.slide143,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '144',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodawanie zdarzenia',
        content: `Słowo kluczowe powodujące dodanie obserwatora do elementu.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 440,
            height: 70,
            style: {
              top: '57%',
              left: '34%',
            },
          },
        ],
        codeSnippets: code.slide143,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '145',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodawanie zdarzenia',
        content: `Typ zdarzenia, na które będziemy czekać (nasłuchiwać).
        W tym przypadku będzie to kliknięcie.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 190,
            height: 70,
            style: {
              top: '57%',
              left: '59%',
            },
          },
        ],
        codeSnippets: code.slide143,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '146',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodawanie zdarzenia',
        content: `Nazwa funkcji, która ma wykonać się za każdym razem, gdy zajdzie określone przez nas zdarzenie.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 70,
            height: 70,
            style: {
              top: '57%',
              left: '71%',
            },
          },
        ],
        codeSnippets: code.slide143,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '147',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodawanie zdarzenia',
        content: `Zamiast podawania nazwy funkcji możemy także skorzystać z funkcji strzałkowej.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 330,
            height: 70,
            style: {
              top: '57%',
              left: '64%',
            },
          },
        ],
        codeSnippets: code.slide147,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '148',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodawanie zdarzenia',
        content: `Za każdym razem, gdy użytkownik kliknie na element wywołaj funkcję o nazwie fn.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide143,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '149',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obiekt zdarzenia',
        content: `Każda funkcja wywoływana podczas zajścia zdarzenia otrzyma jako pierwszy parametr obiekt zawierający szczegóły tego zdarzenia (z reguły nazywany e lub event).`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide149,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '150',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obiekt zdarzenia',
        content: `Najczęściej będziemy chcieli wykorzystać ten obiekt, aby dowiedzieć się, na którym elemencie zaszło zdarzenie.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide149,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '151',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/gifs/question.gif',
        title: 'Obiekt zdarzenia',
        content: 'No właśnie... na którym?',
        width: 800,
      },
    },
    {
      slide_id: '152',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/game-structure2.png',
        title: 'Struktura HTML w grze',
        width: 1400,
      },
    },
    {
      slide_id: '153',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/game-structure3.png',
        title: 'Struktura HTML w grze',
        width: 1400,
      },
    },
    {
      slide_id: '154',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/game-structure4.png',
        title: 'Struktura HTML w grze',
        width: 1400,
      },
    },
    {
      slide_id: '155',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/game-structure5.png',
        title: 'Struktura HTML w grze',
        width: 1400,
      },
    },
    {
      slide_id: '156',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/gifs/woah.gif',
        title: 'Obiekt zdarzenia',
        content: 'Klikamy na wszystkie na raz.',
        width: 600,
      },
    },
    {
      slide_id: '157',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/gifs/bubbles.gif',
        title: 'Bąbelkowanie zdarzeń',
        content: 'Sytuacja, w której zdarzenia wykonują się kolejno na elementach od tych, położonych najniżej w DOM do tych położonych najwyżej.',
        width: 900,
      },
    },
    {
      slide_id: '158',
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obiekt zdarzenia',
        content: '',
        items: [
          {
            service_id: '1',
            title: 'e.target',
            content: `Kliknięty element położony najniżej w hierarchii DOM.`,
          },
          {
            service_id: '2',
            title: 'e.currentTarget',
            content: `Kliknięty element, do którego był przypisany eventListener.`,
          },
          {
            service_id: '3',
            title: 'e.stopPropagation()',
            content: 'Zatrzymuje dalsze bąbelkowanie.',
          },
        ],
      },
    },
    {
      slide_id: '159',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `5. Wybór odpowiedzi oraz jej potwierdzenie.


        a) Sprawienie, że odpowiedzi będą reagować na kliknięcia.
        b) Obsłużenie pierwszego kliknięcia na odpowiedź.
        c) Obsłużenie drugiego kliknięcia na odpowiedź.
        `,
        shapes: [
          {
            number: '1',
            width: 1080,
            height: 1,
            style: {
              top: '62%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '160',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodajemy klikalność',
        content: `Po dodaniu tekstu do przycisku z odpowiedzią dodajemy do niego także eventListener, który wywoła metodę this.selectAnswer przykażdym kliknięciu na przycisk.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1390,
            height: 50,
            style: {
              top: '68%',
              left: '18%',
            },
          },
        ],
        codeSnippets: code.slide160,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginTop: '10%',
        },
      },
    },
    {
      slide_id: '161',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `5. Wybór odpowiedzi oraz jej potwierdzenie.


        a) Sprawienie, że odpowiedzi będą reagować na kliknięcia.
        b) Obsłużenie pierwszego kliknięcia na odpowiedź.
        c) Obsłużenie drugiego kliknięcia na odpowiedź.
        `,
        shapes: [
          {
            number: '1',
            width: 950,
            height: 1,
            style: {
              top: '69%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '162',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obsługa kliknięć - pierwsze',
        content: `Każdemu z elementów HTML zawierającemu odpowiedź ustawiamy klasę na 'answer'. Sprawi to, że wszystkie elementy wrócą do pierwotnego stanu.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1300,
            height: 170,
            style: {
              top: '58%',
              left: '22%',
            },
          },
        ],
        codeSnippets: code.slide162,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginTop: '10%',
        },
      },
    },
    {
      slide_id: '163',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obsługa kliknięć - pierwsze',
        content: `Elementowi, który został kliknięty dodajemy klasę
        'answerChecked'.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1300,
            height: 60,
            style: {
              top: '73%',
              left: '22%',
            },
          },
        ],
        codeSnippets: code.slide162,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginTop: '10%',
        },
      },
    },
    {
      slide_id: '164',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `5. Wybór odpowiedzi oraz jej potwierdzenie.


        a) Sprawienie, że odpowiedzi będą reagować na kliknięcia.
        b) Obsłużenie pierwszego kliknięcia na odpowiedź.
        c) Obsłużenie drugiego kliknięcia na odpowiedź.
        `,
        shapes: [
          {
            number: '1',
            width: 900,
            height: 1,
            style: {
              top: '76%',
              left: '22%',
            },
          },
        ],
        stylesObj: {
          marginTop: '100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '165',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obsługa kliknięć - drugie',
        content: `Usuwamy obserwatory ze wszystkich odpowiedzi, aby były nieklikalne. Robimy to podobnie jak, przy ich dodawaniu. Tym razem korzystamy jednak z metody removeEventListener.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1100,
            height: 160,
            style: {
              top: '56%',
              left: '27%',
            },
          },
        ],
        codeSnippets: code.slide165,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginTop: '10%',
        },
      },
    },
    {
      slide_id: '166',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obsługa kliknięć - drugie',
        content: `Wywołujemy metodę sprawdzającą odpowiedź (stworzymy ją zachwilę) i przekazujemy jej id klikniętego elementu.
        Będzie to 'a', 'b', 'c', lub 'd'.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1100,
            height: 60,
            style: {
              top: '75%',
              left: '27%',
            },
          },
        ],
        codeSnippets: code.slide165,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginTop: '10%',
        },
      },
    },
    {
      slide_id: '167',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Obsługa kliknięć - drugie',
        content: `Tworzymy metodę odpowiedzialną za sprawdzenie odpowiedzi. Metoda otrzymuje id udzielonej odpowiedzi i na chwilę obecną jedynie loguje je w konsoli.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide167,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '168',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skracamy powtarzalny kod',
        content: `Ta mapa powtarza się w kodzie 2 razy.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1200,
            height: 160,
            style: {
              top: '70%',
              left: '15%',
            },
          },
          {
            number: '2',
            width: 1500,
            height: 160,
            style: {
              top: '46%',
              left: '15%',
            },
          },
        ],
        codeSnippets: code.slide168,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginTop: '10%',
        },
      },
    },
    {
      slide_id: '169',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/lodash-website.png',
        title: 'Lodash',
        link: 'https://lodash.com/docs/4.17.15#random',
        width: 1300,
      },
    },
    {
      slide_id: '170',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skracamy powtarzalny kod',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
          {
            id: '2',
            text: 'zamieniamy na',
            top: '61%',
            left: '40%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide170,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginTop: '5%',
        },
      },
    },
    {
      slide_id: '171',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skracamy powtarzalny kod',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
          {
            id: '2',
            text: 'zamieniamy na',
            top: '61%',
            left: '40%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide171,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginTop: '5%',
        },
      },
    },
    {
      slide_id: '172',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `1. Pobranie wszystkich elementów interfejsu.
        2. Wczytanie kół ratunkowych z odegraniem dźwięku.
        3. Wczytanie pierwszego pytania.
        4. Muzyka w tle po wczytaniu pytań.
        5. Wybór odpowiedzi oraz jej potwierdzenie.
        6. Walidacja odpowiedzi i przejście do kolejnego pytania.
        ...
        `,
        shapes: [
          {
            number: '1',
            width: 1050,
            height: 1,
            style: {
              top: '75%',
              left: '23%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '173',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Walidacja odpowiedzi',
        content: `Z obiektu z uchwytami do wszystkich odpowiedzi wybieramy obiekt trzymający uchwyty do elementów poprawnej odpowiedzi i przypisujemy go do zmiennej.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1350,
            height: 60,
            style: {
              top: '50%',
              left: '20%',
            },
          },
        ],
        codeSnippets: code.slide173,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '174',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Walidacja odpowiedzi',
        content: `W pierwszym pytaniu poprawna jest odpowiedź d, więc w correctAnster znajdzie się obiekt zaprezentowany poniżej.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide174,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '175',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Walidacja odpowiedzi',
        content: `Jeśli element z poprawną odpowiedzią jest obecnie podświetlony na żółto to usuwamy klasą odpowiedzialną za to podświetlenie.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1300,
            height: 60,
            style: {
              top: '55%',
              left: '18%',
            },
          },
        ],
        codeSnippets: code.slide175,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '176',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Walidacja odpowiedzi',
        content: `Dodajemy do elementu z poprawną odpowiedzią klasę, która podświetli go na zielono.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1300,
            height: 60,
            style: {
              top: '60%',
              left: '18%',
            },
          },
        ],
        codeSnippets: code.slide175,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '177',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Walidacja odpowiedzi',
        content: `Jeśli przekazane do metody id jest takie samo, jak poprawna odpowiedź to wykonamy kod adekwatny dla prawidłowej odpowiedzi. Jeśli nie, wykonamy kod dla błędnej odpowiedzi.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide177,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '178',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Walidacja odpowiedzi',
        content: `Jeśli index obecnego pytania to 12, to znaczy, że odpowiedzieliśmy na wszystkie pytania. Jeśli nie, to gramy dalej.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide178,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '179',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Walidacja odpowiedzi',
        content: `Przez 3 sekundy zostawiamy podświetloną poprawną odpowiedź. Następnie wywołujemy funkcję odpowiedzialna za przejście do kolejnego pytania (zaraz ją napiszemy).`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide179,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '180',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Przejście do kolejnego pytania',
        content: `Każdemu z elementów HTML zawierającemu odpowiedź ustawiamy klasę na 'answer'. Sprawi to, że wszystkie elementy wrócą do pierwotnego stanu.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1600,
            height: 60,
            style: {
              top: '55%',
              left: '13%',
            },
          },
        ],
        codeSnippets: code.slide180,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '181',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Przejście do kolejnego pytania',
        content: `Wywołujemy metodę odpowiedzialną za zadanie pytania. Indeks obecnego pytania (this.currentQuestionIndex) zwiększyliśmy już wcześniej, więc metoda zada nowe pytanie.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 400,
            height: 60,
            style: {
              top: '60%',
              left: '13%',
            },
          },
        ],
        codeSnippets: code.slide180,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '182',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `
        ...
        7. Dodanie muzyki do wyboru odpowiedzi.
        8. Podświetlenie aktualnej nagrody.
        9. Koło pół na pół.
        10. Koło pytanie do publiczności.
        11. Koło telefon do przyjaciela.
        12. Zakończenie gry lub wycofanie się.
        `,
        shapes: [
          {
            number: '1',
            width: 800,
            height: 1,
            style: {
              top: '46%',
              left: '29%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '183',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/gifs/pomin.gif',
        title: 'Co jest do zrobienia?',
        content: `Tę sekcję sobie pominiemy. Nic nowego `,
        width: 1000,
      },
    },
    {
      slide_id: '184',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `
        ...
        7. Dodanie muzyki do wyboru odpowiedzi.
        8. Podświetlenie aktualnej nagrody.
        9. Koło pół na pół.
        10. Koło pytanie do publiczności.
        11. Koło telefon do przyjaciela.
        12. Zakończenie gry lub wycofanie się.
        `,
        shapes: [
          {
            number: '1',
            width: 700,
            height: 1,
            style: {
              top: '53%',
              left: '29%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '185',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `8. Podświetlenie aktualnej nagrody.



        a) Dodanie do klasy Rewards metody,
        która podświetla aktualną nagrodę.
        b) Wykorzystanie tej metody wewnętrz metody
        zadającej pytanie (askQuestion) w klasie Questions.
        `,
        shapes: [
          {
            number: '1',
            width: 700,
            height: 1,
            style: {
              top: '56%',
              left: '25%',
            },
          },
          {
            number: '2',
            width: 700,
            height: 1,
            style: {
              top: '63%',
              left: '25%',
            },
          },
        ],
        stylesObj: {
          marginTop: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '186',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Podświetlanie nagrody',
        content: `Każde z pytań ma własną wysokość nagrody. Oznacza to, że nabazie numeru pytania (indeks + 1) jesteśmy w staniewywnioskować, którą wysokość nagrody podświetlić.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 240,
            height: 60,
            style: {
              top: '43%',
              left: '22%',
            },
          },
        ],
        codeSnippets: code.slide186,
        language: 'javascript',
        stylesObj: {
          fontSize: 30,
        },
      },
    },
    {
      slide_id: '187',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Podświetlanie nagrody',
        content: `Warto przypomnieć sobie, że w this.rewardLines siedzą wszystkie rzędy z nagrodami ułożone od najwyższej nagrody do najniższej.
        Rzędów jest 12.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide187,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '188',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Podświetlanie nagrody',
        content: `Jeżeli numer pytania jest większy od 1 to znaczy, że w chwili obecnej jakaś nagroda jest już podświetlona i należy usunąć z niej klasę powodującą podświetlenie.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1440,
            height: 160,
            style: {
              top: '47%',
              left: '17%',
            },
          },
        ],
        codeSnippets: code.slide188,
        language: 'javascript',
        stylesObj: {
          fontSize: 30,
        },
      },
    },
    {
      slide_id: '189',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Podświetlanie nagrody',
        content: `Aby podświetlić element z wysokością nagrody musimy dodać doniego klasę 'rewardActualLine' oraz zwiększyć widoczność jego kropki do 100%.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Rewards.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1440,
            height: 100,
            style: {
              top: '64%',
              left: '17%',
            },
          },
        ],
        codeSnippets: code.slide188,
        language: 'javascript',
        stylesObj: {
          fontSize: 30,
        },
      },
    },
    {
      slide_id: '190',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '',
        title: 'Co jest do zrobienia?',
        content: `
        8. Podświetlenie aktualnej nagrody.


        a) Dodanie do klasy Rewards metody, która
        podświetla aktualną nagrodę.
        b) Wykorzystaanie tej metody wewnętrz metody
        zadającej pytanie (aksQuestion) w klasie Questions.
        `,
        shapes: [
          {
            number: '1',
            width: 900,
            height: 1,
            style: {
              top: '72%',
              left: '25%',
            },
          },
          {
            number: '2',
            width: 950,
            height: 1,
            style: {
              top: '79%',
              left: '25%',
            },
          },
        ],
        stylesObj: {
          marginTop: '100px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
    {
      slide_id: '191',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Podświetlanie nagrody',
        content: `Importujemy klasę Rewards do pliku z klasą Questions.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide191,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '192',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Podświetlanie nagrody',
        content: `Tworzymy obiekt na bazie tej klasy i przypisujemy go do atrybutu rewards.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide191,
        language: 'javascript',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '193',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Podświetlanie nagrody',
        content: `W ramach metody askQuestion po zwiększeniu indeksu aktualnego pytania, odpalamy metodę this.rewards.highlight i przekazujemy jej ten indeks.`,
        additionalInfo: [
          {
            id: '1',
            text: 'Questions.js',
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 1200,
            height: 60,
            style: {
              top: '63%',
              left: '24%',
            },
          },
        ],
        codeSnippets: code.slide193,
        language: 'javascript',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '194',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Asynchroniczność',
      },
    },
    {
      slide_id: '195',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod synchroniczny',
        content: `Wszystkie operacje w kodzie wykonują się po kolei. Jedna operacja musi się zakończyć, aby mogła się rozpocząć kolejna.`,
        shapes: [],
        image: {
          src: `static/images/asynchronicznosc.png`,
          width: '2200px',
          top: '60%',
          left: '45%',
        },
        codeSnippets: code.slide195,
        language: 'css',
        stylesObj: {
          fontSize: 35,
          position: 'absolute',
          top: '30%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '196',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kod asynchroniczny',
        content: `Kilka operacji może wykonywać się jednocześnie.`,
        shapes: [],
        image: {
          src: `static/images/asynchronicznosc1.png`,
          width: '800px',
          top: '60%',
          left: '45%',
        },
        codeSnippets: code.slide196,
        language: 'css',
        stylesObj: {
          fontSize: 35,
          position: 'absolute',
          top: '30%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '197',
      template: 'NumberItems',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Techniki asynchroniczne',
        content: '',
        items: [
          {
            number: '01',
            title: 'callback',
          },
          {
            number: '02',
            title: 'Promise',
          },
          {
            number: '03',
            title: 'async/await',
          },
        ],
      },
    },
    {
      slide_id: '198',
      template: 'NumberItems',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Techniki asynchroniczne',
        content: '',
        items: [
          {
            number: '01',
            title: 'callback',
          },
          {
            number: '02',
            title: `Promise
            async/await`,
          },
        ],
      },
    },
    {
      slide_id: '199',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/callback.png',
        title: 'callback',
        content: `Funkcja przekazywana jako argument do innej funkcji.
        Callback zostanie wykonany, gdy funkcja, do której został przekazany zakończy swoje działanie.`,
        width: 1000,
        shapes: [],
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '200',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide200,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '201',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: '1. Wykonujemy funkcję f2 i przekazujemy jej f1 jako argument (callback).',
            top: '50%',
            left: '3%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 115,
            height: 60,
            style: {
              top: '77%',
              left: '54%',
            },
          },
        ],
        codeSnippets: code.slide201,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '202',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: '2. Funkcja f2 rozpoczyna wykonywanie się. W zmiennejo nazwie callback siedzi funkcja f1.',
            top: '50%',
            left: '3%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 415,
            height: 60,
            style: {
              top: '33%',
              left: '54%',
            },
          },
        ],
        codeSnippets: code.slide201,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '203',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `3. Wywołuje się pierwszy console.log. W konsoli pojawia się 'b'.`,
            top: '50%',
            left: '3%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 415,
            height: 60,
            style: {
              top: '38%',
              left: '51%',
            },
          },
        ],
        codeSnippets: code.slide203,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '204',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `4. setTimeout rozpoczyna odliczanie czasu 300 ms, po którym zostanie wykonana zapisana w nim funkcja.`,
            top: '50%',
            left: '3%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 615,
            height: 210,
            style: {
              top: '43%',
              left: '51%',
            },
          },
        ],
        codeSnippets: code.slide203,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '205',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `5. Jako że setTimeout jest asynchroniczny, wykonywanie kodu idzie dalej. W konsoli pojawia się 'd'.`,
            top: '50%',
            left: '3%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 355,
            height: 60,
            style: {
              top: '63%',
              left: '58%',
            },
          },
        ],
        codeSnippets: code.slide205,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '206',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `6. Po 300 ms rozpoczyna się wykonywanie funkcji wewnątrz setTimeout.`,
            top: '50%',
            left: '3%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 615,
            height: 210,
            style: {
              top: '43%',
              left: '51%',
            },
          },
        ],
        codeSnippets: code.slide205,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '207',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `7. Wykonuje się kolejny console.log. W konsoli pojawia się 'c'.`,
            top: '50%',
            left: '3%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 355,
            height: 60,
            style: {
              top: '48%',
              left: '62%',
            },
          },
        ],
        codeSnippets: code.slide207,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '208',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `8.  Wykonuje się callback. Jak pamiętamy w callbacku siedzi funkcja f1.`,
            top: '50%',
            left: '3%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 255,
            height: 60,
            style: {
              top: '53%',
              left: '62%',
            },
          },
        ],
        codeSnippets: code.slide207,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '208',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'callback-przykład',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `9. W ramach f1 zwracany jest console.log. W związku z tym w konsoli pojawia się 'a'.`,
            top: '50%',
            left: '3%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 460,
            height: 60,
            style: {
              top: '28%',
              left: '57%',
            },
          },
        ],
        codeSnippets: code.slide200,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '210',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'API',
      },
    },
    {
      slide_id: '211',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/api.png',
        title: 'API',
        content: `Interfejs Programowania Aplikacji

        Pozwala na korzystanie wewnątrz naszego projektu z funkcjonalności udostępnianych przez inne aplikacje lub portale.`,
        width: 900,
        shapes: [],
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '212',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/rest-api.png',
        title: 'REST API',
        content: `Struktura zapytań pozwalająca na komunikację z serwerami stron i aplikacji.
        W ramach takiej komunikacji możemy odczytywać dane z serwerów, a czasem także wprowdzać w nich zmiany.`,
        width: 1000,
        shapes: [],
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '213',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Co musimy doinstalować?',
      },
    },
    {
      slide_id: '214',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmiany w projekcie',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `Sprawi, że nasza gra będzie działać na własnym serwerze (dostępnym lokalnie).
            Dzięki temu będziemy mogli komunikować się z innymi serwerami.`,
            top: '50%',
            left: '3%',
          },
          {
            id: '2',
            text: `package.json`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 600,
            height: 60,
            style: {
              top: '55%',
              left: '52%',
            },
          },
        ],
        codeSnippets: code.slide214,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '215',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmiany w projekcie',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `Po wpisaniu 'npm start' od teraz będziemy uruchamiać własny serwer i automatycznie otwierać grę w nowej karcie przeglądarki`,
            top: '50%',
            left: '3%',
          },
          {
            id: '2',
            text: `package.json`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 700,
            height: 60,
            style: {
              top: '40%',
              left: '52%',
            },
          },
        ],
        codeSnippets: code.slide214,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '216',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmiany w projekcie',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `Umożliwi nam korzystanie z nowości zaimplementowanych w ES7, takich jak async/await.`,
            top: '50%',
            left: '3%',
          },
          {
            id: '2',
            text: `package.json`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 600,
            height: 60,
            style: {
              top: '74%',
              left: '52%',
            },
          },
        ],
        codeSnippets: code.slide214,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '217',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmiany w projekcie',
        content: ``,
        additionalInfo: [
          {
            id: '1',
            text: `Biblioteka do komunikacji z RESTowym API.`,
            top: '50%',
            left: '3%',
          },
          {
            id: '2',
            text: `package.json`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 400,
            height: 60,
            style: {
              top: '69%',
              left: '52%',
            },
          },
        ],
        codeSnippets: code.slide214,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
          marginLeft: '30%',
        },
      },
    },
    {
      slide_id: '218',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmiany w projekcie',
        content: `Importujemy bibliotekę z pollyfil'ami, aby móc w dalszej części aplikacji użyć async/await.`,
        additionalInfo: [
          {
            id: '1',
            text: `index.js`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 550,
            height: 60,
            style: {
              top: '47%',
              left: '22%',
            },
          },
        ],
        codeSnippets: code.slide218,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '219',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmiany w projekcie',
        content: `Do metody rozpoczynającej grę przekazujemy adres API, z którego zostanie pobrana lista pytań.`,
        additionalInfo: [
          {
            id: '1',
            text: `index.js`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 950,
            height: 60,
            style: {
              top: '67%',
              left: '28%',
            },
          },
        ],
        codeSnippets: code.slide218,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '220',
      template: 'NumberItems',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Techniki asynchroniczne',
        content: '',
        items: [
          {
            number: '01',
            title: 'callback',
          },
          {
            number: '02',
            title: 'Promise',
          },
          {
            number: '03',
            title: 'async/await',
          },
        ],
      },
    },
    {
      slide_id: '221',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Promise',
        content: `Korzystamy z RESTowej metody do pobierania danych o nazwie GET. Do metody przekazujemy jedynie adres, z którego chcemy pobrać dane.`,
        additionalInfo: [
          {
            id: '1',
            text: `Game.js`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 300,
            height: 60,
            style: {
              top: '52%',
              left: '35%',
            },
          },
        ],
        codeSnippets: code.slide221,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '222',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Promise',
        content: `Natychmiast po wykonaniu metody zwróci nam ona tzw. Promise. Jest to obiekt, który posiada 2 metody: then oraz catch.`,
        additionalInfo: [
          {
            id: '1',
            text: `Game.js`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 300,
            height: 60,
            style: {
              top: '52%',
              left: '35%',
            },
          },
        ],
        codeSnippets: code.slide221,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '223',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Promise',
        content: `then wykona się, jeśli serwer, do którego wysłaliśmy zapytanie zwróci nam dane. Metoda przyjmuje callback i jako pierwszy parametr przekazuje mu otrzymaną odpowiedź.`,
        additionalInfo: [
          {
            id: '1',
            text: `Game.js`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 800,
            height: 160,
            style: {
              top: '52%',
              left: '35%',
            },
          },
        ],
        codeSnippets: code.slide221,
        language: 'javascript',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '224',
      template: 'NumberItems',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Techniki asynchroniczne',
        content: '',
        items: [
          {
            number: '01',
            title: 'callback',
          },
          {
            number: '02',
            title: 'Promise',
          },
          {
            number: '03',
            title: 'async/await',
          },
        ],
      },
    },
    {
      slide_id: '225',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'async/await',
        content: `Aby poinformować, że zamierzamy w danej funkcji wykonywać operacje asynchroniczne musimy na jej początku dodać dopisek async.`,
        additionalInfo: [
          {
            id: '1',
            text: `Game.js`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 150,
            height: 60,
            style: {
              top: '48%',
              left: '35%',
            },
          },
        ],
        codeSnippets: code.slide225,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '226',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'async/await',
        content: `Przed każdą operacją asynchroniczną wewnątrz funkcji dopisujemy await. Sprawi to, że dalsza część kodu wykona się dopiero, gdy operacja asynchroniczna się zakończy.`,
        additionalInfo: [
          {
            id: '1',
            text: `Game.js`,
            top: '5%',
            left: '2%',
          },
        ],
        shapes: [
          {
            number: '1',
            width: 150,
            height: 60,
            style: {
              top: '54%',
              left: '45%',
            },
          },
        ],
        codeSnippets: code.slide225,
        language: 'javascript',
        stylesObj: {
          fontSize: 45,
        },
      },
    },
    {
      slide_id: '227',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/gifs/bored.gif',
        title: '',
        content: ``,
        width: 1000,
      },
    },
    {
      slide_id: '228',
      template: 'Finish',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/finish.png',
      },
    },
  ],
};
