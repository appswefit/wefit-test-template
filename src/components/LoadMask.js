import React from 'react';
import styled from 'styled-components';
import LoadIcon from './LoadIcon';

const StyledBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .7);
  z-index: 999;
`;

const LoadMask = ({
  dispatch,
  ...props
}) => (
  <StyledBackdrop {...props}>
    <LoadIcon />
  </StyledBackdrop>
);

export default LoadMask;
