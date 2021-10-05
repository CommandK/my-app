import React, { useState, useEffect, useCallback } from "react";
import Movie from "./Movie";
import "./StockView.css";

const API_KEY = "sandbox_c5dg77qad3ifm1hm00u0";
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = API_KEY;



const StockView = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    const url = `https://financialmodelingprep.com/api/v3/market-capitalization/AAPL?apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data[0]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const finnhubClient = new finnhub.DefaultApi();
  finnhubClient.companyEpsEstimates("AAPL", {}, (error, data, response) => {
    console.log(data);
  });

  console.log(movies);
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <Movie movies={movies} />}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
};

export default StockView;
