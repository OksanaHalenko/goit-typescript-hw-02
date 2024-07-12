import "./App.css";

import { fetchImageWithTopic } from "../../galleryApi";

import { useEffect, useRef, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import { ImagesType } from "./App.types";

function App() {
  const [images, setImages] = useState<ImagesType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>();
  const [selectedImage, setSelectedImage] = useState<ImagesType | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const scrollRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (images.length > 0) {
      window.scrollBy({
        top: 720,
        behavior: "smooth",
      });
    }
  }, [images]);

  useEffect(() => {
    if (topic === "") {
      return;
    }
    const handleSearch = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImageWithTopic(topic, page);
        const newImages = data.results;
        setImages((prevImages) => {
          return [...prevImages, ...newImages];
        });
        setTotalPage(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, [page, topic]);

  const handleSubmit = async (dataSearch: string) => {
    setTopic(dataSearch);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  function openModal(image: ImagesType) {
    setSelectedImage(image);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {error ? (
        <ErrorMessage
          text={"Whoops, something went wrong! Please try reloading this page!"}
        />
      ) : totalPage === 0 ? (
        <ErrorMessage text={"Sorry, no images was found. Try another query."} />
      ) : (
        <ImageGallery
          images={images}
          onClick={openModal}
          scrollRef={scrollRef}
        />
      )}

      <Loader loading={loading} />

      {!loading && images.length > 0 && page !== totalPage && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}

      {selectedImage && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;
