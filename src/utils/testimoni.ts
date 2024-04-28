import testImg1 from "../assets/testImg1.png";
import testImg2 from "../assets/testImg2.png";

export interface testimoniType {
  desc: string;
  imgProfile: string;
  name: string;
  role: string;
}

export const testimoniList: testimoniType[] = [
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgProfile: testImg1,
    name: "Ayush Raj",
    role: "VP of Marketing @ Webflow",
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgProfile: testImg2,
    name: "Alex Cattoni",
    role: "Founder @ CopyPossy",
  },
];
