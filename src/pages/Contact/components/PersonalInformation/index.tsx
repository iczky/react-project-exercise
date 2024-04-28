import styled from "styled-components";
import Image from "../../../../assets/contactImg.png";
import Contact from "../..";

const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PersonalInformation = () => {
  return (
    <PersonalContainer>
      <img src={Image} alt="Foto contact" />
      <ContactDetail>
        <p>Contact Details</p>
      </ContactDetail>
    </PersonalContainer>
  );
};

export default PersonalInformation;
