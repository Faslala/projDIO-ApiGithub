import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 4px;

  input {
    border: 2px solid black;
    border-radius: 8px;
    width: 30%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    background-color: lightgrey;
    margin-left: 16px;
  }

  button {
    background-color: lightgrey;
    padding: 8px 30px;
    margin: 0 6px;
    border-radius: 8px;
    border: 2px solid black;
    

    &:hover {
      background-color: lightblue;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      // font-weight: bold;
      color: black;
    }
  }
`;
