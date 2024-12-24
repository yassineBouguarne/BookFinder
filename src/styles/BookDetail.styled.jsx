import styled from "styled-components";

export const BookDetailWrapper = styled.div`
  padding: 1.1rem;
  background-color: #e1e2e8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    align-self: flex-start;
    background: none;
    border: none;
    font-size: 1.2rem;
    color: #007bff;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e7f1ff;
    }
  }

  h3 {
    font-size: 1.8rem;
    color: #2d3047;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 8px;
    align-self: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;

    strong {
      color: #333;
      font-weight: 600;
    }
  }

  .addBook {
    align-self: center;
    background-color: #419d78;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #368e6a;
      transform: scale(1.05);
    }
  }

  .alreadyWatched {
    align-self: center;
    font-size: 1rem;
    color: #555;
  }
`;
