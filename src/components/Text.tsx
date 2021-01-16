import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export interface LocalTextProps {
  tid: string;
  values?: object;
}

export const LocalText = ({ tid, values }: LocalTextProps) => {
  const { t } = useTranslation();

  return <>{t(tid, values)}</>;
};

export const Title = ({ tid, values, ...props }: LocalTextProps) => (
  <TitleStyled {...props}>
    <LocalText tid={tid} values={values} />
  </TitleStyled>
);

const TitleStyled = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #22213d;
`;

export const Text = ({ tid, values, ...props }: LocalTextProps) => (
  <TextStyled {...props}>
    <LocalText tid={tid} values={values} />
  </TextStyled>
);

const TextStyled = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
`;
