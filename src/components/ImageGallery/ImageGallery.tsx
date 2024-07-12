import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryType } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryType> = ({
  images,
  onClick,
  scrollRef,
}) => {
  return (
    <ul className={css.list} ref={scrollRef}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.item}>
            <ImageCard image={image} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
