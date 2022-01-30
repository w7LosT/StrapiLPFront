import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../TextComponent';

export const GridImage = ({title, description, grid, background = false}) => {
  return (
    <SectionBackground background={background} as='h2'>
      <Styled.Container>
        <Heading titleCase='uppercase'>
          {title}
        </Heading>
        <Text>
          {description}
        </Text>
        <Styled.Grid>
          {grid.map(element => (
            <Styled.GridElement key={element.srcImg}>
              <Styled.Image src={element.srcImg} alt={element.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  )
}

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({
    altText: P.string.isRequired,
    srcImg: P.string.isRequired,
  })).isRequired,
  background: P.bool,
}
