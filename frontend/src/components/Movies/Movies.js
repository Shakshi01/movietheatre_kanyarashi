import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helpers/api-helpers.js";
import MovieItem from "./MovieItem.js";
import { useSelector } from "react-redux";

const Movies = () => {
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const [movies, setMovies] = useState();
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        margin={"auto"}
        variant="h4"
        padding={2}
        width="40%"
        bgcolor={"#900C3F"}
        color="white"
        textAlign={"center"}
      >
        All Movies
      </Typography>
      <Box
        width={"100%"}
        margin="auto"
        marginTop={5}
        display={"flex"}
        justifyContent="flex-start"
        flexWrap={"wrap"}
      >
        {movies &&
          movies.map((movie, index) => (
            <MovieItem
              key={index}
              id={movie._id}
              posterUrl={movie.img}
              releaseDate={movie.date}
              title={movie.movieName}
              isAdminLoggedIn={isAdminLoggedIn}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Movies;