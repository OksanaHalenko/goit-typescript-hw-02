import css from "./ImageCard.module.css";

function ImageCard({ image, onClick }) {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
      />
    </div>
  );
}

export default ImageCard;
