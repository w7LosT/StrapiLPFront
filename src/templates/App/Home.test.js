import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Home from './index';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

test('renders learn react link', () => {
  const {debug} = renderTheme(<Home />);
  // debug();
  const headingContainer = screen.getByRole('heading', {name: "Oi"}).parentElement;
  expect(headingContainer).toHaveStyle({
    "background-color": theme.default.mainBG,
  });
  expect(headingContainer).toMatchSnapshot();
});
