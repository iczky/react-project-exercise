import styled from "styled-components";

const ButtonFooter = styled.div`
  p {
    padding: 24px 48px;
    background-color: #f4f7fa;
    border-radius: 170px;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 500;
  }
`;

const FooterButton = () => {
  return (
    <ButtonFooter>
      <p>Get in touch</p>
    </ButtonFooter>
  );
};

export default FooterButton;
