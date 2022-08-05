/* ============================================================================ */
/*                                    IMPORT                                    */  
/* ============================================================================ */

import React, { useEffect, useState } from "react";
import "./codefolio.css";
import Data from "./CodeData";
import { TbZoomCode, TbZoomIn } from "react-icons/tb";

const CategoryButton = ({ name, handleSetCategory, categoryActive }) => {
    return (
        <button className={`category ${categoryActive ? "active" : null}`}
        onClick={() => handleSetCategory(name)}>
            {name.toUpperCase()}{""}
        </button>
    );
};

const Codefolio = () => {
    /* CATEGORY - FILTER */
      const [category, setCategory] = useState("all");
      const [filteredCategory, setFilteredCategory] = useState([]);

      useEffect(() => {
        category === "all"
        ? setFilteredCategory(Data)
        : setFilteredCategory(Data.filter((item) => item.category === category));
      }, [category]);

  return (
    <section className="codefolio container section" id="codefolio">
        <h2 className="section__title">Codefolio</h2>

        <div className="codefolio__filters">
            <CategoryButton className="codefolio__item" name="all" handleSetCategory={setCategory}
            categoryActive={category === "all" ? true : false} />

            <CategoryButton className="codefolio__item" name="JavaScript" handleSetCategory={setCategory}
            categoryActive={category === "JavaScript" ? true : false} />

            <CategoryButton className="codefolio__item" name="Coming soon" handleSetCategory={setCategory}
            categoryActive={category === "Coming soon" ? true : false} />

        </div>

        <div className="codefolio__container grid">
            {filteredCategory.map((item) => (
                    <div className="codefolio__card" key={item.id}>
                        <div className="codefolio__thumbnail">
                            <img src={`${item.image}`} alt="" className="codefolio__img" />
                            <div className="codefolio__mask"></div>
                        </div>
                        <span className="codefolio__category">{`${item.category}`}</span>
                        <h3 className="codefolio__title">{`${item.title}`}</h3>
                        <a href={`${item.linkPage}`} className="codefolio__button1">
                            <i className="codefolio__link"><TbZoomIn /></i>
                        </a>
                        <a href={`${item.linkCode}`} className="codefolio__button2">
                            <i className="codefolio__link"><TbZoomCode /></i>
                        </a>
                    </div>
            ))}
        </div>
    </section>
  );
};

/* ============================================================================ */
/*                                  EXPORT                                      */
/* ============================================================================ */

export default Codefolio;
