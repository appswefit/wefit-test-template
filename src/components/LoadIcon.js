import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const propTypes = {
  dispatch: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.number,
  borderWeight: PropTypes.number,
};

const defaultProps = {
  dispatch: () => {},
  color: 'white',
  size: 50,
  borderWeight: 6,
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    margin: 6px;
    border: ${({ borderWeight }) => borderWeight}px solid white;
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => color} transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  
  & div:nth-child(2) {
      animation-delay: -0.3s;
  }
  
  & div:nth-child(3) {
      animation-delay: -0.15s;
  }
`;

const LoadIcon = ({
  dispatch,
  color,
  size,
  borderWeight,
  ...props
}) => (
  <Loading
    color={color}
    size={size}
    borderWeight={borderWeight}
    {...props}
  >
    <div />
  </Loading>
);

LoadIcon.propTypes = propTypes;
LoadIcon.defaultProps = defaultProps;

export default LoadIcon;
