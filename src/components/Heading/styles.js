import styled, { css } from "styled-components";

const titleSize = {
  sm: (theme) => css`
    font-size: ${theme.fonts.sizes.sm};
  `,
  md: (theme) => css`
    font-size: ${theme.fonts.sizes.md};
  `,
  lg: (theme) => css`
    font-size: ${theme.fonts.sizes.lg};
    ${mediaFont(theme)};
  `,
};

const titleCaseFunction = {
  none: (theme) => css`
    text-transform: ${theme.fonts.cases.normal}
  `,
  uppercase: (theme) => css`
    text-transform: ${theme.fonts.cases.uppercase}
  `,
  lowercase: (theme) => css`
    text-transform: ${theme.fonts.cases.lowercase}
  `,
  capitalize: (theme) => css`
    text-transform: ${theme.fonts.cases.capitalize}
  `,
}

const mediaFont = (theme) => css`
  @media ${theme.medias.lteMedium}{
    font-size: ${theme.fonts.sizes.md};
  }
`;

export const Title = styled.h1`
  ${
    ({ theme, colorDark, size, titleCase }) => css `
      color: ${ colorDark ? theme.default.mainColor : theme.default.colorWhite };
      background-color: ${colorDark ? theme.default.lightBG : theme.default.secondaryBG};
      ${titleSize[size](theme)};
      ${titleCaseFunction[titleCase](theme)};
    `
  }
`;
