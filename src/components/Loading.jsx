import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;
  color: #555;
`;

const Spinner = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      Loading...
    </LoadingContainer>
  );
}

export default Loading;
