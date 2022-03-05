import styled, { css, keyframes } from "styled-components";

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100%{
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, .7);

    &:before, &:after{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: .5rem;
      border-color: transparent;
      border-style: solid;
      border-radius:  50%;
    }

    &:after{
      width: 6rem;
      height: 6rem;
      border-left: .5rem solid #fff;
      border-top: .5rem solid #fff;
      animation: ${rotate} 1s linear infinite;
    }

    &:before{
      width: 3rem;
      height: 3rem;
      border-left: .5rem solid #fff;
      border-top: .5rem solid #fff;
      animation: ${rotate} .5s linear reverse infinite;
    }
  `}
`;
