import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState();
  const onChange = (item) => {
    setUsd(item / coins.quotes.USD.price);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <form>
        <input onChange={onChange} type="number" />
        <button></button>
      </form>

      <br />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name}({coin.symbol}) : $
              {Math.round(coin.quotes.USD.price * 100) / 100} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
