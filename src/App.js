import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './store/movies';
import wrs from '../assets/images/wrs.png';
import { Button, Movie } from './components';
import appInfo from '../package.json';
import Login from './components/Login';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './../assets/images/logo.svg';

import './App.css';

const App = () => {
  const { movies, isLoading, message } = useSelector((state) => state.moviesReducer);
  const [isAuth, setIsAuth] = useState(false);

  const dispatch = useDispatch();

  const renderMovie = () => {
    if (isLoading) return <h2>Loading...</h2>;
    if (message) return <h2>{message}</h2>;
    if (!isAuth) {
      return (
        <Row>
          <Col></Col>
          <Col>
            <Login setIsAuth={setIsAuth} />
          </Col>
          <Col></Col>
        </Row>
      );
    } else {
      return (
        <Row className="movies">
          {movies.length ? movies.map((movie) => <Movie key={movie.id} movie={movie} data-testid="movie" />) : null}
        </Row>
      );
    }
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="The Movies API" />
      </header>
      <div className="App-body">
        <Container>{renderMovie()}</Container>
      </div>
    </div>
  );
};

export default App;
