import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.8rem;
  background-color: #206a5d;
  color: white;
  margin: 1rem 2rem;
  border-radius: 5px;
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  letter-spacing: 1.3px;
  font-weight: 520;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 350px;
  font-size: 1rem;
`;
