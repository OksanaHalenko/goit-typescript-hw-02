import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalTypes } from "./ImageModal.types";
ReactModal.setAppElement("#root");

const ImageModal: React.FC<ImageModalTypes> = ({
  modalIsOpen,
  closeModal,
  image: { alt_description, urls, user, likes },
}) => {
  return (
    <ReactModal
      className={css.modalWindow}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <div className={css.wrapper}>
        <img className={css.image} src={urls.regular} alt={alt_description} />
        <div className={css.textWrapper}>
          <h2 className={css.description}>{alt_description}</h2>
          <div className={css.information}>
            <div className={css.authorWrapper}>
              <p className={css.title}>Author: </p>
              <span className={css.accent}>{user.name}</span>
            </div>
            <div className={css.likesWrapper}>
              <p className={css.title}>Likes: </p>
              <span className={css.accent}>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
