import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  reserveRocket, cancelReservation,
} from '../redux/rockets/rockets';
import '../../pages/rockets.css';

const Rockets = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();

  const revesvedBook = () => {
    dispatch(reserveRocket(id));
  };

  const cancelReserved = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className="rocket-info flex-row">
      <div className="rocket-image">
        <img src={image} alt={name} width="250" className="img_rockets" />
      </div>
      <div className="rocket-details flex-column">
        <h2>{name}</h2>
        <p>
          {reserved && <span className="reservationSpan">Reserved</span>}
          {description}
        </p>
        {!reserved && (
          <button type="button" id={id} className="reserve-btn" onClick={revesvedBook}>
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button type="button" id={id} className="cancel-btn" onClick={cancelReserved}>
            Cancel Reservation
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
