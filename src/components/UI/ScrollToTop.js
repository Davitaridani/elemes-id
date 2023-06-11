import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollToTop = () => {
  const [showBtnToTop, setShowBtnToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShowBtnToTop(true);
      } else {
        setShowBtnToTop(false);
      }
    });
  }, []);

  const btnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="block__btnToTOp">
        <button
          className="border-0 item__btnToTop animate__shake"
          onClick={btnToTop}
          style={{ display: showBtnToTop ? "block" : "none" }}
        >
          <span>
            <BiUpArrowAlt />
          </span>
        </button>
      </div>
    </>
  );
};

export default ScrollToTop;
