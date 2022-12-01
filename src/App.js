import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [price, setPrice] = useState(1);
  
  

  const inputUsd = (event) => {
    setUsd(event.target.value);
  };
  const onChange = (event) => {
    setPrice(event.target.value);
    
  };
  
  const finalValue = usd / price.toString().split(",")[0]
  const symbolValue = price.toString().split(",")[1]


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
      <input value={usd} type="number" onChange={inputUsd} placeholder="USD" />
       USD
      <h1>
      {finalValue.toFixed(8)} {symbolValue}
      </h1>
      <br />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin</option>
          {coins.map((coin) => (
            <option
              key={coin.id}
              value={[coin.quotes.USD.price, coin.symbol]}
              symbol={coin.symbol}
            >
              {coin.name}({coin.symbol}) : $
              {Math.round(coin.quotes.USD.price * 100) / 100} 
            </option>
          ))}
        </select>
      )}
      <br />
    </div>
  );
}

export default App;
