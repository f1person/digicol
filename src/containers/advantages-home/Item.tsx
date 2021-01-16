import styled from 'styled-components';

import { Text } from '../../components';

type Props = { id: number | string; icon: React.ComponentType };

export const Item = ({ id, icon: Icon }: Props) => (
  <Container>
    <IconBlock>
      <Icon />
    </IconBlock>
    <Text tid={`CONTENT.ADVANTAGES.HOME.${id}.INFO`} />
  </Container>
);

const IconBlock = styled.div`
  background-color: #f2f9ff;
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

const Container = styled.div`
  display: flex;
  grid-gap: 12px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
