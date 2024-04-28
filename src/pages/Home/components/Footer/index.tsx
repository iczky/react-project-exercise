import styled from "styled-components";
import FooterText from "./FooterText";
import FooterButton from "./FooterButton";

const FooterSection = styled.footer`
  display: flex;
  padding: 80px 88px 0px 80px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const FooterContainer = styled.div`
  background-color: #0b0c0e;
  display: flex;
  flex-direction: column;
  gap: 138px;
  margin-bottom: 10px;
`;

const FooterDetail = styled.div`
  padding: 80px 88px 33px 80px;
  color: #f4f7fa;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    list-style-type: none;
    gap: 32px;
  }

  p li {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterText />
        <FooterButton />
      </FooterSection>
      <FooterDetail>
        <p>Build with 💖 by Brightscout & Ayush </p>
        <ul>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Webflow</li>
        </ul>
      </FooterDetail>
    </FooterContainer>
  );
};

export default Footer;
