import styled from "styled-components";
import { testimoniType } from "../../../../utils/testimoni";

const TestimonialListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 27px;
    font-weight: 400;
  }
`;

const TestimonialImage = styled.div`
  display: flex;
  gap: 12px;
`;

const TestimonialPerson = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`;

const TestimonialReview: React.FC<testimoniType> = ({
  desc,
  imgProfile,
  name,
  role,
}) => {
  return (
    <TestimonialListContainer>
      <p>{desc}</p>
      <TestimonialImage>
        <img src={imgProfile} alt="" />
        <TestimonialPerson>
          <h2>{name}</h2>
          <p>{role}</p>
        </TestimonialPerson>
      </TestimonialImage>
    </TestimonialListContainer>
  );
};

export default TestimonialReview;
