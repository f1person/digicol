import styled from 'styled-components';

import { Line, Title as TitleUI, Text as TextUi } from '../../components';

import { List } from './List';

export const ActionsTokenGetView = () => (
  <Container>
    <Line />
    <Content>
      <Title tid="CONTENT.ACTION.TOKEN_GET.TITLE" />
      <Text tid="CONTENT.ACTION.TOKEN_GET.DESCRIPTION" />
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
  margin-bottom: 32px;
`;

const Text = styled(TextUi)`
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
  width: 727px;
  text-align: center;
  color: rgba(34, 33, 61, 0.5);
  margin-bottom: 42px;
`;
