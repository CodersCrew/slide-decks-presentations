import { css } from 'styled-components';
import code from './codeSnippets';

const timelineNoContent = css`
  > .content {
    color: transparent;
  }
`;

const arrow = 'static/svgs/arrow.svg';
const doubleArrow = 'static/svgs/double_arrow.svg';

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
            path: '/static/images/rwd_image.png',
          },
          {
            number: '2',
            path: '/static/images/sass.png',
          },
        ],
        title: 'WARSZTATY HTML i CSS 2',
        subtitle:
          'na których odkryjemy nowości, wprowadzone w CSS-ie wostatnich latach i dowiemy się wszystkiego, co jest nam potrzebne, by samodzielnie zakodować layout każdej strony internetowej.',
      },
    },
    {
      slide_id: '1',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Formularze',
      },
    },
    {
      slide_id: '2',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Znacznik <form>',
        content: 'Wyznacza obszar formularza. To w nim wpisujemy wszystkie tagi związane z danym formularzem.',
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide2,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '3',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Atrybuty formularza - action',
        content: 'Określa, gdzie mają zostać wysłane dane z formularza. Używane najczęściej w połączeniu z PHP.',
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide3,
        language: 'html',
        stylesObj: {
          fontSize: 60,
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
        title: 'Atrybuty formularza - method',
        content: 'Forma przesłania danych z formularza.',
        additionalInfo: [
          {
            id: '1',
            text: 'get - dane będą widoczne w pasku adresu przeglądarki.',
            top: '70%',
            left: '10%',
          },
          {
            id: '2',
            text: 'post - wysyła dane w sposób niewidoczny dla użytkownika.',
            top: '70%',
            left: '50%',
          },
        ],
        shapes: [],
        codeSnippets: code.slide4,
        language: 'html',
        stylesObj: {
          fontSize: 70,
          position: 'absolute',
          top: '25%',
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
        title: 'Zawartość formularza - label',
        content: 'Etykieta dla danego pola formularza.',
        additionalInfo: [
          {
            id: '1',
            text: 'Nazwa pola formularza, dla którego stworzyliśmy daną etykietę.',
            top: '70%',
            left: '10%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 100,
            height: 100,
            style: {
              top: '55%',
              left: '40%',
              transform: 'rotate(300deg)',
            },
          },
        ],
        codeSnippets: code.slide5,
        language: 'html',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '25%',
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
        title: 'Zawartość formularza - input',
        content: 'Pole do wpisania tekstu o wysokości jednego wiersza.',
        additionalInfo: [
          {
            id: '1',
            text: `Typ pola:\ntext - normalne (tekstowe) password - kropki zamiast znaków`,
            top: '70%',
            left: '10%',
          },
          {
            id: '2',
            text: 'Nazwa pola',
            top: '70%',
            left: '65%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 100,
            height: 100,
            style: {
              top: '55%',
              left: '40%',
              transform: 'rotate(300deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 100,
            height: 100,
            style: {
              top: '55%',
              left: '65%',
              transform: 'rotate(260deg)',
            },
          },
        ],
        codeSnippets: code.slide6,
        language: 'html',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '25%',
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
        title: 'Zawartość formularza',
        content: 'Połączenie pola formularza z jego etykietą.',
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: doubleArrow,
            width: 250,
            height: 250,
            style: {
              top: '49%',
              left: '53%',
              transform: 'rotate(150deg)',
            },
          },
        ],
        codeSnippets: code.slide7,
        language: 'html',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '8',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza - datalist',
        content: `Lista możliwych wartości inputa, dodająca do niego autosugestie..`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: doubleArrow,
            width: 150,
            height: 80,
            style: {
              top: '46%',
              left: '51%',
              transform: 'rotate(160deg)',
            },
          },
        ],
        codeSnippets: code.slide8,
        language: 'html',
        stylesObj: {
          fontSize: 40,
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
        title: 'Zawartość formularza - select',
        content: `Lista rozwijana.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide9,
        language: 'html',
        stylesObj: {
          fontSize: 50,
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
        title: 'Zawartość formularza - textarea',
        content: `Pole do wpisania dłuższego tekstu. Rozmiar pola może obejmować dowolną liczbę wierszy. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide10,
        language: 'html',
        stylesObj: {
          fontSize: 50,
        },
      },
    },
    {
      slide_id: '11',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zawartość formularza - button',
        content: `Przycisk.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide11,
        language: 'html',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      slide_id: '12',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/mockup.png',
        title: 'Co zakodujemy - mockup',
        link: 'https://www.figma.com/file/BDpg9TcboEBXlmmlevMd8h/Untitled-(Copy)?node-id=13%3A21',
        width: 1100,
      },
    },
    {
      slide_id: '13',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Co zakodujemy - kod',
        content: ``,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide13,
        language: 'html',
        stylesObj: {
          fontSize: 35,
        },
      },
    },
    {
      slide_id: '14',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Responsywność',
      },
    },
    {
      slide_id: '15',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/meme-RWD.png',
        title: 'Po co nam responsywność?',
      },
    },
    {
      slide_id: '16',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/gifs/responsive.gif',
        title: 'Responsywność',
        content: `Zdolność strony internetowej do automatycznego dopasowywaniaswojego wyglądu do wielkości ekranu, na którym jest wyświetlana.`,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
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
        title: 'Skalowanie - jak się go pozbyć?',
        content: `Ze względu na mniejszą rozdzielczość telefonów, często skalująone faktyczne rozmiary strony (np. zmniejszając je dwukrotnie).Aby tego uniknąć wystarczy jeden tag: `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide17,
        language: 'html',
        stylesObj: {
          fontSize: 40,
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
        title: 'Skalowanie - jak się go pozbyć?',
        content: `Ze względu na mniejszą rozdzielczość telefonów, często skalują one faktyczne rozmiary strony (np. zmniejszając je dwukrotnie). Aby tego uniknąć wystarczy jeden tag: `,
        additionalInfo: [
          {
            id: '1',
            text: 'Sprawia, że szerokość strony jest równa szerokości urządzenia.',
            top: '42%',
            left: '35%',
          },
          {
            id: '2',
            text: 'Sprawia, że strona domyślnie wczytywana jest w skali 1:1.',
            top: '70%',
            left: '45%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 60,
            height: 60,
            style: {
              top: '52%',
              left: '55%',
              transform: 'rotate(270deg)',
            },
          },
          {
            number: '2',
            src: arrow,
            width: 70,
            height: 70,
            style: {
              top: '63%',
              left: '80%',
              transform: 'rotate(130deg)',
            },
          },
        ],
        codeSnippets: code.slide17,
        language: 'html',
        stylesObj: {
          fontSize: 40,
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
        title: 'media queries',
        content: `Konstrukcja, dzięki której możemy zadecydować na jakich ekranach i przy jakich ich wielkościach zastosować określone style. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: '',
            style: {
              top: '0',
              left: '0',
            },
          },
        ],
        codeSnippets: code.slide19,
        language: 'css',
        stylesObj: {
          fontSize: 35,
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
        title: 'media queries',
        content: `Domyślnie wszystko w elemencie o klasie container będzie miało font o wielkości 16px. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 410,
            height: 200,
            style: {
              top: '38%',
              left: '30%',
            },
          },
        ],
        codeSnippets: code.slide19,
        language: 'css',
        stylesObj: {
          fontSize: 35,
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
        title: 'media queries',
        content: `Na ekranach o szerokości mniejszej lub równej 680px domyślne style zostaną nadpisane a font będzie miał 14 px. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 800,
            height: 300,
            style: {
              top: '55%',
              left: '30%',
            },
          },
        ],
        codeSnippets: code.slide19,
        language: 'css',
        stylesObj: {
          fontSize: 35,
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
        title: 'media queries',
        content: `Słowo kluczowe, które zawsze pojawia się na początku reguły dotyczącej styli specyficznych dla ekranów danego typu i rozmiaru. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 200,
            height: 100,
            style: {
              top: '55%',
              left: '19%',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 50,
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
        title: 'media queries',
        content: `Określa typ ekranu, na którym mają zostać zastosowane określone style. Możliwe wartości to:
        all - wszystkie typy ekranu (ustawienie domyślne).
        print - drukarki (wygląd podaczas wydruku).
        screen - ekrany komputerów, tabletów, telefonów itp.
        speech - czytniki odczytujące treść strony na głos. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 200,
            height: 100,
            style: {
              top: '68%',
              left: '26%',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '50%',
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
        title: 'media queries',
        content: `W większości przypadków ustalanie typu ekranu nie będzie Ci potrzebne i możesz je pominąć. `,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide24,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '25',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Tzw. spójnik logiczny. Pozwala na łączenie warunków.
        Zastosuj style z klamr, jeżeli użytkownik przedląda stronę na ekranie oraz szerokość strony jest nie większa niż 680px.
        Aby style zostały zastosowane muszą być spełnione oba warunki. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 120,
            height: 100,
            style: {
              top: '55%',
              left: '37.5%',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '26',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Tzw. spójnik logiczny. Pozwala na łączenie warunków.
        Zastosuj style z klamr, jeżeli użytkownik przegląda stronę na ekranie lub szerokość strony jest nie większa niż 680px.
        Aby style zostały zastosowane musi być spełniony co najmniej jeden z warunków.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 30,
            height: 100,
            style: {
              top: '55%',
              left: '39%',
            },
          },
        ],
        codeSnippets: code.slide26,
        language: 'css',
        stylesObj: {
          fontSize: 60,
        },
      },
    },
    {
      slide_id: '27',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Określa wymiary strony, przy których mają zostać zastosowane określone style. Możliwe wartości to:
        max-width - o szerokości mniejszej lub równej.
        min-width - o szerokości większej lub równej.
        max-height - o wysokości mniejszej lub równej.
        min-height - o wysokości większej lub równej. `,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 600,
            height: 100,
            style: {
              top: '68%',
              left: '45%',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '50%',
        },
      },
    },
    {
      slide_id: '28',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'media queries',
        content: `Style, które mają zostać zastosowane, jeżeli spełniony został wcześniej opisany warunek.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 200,
            height: 100,
            style: {
              top: '48%',
              left: '76.5%',
            },
          },
        ],
        codeSnippets: code.slide22,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
        },
      },
    },
    {
      slide_id: '29',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Responsywność - praktyka',
      },
    },
    {
      slide_id: '30',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/dKqqGO',
      },
    },
    {
      slide_id: '31',
      template: 'Image',
      animation: {
        type: 'horizontal',
      },
      content: {
        imageSrc: `static/gifs/relative-static-units.gif`,
      },
    },
    {
      slide_id: '32',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/ZRMMpd',
      },
    },
    {
      slide_id: '33',
      template: 'Image',
      animation: {
        type: 'horizontal',
      },
      content: {
        imageSrc: `static/gifs/breakpoints.gif`,
      },
    },
    {
      slide_id: '34',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/wXEENN',
      },
    },
    {
      slide_id: '35',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pseudoklasy i pseudoelementy',
      },
    },
    {
      slide_id: '36',
      template: 'IFrameDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/MXqPNE',
        title: 'Pseudoklasa',
        content: `Specjalny dopisek do selektora, dzięki któremu niektóre style dodają się doniego tylko w ściśle określonymprzypadku.
        Pseudoklasy zawsze zaczynamy dwukropkiem.`,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '37',
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pseudoklasy dynamiczne',
        content: 'Element nabywa/traci daną pseudoklasę w wyniku interakcji z użytkownikiem.',
        items: [
          {
            service_id: '1',
            icon: '',
            title: ':hover',
            content: 'Element, nad którym znajduje się kursor.',
          },
          {
            service_id: '2',
            icon: '',
            title: ':active',
            content: 'Element, w trakcie trwania kliknięcia.',
          },
          {
            service_id: '3',
            icon: '',
            title: ':focus',
            content: 'Zogniskowany link lub pole formularza.',
          },
          {
            service_id: '4',
            icon: '',
            title: ':link',
            content: 'Nieodwiedzony link.',
          },
          {
            service_id: '5',
            icon: '',
            title: ':visited',
            content: 'Odwiedzony link.',
          },
        ],
      },
    },
    {
      slide_id: '38',
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pseudoklasy strukturalne',
        content: 'Posiadanie tej klasy zależy od miejsca elementu w dokumencie (w relacji do innych elementów).',
        items: [
          {
            service_id: '1',
            icon: '',
            title: '::first-letter',
            content: 'Pierwsza litera w elemencie.',
          },
          {
            service_id: '2',
            icon: '',
            title: '::first-line',
            content: 'Pierwsza linia tekstu w elemencie.',
          },
          {
            service_id: '3',
            icon: '',
            title: '::selection',
            content: 'Zaznaczony fragment tekstu.',
          },
          {
            service_id: '4',
            icon: '',
            title: '::before',
            content: 'n-te dziecko danego elementu. n jest liczbą naturalną >= 1.',
          },
          {
            service_id: '5',
            icon: '',
            title: '::after',
            content: 'n-te dziecko elementu o określonym typie. n jest liczbą naturalną >= 1.',
          },
        ],
      },
    },
    {
      slide_id: '39',
      template: 'IFrameDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/ZRMqRy',
        title: 'Pseudoelement',
        content: `Pozwalają odnieść się do specjalnychelementów struktury dokumentu orazutomatycznie generować pewnązawartość w określonych miejscach.
        Pseudoelementy zawsze zaczynamy podwójnym dwukropkiem.`,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '40',
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pseudoelementy',
        content: 'Posiadanie tej klasy zależy od miejsca elementu w dokumencie (w relacji do innych elementów).',
        items: [
          {
            service_id: '1',
            icon: '',
            title: ':first-child',
            content: 'Pierwsze dziecko danego elementu',
          },
          {
            service_id: '2',
            icon: '',
            title: ':root',
            content: 'Element najwyżej w hierarchii (najczęściej <html>).',
          },
          {
            service_id: '3',
            icon: '',
            title: ':last-child',
            content: 'Ostatnie dziecko danego elementu.',
          },
          {
            service_id: '4',
            icon: '',
            title: ':nth-child(n)',
            content: 'Pojawia się przed elementem, którego dotyczy.',
          },
          {
            service_id: '5',
            icon: '',
            title: ':nth-of-type(n)',
            content: 'Pojawia się za elementem, którego dotyczy.',
          },
        ],
      },
    },
    {
      slide_id: '41',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak wstawić element z użyciem ::before?',
        content: '',
        additionalInfo: [
          {
            id: '1',
            text: 'Właściwość wymagana, aby cokolwiek pojawiło się na ekranie.',
            top: '55%',
            left: '55%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 100,
            height: 100,
            style: {
              top: '60%',
              left: '50%',
              transform: 'rotate(150deg)',
            },
          },
        ],
        codeSnippets: code.slide41,
        language: 'css',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '15%',
          left: '20%',
        },
      },
    },
    {
      slide_id: '42',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/oMpPrp',
      },
    },
    {
      slide_id: '43',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://cssicon.space/#/',
      },
    },
    {
      slide_id: '44',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Pozycjonowanie',
      },
    },
    {
      slide_id: '45',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'position',
        content: 'Określa pozycję elementu względem innych elementów.',
        additionalInfo: [
          {
            id: '1',
            text: 'Wartość domyślna',
            top: '70%',
            left: '55%',
          },
        ],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 100,
            height: 100,
            style: {
              top: '58%',
              left: '60%',
              transform: 'rotate(270deg)',
            },
          },
        ],
        codeSnippets: code.slide45,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '20%',
          left: '30%',
        },
      },
    },
    {
      slide_id: '46',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'position: relative',
        content: `Sprawia, że element może być przesuwany względem swojej pierwotnej pozycji. Przesunięcie jest jednak pozorne (tzn. inne elementy nie dostrzegają go).`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide46,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
          left: '30%',
        },
      },
    },
    {
      slide_id: '47',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'position: relative',
        content: `Po przesunięciu .box znajduje się w żółtej pozycji, jednak elementy otaczające go zachowują się tak, jakby nadal pozostawał w niebieskiej pozycji (stał w miejscu).`,
        shapes: [],
        image: {
          src: `static/images/position_relative.png`,
          width: '600px',
          top: '45%',
          left: '55%',
        },
        codeSnippets: code.slide47,
        language: 'css',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '30%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '48',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/RBjqKG',
      },
    },
    {
      slide_id: '49',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'position: absolute',
        content: `Sprawia, że element może być przesuwany względem najbliższego rodzica  o niestatycznej pozycji. Przesunięcie "wyjmuje" element ze swojego miejsca.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide49,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
          left: '30%',
        },
      },
    },
    {
      slide_id: '50',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'position: absolute',
        content: `Po przesunięciu .box-2 znajduje się w żółtej pozycji, jednak elementy otaczające go (.box-1) zachowują się tak, jakby nie istniał.`,
        shapes: [],
        image: {
          src: `static/images/position_absolute.png`,
          width: '500px',
          top: '45%',
          left: '55%',
        },
        codeSnippets: code.slide50,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '30%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '51',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/GBOwym',
      },
    },
    {
      slide_id: '52',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'position: fixed',
        content: `Sprawia, że element może być przesuwany względem okna przeglądarki i pozostawać w jednym miejscu mimo scrollowania strony. Przesunięcie "wyjmuje" element ze swojego miejsca.`,
        additionalInfo: [],
        shapes: [],
        codeSnippets: code.slide52,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
          left: '30%',
        },
      },
    },
    {
      slide_id: '53',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'position: fixed',
        content: `Po przesunięciu .box znajduje się w żółtej pozycji, jednak elementy otaczające go zachowują się tak, jakby nie istniał.`,
        shapes: [],
        image: {
          src: `static/images/position_fixed.png`,
          width: '500px',
          top: '45%',
          left: '55%',
        },
        codeSnippets: code.slide53,
        language: 'css',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '30%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '54',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'z-index',
        content: `Położenie elementu niestatycznego na osi Z. Określa "jak wysoko" znajdują się elementy.`,
        shapes: [],
        image: {
          src: `static/gifs/z-index.gif`,
          width: '500px',
          top: '40%',
          left: '55%',
        },
        codeSnippets: code.slide54,
        language: 'css',
        stylesObj: {
          fontSize: 50,
          position: 'absolute',
          top: '30%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '55',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/ajVrpY',
      },
    },
    {
      slide_id: '56',
      template: 'ImageDescription3',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/z-index.png',
        title: 'z-index',
        width: 450,
      },
    },
    {
      slide_id: '57',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmienne',
      },
    },
    {
      slide_id: '58',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/zmienne-css.png',
        title: 'Zmienne CSS',
        content: `Nazwy nadawane określonym wartościom właściwości CSS.
        Dzięki nim możemy później w kodzie odwoływać się do nazwy właściwości zamiast za każdym razem wpisywać jej wartość.`,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
        },
      },
    },
    {
      slide_id: '59',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Stworzenie zmiennej',
        content: `Zdefiniowana zmienna będzie dostępna wewnątrz danego selektora oraz we wszystkich jego dzieciach.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 180,
            height: 100,
            style: {
              top: '48%',
              left: '28%',
            },
          },
        ],
        codeSnippets: code.slide59,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
          left: '25%',
        },
      },
    },
    {
      slide_id: '60',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Stworzenie zmiennej',
        content: `Znaczniki informujące, że tworzymy zmienną.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 65,
            height: 90,
            style: {
              top: '57%',
              left: '35%',
            },
          },
        ],
        codeSnippets: code.slide59,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
          left: '25%',
        },
      },
    },
    {
      slide_id: '61',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Stworzenie zmiennej',
        content: `Ustalona przez nas nazwa danej zmiennej.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 400,
            height: 100,
            style: {
              top: '57%',
              left: '38%',
            },
          },
        ],
        codeSnippets: code.slide59,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
          left: '25%',
        },
      },
    },
    {
      slide_id: '62',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Stworzenie zmiennej',
        content: `Wartość zmiennej.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 250,
            height: 100,
            style: {
              top: '57%',
              left: '62%',
            },
          },
        ],
        codeSnippets: code.slide59,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
          left: '25%',
        },
      },
    },
    {
      slide_id: '63',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Użycie zmiennej',
        content: `Zmiennej używamy korzystając ze składni var(x), gdzie x jest nazwą zmiennej.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            src: arrow,
            width: 80,
            height: 80,
            style: {
              top: '57%',
              left: '57%',
              transform: 'rotate(90deg)',
            },
          },
          {
            number: '2',
            width: 180,
            height: 75,
            style: {
              top: '50%',
              left: '54%',
            },
          },
          {
            number: '3',
            width: 355,
            height: 75,
            style: {
              top: '68%',
              left: '48%',
            },
          },
        ],
        codeSnippets: code.slide63,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '30%',
          left: '30%',
        },
      },
    },
    {
      slide_id: '64',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'CSS grid layout',
      },
    },
    {
      slide_id: '65',
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/images/css-grid.jpg',
        title: 'CSS grid',
        content: `Zestaw właściwości umożliwiających projektowanie dwuwymiarowych interfejsów.
        W wielu przypadkach stanowi ciekawą alternatywę dla stosowanego dotychczas flexboxa.`,
        stylesObj: {
          marginTop: 'auto',
          marginBottom: 'auto',
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
        title: 'Stworzenie grida',
        content: `Dzięki zastosowaniu powyższej właściwości element stanie się tzw. container'em. Oznacza to że wszystkie bezpośrednie dzieci danego elementu zostaną dopasowne do siatki.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 455,
            height: 100,
            style: {
              top: '56%',
              left: '40%',
            },
          },
        ],
        codeSnippets: code.slide66,
        language: 'css',
        stylesObj: {
          fontSize: 60,
          position: 'absolute',
          top: '30%',
          left: '30%',
        },
      },
    },
    {
      slide_id: '67',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odstępy między komórkami',
        content: ``,
        shapes: [],
        image: {
          src: `static/images/grid.png`,
          width: '600px',
          top: '40%',
          left: '55%',
        },
        codeSnippets: code.slide67,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '25%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '68',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odstępy między komórkami',
        content: `Określa odstęp pomiędzy wierszami.`,
        shapes: [
          {
            number: '1',
            width: 435,
            height: 70,
            style: {
              top: '51%',
              left: '16%',
            },
          },
        ],
        image: {
          src: `static/images/grid-row-gap.png`,
          width: '600px',
          top: '40%',
          left: '55%',
        },
        codeSnippets: code.slide67,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '25%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '69',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odstępy między komórkami',
        content: `Określa odstęp pomiędzy kolumnami.`,
        shapes: [
          {
            number: '1',
            width: 495,
            height: 70,
            style: {
              top: '57%',
              left: '16%',
            },
          },
        ],
        image: {
          src: `static/images/grid-column-gap.png`,
          width: '600px',
          top: '40%',
          left: '55%',
        },
        codeSnippets: code.slide67,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '25%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '70',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Odstępy między komórkami',
        content: `Zapis skrócony. Pierwsza wartość definiuje odstęp międzywierszami, a druga między kolumnami. Jeżeli oba odstępy są identyczne, możemy zapisać tylko jedną wartość.`,
        shapes: [
          {
            number: '1',
            width: 470,
            height: 70,
            style: {
              top: '63%',
              left: '16%',
            },
          },
        ],
        image: {
          src: `static/images/grid-gap.png`,
          width: '600px',
          top: '40%',
          left: '55%',
        },
        codeSnippets: code.slide67,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '25%',
          left: '10%',
        },
      },
    },
    {
      slide_id: '71',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tworzenie siatki',
        content: ``,
        shapes: [],
        image: {
          src: `static/images/grid-template.png`,
          width: '600px',
          top: '40%',
          left: '10%',
        },
        codeSnippets: code.slide71,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '30%',
          left: '50%',
        },
      },
    },
    {
      slide_id: '72',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tworzenie siatki',
        content: `Wymiary każdej z kolumn.`,
        shapes: [
          {
            number: '1',
            width: 750,
            height: 70,
            style: {
              top: '62%',
              left: '56%',
            },
          },
        ],
        image: {
          src: `static/images/grid-template.png`,
          width: '600px',
          top: '40%',
          left: '10%',
        },
        codeSnippets: code.slide71,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '30%',
          left: '50%',
        },
      },
    },
    {
      slide_id: '73',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tworzenie siatki',
        content: `Jednostka oznaczająca "ilość pozostałego miejsca". W tym przypadku będzie równa wielkości elementu po odjęciu 120px.`,
        shapes: [
          {
            number: '1',
            width: 95,
            height: 70,
            style: {
              top: '62%',
              left: '89.5%',
            },
          },
        ],
        image: {
          src: `static/images/grid-template.png`,
          width: '600px',
          top: '40%',
          left: '10%',
        },
        codeSnippets: code.slide71,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '30%',
          left: '50%',
        },
      },
    },
    {
      slide_id: '74',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tworzenie siatki',
        content: `Wymiary każdego z wierszy.`,
        shapes: [
          {
            number: '1',
            width: 650,
            height: 70,
            style: {
              top: '68%',
              left: '56%',
            },
          },
        ],
        image: {
          src: `static/images/grid-template.png`,
          width: '600px',
          top: '40%',
          left: '10%',
        },
        codeSnippets: code.slide71,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '30%',
          left: '50%',
        },
      },
    },
    {
      slide_id: '75',
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tworzenie siatki',
        content: `Jeśli nie określimy liczby i wielkości wierszy, powstanie ich tyle, aby grid pomieścił wszystkie swoje dzieci. Wysokość każdego wiersza będzie równa wysokości najwyższego dziecka w tym wierszu.`,
        additionalInfo: [],
        shapes: [
          {
            number: '1',
            width: 650,
            height: 0,
            style: {
              top: '71%',
              left: '36%',
            },
          },
        ],
        codeSnippets: code.slide71,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '30%',
          left: '30%',
        },
      },
    },
    {
      slide_id: '76',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Rozłożenie elementów na siatce',
        content: ``,
        shapes: [],
        image: {
          src: `static/images/grid-template1.png`,
          width: '600px',
          top: '35%',
          left: '10%',
        },
        codeSnippets: code.slide76,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '25%',
          left: '50%',
        },
      },
    },
    {
      slide_id: '77',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Rozłożenie elementów na siatce',
        content: ``,
        shapes: [],
        image: {
          src: `static/images/grid-template1.png`,
          width: '600px',
          top: '35%',
          left: '10%',
        },
        codeSnippets: code.slide77,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '30%',
          left: '50%',
        },
      },
    },
    {
      slide_id: '78',
      template: 'Code1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Rozłożenie elementów na siatce',
        content: ``,
        shapes: [],
        image: {
          src: `static/images/grid-template1.png`,
          width: '600px',
          top: '35%',
          left: '10%',
        },
        codeSnippets: code.slide78,
        language: 'css',
        stylesObj: {
          fontSize: 40,
          position: 'absolute',
          top: '30%',
          left: '50%',
        },
      },
    },
    {
      slide_id: '79',
      template: 'SectionHeader',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Co dalej?',
      },
    },
    {
      slide_id: '80',
      template: 'ImagesDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        images: [
          {
            id: '1',
            src: 'static/images/foundation_logo.png',
            link: 'https://foundation.zurb.com/',
            width: '200px',
          },
          {
            id: '2',
            src: 'static/images/bulma_logo.png',
            link: 'https://bulma.io/',
            width: '300px',
          },
          {
            id: '3',
            src: 'static/images/bootstrap_logo.png',
            link: 'https://getbootstrap.com/',
            width: '300px',
          },
          {
            id: '4',
            src: 'static/images/semantic_logo.png',
            link: 'https://semantic-ui.com/',
            width: '300px',
          },
        ],
        // zmienić obrazy
        title: 'Frameworki CSS',
        content: `Zestaw gotowych styli CSS (czasami także skryptów JSowych), pozwalających na efektywne tworzenie stron z wykorzystaniem predefiniowanych klas.`,
        stylesObj: {},
      },
    },
    {
      slide_id: '81',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://semantic-ui.com/',
      },
    },
    {
      slide_id: '82',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/pZpQOZ',
      },
    },
    {
      slide_id: '83',
      template: 'ImagesDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        images: [
          {
            id: '1',
            src: 'static/images/less_logo.png',
            link: 'http://lesscss.org/',
            width: '450px',
          },
          {
            id: '2',
            src: 'static/images/sass_logo.png',
            link: 'https://sass-lang.com/',
            width: '350px',
          },
          {
            id: '3',
            src: 'static/images/stylus_logo.png',
            link: 'http://stylus-lang.com/',
            width: '350px',
          },
        ],
        title: 'Preprocesory',
        content: `Języki stworzone na bazie CSS, w celu ułatwienia pracy z tym językiem. Do działania wymagają transpilatora, który przetłumaczy je do zwykłego CSSa.`,
        stylesObj: {},
      },
    },
    {
      slide_id: '84',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/rrpQbg',
      },
    },
    {
      slide_id: '85',
      template: 'ImagesDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        images: [
          {
            id: '1',
            src: 'static/images/css_bez_tajemnic.jpg',
            link: `https://helion.pl/ksiazki/css-bez-tajemnic-47-sekretow-kreatywnego-projektanta-lea-verou,scss47.htm#format/d`,
            width: '350px',
          },
          {
            id: '2',
            src: 'static/images/css_tricks.png',
            link: 'https://css-tricks.com/',
            width: '400px',
          },
          {
            id: '3',
            src: 'static/images/medium_logo.png',
            link: `https://medium.com/@peedutuisk/lesser-known-css-quirks-oddities-and-advanced-tips-css-is-awesome-8ee3d16295bb`,
            width: '400px',
          },
        ],
        title: 'Wykorzystania możliwości CSSa',
        content: `W internecie i książkach odnaleźć można setki możliwości wykorzystania właściwości CSSa.`,
        stylesObj: {},
      },
    },
    {
      slide_id: '86',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/xJpmLO',
      },
    },
    {
      slide_id: '87',
      template: 'IFrame',
      animation: {
        type: 'horizontal',
      },
      content: {
        sourceUrl: 'https://codepen.io/KonradSzwarc/pen/PBEXRB',
      },
    },
    {
      slide_id: '88',
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
