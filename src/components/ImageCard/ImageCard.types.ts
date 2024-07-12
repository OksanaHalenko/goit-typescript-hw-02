import { ImagesType } from "../App/App.types";

export interface ImageCardType {
  image: ImagesType;
  onClick: (image: ImagesType) => void;
}
