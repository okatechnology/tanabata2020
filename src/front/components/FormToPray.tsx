import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { FORM_HEIGHT, FORM_WIDTH, colorsData, tanzakuColors } from '../data/constants';
import { prayToApi } from '../utils/accessToApi';
import { deriveHexFromName } from '../utils/deriveHexFromName';
import { getRandomInt } from '../utils/getRandomInt';

interface FormToPrayProps {
  handlePrayedText: (text: string) => void;
  handleAfterPraying: (value: boolean) => void;
}

const randomColorNumber = getRandomInt(5);

export const FormToPray = ({ handlePrayedText, handleAfterPraying }: FormToPrayProps) => {
  const [contents, setContents] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState<TanzakuColor>(tanzakuColors[randomColorNumber]);

  return (
    <Wrapper>
      <FormTanzaku bgColor={color}>
        <RadioButtonWrapper>
          {useMemo(
            () =>
              tanzakuColors.map((colorName) => (
                <RadioButtonLabel key={colorName}>
                  <LabelHeader>{colorsData[colorName].jaColorName}</LabelHeader>
                  <RadioButton
                    name="tanzakuColor"
                    value={colorName}
                    type="radio"
                    onChange={(e) => {
                      setColor(e.target.value as TanzakuColor);
                    }}
                  />
                </RadioButtonLabel>
              )),
            [],
          )}
        </RadioButtonWrapper>
        <TextLabel>
          <LabelHeader>願いごと</LabelHeader>
          <EnterContentsArea
            value={contents}
            onChange={(e) => {
              e.preventDefault();
              if (e.target.value.length < 23) {
                setContents(e.target.value);
              }
            }}
          />
        </TextLabel>
        <TextLabel>
          <LabelHeader>名前</LabelHeader>
          <EnterNameArea
            value={name}
            onChange={(e) => {
              e.preventDefault();
              if (e.target.value.length < 11) {
                setName(e.target.value);
              }
            }}
          />
        </TextLabel>
      </FormTanzaku>
      <SubmitButton
        type="submit"
        value="願う"
        onClick={(e) => {
          e.preventDefault();
          if (name.length === 0 || contents.length === 0) return;
          setContents('');
          setName('');
          prayToApi({ name, color, contents });
          handlePrayedText(contents);
          handleAfterPraying(true);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.form``;

interface FormProps {
  bgColor: TanzakuColor;
}

const FormTanzaku = styled.div<FormProps>`
  display: flex;
  flex-direction: row-reverse;
  height: ${FORM_HEIGHT}px;
  width: ${FORM_WIDTH}px;
  justify-content: space-around;
  padding: 2rem;
  border: 1px solid ${colorsData.blue.hex};
  background-color: ${({ bgColor }) => deriveHexFromName(bgColor)};
`;

const RadioButtonLabel = styled.label`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 5rem;
  cursor: pointer;

  & + & {
    margin-top: 1.6rem;
  }
`;

const TextLabel = styled.label`
  display: flex;
  flex-direction: row-reverse;
`;

const LabelHeader = styled.span`
  writing-mode: vertical-rl;
  display: block;
  font-size: 1.6rem;
  margin-left: 0.4rem;
`;

const RadioButtonWrapper = styled.div`
  width: 5rem;
`;

const RadioButton = styled.input`
  display: block;
  transform: scale(1.5);
`;

const EnterContentsArea = styled.textarea`
  display: block;
  font-size: 3rem;
  width: 5rem;
  padding: 1rem;
  line-height: 3rem;
  resize: none;
  text-align: justify;
  border: 1px solid ${colorsData.blue.hex};
  border-radius: 5px;
  background-color: #fff;
`;

const EnterNameArea = styled.textarea`
  display: block;
  height: 50%;
  font-size: 2rem;
  width: 4rem;
  padding: 1rem;
  line-height: 2rem;
  resize: none;
  text-align: justify;
  border: 1px solid ${colorsData.blue.hex};
  border-radius: 5px;
  background-color: #fff;
`;

const SubmitButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 100%;
  height: 6rem;
  transition: transform 0.1s ease-out;
  border: 2px solid ${colorsData.blue.hex};
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  margin-top: 4rem;

  :hover {
    transform: scale(1.2);
  }
`;
