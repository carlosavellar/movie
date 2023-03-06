import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  useEffect(() => {
    console.log(user);
    console.log(user, 'e');
  }, [user]);
  const { title, name, overview, poster_path } = user;
  return (
    <section className="user card">
      <p>Name: {title || name}</p>
      <p>Description: {overview.slice(0, 100)}</p>
      <p>
        <img src={`https://api.themoviedb.org/${poster_path}`} alt={name} />
      </p>
    </section>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
