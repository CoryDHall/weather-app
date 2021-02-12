import React from 'react';
import { Redirect } from 'react-router-dom';
import { positionPath } from './helpers/positionPath';

export const GetLocation = ({ position }) => {
  return <>{position ? <Redirect to={positionPath(position)} /> : null}</>;
};
