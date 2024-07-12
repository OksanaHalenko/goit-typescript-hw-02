import { ImagesType } from "../App/App.types";

export interface ImageGalleryType {
  images: ImagesType[];
  onClick: (image: ImagesType) => void;
  scrollRef: React.RefObject<HTMLUListElement>;
}
