import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const {container} = renderTheme(<Footer footerHtml={'<h1>Footer</h1>'} />);
    expect(container).toMatchSnapshot();
  });
});
