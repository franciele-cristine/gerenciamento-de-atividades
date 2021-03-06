import styled from "styled-components";

export const Container = styled.div`
  background-color: #a8dadc;
  color: #1d3557;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 2%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  height: 80vh;
  margin: auto;
  @media (max-width: 600px) {
    height: 90vh;
    width: 80vw;
  }
`;

export const Input = styled.input`
  height: 30px;
  border: 1px solid #dddddd;
  padding: 5px;
  width: 50vw;
  font-size: 0.7em;
  outline: none;
  border-radius: 5px;

  :focus {
    box-shadow: 0 0 5px rgba(0, 96, 206, 1);
    border: 1px solid rgba(0, 96, 206, 1);
  }
  @media (max-width: 600px) {
    width: 75vw;
    height: 3vh;
    margin-top: 1%;
  }
`;
export const Date = styled(Input)`
  width: 10vw;
  @media (max-width: 600px) {
    width: 75vw;
    height: 3vh;
    margin-top: 1%;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  width: 65vw;
  justify-content: space-between;
`;

export const TextArea = styled.textarea`
  height: 130px;
  border: 1px solid #dddddd;
  padding: 5px;
  width: 63.5vw;
  font-size: 0.7em;
  outline: none;
  border-radius: 5px;
  resize: none;

  :focus {
    box-shadow: 0 0 5px rgba(0, 96, 206, 1);
    border: 1px solid rgba(0, 96, 206, 1);

    @media (max-width: 600px) {
      width: 63.5vw;
      height: 15vh;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 65vw;
  display: flex;
  justify-content: space-around;
  margin: 1% auto;
  @media (max-width: 400px) {
    margin: auto;
  }
`;

export const Title = styled.h1`
  font-family: "Nunito", sans-serif;
  color: #1d3557;
`;
export const Error = styled.div`
  color: #cc0000;
  font-size: 0.8rem;
`;
export const List = styled.ul`
  list-style: none;
  width: 65vw;
  height: 100px;
  overflow: scroll;
`;

export const Button = styled.button`
  background-color: #da1b2b;
  color: #fff;
  border: none;
  height: 4vh;
  width: 15vw;
  border-radius: 10px;
  font-weight: 100;
  margin-top: 10%;
  margin: 0 auto;
  outline: none;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 70vw;
    height: 6vh;
    margin-top: 3vh;
    margin: 0 auto;
    font-size: 20px;
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    width: 15vw;
    height: 6vh;
    margin-top: 1vh;
    margin: 0 auto;
    font-size: 20px;
  }
  :hover {
    background-color: #00273d;
    color: white;
    border: solid #a8dadc 2px;
    transition: 0.8s;
  }
`;
