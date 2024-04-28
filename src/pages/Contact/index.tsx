import Navbar from "../../components/Navbar";
import { PersonalInformation } from "./components";
import styled from "styled-components";

const ContactContainer = styled.section`
  display: flex;
  gap: 275px;
  justify-content: space-between;
  padding: 173px 80px 100px 80px;
`;

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <Navbar />
        <PersonalInformation />
      </ContactContainer>
    </>
  );
};

export default Contact;
