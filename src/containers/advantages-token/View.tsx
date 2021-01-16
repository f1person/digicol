import styled from 'styled-components';

import { Title as TitleUI } from '../../components';

import { List } from './List';

export const AdvantagesTokenView = () => (
  <Container>
    <Content>
      <Title tid="CONTENT.ADVANTAGES.TOKEN.TITLE" />
      <List />
    </Content>
  </Container>
);

const Container = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;

const Content = styled.div`
  width: 920px;
  display: grid;
  grid-gap: 22px;
  padding: 62px 0;
`;

const Title = styled(TitleUI)`
  text-align: center;
  margin-bottom: 52px;
`;
