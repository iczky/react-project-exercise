import styled from "styled-components";
import Form from "./Form";
import FormButton from "./FormButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  padding-right: 0;

  h1 {
    font-size: 60px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
`;
const ContactInquiry = () => {
  return (
    <Wrapper>
      <h1>Let’s build something cool together</h1>
      <Form />
      <FormButton />
    </Wrapper>
  );
};

export default ContactInquiry;
