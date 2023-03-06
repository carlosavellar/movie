import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import './Movie.css';

const Movie = ({ movie }) => {
  useEffect(() => {
    console.log();
    console.log(movie, 'e');
  }, [movie]);
  const { title, name, overview, poster_path, origin_country, original_title, first_air_date, original_name } = movie;
  return (
    <Col xs={12} sm={6} md={4} lg={2} border="secondary">
      <Card>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} />
        <Card.Body>
          <Card.Title>{title || name}</Card.Title>
          <Card.Text className="text">{overview.slice(0, 100)}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {origin_country && <ListGroup.Item>Country: {origin_country}</ListGroup.Item>}
          {first_air_date && <ListGroup.Item className="title-det-lauched">Launched: {first_air_date}</ListGroup.Item>}
          {original_title && <ListGroup.Item className="title-det">Original name: {original_title}</ListGroup.Item>}
        </ListGroup>
        {/* <Card.Body></Card.Body> */}
      </Card>
    </Col>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
