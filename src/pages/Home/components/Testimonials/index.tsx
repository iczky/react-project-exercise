import { testimoniList } from "../../../../utils/testimoni";
import styled from "styled-components";
import TestimonialReview from "./TestimonialReview";

const TestimonialSection = styled.section`
  display: flex;
  padding: 140px 86px 140px 92px;
  gap: 206px;
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    font-weight: 500;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Testimonials: React.FC = () => {
  return (
    <TestimonialSection>
      <h1>TESTIMONIALS</h1>
      <ListContainer>
        {testimoniList.map((item, index) => (
          <TestimonialReview key={index} {...item} />
        ))}
      </ListContainer>
    </TestimonialSection>
  );
};

export default Testimonials;
