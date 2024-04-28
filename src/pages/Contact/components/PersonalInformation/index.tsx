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

const PersonalSocMed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const PersonalInformation = () => {
  return (
    <PersonalContainer>
      <img src={Image} alt="Foto contact" />
      <ContactDetail>
        <p>Contact Details</p>
        <h3>ayush.barnwal@brightscout.com</h3>
        <h3>+91 8651447521</h3>
      </ContactDetail>
      <PersonalSocMed>
        <p>Social</p>
        <ul>
          <li>Linkedin</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Webflow</li>
          <li>Figma</li>
        </ul>
      </PersonalSocMed>
    </PersonalContainer>
  );
};

export default PersonalInformation;
