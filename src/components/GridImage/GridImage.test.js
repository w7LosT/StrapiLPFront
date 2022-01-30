import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { GridImage } from '.';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render', () => {
    const {container} = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
