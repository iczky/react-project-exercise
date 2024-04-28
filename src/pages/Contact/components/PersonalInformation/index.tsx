import styled from "styled-components";
import Image from "../../../../assets/contactImg.png";
import Contact from "../..";

const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  * {
    margin: 0;
    padding: 0;
  }

  p,
  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 27px;
    font-weight: 400;
  }
`;

const ContactDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 18px;
  }
`;

const PersonalSocMed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    padding-bottom: 8px;
    font-size: 18px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding-bottom: 6px;
    font-size: 27px;
  }
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
