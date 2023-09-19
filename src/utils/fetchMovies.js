const fetchMovies = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=01862de0dd311690d98ac3030d827b68'
  );
  return await response.json();
};

export default fetchMovies;
