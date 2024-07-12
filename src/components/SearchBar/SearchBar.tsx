import css from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { SearchBarType } from "./SearchBar.type";
import { FormEvent, useRef } from "react";

const SearchBar: React.FC<SearchBarType> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as typeof event.target & {
      topic: { value: string };
    };
    const topic = form.topic.value;
    if (topic.trim() === "") {
      const notify = () => toast.error("Please enter search term!");
      notify();
      return;
    }
    onSubmit(topic);
    formRef.current?.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} ref={formRef} onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <IoSearchOutline className={css.icon} />
          <input
            className={css.input}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <Toaster containerClassName={css.toaster} />
    </header>
  );
};

export default SearchBar;
