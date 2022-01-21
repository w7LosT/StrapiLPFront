import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { SectionComponent } from '.';

describe('<SectionComponent />', () => {
  it('should render', () => {
    renderTheme(<SectionComponent>SectionComponent</SectionComponent>);
    expect(screen.getByRole('heading')).toMatchSnapshot();
  });
});
