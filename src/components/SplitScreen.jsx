import styled from "styled-components";


const Container = styled.div`
    display: flex;
`

const Pannel = styled.div`
    flex: 1;
`

const SplitScreen = ({ Left, Right }) => {
  return (
    <Container>
      <Pannel>
        <Left />
      </Pannel>

      <Pannel>
        <Right />
      </Pannel>
    </Container>
  );
};

export default SplitScreen;