import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/styles/global-styles";
import { theme } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /**
   * Usando para criar padrões de estilo
   */
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.default.lightBG,
      },
      {
        name: 'dark',
        value: theme.default.darkBG,
      }
    ],
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
