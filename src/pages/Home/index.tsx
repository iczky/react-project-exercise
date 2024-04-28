import {
  Navbar,
  FirstHero,
  About,
  RecentWork,
  ImageSlide,
  Testimonials,
  Footer,
} from "./components";

const Home = () => {
  return (
    <>
      <Navbar />
      <FirstHero />
      <About />
      <RecentWork />
      <ImageSlide />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
