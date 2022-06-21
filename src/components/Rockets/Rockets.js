import React from 'react';
import PropTypes from 'prop-types';

const Rockets = ({
  id, name, description, image,
}) => (
  <>
    <div className="block_rocket">
      <img src={image} alt={name} width="250" className="img_rockets" />
      <div className="text_block">
        <h2>{name}</h2>
        <p>{description}</p>
        <button id={id} type="button">Reserve Rocket</button>
      </div>
    </div>
  </>
);

Rockets.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rockets;
