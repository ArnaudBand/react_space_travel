import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';

const Rockets = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();

  const revesvedBook = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <div className="block_rocket">
      <img src={image} alt={name} width="250" className="img_rockets" />
      <div className="text_block">
        <h2>{name}</h2>
        <p>
          {reserved && <span className="span">Reserved</span>}
          {description}
        </p>
        {!reserved && (
          <button type="button" id={id} className="reserve-btn" onClick={revesvedBook}>
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

Rockets.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rockets;
