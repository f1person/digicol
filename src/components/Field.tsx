import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export interface FieldProps {
  tid: string;
  values?: object;
}

export const TextField = ({ tid, values, ...props }: FieldProps) => {
  const { t } = useTranslation();

  return <TextFieldStyled placeholder={t(tid, values)} {...props} />;
};

const TextFieldStyled = styled.input`
  background: #ffffff;
  border: 1px solid #1a2df3;
  box-sizing: border-box;
  border-radius: 8px;

  padding: 14px 16px;

  &::placeholder {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #22213d;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;
