import { useEffect, useState } from "react";

function App2() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year.com/swagger.yaml`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}
