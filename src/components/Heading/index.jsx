import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({children, colorDark = true, as = 'h1', size = 'sm', titleCase = 'none'}) => {
  return(
    <Styled.Title colorDark={colorDark} as={as} size={size} titleCase={titleCase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['sm', 'md', 'lg']),
  titleCase: P.oneOf(['none', 'uppercase', 'lowercase', 'capitalize']),
}
