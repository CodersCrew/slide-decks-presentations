import { css } from 'styled-components';

const timelineNoContent = css`
  > .content {
    color: transparent;
  }
`;

const code = `
const Code = ({ title, content, code, styles }) => (
  <Container styles={styles} className="code">
    <BoxHeading align="center" title={title} content={content}>
      <CodeHighlighter language="javascript" style={atomDark}>
        {code}
      </CodeHighlighter>
    </BoxHeading>
  </Container>
);
`;

export default {
  slides: [
    {
      template: 'Title',
      animation: {
        type: 'horizontal',
      },
      content: {
        name: 'Warsztaty',
        title: 'React',
        subtitle:
          'na których stworzymy swoje pierwsze SPA, poznając podstawy niezbędne do kodowania aplikacji internetowych o dowolnym rozmiarze.',
        image: {
          first:
            'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_905,w_1280,x_0,y_0/c_scale,h_369,w_521/fl_apng.lossy/f_auto/a_ignore/v1528764665/9fce3fe2-b0ad-4f9a-bd88-037d14a512c1.png',
          second:
            'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_760,w_760,x_0,y_0/c_scale,h_272,w_272/fl_apng.lossy/f_auto/a_ignore/v1528764689/272ae1a2-0776-4c3e-8201-93d5ea5e74eb.png',
        },
      },
    },
    {
      template: 'SPA',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: `Kilka słów o SPA`,
      },
    },
    {
      template: 'SPA_1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Czym jest SPA?',
        content: `Aplikacja, która wczytuje się w całości za jednym razem lub ładuje elementy dynamicznie w odpowiedzi na akcje użytkownika.`,
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_600,w_800,x_0,y_0/fl_lossy/f_auto/a_ignore/v1523098820/51a516a5-f4a3-417d-995a-32897ad560b8.gif',
      },
    },
    {
      template: 'Framework',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Który framework wybrać?',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_713,w_1024,x_0,y_0/c_scale,h_713,w_1024/fl_lossy/f_auto/a_ignore/v1523099028/8d1ff88f-8c25-4e88-8951-fce620a36676.jpg',
      },
    },
    {
      template: 'ReactFramework',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dlaczego akurat React?',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_340,w_680,x_0,y_0/c_scale,h_340,w_680/fl_lossy/f_auto/a_ignore/v1523099302/b0f5e3b2-ecfd-49d8-91da-aa5d0fe58739.jpg',
      },
    },
    {
      template: 'ReactFramework2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dlaczego akurat React?',
        items: [
          {
            number: '1',
            image: {
              light: '/static/icon/star.svg',
              dark: '/static/icon/star_dark.svg',
            },
            content: 'Najpopularniejszy na npm- ponad milion pobrań tygodniowo.',
          },
          {
            number: '2',
            image: {
              light: '/static/icon/github.svg',
              dark: '/static/icon/github_dark.svg',
            },
            content: 'Jeden z najlepiej rozwiniętych ekosystemów (społeczność).',
          },
          {
            number: '3',
            image: {
              light: '/static/icon/app.svg',
              dark: '/static/icon/app_dark.svg',
            },
            content: 'Możliwość szybkiego przejścia do świata aplikacji natywnych.',
          },
          {
            number: '4',
            image: {
              light: '/static/icon/facebook.svg',
              dark: '/static/icon/facebook_dark.svg',
            },
            content: 'Stworzony przez Facebooka.',
          },
          {
            number: '5',
            image: {
              light: '/static/icon/js.svg',
              dark: '/static/icon/js_dark.svg',
            },
            content: 'Ucząc się Reacta lepiej poznajesz JavaScript.',
          },
          {
            number: '6',
            image: {
              light: '/static/icon/interface.svg',
              dark: '/static/icon/interface_dark.svg',
            },
            content: 'Służy wyłącznie do generowania interfejsu.',
          },
        ],
      },
    },
    {
      template: 'Components',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Komponenty',
        description:
          'Obiekty JSowe, które odzwierciedlają węzły drzewa DOM. Pozwalają zebrać wiele linii kodu, reprezentujących pojedynczy element na stronie i stworzyć na ich podstawie własny tag.',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_811,w_1087,x_0,y_0/c_scale,h_467,w_626/fl_apng.lossy/f_auto/a_ignore/v1523101577/82cd610c-fefa-435a-947b-d3b3672c2a1d.png',
      },
    },
    {
      template: 'Components1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Przykład komponentów',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_600,w_800,x_0,y_0/c_scale,h_600,w_800/fl_apng.lossy/f_auto/a_ignore/v1523101641/d8c884f9-c1d7-4308-9f6f-4e4bdd7034c9.png',
      },
    },
    {
      template: 'CodeSandbox',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'mzq0jz1ryp',
      },
    },
    {
      template: 'Coding',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: `Co będziemy kodować?`,
      },
    },
    {
      template: 'Structure',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Struktura aplikacji',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_986,w_1647,x_0,y_0/c_scale,h_860,w_1437/fl_apng.lossy/f_auto/a_ignore/v1523106652/cf27a4b5-67d2-4725-9912-b99b8dd923a2.png',
      },
    },
    {
      template: 'Repo',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Repozytorium z projektem',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_232,w_600,x_0,y_0/c_scale,h_232,w_600/fl_lossy/f_auto/a_ignore/v1524429242/0aac041c-f470-4782-bec2-3814846f9c4e.jpg',
        content: `https://github.com/KonradSzwarc/dev-camp-react1`,
      },
    },
    {
      template: 'Webpack',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Webpack - co tam się dzieje?',
        image: {
          light: '/static/images/webpack_light.png',
          dark: '/static/images/webpack_dark.png',
        },
      },
    },
    {
      template: 'Webpack2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Webpack - co tam się dzieje?',
        image: {
          light: '/static/images/webpack2_light.png',
          dark: '/static/images/webpack2_dark.png',
        },
      },
    },
    {
      template: 'HelloWorld',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: `Reactowe Hello World!`,
      },
    },
    {
      template: 'CodeSandbox7',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId:
          'https://codesandbox.io/embed/ww0ow8or07?autoresize=1&hidenavigation=1&view=split&module=%2Fmain.css&fontsize=18',
      },
    },
    {
      template: 'AddReact',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '1. Dodaj reacta',
        image: {
          light: '/static/images/add_react_light.png',
          dark: '/static/images/add_react_dark.png',
        },
        content: `Importuje do pliku całego reacta oraz Component. React "w tle" udostępnia nam zbiór funkcji, niezbędnych do utworzenia SPA. Component jest klasą, z której będziemy dziedziczyć, aby przekształcać nasze klasy w komponenty.`,
      },
    },
    {
      template: 'AddReactDOM',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '2. Dodaj react-dom',
        image: {
          light: '/static/images/add_reactdom_light.png',
          dark: '/static/images/add_reactdom_dark.png',
        },
        content: `Importuje ReactDOM, czyli obiekt za pomocą którego będziemy wstanie wstawić (wyrenderować) aplikację reactową w przeglądarce.`,
      },
    },
    {
      template: 'CreateClass',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '3. Stwórz klasę reprezentującą komponent',
        image: {
          light: '/static/images/class_light.png',
          dark: '/static/images/class_dark.png',
        },
        content: `Tworzymy klasę, która dzięki temu, że dziedziczy po Component staje się komponentem reactowym.`,
      },
    },
    {
      template: 'ReturnHTML',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '4. Zwróć HTML',
        image: {
          light: '/static/images/return_html_light.png',
          dark: '/static/images/return_html_dark.png',
        },
        content: `Metoda, która odpowiada na pytanie: "Co ma wyświetlić dany komponent?". Treść do wyświetlenia musi zostać zrwócona z wykorzystaniem return. Wywołaniem metody zajmie się React, którego zaimportowaliśmy na początku pliku.`,
      },
    },
    {
      template: 'ReturnHTML2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zwróć HTML ?',
        image: {
          light: '/static/images/return_html2_light.png',
          dark: '/static/images/return_html2_dark.png',
        },
        gif: `https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_160,w_160,x_0,y_0/fl_lossy/f_auto/a_ignore/v1524478836/6dd1626a-41a3-4a30-b0b6-71f5561579b9.gif`,
      },
    },
    {
      template: 'JSX',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'JSX, czyli HTML w JSie',
        image: {
          light: '/static/images/jsx_light.png',
          dark: '/static/images/jsx_dark.png',
        },
        content: `JSX to tzw. "syntax extension", czyli język umożliwiający pisanie szablonów przypominających HTML, które są transpilowane do zwykłego JavaScriptu.`,
      },
    },
    {
      template: 'Rendering',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Wyrenderuj komponent w HTML-u',
        image: {
          light: '/static/images/rendering_light.png',
          dark: '/static/images/rendering_dark.png',
        },
        content: `Korzystamy z metody render obiektu ReactDOM, aby wyrenderowaćkomponent utworzony na bazie klasy App wewnątrz elementu oklasie container, który znajduje się w naszym HTML-u. Zazwyczajwykonujemy tylko 1 taką operację na całą aplikację.`,
      },
    },
    {
      template: 'State',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'state',
        content: 'Jak stworzyć wyszukiwarkę?',
      },
    },
    {
      template: 'State2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Czym jest state?',
        image: {
          light: '/static/images/state_light.png',
          dark: '/static/images/state_dark.png',
        },
        content: `Właściwości, których zmiana spowoduje ponowne wyrenderowanie komponentu.`,
      },
    },
    {
      template: 'ChangeState',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak zmienić state?',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_335,w_568,x_0,y_0/c_scale,h_335,w_568/fl_lossy/f_auto/a_ignore/v1524430006/d78761d9-2be4-4d1f-9d4f-8d108bf2f0b8.jpeg',
      },
    },
    {
      template: 'ChangeState2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak zmienić state?',
        image: {
          light: '/static/images/changeState_light.png',
          dark: '/static/images/changeState_dark.png',
        },
      },
    },
    {
      template: 'AppStructure',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Struktura aplikacji',
        sandboxId:
          'https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#R7VhLj9MwEP41leCCkjhJy5FtCxwWCalIsEc3cRNTNxMcpw9%2BPU48zqOPbYFu0aLtpZ7PM2PPfBNPnAEZr7YfJM3TTxAzMfCceDsgk4Hnub4X6r8K2RlkOPIMkEgeo1ILzPhPhqCDaMljVvQUFYBQPO%2BDEWQZi1QPo1LCpq%2B2ANFfNacJOwBmERWH6FceqxSjcJwW%2F8h4kuLKxE7MabRMJJQZLjfwiBu4Q3dkplfUukL9IqUxbDoQmQ7IWAIoM1ptx0xUqbVZM3bvT8w225YsU5cYkCHuQ%2B1s6CzWmUARpEohgYyKaYve1fGxyoOjpVSthB66esi2XH2r4DcBSg92JlNy15mqxAd08J0ptcMSoKUCDbXr3gPk6GMBmUI1N0R5DAJkvW%2ByqH8aL5SEJTs2Y2KtAjyZLoQKKGWEWgRLV1GZMEu435ClnwEGK6YD0jqSCar4uu%2BfYjEmjV7LiB4gKccJ8t2nIMjt0NNh5C8JOp34S6m7IkHBrQjynuQJ%2Bv8JIjciyC6%2BpqJk9lQOhd7G3VwPkmrwLs8tpt018AGzLW9VOjcpV2yW0zrMjW6EfS4fyTYXooNjh%2FjdE842Jq%2FZ6ZpJxbaPM3OYcTTQ3c2Y2JaN4qbtf26IWNrpfb5zBY7IeY5mjMoonVN5nCnUlvtIlcP6RcGmMfxRglEgoTcfLoIuZGx1ElVnFePi1EJlHlPFvmiTV6%2BPbeO5lFAiaFHggdK8llRCBCse4fgKdbZXZm5wYZ2NrlFnwfk6m0ieLYt7XqhLC%2B25MHwF8vw%2FZe8qp4R%2FIXsTpigXxQt%2FZw%2F52%2FL39uWy8U8uG2j6GXjdC7f2MNyrBXePY7MvtOpeIvccBX7fUXO7tY5MMAeO6npp4jlWQlps78JGvf3eQKa%2FAA%3D%3D',
      },
    },
    {
      template: 'Branch',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmień branch',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_270,w_328,x_0,y_0/fl_lossy/f_auto/a_ignore/v1524524831/7f500688-aa1f-4df5-9c60-b24218f95599.gif',
        info: '1_searchbar',
      },
    },
    {
      template: 'CodeSandbox6',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId:
          'https://codesandbox.io/embed/o7zvzyykp5?autoresize=1&hidenavigation=1&view=split&module=%2Fmain.css&fontsize=18',
      },
    },
    {
      template: 'Input',
      animation: {
        type: 'horizontal',
      },
      content: {
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_220,w_244,x_0,y_0/fl_lossy/f_auto/a_ignore/v1524526954/8ea4e233-d8d2-4ea4-8cce-1254cba88c24.gif',
        content: 'Tyle pracy, żeby otrzymać działający input ?!',
      },
    },
    {
      template: 'Controlled',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Controlled Component',
        content: 'Pole formularza, którego wartość jest kontrolowana przez reacta.',
        examples: [
          {
            number: 1,
            description: 'Możliwość walidacji przykażdej zmianie zawartości.',
          },
          {
            number: 2,
            description: 'Ułatwia tworzenie maskowanych pól.',
          },
          {
            number: 3,
            description: 'Łatwe perzesyłanie wartości do innych komponentów.',
          },
        ],
      },
    },
    {
      template: 'ChangeComponent',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Skąd React wie, jakie komponenty podmienić?',
      },
    },
    {
      template: 'VirtualDOM2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Virtual DOM',
        description:
          'Obiekt JSowy, który odzwierciedla układ elementów w HTMLu (DOM). Zadaniem reacta jest dbanie, aby szablon w postaci virtual DOM zawsze odpowiadał rzeczywistemu DOM. W przypadku niezgodności react "opracowuje" najefektywniejszy sposóbna dopasowanie obu modeli.',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_766,w_954,x_0,y_0/c_scale,h_560,w_697/fl_apng.lossy/f_auto/a_ignore/v1524531654/25d455ab-a79b-447d-89d4-0173eae6c987.png',
      },
    },
    {
      template: 'VirtualDOM2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Virtual DOM',
        info: 'Warto wiedzieć!',
        description:
          'Renderowanie elementów HTML jest z perspektywy JSa jednym z najwolniejszych procesów. Oznacza to,że wykonując wszystkie operacje zmian po stronie JSa (na virtual DOM) wykonamy je znacznie szybciej. Dzięki temu do HTMLa wstawimy dopiero efekt końcowy naszych zmian.',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_766,w_954,x_0,y_0/c_scale,h_560,w_697/fl_apng.lossy/f_auto/a_ignore/v1524531654/25d455ab-a79b-447d-89d4-0173eae6c987.png',
      },
    },
    {
      template: 'AppStructure2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Struktura aplikacji',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_986,w_1647,x_0,y_0/c_scale,h_860,w_1437/fl_apng.lossy/f_auto/a_ignore/v1523106652/cf27a4b5-67d2-4725-9912-b99b8dd923a2.png',
      },
    },
    {
      template: 'Branch2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmień branch',
        image: 'https://gifrific.com/wp-content/uploads/2013/08/Panda-Falls-Off-Tree.gif',
        info: '2_hardcoded_data',
      },
    },
    {
      template: 'CodeSandbox5',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId:
          'https://codesandbox.io/embed/ppn9r7x28j?autoresize=1&hidenavigation=1&view=split&module=%2Fmain.css&fontsize=18',
      },
    },
    {
      template: 'AboutProps',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Czym są props?',
        info: 'Obiekt, za pomocą którego możemy przekazywać informacje od rodziców do dzieci.',
        image: {
          light: '/static/images/props_light.png',
          dark: '/static/images/props_dark.png',
        },
      },
    },
    {
      template: 'Props',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak zmienić props?',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_336,w_339,x_0,y_0/fl_lossy/f_auto/a_ignore/v1524432055/1cc60529-b5f4-47ae-9352-be26d91883ba.gif',
      },
    },
    {
      template: 'AppStructure4',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Struktura aplikacji',
        sandboxId:
          'https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#R7VjJbtswEP0aA%2B2hhbXZ6TF20gVIgQIu0OZISWOJNSWqFB3b%2FfpS0lC7nE12gTS%2BmHwcDpf3OBxqYi2j%2FSdBkvAr94FNzKm%2Fn1hXE9M0bHOm%2FjLkUCDzC7MAAkF9NKqAFf0DCE4R3VIf0oah5JxJmjRBj8cxeLKBESH4rmm25qw5akIC6AArj7Au%2BoP6MsRVTKcV%2FhloEOLIlm5wibcJBN%2FGONzEtAzHmBsXRXNEtCu0T0Pi810Nsq4n1lJwLotStF8Cy7ZW71rR7%2BNAazltAbF8SAdrjvOQB7108NVOYJULGfKAx4RdV%2BgiXx9kHqaqFsqIqaKhirCn8mcGv3ewdqtbYikOtaaseosOfoGUB5QA2UquoGrcG84T9LHmsUQzY4b1JWdc5PO21vlP4akUfAN9LcVaswUObhdCKd8KD60slK4kIgBNuF2Spc4A8AjUgpSNAEYkvWv6JyjGoLSrGFEFJKWfINs4BUFGjZ4aI88kaHjjH0rdiAQ55yLIPMkJevkEWWciSA9%2BR9gWdFSeMTWNRdLgbfZ7m4XdBaMxvAsxul8qE8NRQdSpDFQpwP%2FcjauByyTRmJqV27ETbSTb5vwW0ztdDWHNTHe%2B7hnVFzTepMM%2B1ciF2wJWG36V93jz9mifpMJacq7EmmloF1IJq4Tk3O7U7d8U8BGJUcZqOF6Ljw3r%2BjY2y5negZCwPy7Hrsywg3mBFzHmKTZWd9Wlb8wQC2sXvu72LGFaZxPmCojwQpeI08tTcSEHpNgdaJv4RMJ31aVPnV4I3ubLegWx%2F%2FLEGzCSphi%2Fyywwq3g8oh6WR1B4S%2BClmu9TuGGOIXHnbBIvgtwNTeVRpZT2av98EHmvlyeuEXRjP1U4o4RGe1A3TcKvQBLK0j6C%2Bzj9j%2Fh78sG3x%2BDvw%2Buz8p88K7HrN07zm3uvw3BLC0aL42Je2Kv%2BuaDlyLGbjsz2JVEspuMo10u5noe9q4azo2NpiU1cx%2FW690VPGtzJTlqKzTOZIyEg5jG0Tj9ChNEgVlVP8Q8KX2QnmXqEXWJDRH0%2F13xfzGmeg0ZuUE8a6nnC455vz4sr06YEnG5YsXuiyhjZhD18KzxFEs2H1KsaxsgSTqcGVa0%2BixbxpPr0bF3%2FBQ%3D%3D',
      },
    },
    {
      template: 'Branch3',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmień branch',
        image: 'https://media1.tenor.com/images/9702baab6143e44bea08cf8926d51b82/tenor.gif?itemid=9423784',
        info: '3_get_drinks_from_api',
      },
    },
    {
      template: 'CodeSandbox4',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId:
          'https://codesandbox.io/embed/6llz8lwklk?autoresize=1&hidenavigation=1&view=split&module=%2Fmain.css&fontsize=18',
      },
    },
    {
      template: 'Branch4',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmień branch',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_395,w_448,x_0,y_0/fl_lossy/f_auto/a_ignore/v1524525045/114f970c-eabd-474a-a24e-503285eb0d29.gif',
        info: '4_search_by_ingredient',
      },
    },
    {
      template: 'CodeSandbox3',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId:
          'https://codesandbox.io/embed/526l9w616x?autoresize=1&hidenavigation=1&view=split&module=%2Fmain.css&fontsize=18',
      },
    },
    {
      template: 'AppStructure3',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Struktura aplikacji',
        sandboxId:
          'https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#R7Vltb9owEP41SN2HTSQOL%2F1YaNdV6qRJTNr60cQm8TBx6ji87NfPSS4vTgJLgVJtKl%2BwH5%2Ft891z5zP00HS1vZc49L8KQnnP7pNtD932bNty7KH%2BSpBdhozGdgZ4khEQKoEZ%2B00B7AMaM0IjQ1AJwRULTdAVQUBdZWBYSrExxRaCm7uG2KMNYOZi3kR%2FMKJ8OEW%2FX%2BJfKPN82NnJB%2BbYXXpSxAFs17ORNbBG1jgbXuF8KZCPfEzEpgKhux6aSiFU1lptp5Qnps2tls37vGe0UFvSQHWZgEagh9rlR6dEWwK6QipfeCLA%2FK5EJ%2Bn5aLJCX%2Fd8teK6aekm3TL1M4E%2FDaD3lI8ESu4qQ0n3CRb4RZXaAQVwrISGyn0fhQhhjYUIFIhZQ%2BhPBRcy1Rst0o%2FGIyXFkraNNK0DBotELF04PwKmKiw9CmLIybDENpWJYNN7KlZUH0gLSMqxYmuTRRjI6BVypUd0A5zS7iDHeg0HWRX3VDxyooP2G76r64530ODNHGS%2FSgT9dw5Cb%2BWgXJs15jHNs%2FKQa70mc93wksZNGOaYXq6ACzlZRwhbGz4fPsdJyp5wFtCPPtwMN1rE0t4qRuurJFZOL7Hc0KUgGtrz0aJlLpEsWEYVbbNFzIU1nGrYovTpGrixTNx%2FmyjyFz2ahjM10%2FRIl4munmMqdx%2Ba87TEtLLfFSMtQjkStuxWwWphWgZhEhsbnyk6C3FK4o2uaszAPBA6jPMKDtf9S6%2BrvMqwDwXZmkpFtwfDB0Z1qZJNgfprCN1NWcxYOeZXChkrL0xOiji0N%2BLCjlEz0GocCJwiQmcUS9efY%2Fmy8D2G9tryqjPd45BgRb%2FrKVctfHV96i4fFjMakLbhf5u9HsdRBBdTUd4mHVesmAvtM1C8xvCipL4MxQcXo3iWIB9ZpA4ypZDXJiVUZtnyvyPXGXjjHEuc8Tl441yWN7dUYcajlzDnIfAkJUwb%2BJ0%2BHW7Wy9Ln%2Bv25%2FibPdZj6TbC0cNjm%2B5hcsFDNx5miMKv6M0xtoQGqkcqpLZSdrrFQypfiPN3eq%2FuLs0NVkYPng7nbTDv7KvhGhVSjbVpNHcgDgQhoLQUAhDnzAt11NSuoxidJ7DIX8xsYWDFCUuK3JR4zGIz6pFq4VGuVk9%2FG3ZOLNUYGD8ajRm5xWlLLOSoaZ%2F%2FNdAwvzGfqke%2B5dxIdVeBcm8lkdH05Eo3PSqJOvzS8c6IDJ9B4aN5Ur5dZdLf8%2FyK7oMr%2FiNDdHw%3D%3D',
      },
    },
    {
      template: 'Branch5',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmień branch',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_480,w_270,x_0,y_0/fl_lossy/f_auto/a_ignore/v1524525082/872e7b4c-6810-445f-9883-5da1a8a96819.gif',
        info: '5_render_details_by_index',
      },
    },
    {
      template: 'CodeSandbox2',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId:
          'https://codesandbox.io/embed/2p49mxo0vr?autoresize=1&hidenavigation=1&view=split&module=%2Fmain.css&fontsize=18',
      },
    },
    {
      template: 'Lodash',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '_.times()',
        info:
          'Funkcja z biblioteki lodash, wywołująca się określoną ilość iteracji. Iteracja przyjmuje jeden argument - index.',
        image: {
          light: '/static/images/lodash_light.png',
          dark: '/static/images/lodash_dark.png',
        },
      },
    },
    {
      template: 'Branch6',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zmień branch',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_640,w_640,x_0,y_0/fl_lossy/f_auto/a_ignore/v1524525230/9947b210-eb8b-4832-9433-e23116f50768.gif',
        info: '6_render_ingredients',
      },
    },
    {
      template: 'CodeSandbox1',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId:
          'https://codesandbox.io/embed/5zppxx3n5l?autoresize=1&hidenavigation=1&view=split&module=%2Fmain.css&fontsize=18',
      },
    },
    {
      template: 'Project',
      animation: {
        type: 'horizontal',
      },
      content: {
        infos: [
          {
            content: 'Projekt',
            src: 'https://codesandbox.io/s/nk95v8yly0',
          },
          {
            content: 'API',
            src: 'https://randomuser.me/',
          },
        ],
      },
    },
    {
      template: 'Finish',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/finish.png',
      },
    },
    {
      template: 'SocialMedia',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Znajdź nas na:',
        icons: [
          {
            logo: '/static/icons/web.svg',
            logo_light_theme: '/static/icons/web_light.svg',
            link: 'https://coderscrew.pl/',
          },
          {
            logo: '/static/icons/facebook.svg',
            logo_light_theme: '/static/icons/facebook_light.svg',
            link: 'https://pl-pl.facebook.com/ccrew18/',
          },
          {
            logo: '/static/icons/instagram.svg',
            logo_light_theme: '/static/icons/instagram_light.svg',
            link: 'https://www.instagram.com/coderscrew.pl/',
          },
          {
            logo: '/static/icons/linkedin.svg',
            logo_light_theme: '/static/icons/linkedin_light.svg',
            link: 'https://pl.linkedin.com/company/coderscrew',
          },
        ],
      },
    },
    {
      template: 'CodersCrew',
      animation: {
        type: 'horizontal',
      },
      content: {
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_628,w_1198,x_0,y_0/fl_lossy/f_auto/a_ignore/v1541838429/b027fab7-e0e6-41d6-95bb-ebee9196bc24.gif',
      },
    },
    {
      template: 'CodersCamp',
      animation: {
        type: 'horizontal',
      },
      content: {
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_1000,w_2000,x_0,y_0/c_scale,h_1000,w_2000/fl_apng.lossy/f_auto/a_ignore/v1547833355/462d4789-ae73-47f6-ba0f-02a81235c60c.png',
      },
    },
    {
      template: 'Materials',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Materiały dodatkowe',
        content: 'Jeśli chcecie kontynuować swoją przygodę z HTML i CSS, te materiały na pewno Was zainteresują',
        items: [
          {
            image: '/static/images/react_2.png',
            link: 'https://app.ludus.one/75bff2da-e9d6-4dcd-97e7-0218d33252f8',
          },
          {
            image: '/static/images/js_2.png',
            link: 'https://app.ludus.one/257ee51d-8df7-465a-b5d1-148bd339f886',
          },
          {
            image: '/static/images/react_redux.png',
            link: 'https://www.udemy.com/react-redux/',
          },
        ],
      },
    },
    {
      template: 'Materials2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Materiały dodatkowe',
        items: [
          {
            image: '/static/images/github.png',
            link: 'https://github.com/facebook/create-react-app',
          },
          {
            image: '/static/images/cycle_method.png',
            link: 'http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/',
          },
          {
            image: '/static/images/react_cheat_sheet.png',
            link: 'http://www.developer-cheatsheets.com/react',
          },
        ],
      },
    },
  ],
};
