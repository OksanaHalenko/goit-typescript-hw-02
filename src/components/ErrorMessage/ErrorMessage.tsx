import css from "./ErrorMessage.module.css";
import { ErrorMessageType } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageType> = ({ text }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default ErrorMessage;
