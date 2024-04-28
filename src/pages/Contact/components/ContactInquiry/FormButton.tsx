import styled from "styled-components";

const ButtonStyled = styled.div`
  padding: 24.5px 68px;
  background-color: #0b0c0e;
  border-radius: 170px;
  border: none;
  text-align: center;
  color: #f4f7fa;
  font-family: "roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  width: 56px;
`;

const FormButton = () => {
  return <ButtonStyled>Submit</ButtonStyled>;
};

export default FormButton;
