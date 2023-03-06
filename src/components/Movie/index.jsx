import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

const Movie = ({ movie }) => {
  useEffect(() => {
    console.log();
    console.log(movie, 'e');
  }, [movie]);
  const { title, name, overview, poster_path } = movie;
  return (
    <Col xs={3}>
      <Card>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} />
        <Card.Body>
          <Card.Title>{title || name}</Card.Title>
          <Card.Text>{overview.slice(0, 100)}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </Col>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
