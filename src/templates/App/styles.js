import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${(props) => css`
    background: purple;
    color: ${props.color};
  `}
`;
