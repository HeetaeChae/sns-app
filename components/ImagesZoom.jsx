import styled from "styled-components";
import { Button } from "antd";
import { useCallback } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  padding: 0 calc((100vw - 800px) / 2);
  text-align: center;
  vertical-align: center;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15%;
`;
const ModalImages = styled.div``;

const ImagesZoom = ({ images, setModalToggle }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const onClickModalToggle = useCallback(() => {
    setModalToggle(false);
  }, []);
  return (
    <ModalWrapper>
      <ModalHeader>
        <div style={{ color: "white", fontSize: "2rem" }}>이미지</div>
        <Button onClick={onClickModalToggle}>닫기</Button>
      </ModalHeader>
      <ModalImages>
        <Slider {...settings}>
          {images.map((image) => (
            <img src={`${image.src}`} />
          ))}
        </Slider>
      </ModalImages>
    </ModalWrapper>
  );
};

export default ImagesZoom;
