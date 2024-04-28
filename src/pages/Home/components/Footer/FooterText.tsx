import styled from "styled-components";
import footerImg from "../../../../assets/footerImg.png";

const FooterTextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #f4f7fa;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 60px;
    font-weight: 500;
  }
`;

const FooterImage = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;

const FooterText = () => {
  return (
    <FooterTextSection>
      <h1>Have something in mind?</h1>
      <FooterImage>
        <img src={footerImg} alt="footer image" />
        <h1>let’s build it together.</h1>
      </FooterImage>
    </FooterTextSection>
  );
};

export default FooterText;
