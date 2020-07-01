import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { TANZAKU_HEIGHT, TANZAKU_WIDTH, colorsData } from '../data/constants';
import { getRandamInt } from '../utils/getRandamInt';

interface TanzakuProps extends Omit<Tanzaku, 'id'> {}

export const Tanzaku = ({ color, contents, name }: TanzakuProps) => {
  const topPos = useMemo(() => getRandamInt(101), []);
  const leftPos = useMemo(() => getRandamInt(101), []);
  return (
    <AnimationWrapper topPos={topPos} leftPos={leftPos}>
      <Wrapper color={color} topPos={topPos} leftPos={leftPos}>
        <MainText>{useMemo(() => contents, [contents])}</MainText>
        <Name>{useMemo(() => name, [name])}</Name>
      </Wrapper>
    </AnimationWrapper>
  );
};

interface AnimationWrapperProps {
  topPos: number;
  leftPos: number;
}

interface WrapperProps {
  color: string;
  topPos: number;
  leftPos: number;
}

const windAnimation = keyframes`
  0%{
    transform: rotate(-3deg) translate(0, 100%);
  }
  25%{
    transform: rotate(3deg) translate(0, 100%);
  }
  50%{
    transform: rotate(-12deg) translate(0, 100%);
  }
  80%{
    transform: rotate(8deg) translate(0, 100%);
  }
  100%{
    transform: rotate(-3deg) translate(0, 100%);
  }
`;

const AnimationWrapper = styled.div<AnimationWrapperProps>`
  position: absolute;
  top: calc(${({ topPos }) => topPos}% - ${TANZAKU_HEIGHT}px);
  left: ${({ leftPos }) => leftPos}%;
  width: ${TANZAKU_WIDTH}px;
  height: ${TANZAKU_HEIGHT}px;
  transform: rotate(-3deg) translate(0, 100%);
  animation: ${windAnimation} 10s ease-in-out ${({ leftPos }) => leftPos / 30}s infinite;
  :hover {
    z-index: 9999;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => {
    switch (color) {
      case 'green':
        return colorsData.green.hex;
      case 'lightBlue':
        return colorsData.lightBlue.hex;
      case 'pink':
        return colorsData.pink.hex;
      case 'purple':
        return colorsData.purple.hex;
      case 'yellow':
        return colorsData.yellow.hex;
      default:
        return '#fffe';
    }
  }};
  border: 1px solid ${colorsData.blue.hex};
  display: flex;
  flex-direction: row-reverse;
  padding: 5px;
  transition: transform 0.2s;
  justify-content: center;

  :hover {
    transform: scale(1.6);
  }
`;

const MainText = styled.p`
  writing-mode: vertical-rl;
  margin: 0;
  font-size: 1rem;
`;

const Name = styled.p`
  writing-mode: vertical-rl;
  margin: 0;
  text-align: end;
  font-size: 0.6rem;
`;
