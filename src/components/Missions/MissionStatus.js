import React from 'react';
import PropTypes from 'prop-types';

export default function MissionStatus(props) {
  const { active } = props;

  const statusMemberStyle = {
    backgroundColor: active ? 'var(--green)' : 'var(--black-1)',
    borderRadius: '5px',
    fontSize: '14px',
    padding: '3px 5px',
    whiteSpace: 'nowrap',
    color: '#893c3c',
  };

  return (
    <h2 style={statusMemberStyle}>
      {active ? 'Active Member' : 'NOT A MEMBER'}
    </h2>
  );
}

MissionStatus.propTypes = {
  active: PropTypes.bool.isRequired,
};
