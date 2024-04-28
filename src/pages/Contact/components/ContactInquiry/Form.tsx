import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ::placeholder {
    color: #3c3d3e;
    opacity: 0.4;
    font-size: 27px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

const TextArea = styled.textarea`
  height: 158px;
  padding: 0;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom-color: #007bff; /* Change color on focus */
    outline: none; /* Remove default focus outline */
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 0; /* Adjust padding as needed */
  border: none;
  border-bottom: 1px solid #ccc; /* Underline effect */
  transition: border-bottom-color 0.3s ease; /* Smooth transition on hover */

  &:focus {
    border-bottom-color: #007bff; /* Change color on focus */
    outline: none; /* Remove default focus outline */
  }
`;

const Form = () => {
  return (
    <FormContainer>
      <InputContainer>
        <Label htmlFor="name">Name</Label>
        <Input type="text" placeholder="James Robert" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="ayush.barnwal@brightscout.com" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="subject">Subject</Label>
        <Input type="text" placeholder="For web design work Enquire" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="message">Message</Label>
        <TextArea type="text" placeholder="Type your Message" />
      </InputContainer>
    </FormContainer>
  );
};

export default Form;
