import P from 'prop-types';
import * as Styled from './styles';

export const Text = ({children}) => {
  return (
    <Styled.Text>
      {children}
    </Styled.Text>
  );
}

Text.propTypes = {
  children: P.node.isRequired,
}
