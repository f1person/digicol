import React from 'react';
import styled from 'styled-components';

import { Text as TextUI } from '../../components';

import { ReactComponent as FaqIcon } from '../../assets/svg/faq_icon.svg';

type Props = { id: number | string };

export const Item = ({ id }: Props) => {
  const [active, setActive] = React.useState(false);
  return (
    <Container>
      <div onClick={() => setActive(!active)}>
        <Title tid={`CONTENT.FAQ.${id}.TITLE`} />
      </div>
      <InfoBlock active={active}>
        <Info tid={`CONTENT.FAQ.${id}.INFO`} />
      </InfoBlock>
      <div onClick={() => setActive(!active)}>
        <Icon active={active}>
          <FaqIcon />
        </Icon>
      </div>
    </Container>
  );
};

const Title = styled(TextUI)`
  font-weight: 600;
  font-size: 15px;
  color: rgba(34, 33, 61, 0.5);
  cursor: pointer;
  transition: opacity 0.7s;

  &:hover {
    opacity: 0.7;
  }
`;

const InfoBlock = styled.div<{ active: boolean }>`
  overflow: hidden;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const Info = styled(TextUI)`
  font-size: 15px;
  margin-top: 15px;
  color: #22213d;
  font-weight: 600;
`;

const Container = styled.div`
  transition: 0.5s;
  position: relative;
`;

const Icon = styled.div<{ active: boolean }>`
  position: absolute;
  top: -4px;
  display: flex;
  right: 0;
  cursor: pointer;
  transition: transform 0.5s, opacity 0.7s;
  transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0deg)')};

  &:hover {
    opacity: 0.7;
  }
`;
