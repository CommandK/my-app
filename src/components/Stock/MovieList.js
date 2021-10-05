import React from "react";

import Movie from "./Movie";



const MovieList = (props) => {
  console.log('I am here')
  console.log(props.movies)
  console.log('this is me')
  return (


        <Movie
          key={props.symbol}
          marketCap={props.marketCap}
        />


  );
};

export default MovieList;
