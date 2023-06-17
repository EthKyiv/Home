import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// colors
import colors from 'windicss/colors'

// themes
import defaultTheme from 'windicss/defaultTheme'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'

const MyTheme = {
  colors: {
    green: {
      DEFAULT: '#00F3A3',
      50: '#F8FCFA',
      100: '#C8FEEC',
      200: '#8EFFDA',
      300: '#5EFFCA',
      400: '#18FFB3',
      500: '#00F3A3',
      600: '#4ACBC4',
      700: '#389562',
      800: '#296C47',
      900: '#19432C',
      950: '#122F1F',
    },
    blue: {
      DEFAULT: '#00b4e3',
      '50': '#effbff',
      '100': '#def5ff',
      '200': '#b6efff',
      '300': '#75e4ff',
      '400': '#2cd8ff',
      '500': '#00b4e3',
      '600': '#009ed4',
      '700': '#007eab',
      '800': '#006a8d',
      '900': '#065774',
      '950': '#04384d',
    },
    red: {
      DEFAULT: '#FF6A46',
      50: '#FFFEFE',
      100: '#FFEDE9',
      200: '#FFCDC0',
      300: '#FFAC98',
      400: '#FF8B6F',
      500: '#FF6A46',
      600: '#FF3D0E',
      700: '#D52900',
      800: '#9D1E00',
      900: '#651400',
      950: '#490E00',
    },
    yellow: {
      DEFAULT: '#FFCF32',
      50: '#FFFBEA',
      100: '#FFF7D5',
      200: '#FFEEAC',
      300: '#FFE484',
      400: '#FFDA5B',
      500: '#FFCF32',
      600: '#F9BD00',
      700: '#C19000',
      800: '#896500',
      900: '#513B00',
      950: '#352600',
    },
    slate: {
      300: '#82B0BC',
      400: '#89CEE0',
      600: '#6497a4',
      700: '#6497a4',
      800: '#000911',
      900: '#00070D',
      950: '#00050A',
    },
    gray: {
      DEFAULT: '#575757',
      200: '#ededed',
      800: '#575757',
    },
    black: { DEFAULT: '#040404' },
  },
}

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './content/**/*.md',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
    ],
  },
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: MyTheme.colors.blue,
        secondary: MyTheme.colors.yellow,
        yellow: MyTheme.colors.yellow,
        green: MyTheme.colors.green,
        blue: MyTheme.colors.blue,
        red: MyTheme.colors.red,
        gray: MyTheme.colors.gray,
        slate: MyTheme.colors.slate,
        black: MyTheme.colors.black,
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        lg: ['22px'],
        '3xl': ['28px'],
        '5xl': ['43px', '45px'],
      },
      dropShadow: {
        xl: '3px 3px 0px #4ACBC4',
        '2xl': '4px 4px 0px #4ACBC4',
        '3xl': '4px 5px 0px #4ACBC4',
      },
    },
  },
  shortcuts: {
    'light-img': 'block dark:hidden',
    'dark-img': 'hidden dark:block',
  },
  plugins: [
    // filters plugin require for navbar blur
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin,
  ] as Plugin[],
})
