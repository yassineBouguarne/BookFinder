import styled from "styled-components";

export const BookCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #1b1c25;
  cursor: pointer;

  &:hover {
    background-color: #e1e2e8;
  }

  img {
    width: 130px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  div {
    margin-left: 1.5rem;
    flex: 1;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
  }
`;
