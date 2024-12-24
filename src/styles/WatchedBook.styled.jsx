import styled from "styled-components";

export const WatchedBookCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e1e2e8;
  padding: 1.2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 80px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .content {
    margin-left: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    h2 {
      font-size: 1.2rem;
      color: #2d3047;
      margin: 0;
      font-weight: 600;
      line-height: 1.4;
    }

    p {
      font-size: 0.95rem;
      color: #555;
      margin: 0;
      line-height: 1.3;
    }

    .rating {
      font-size: 0.95rem;
      font-weight: 500;
      color: #419d78;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.625rem;
    height: 1.625rem;
    margin-left: 1.5rem;
    border-radius: 50%;
    background-color: #fa5252;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
    transition: all 0.3s;

    &:hover {
      background-color: #e03131;
    }
  }
`;
