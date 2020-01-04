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
        title: 'HTML i CSS',
        subtitle: 'na których dowiemy się w jaki sposób dodać do naszej strony zawartość oraz style',
        image: '/images/html_css.png',
      },
    },
    {
      template: 'Language',
      animation: {
        type: 'horizontal',
      },
      content: {
        firstLine: 'język programowania',
        secondLine: 'vs',
        thirdLine: 'język obcy',
      },
    },
    {
      template: 'Article',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/images/article.png',
      },
    },
    {
      template: 'AboutHTML',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kilka słów o HTML-u',
      },
    },
    {
      template: 'AboutHTML2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Czym jest HTML?',
        content: 'Jest to język oparty o hiperłącza, zbudowany ze znaczników. Opisuje, co znajduje się na stronie.',
        image: '/images/skeleton.png',
      },
    },
    {
      template: 'BoxModel',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Model pudełkowy',
        content: {
          up: 'Każda strona internetowa składa się z zestawu pudełek o różnych rozmiarach i właściwościach.',
          down:
            'To, jakie właściwości posiada dane pudełko zależy od tagu HTML, jaki mu nadamy. Jego wygląd zależy od stylu CSS, a interakcje od skryptów JSowych.',
        },
        image: '/images/box_model.png',
      },
    },
    {
      template: 'Youtube',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/images/youtube.png',
      },
    },
    {
      template: 'CreateBox',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak stworzyć pudełko?',
        image: {
          light: '/images/light/createBox_light.png',
          dark: '/images/createBox.png',
        },
      },
    },
    {
      template: 'BoxAttributes',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Atrybuty pudełek',
        image: {
          light: '/images/light/boxAttributes_light.png',
          dark: '/images/box_attributes.png',
        },
      },
    },
    {
      template: 'Coding',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zaczynamy kodować!',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_266,w_476,x_0,y_0/fl_lossy/f_auto/a_ignore/v1521219793/ex3rgyo6lt2ajtojb4kk.gif',
      },
    },
    {
      template: 'Coding2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Co dzisiaj zakodujemy?',
      },
    },
    {
      template: 'CodeSandbox',
      animation: {
        type: 'horizontal',
      },
      content: {
        link: 'https://bt7uy.codesandbox.io/',
      },
    },
    {
      template: 'CodeSandbox1a',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'currying-river-x03cd',
      },
    },
    {
      template: 'CodeSandbox1',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'frosty-carson-j6kpo',
      },
    },
    {
      template: 'Image',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tag <img/>',
        content: 'Element zawierający odnośnik do ilustracji, którą chcemy pokazać na stronie.',
        image: {
          light: '/images/light/img_light.png',
          dark: '/images/img.png',
        },
      },
    },
    {
      template: 'Ingredients',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'A teraz dodajmy składniki',
      },
    },
    {
      template: 'CodeSandbox2a',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'festive-gagarin-hjy0r',
      },
    },
    {
      template: 'CodeSandbox2',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'flamboyant-feather-g4jyy',
      },
    },
    {
      template: 'CSS',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Co poza HTML-em?',
      },
    },
    {
      template: 'AboutCSS',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Czym jest CSS',
        content: 'Jest to język służący do zmiany wyglądu elementów HTML.',
        image: {
          light: '/images/light/robots_light.png',
          dark: '/images/robots.png',
        },
      },
    },
    {
      template: 'CSSImage',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/images/css.gif',
      },
    },
    {
      template: 'JavaScript',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Czym jest JavaScript?',
        content: 'Jest to język pozwalający na dodanie do strony dynamiki i interaktywności.',
        image: {
          light: '/images/light/three_robots_light.png',
          dark: '/images/three_robots.png',
          robotjs:
            'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_210,w_217,x_0,y_0/fl_lossy/f_auto/a_ignore/v1521215020/j8wdnmpwruq5ya3lpyvd.gif',
        },
      },
    },
    {
      template: 'Styles',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak dołączyć style CSS do pliku HTML?',
      },
    },
    {
      template: 'Styles1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '1. Podpinając zewnętrzny plik ze stylami',
        content: 'Zapisując je w osobnym pliku z rozszerzeniem CSS oraz podpinając z wykorzystaniem tagu <link/>',
        image: {
          light: '/images/light/styles_light.png',
          dark: '/images/styles.png',
        },
      },
    },
    {
      template: 'Styles2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '2. Wykorzystując stworzony w tym celu tag',
        content: 'Zapisując je w tym samym pliku w tagach <style><style/>',
        image: {
          light: '/images/light/styles2_light.png',
          dark: '/images/styles2.png',
        },
        info: 'Zmiany dotyczące wszystkich podstron trzeba wykonywać w każdym pliku z osobna.',
      },
    },
    {
      template: 'Styles3',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '3. Korzystając z atrybutu',
        content: 'Zapisując je w atrybucie style danego elementu (pudełka)',
        image: {
          light: '/images/light/styles3_light.png',
          dark: '/images/styles3.png',
        },
      },
    },
    {
      template: 'Element',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Jak “złapać” element HTML z poziomu CSS?',
      },
    },
    {
      template: 'Element1',
      animation: {
        type: 'horizontal',
      },
      content: {
        content:
          'Określa, jakie cechy mają posiadać elementy, do których chcemy przypisywać określone style. Odpowiada na pytania: “co ostylować?”.',
        image: {
          light: '/images/light/element_light.png',
          dark: '/images/element.png',
        },
      },
    },
    {
      template: 'StyleSet',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Z czego składa się zestaw stylów?',
        image: {
          light: '/images/light/styles_set_light.png',
          dark: '/images/styles_set.png',
        },
      },
    },
    {
      template: 'ClassSelector',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Selektory klasy (.)',
        image: {
          light: '/images/light/selector_light.png',
          dark: '/images/selector.png',
        },
      },
    },
    {
      template: 'IdSelector',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Selektor id (#)',
        image: {
          light: '/images/light/id_selector_light.png',
          dark: '/images/id_selector.png',
        },
      },
    },
    {
      template: 'ElementSelector',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Selektor elementu',
        image: {
          light: '/images/light/element_selector_light.png',
          dark: '/images/element_selector.png',
        },
      },
    },
    {
      template: 'IdSelector2',
      animation: {
        type: 'horizontal',
      },
      content: {
        info: 'id musi być unikalne',
        description: 'Oznacza to, że na stronie nie możemy stworzyć dwóch elementów o tym samym id',
      },
    },
    {
      template: 'CSSDiner',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Zagrajmy w CSS Diner!',
        icon: '/icons/play.svg',
        link: 'https://flukeout.github.io/',
      },
    },
    {
      template: 'Cascading',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kaskadowość CSS',
        content: {
          up:
            'Określa, które style zostaną zastosowane, jeżeli do danego elementu pasuje kilka selektorów zmieniających tę samą właściwość.',
          down: 'By zrozumieć kaskadę wystarczy zapamiętać dwie zasady.',
        },
        image: '/images/waterfall.gif',
      },
    },
    {
      template: 'Cascading1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kaskadowość CSS',
        description: '1. Wygrywają style o większej specyficzności (dokładności)',
        image: '/images/waterfall.gif',
        right_image: {
          light: '/images/light/cascading_light.png',
          dark: '/images/cascading.png',
        },
      },
    },
    {
      template: 'Cascading2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kaskadowość CSS',
        description: '2. Przy tej samej specyficzności wygrywają style położone niżej',
        image: '/images/waterfall.gif',
      },
    },
    {
      template: 'Specificity',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Specyficzność',
        icon: '/icons/play.svg',
        items: [
          {
            description: 'Kalkulator specyficznośći selektorów',
            link: 'https://bit.ly/2loxpr8',
          },
          {
            description: 'Wyjaśnienie specyficzności dla fanów filmu “Lśnienie”',
            link: 'https://bit.ly/1Oa8ql0',
          },
          {
            description: 'Wyjaśnienie specyficzności dla fanów Gwiezdnych Wojen',
            link: 'https://bit.ly/2LG3vrF',
          },
          {
            description: 'Artykuł na CSS-Tricks dotyczący specyficzności',
            link: 'https://bit.ly/2bHOJji',
          },
        ],
      },
    },
    {
      template: 'Box',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Z czego składa się pudełko?',
      },
    },
    {
      template: 'Sizing',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '1. width i height',
        content: 'Wysokość oraz szerokość zawartości pudełka (elementów znajdujacych się wewnątrz).',
        image: {
          light: '/images/light/width_height_light.png',
          dark: '/images/width_height.png',
        },
      },
    },
    {
      template: 'Padding',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '2. padding',
        content: 'Odstęp zawartości pudełka od jego brzegów.',
        image: {
          light: '/images/light/padding_light.png',
          dark: '/images/padding.png',
        },
      },
    },
    {
      template: 'Border',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '3. border',
        content: 'Grubość obramowania brzegów pudełka.',
        image: {
          light: '/images/light/border_light.png',
          dark: '/images/border.png',
        },
      },
    },
    {
      template: 'Margin',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: '4. margin',
        content: 'Minimalny odstęp pudełka od innych pudełek.',
        image: {
          light: '/images/light/margin_light.png',
          dark: '/images/margin.png',
        },
      },
    },
    {
      template: 'BoxModel1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Sposoby zapisu modelu pudełkowego',
        content:
          'Aby zróżnicować margin i padding dla różnych stron pudełka możemy zapisać je na kilka innych sposobów.',
        image: '/images/margin_text.png',
      },
    },
    {
      template: 'BoxModel2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Box model',
        icon: '/icons/play.svg',
        items: [
          {
            description: 'Wyjaśnienie modelu pudełkowego na przykładzie podmiejskiego sąsiedztwa',
            link: 'https://bit.ly/2t1O19K',
          },
          {
            description: 'Interaktywe demo modelu pudełkowego',
            link: 'https://bit.ly/1ChkXHH',
          },
          {
            description: '4-minutowy filmik prezentujący box-model',
            link: 'https://bit.ly/2HLNcHh',
          },
        ],
      },
    },
    {
      template: 'Opacity',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'opacity',
        content:
          'Poziom widoczności pudełka. Przyjmuje wartości w przedziale 0-1, gdzie 0 to pełna przeźroczystość a 1 to pełna widoczność.',
        image: {
          light: '/images/light/opacity_light.png',
          dark: '/images/opacity.png',
        },
      },
    },
    {
      template: 'Colors',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Kilka słów o kolorach',
      },
    },
    {
      template: 'Colors1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Właściwości związane z kolorami',
        image: {
          light: '/images/light/colors_light.png',
          dark: '/images/colors.png',
        },
      },
    },
    {
      template: 'Colors2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Sposoby zapisu koloru',
        image: {
          light: '/images/light/colors1_light.png',
          dark: '/images/colors1.png',
        },
      },
    },
    {
      template: 'Colors3',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Uwzględnianie przeźroczystości w kolorach',
        image: {
          light: '/images/light/colors_rgba_light.png',
          dark: '/images/colors_rgba.png',
        },
      },
    },
    {
      template: 'Colors4',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Sposoby zapisu koloru (z przeźroczystością)',
        image: {
          light: '/images/light/colors_rgba_one_light.png',
          dark: '/images/colors_rgba_one.png',
        },
      },
    },
    {
      template: 'Background',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Więcej na temat tła',
      },
    },
    {
      template: 'Background1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'background',
        content: 'Właściwości związane z tłem.',
        image: {
          light: '/images/light/background_light.png',
          dark: '/images/background.png',
        },
      },
    },
    {
      template: 'CodeSandbox3a',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'loving-noether-i07nc',
      },
    },
    {
      template: 'CodeSandbox3',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'quizzical-ives-fp79b',
      },
    },
    {
      template: 'Text',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Właściwości tekstu',
      },
    },
    {
      template: 'FontSize',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'font-size',
        content: 'Wielkość fontów może być wyrażona w każdej jednostce, ale najlepiej sprawdzają się em i px.',
        image: {
          light: '/images/light/font_size_light.png',
          dark: '/images/font_size.png',
        },
      },
    },
    {
      template: 'FontWeight',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'font-weight',
        content: 'Grubość fontu wyrażona jako wielokrotność liczby 100, gdzie 100 to najcieńszy a 900 najgrubszy font.',
        image: {
          light: '/images/light/font_weight_light.png',
          dark: '/images/font_weight.png',
        },
      },
    },
    {
      template: 'TextAlign',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'text-align',
        content: 'Wyrównanie tekstu wewnątrz pudełka.',
        image: {
          light: '/images/light/text_align_light.png',
          dark: '/images/text_align.png',
        },
      },
    },
    {
      template: 'FlexBox',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Wracamy do pudełek: elastyczne układy (flexbox)',
      },
    },
    {
      template: 'FlexBox1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Aktywacja flexboxa',
        content: 'Aby uczynić pudełko elastycznym wystarczy ustawić jego właściwy display na flex.',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_431,w_1000,x_0,y_0/fl_lossy/f_auto/a_ignore/v1521591482/z6glfoebpxcx9a6javom.gif',
      },
    },
    {
      template: 'FlexBox2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'justify-content',
        content: 'Ułożenie elementów w poziomie.',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_224,w_1000,x_0,y_0/fl_lossy/f_auto/a_ignore/v1521591571/zv0n8os71rzi5tdguc1j.gif',
      },
    },
    {
      template: 'AlignItems',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'align-items',
        content: 'Ułożenie elementów w pionie.',
        image:
          'https://res.cloudinary.com/hcdkt0ybc/image/upload/q_auto:eco/c_crop,h_350,w_1000,x_0,y_0/fl_lossy/f_auto/a_ignore/v1521591606/ifnkzh8w2vzxeayfstuc.gif',
      },
    },
    {
      template: 'FlexBox3',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Flexbox',
        icon: '/icons/play.svg',
        items: [
          {
            description: 'Wyjaśnienie właściwości flexboxa z wykorzystaniem gifów.',
            link: 'https://bit.ly/2u04eMb',
          },
          {
            description: 'Rozbudowany, w pełni darmowy kurs dotyczący flexboxa.',
            link: 'https://bit.ly/2tIBKZj',
          },
          {
            description: 'Interaktywna nauka flexboxa poprzez grę z żabkami.',
            link: 'https://bit.ly/1Trwkq6',
          },
          {
            description: '“Plac zabaw” do testowania różnych właściwości flexboxa.',
            link: 'https://bit.ly/1gRJ1Hv',
          },
        ],
      },
    },
    {
      template: 'CodeSandbox4a',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'objective-wave-wl9rj',
      },
    },
    {
      template: 'CodeSandbox4',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'zealous-brook-8wdr4',
      },
    },
    {
      template: 'Tag',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tag <a></a>',
        content: 'Element zawierający odnośnik do innej strony lub określonego miejsca na obecnej stronie.',
        image: {
          light: '/images/light/tag_a_light.png',
          dark: '/images/tag_a.png',
        },
      },
    },
    {
      template: 'Tag1',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tag <a></a>',
        content: 'Element zawierający odnośnik do innej strony lub określonego miejsca na obecnej stronie.',
        image: {
          light: '/images/light/tag_b_light.png',
          dark: '/images/tag_b.png',
        },
      },
    },
    {
      template: 'Tag2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Tag <a></a>',
        content: 'Element zawierający odnośnik do innej strony lub określonego miejsca na obecnej stronie.',
        image: {
          light: '/images/light/tag_c_light.png',
          dark: '/images/tag_c.png',
        },
      },
    },
    {
      template: 'Icons',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Dodajemy ikonki',
      },
    },
    {
      template: 'FontAwesome',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Font Awesome',
        content: 'Setki darmowych ikon na wyciągnięcie ręki!',
        image: '/images/font_awesome.png',
      },
    },
    {
      template: 'CodeSandboxa',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'happy-chebyshev-8ol2d',
      },
    },
    {
      template: 'CodeSandbox5',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'admiring-https-9yqw6',
      },
    },
    {
      template: 'HTMLUP',
      animation: {
        type: 'horizontal',
      },
      content: {
        content:
          'Serdecznie polecamy Wam strone HTML5 UP jako źródło inspiracji oraz odkrywania jak zakodowane są wysokiej jakości strony internetowe.',
        icon: '/icons/play.svg',
        link: 'https://html5up.net/aerial',
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
    {
      template: 'Finish',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/images/finish.png',
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
            image: '/images/html_css_2.png',
            link: 'https://app.ludus.one/300c62f4-3979-48e2-ae6a-23b6acd59f48#1',
          },
          {
            image: '/images/css.png',
            link: 'https://bit.ly/2Frhoas',
          },
          {
            image: '/images/codecademy.png',
            link: 'https://www.codecademy.com/learn/learn-responsive-design',
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
            image: '/images/html_video.png',
            link: 'https://bit.ly/2pcTbhG',
          },
          {
            image: '/images/css_video.png',
            link: 'https://bit.ly/2pa59IQ',
          },
          {
            image: '/images/dev.png',
            link: 'https://bit.ly/2Lqbs4N',
          },
        ],
      },
    },
  ],
};
