import styled from "styled-components";


const Container = styled.div`
    display: flex;
`

const Pannel = styled.div`
    flex: ${(p) => p.flex};
`

const SplitScreen = ({ children, LeftWidth = 1, RightWidth = 1 }) => {

  const [Left, Right] = children;

  return (
    <Container>
      <Pannel flex={LeftWidth}>
        {Left}
      </Pannel>
 
      <Pannel flex={RightWidth}>
        {Right}
      </Pannel>
    </Container> 
  );
};

export default SplitScreen;