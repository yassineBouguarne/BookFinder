import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fdb8b8;
  border: 1px solid #ff4d4d;
  border-radius: 5px;
  color: #363636;
  font-size: 14px;
  font-weight: bold;
`;

const Icon = styled.span`
  margin-right: 8px;
`;

function Error({ message }) {
  return (
    <ErrorContainer>
      <Icon>⛔️</Icon>
      {message}
    </ErrorContainer>
  );
}

export default Error;
