import React, { useMemo } from 'react';
import styled from 'styled-components';
import { colorsData } from '../data/constants';

interface AfterPrayMordalProps {
  prayedText: string;
  show: boolean;
  handleAfterPraying: (value: boolean) => void;
}

const TWEET_URL = 'https://twitter.com/intent/tweet?text=';

export const AfterPrayingMordal = ({
  prayedText,
  show,
  handleAfterPraying,
}: AfterPrayMordalProps) => {
  const tweetText = useMemo(
    () => encodeURI(`「${prayedText}」と願いました\n${document.location}`),
    [prayedText],
  );

  return (
    <Wrapper show={useMemo(() => show, [show])}>
      <BackgroundArea
        onClick={(e) => {
          e.preventDefault();
          handleAfterPraying(false);
        }}
      />
      <Mordal>
        <RemoveButton
          onClick={(e) => {
            e.preventDefault();
            handleAfterPraying(false);
          }}
        >
          <RemoveButtonPart />
          <RemoveButtonPart />
        </RemoveButton>
        <MordalText>願いは届きました…</MordalText>
        <TweetButton href={`${TWEET_URL}${tweetText}`}>ツイートする</TweetButton>
      </Mordal>
    </Wrapper>
  );
};

interface WrapperProps {
  show: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const BackgroundArea = styled.div`
  background-color: #29009988;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  z-index: -9997;
`;

const Mordal = styled.div`
  width: 80rem;
  padding: 6rem;
  background-color: #fff;
  border-radius: 1rem;
  position: relative;
`;

const RemoveButton = styled.a`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  display: block;
  width: 4rem;
  height: 4rem;
`;

const RemoveButtonPart = styled.span`
  display: block;
  position: absolute;
  top: calc(50% - 0.1rem);
  left: calc(50% - 1.5rem);
  width: 3rem;
  height: 0.2rem;
  background-color: ${colorsData.blue.hex};
  transform: rotate(45deg);

  & + & {
    transform: rotate(-45deg);
  }
`;

const MordalText = styled.p`
  text-align: center;
  font-size: 2rem;
  margin: 0;
`;

const TweetButton = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #fff;
  background-color: #00acee;
  border-radius: 1rem;
  margin: 3rem auto 0;
  padding: 1rem 2rem;
  width: fit-content;
`;
