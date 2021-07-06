import { FormToPray } from './FormToPray';
import styled from 'styled-components';
import hikoboshiImg from '../../../assets/hikoboshi.png';
import orihimeImg from '../../../assets/orihime.png';
import { FORM_WIDTH } from '../data/constants';

interface ScrolledAreaProps {
  handlePrayedText: (text: string) => void;
  handleAfterPraying: (value: boolean) => void;
}

export const ScrolledArea = ({
  handlePrayedText,
  handleAfterPraying,
}: ScrolledAreaProps) => {
  return (
    <Wrapper>
      <FormSideImg src={hikoboshiImg} />
      <FormToPray
        handlePrayedText={handlePrayedText}
        handleAfterPraying={handleAfterPraying}
      />
      <FormSideImg src={orihimeImg} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormSideImg = styled.img`
  display: block;
  object-fit: contain;
  width: calc((100% - ${FORM_WIDTH}px) / 2);
`;
