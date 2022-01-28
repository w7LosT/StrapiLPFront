import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { GridTwoColumns } from '.';

describe('<GridTwoColumns />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumns>GridTwoColumns</GridTwoColumns>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
