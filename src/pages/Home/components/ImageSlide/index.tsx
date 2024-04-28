import style from "./ImageSlide.module.css";
import { listImg } from "../../../../utils/imageList";

const ImageSlide = () => {
  const ImageComponentTop: JSX.Element[] = listImg
    .slice(0, listImg.length / 2)
    .map((item, index) => (
      <div className={style["img-item"]}>
        <img key={index} src={item} alt="img" />
      </div>
    ));
  const ImageComponentBottom: JSX.Element[] = listImg
    .slice(listImg.length / 2)
    .map((item, index) => (
      <div className={style["img-item"]}>
        <img key={index} src={item} alt="img" />
      </div>
    ));

  return (
    <div className={style["style-container"]}>
      <div className={style["slide"]}>{ImageComponentTop}</div>
      <div className={style["slide"]}>{ImageComponentBottom}</div>
    </div>
  );
};

export default ImageSlide;
