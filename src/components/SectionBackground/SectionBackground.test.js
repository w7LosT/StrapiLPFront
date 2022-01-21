import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    renderTheme(<SectionBackground background={true}>SectionBackground</SectionBackground>);
    expect(screen.getByRole('heading')).toMatchSnapshot();
  });

  it('should render with background light', () => {
    renderTheme(<SectionBackground>SectionBackground</SectionBackground>);
    expect(screen.getByRole('heading')).toMatchSnapshot();
  });
});
