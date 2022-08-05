/* ============================================================================ */
/*                                    IMPORT                                    */  
/* ============================================================================ */

import React, { useEffect, useState } from "react";
import "./artfolio.css";
import Data from "./ArtData";
import { TbZoomIn } from "react-icons/tb";
import Modal from "./Modal";

/* CATEGORY - BUTTON */
const CategoryButton = ({ name, handleSetCategory, categoryActive }) => {
  return (
    <button
      className={`category ${categoryActive ? "active" : null}`}
      onClick={() => handleSetCategory(name)}
    >
      {name.toUpperCase()}
      {""}
    </button>
  );
};

const Artfolio = () => {
  /* CATEGORY - FILTER */
  const [category, setCategory] = useState("Ink Art");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    category === "all"
      ? setFilteredImages(Data)
      : setFilteredImages(Data.filter((item) => item.category === category));
  }, [category]);

  /* IMAGE */
  const [clickedImage, setClickedImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const handleClick = (item) => {
    setCurrentImage(item);
    setClickedImage(item.image);
  };

  return (
    <section className="artfolio container section" id="artfolio">
      <h2 className="section__title">Artfolio</h2>

      <div className="artfolio__categories">
        <div className="category">
          <CategoryButton
            name="Ink Art"
            handleSetCategory={setCategory}
            categoryActive={category === "Ink Art" ? true : false}
          />
          <CategoryButton
            name="Digital Art"
            handleSetCategory={setCategory}
            categoryActive={category === "Digital Art" ? true : false}
          />
          <CategoryButton
            name="Fan Art"
            handleSetCategory={setCategory}
            categoryActive={category === "Fan Art" ? true : false}
          />
          <CategoryButton
            name="Comic"
            handleSetCategory={setCategory}
            categoryActive={category === "Comic" ? true : false}
          />
          <CategoryButton
            name="all"
            handleSetCategory={setCategory}
            categoryActive={category === "all" ? true : false}
          />
        </div>
      </div>

      <div className="artfolio__container grid">
        {filteredImages.map((item) => (
          <div className="artfolio__card" key={item.id}>
            <div className="artfolio__thumbnail">
              <img className="artfolio__img" src={`${item.image}`} alt="" />
            </div>

            <div className="artfolio__mask"></div>

            <span className="artfolio__category">{`${item.category}`}</span>
            <h3 className="artfolio__title">{`${item.title}`}</h3>
            <div className="artfolio__button">
              <i
                className="artfolio__preview"
                onClick={() => handleClick(item)}
              >
                <TbZoomIn />
              </i>
            </div>
          </div>
        ))}
        {clickedImage && (
          <Modal
            clickedImage={clickedImage}
            setClickedImage={setClickedImage}
            currentImage={currentImage}
          />
        )}
      </div>
    </section>
  );
};

/* ============================================================================ */
/*                                  EXPORT                                      */
/* ============================================================================ */

export default Artfolio;
