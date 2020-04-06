import React from "react";
import MyButton from "../../utils/Mybutton";

const HomePromotion = (props) => {
  const promotion = {
    img: "/images/featured/kahuna.jpg",
    linOne: "Up To 20% off",
    lineTwo: "For all kookuburra bats",
    linkTitle: "Shop now",
    linkTo: "/shop",
  };

  const renderPromotion = () =>
    promotion ? (
      <div
        className="home_promotion_img"
        style={{ background: `url(${promotion.img})` }}
      >
        <div className="tag title">{promotion.lineOne}</div>
        <div className="tag low_title">{promotion.lineTwo}</div>
        <div>
          <MyButton
            type="default"
            title={promotion.linkTitle}
            linkTo={promotion.linkTo}
            addStyles={{ margin: `10px 0 0 0` }}
          ></MyButton>
        </div>
      </div>
    ) : null;

  return <div className="home_promotion">{renderPromotion()}</div>;
};

export default HomePromotion;
