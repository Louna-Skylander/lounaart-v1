const Modal = ({ clickedImage, setClickedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImage(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImage} alt="" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
};

/* ============================================================================ */
/*                                  EXPORT                                      */
/* ============================================================================ */

export default Modal;
