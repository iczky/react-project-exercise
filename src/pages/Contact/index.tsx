import Navbar from "../../components/Navbar";
import { Footer } from "../Home/components";
import { PersonalInformation, ContactInquiry } from "./components";
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
      <Navbar />
      <ContactContainer>
        <PersonalInformation />
        <ContactInquiry />
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;
