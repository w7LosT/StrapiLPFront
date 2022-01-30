import P from 'prop-types';
import * as Styled from './styles';
import {Text} from '../TextComponent';
import { SectionComponent } from '../SectionComponent';

export const Footer = ({html}) => {
  return (
    <SectionComponent>
      <Styled.Container>
        <Text>
          {html}
        </Text>
      </Styled.Container>
    </SectionComponent>
  )
}

Footer.propTypes = {
  html: P.string.isRequired,
}
