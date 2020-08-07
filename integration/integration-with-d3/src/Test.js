import React from 'react';

export default function Test({ person, personClicked }) {
  return <div onClick={personClicked}>Hello {person}</div>;
}
