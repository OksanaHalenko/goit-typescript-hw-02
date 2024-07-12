import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnType } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnType> = ({ onLoadMore }) => {
  return (
    <button className={css.btn} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
