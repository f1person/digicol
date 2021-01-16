import styled from 'styled-components';

import { Text, Link as LinkUi } from '../../components';

export const HeroTokenView = () => (
  <Container>
    <Wrapper>
      <Content>
        <Title tid="CONTENT.HERO.TOKEN.TITLE" />
        <Description tid="CONTENT.HERO.TOKEN.DESCRIPTION" />
        <Link tid="CONTENT.HERO.TOKEN.LINK" />
      </Content>
    </Wrapper>
  </Container>
);

const Container = styled.div`
  height: 514px;
  padding: 0 50px;
`;

const Wrapper = styled.div`
  height: 514px;
  background: linear-gradient(
    0deg,
    #22213d -25.91%,
    #1d1c37 32.81%,
    #1b1a32 87.8%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 641px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 47px;
  line-height: 34px;
  color: #fff;
  text-align: center;
  margin-bottom: 42px;
`;

const Description = styled(Text)`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 32px;
`;

const Link = styled(LinkUi)`
  /* margin-top: 32px; */
`;
