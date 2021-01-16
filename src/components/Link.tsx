import styled from 'styled-components';
import { LocalTextProps, Text } from './Text';

export const Link = ({ tid, values, ...props }: LocalTextProps) => (
  <LinkStyled {...props}>
    <Text tid={tid} values={values} />
  </LinkStyled>
);

const LinkStyled = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #ffffff;
  transition: opacity 0.7s;
  cursor: pointer;

  &:hover {
    color: #ffffff !important;
    text-decoration-line: underline;
    opacity: 0.7;
  }
`;
