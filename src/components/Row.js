import React, { useState } from "react";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
