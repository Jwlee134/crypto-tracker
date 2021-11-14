import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

function Coin() {
  const { id } = useParams<string>();
  const [loading, setLoading] = useState(true);
  const {
    state: { name },
  } = useLocation();

  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
      .then((res) => res.json())
      .then((res) => setInfo(res));
    fetch(`https://api.coinpaprika.com/v1/tickers/${id}`)
      .then((res) => res.json())
      .then((res) => setPriceInfo(res));
  }, [id]);

  return (
    <Container>
      <Header>
        <Title>{name}</Title>
      </Header>
      {loading ? <Loader>loading...</Loader> : <span></span>}
    </Container>
  );
}

export default Coin;
