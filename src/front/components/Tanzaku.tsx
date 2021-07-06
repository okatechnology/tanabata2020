import { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { TANZAKU_HEIGHT, TANZAKU_WIDTH, colorsData } from '../data/constants';
import { getRandomInt } from '../utils/getRandomInt';
import { deriveHexFromName } from '../utils/deriveHexFromName';

interface TanzakuProps extends Omit<Tanzaku, 'id'> {}

export const Tanzaku = ({ color, contents, name }: TanzakuProps) => {
  const topPos = useMemo(() => getRandomInt(101), []);
  const leftPos = useMemo(() => getRandomInt(101), []);
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

const windAnimation = keyframes`
  0%{
    transform: rotate(0deg) translate(0, 100%);
  }
  8%{
    transform: rotate(-12deg) translate(0, 100%);
  }
  25%{
    transform: rotate(6deg) translate(0, 100%);
  }
  40%{
  transform: rotate(-3deg) translate(0, 100%);
  }
  55%{
  transform: rotate(1.5deg) translate(0, 100%);
  }
  70%{
  transform: rotate(-0.75deg) translate(0, 100%);
  }
  85%{
  transform: rotate(0.3deg) translate(0, 100%);
  }
  100%{
    transform: rotate(0deg) translate(0, 100%);
  }
`;

const AnimationWrapper = styled.div<AnimationWrapperProps>`
  position: absolute;
  top: calc(${({ topPos }) => topPos}% - ${TANZAKU_HEIGHT}px);
  left: ${({ leftPos }) => leftPos}%;
  width: ${TANZAKU_WIDTH}px;
  height: ${TANZAKU_HEIGHT}px;
  transform: rotate(0deg) translate(0, 100%);
  animation: ${windAnimation} 15s ease-in-out ${({ leftPos }) => leftPos / 30}s infinite;
  :hover {
    z-index: 9999;
  }
`;

interface WrapperProps {
  color: TanzakuColor;
  topPos: number;
  leftPos: number;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => deriveHexFromName(color)};
  border: 1px solid ${colorsData.blue.hex};
  display: flex;
  flex-direction: row-reverse;
  padding: 5px;
  transition: transform 0.2s;
  justify-content: center;

  :hover,
  :active,
  :focus {
    transform: scale(1.8);
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
