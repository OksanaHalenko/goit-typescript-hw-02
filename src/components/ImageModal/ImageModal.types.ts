import { ImagesType } from "../App/App.types";

export interface ImageModalTypes {
  modalIsOpen: boolean;
  closeModal: () => void;
  image: ImagesType;
}
