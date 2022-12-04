import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieDetail);
  return (
    <div className="detail">
      <h2>{movieDetail.title}</h2>
      <img src={movieDetail.medium_cover_image} alt="Cover img" />
      <h2>Year: {movieDetail.year}</h2>
      <p>rating: {movieDetail.rating}</p>
      <h2>{movieDetail.genres}</h2>
      <p>{movieDetail.description_full}</p>
    </div>
  );
}

export default Detail;
