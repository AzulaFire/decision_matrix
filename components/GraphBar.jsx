import styled, { keyframes } from 'styled-components';

const KeyFrameTest = (w) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${w}%;
  }
`;

const GraphBar = styled.div`
  background: ${(props) => props.color};
  animation: ${(props) => KeyFrameTest(props.value)};
  animation-duration: ${(props) => props.duration};
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;
`;

export default GraphBar;
