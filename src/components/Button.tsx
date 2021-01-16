import React from 'react';
import styled from 'styled-components';

import { LocalText, LocalTextProps } from './Text';

const ButtonStyled = styled.button`
  border-radius: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  padding: 14px;
`;

export const ButtonPrimary = ({ tid, values, ...props }: LocalTextProps) => (
  <ButtonPrimaryStyled {...props}>
    <LocalText tid={tid} values={values} />
  </ButtonPrimaryStyled>
);

const ButtonPrimaryStyled = styled(ButtonStyled)`
  background: #1a2df3;
  color: #fff;

  transition: opacity 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonOutlined = ({ tid, values, ...props }: LocalTextProps) => (
  <ButtonOutlinedStyled {...props}>
    <LocalText tid={tid} values={values} />
  </ButtonOutlinedStyled>
);

const ButtonOutlinedStyled = styled(ButtonStyled)`
  background: #ffffff;
  border: 1px solid #1a2df3;
  color: #1a2df3;

  transition: color 0.5s, background-color 0.5s;

  &:hover {
    color: #fff;
    background: #1a2df3;
  }
`;
