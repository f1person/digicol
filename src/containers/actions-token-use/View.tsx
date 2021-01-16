import styled from 'styled-components';

import { Title as TitleUI } from '../../components';

import { List } from './List';

export const ActionsTokenUseView = () => (
  <Container>
    <Content>
      <Title tid="CONTENT.ACTION.TOKEN_USE.TITLE" />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 0;
`;

const Title = styled(TitleUI)`
  text-align: center;
  margin-bottom: 42px;
`;
